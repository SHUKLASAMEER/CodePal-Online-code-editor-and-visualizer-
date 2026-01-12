const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');


require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');

const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize the Gemini API client with the correct API key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || 'AIzaSyBLFzXoha_VlXmfgsa-IyGYrks1fUqSTio' });

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/codepal'
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 24 hours
  }
}));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// User Authentication Routes
// /api/auth/register : Sign Up (username, email, password)
// /api/auth/login    : Sign In (email, password)
app.use('/api/auth', authRoutes);

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Code analysis endpoint
app.post('/api/analyze', async (req, res) => {
    try {
        const { code, language } = req.body;
        
        if (!code) {
            return res.status(400).json({ error: 'No code provided' });
        }

        const prompt = `Analyze the following ${language.toUpperCase()} code and provide a **short and precise** dry run in this EXACT JSON format (no extra text before or after the JSON):
{
  "hasError": false,
  "errors": ["short error message if any"],
  "execution": [
    "Step 1: one short sentence",
    "Step 2: one short sentence",
    "Step 3: one short sentence"
  ],
  "timeComplexity": "Big-O, like O(n)",
  "spaceComplexity": "Big-O, like O(1)",
  "explanation": "At most 2-3 short sentences summarizing what the code does and why the complexity is what it is.",
  "variables": {
    "varName": {
      "type": "short type name",
      "value": "short value description",
      "memoryAddress": "fictional address like 0x001"
    }
  }
}

Keep the response as short as possible while still correct.

Now here is the code to analyze:
\`\`\`${language}
${code}
\`\`\``;

        const response = await ai.models.generateContent({
          model: "gemini-3-pro-preview",
          contents: prompt
        });
        const text = response.text;
        // Clean the response and extract JSON
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
          throw new Error('Invalid response format from Gemini API');
        }
        const jsonResponse = JSON.parse(jsonMatch[0]);
        res.json(jsonResponse);
        
    } catch (error) {
        console.error('Analysis error:', error);
        res.status(500).json({ 
            error: 'Failed to analyze code',
            details: error.message 
        });
    }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/codepal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
