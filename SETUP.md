# CodePal - Setup and Installation Guide

## Project Overview
CodePal is a fully responsive, interactive online code editor and visualizer for learning Data Structures and Algorithms (DSA). It includes animations, real-time code analysis, practice challenges, and comprehensive learning modules.

## Features Implemented

### ✅ Core Features
- **Home Page**: Hero section with feature highlights and call-to-action
- **Animation Section**: Interactive visualizations of algorithms and data structures
- **Features Section**: Showcase of powerful capabilities
- **Learning Module**: 14+ DSA topics with interactive explanations
  - Arrays, Strings, Linked Lists
  - Stacks, Queues, Trees, Graphs
  - Searching, Sorting, Recursion
  - Greedy Algorithms, Dynamic Programming, BST, Backtracking

- **Practice Mode**: 
  - Beginner, Intermediate, Advanced, Expert challenges
  - Code challenges with multiple languages
  - Time trial challenges
  - Custom testing interface
  - Performance analysis

- **Code Analysis** (Dry Run):
  - Real-time code execution and analysis
  - Time and space complexity calculation
  - Multiple language support
  - Step-by-step execution visualization

- **Authentication**:
  - User registration and login
  - Session management
  - Password validation

### ✅ UI/UX Enhancements
- **Fully Responsive Design**:
  - Mobile-first approach
  - Tablet optimizations
  - Desktop enhancements
  - Touch-friendly controls

- **Dark Theme**: Professional dark mode throughout the application
- **Smooth Animations**: Transition effects and hover states
- **Interactive Elements**: Real-time feedback and visual changes
- **Accessible Navigation**: Clear menu structure with smooth scrolling

## Setup Instructions

### Prerequisites
- Node.js and npm (for backend)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- MongoDB (for authentication - optional for frontend-only testing)

### Quick Start - Frontend Only

1. **Navigate to the project directory**:
   ```bash
   cd /workspaces/CodePal-Online-code-editor-and-visualizer-
   ```

2. **Start a local web server**:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Or using Python 2
   python -m SimpleHTTPServer 8000
   
   # Or using Node.js http-server
   npx http-server
   ```

3. **Open in browser**:
   - Navigate to `http://localhost:8000`
   - The home page should load with all sections visible

### Full Setup - With Backend

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create .env file** (if using authentication):
   ```bash
   MONGO_URI=mongodb://localhost:27017/codepal
   JWT_SECRET=your-secret-key
   PORT=3000
   ```

3. **Start the backend server**:
   ```bash
   npm start
   # Or with nodemon for development:
   npm run dev
   ```

4. **The backend will run on**:
   - `http://localhost:3000`

## Project Structure

```
CodePal-Online-code-editor-and-visualizer-/
├── index.html                 # Home page
├── learning.html              # Learning module
├── practice.html              # Practice challenges
├── dryRun.html               # Code analysis
├── server.js                 # Express backend
├── package.json              # Dependencies
│
├── script/
│   ├── main.js              # Main navigation and auth
│   ├── learning-topics.js   # 14+ DSA topics
│   ├── learning.js          # Array interactive demo
│   ├── practice.js          # Practice challenges
│   ├── dryRun.js           # Code analysis
│   ├── animation.js         # Algorithm animations
│   └── arrayVisualization.js # Array visualizations
│
├── styles/
│   ├── main.css             # Main styles (2400+ lines)
│   └── practice.css         # Practice page styles (1100+ lines)
│
├── models/
│   └── user.js             # User schema
│
├── routes/
│   └── auth.js             # Authentication endpoints
│
└── pages/
    └── (Additional pages)
```

## Page-by-Page Guide

### 1. Home Page (`index.html`)
- **Hero Section**: Introduction with CTA button
- **Animation Section**: Watch algorithms in action
- **Features Section**: Key capabilities overview
- **Responsive**: Fully optimized for all screen sizes

**How to use**:
- Click "Start Learning" to navigate to animation section
- Smooth scrolling between sections
- Mobile hamburger menu for navigation

### 2. Learning Page (`learning.html`)
- **14+ Interactive Topics**: Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Graphs, Searching, Sorting, Recursion, Greedy, DP, BST, Backtracking
- **Topic Tabs**: Click to switch between DSA topics
- **Interactive Visualizations**: 
  - Array operations (Insert, Delete, Update)
  - String manipulations
  - Linked list operations
  - Stack/Queue operations
  - Tree traversals
  - Graph algorithms

**How to use**:
- Select a topic from the tabs
- Read the comprehensive explanation
- Use the interactive controls to visualize operations
- Watch code execution alongside visualization

### 3. Practice Page (`practice.html`)
- **Multiple Modes**: Code Challenges, Time Trials, Custom Testing
- **Difficulty Levels**: Beginner, Intermediate, Advanced, Expert
- **25+ Challenges**: Real problems with test cases
- **Points & Progress**: Track your learning journey

**How to use**:
- Choose a practice mode
- Select difficulty level
- Read problem statement
- Write your solution
- Test with provided examples or custom inputs
- Submit for scoring

### 4. Code Analysis Page (`dryRun.html`)
- **Live Code Analysis**: Execute and analyze code
- **Complexity Calculation**: Time and space complexity
- **Multi-Language Support**: C++, Python, Java, JavaScript, C
- **Step-by-Step Execution**: See code execution line by line

**How to use**:
- Enter code in the editor
- Select programming language
- Click "Analyze Code"
- View time/space complexity
- See step-by-step execution

## Responsive Design Features

### Mobile (< 480px)
- Single column layout for all sections
- Touch-friendly button sizes (minimum 44px)
- Hamburger menu navigation
- Optimized font sizes
- Vertical stacking of elements

### Tablet (480px - 768px)
- 2-column grids where appropriate
- Balanced spacing
- Touch-optimized controls
- Clear visual hierarchy

### Desktop (> 768px)
- Multi-column layouts
- Optimized spacing
- Advanced animations
- Full feature showcase

## Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | Latest  | ✅ Full Support |
| Firefox | Latest  | ✅ Full Support |
| Safari  | Latest  | ✅ Full Support |
| Edge    | Latest  | ✅ Full Support |
| Mobile Safari | Latest | ✅ Full Support |
| Chrome Android | Latest | ✅ Full Support |

## Features by Page

### ✅ Home Page
- [x] Responsive hero section
- [x] Feature showcase cards
- [x] Smooth scroll navigation
- [x] Login/Register modals
- [x] Mobile-friendly navbar
- [x] Animation section
- [x] Call-to-action buttons

### ✅ Learning Page
- [x] 14+ DSA topics
- [x] Topic tabs with smooth transitions
- [x] Interactive code visualizations
- [x] Real-time animations
- [x] Detailed explanations
- [x] Practice controls
- [x] Responsive grid layouts

### ✅ Practice Page
- [x] Mode selection (Challenges, Time Trial, Custom Testing)
- [x] Difficulty levels
- [x] Problem statements with examples
- [x] Code editor with syntax highlighting
- [x] Test case evaluation
- [x] Progress tracking
- [x] Responsive challenge layout

### ✅ Code Analysis Page
- [x] Multi-language code editor
- [x] Real-time code analysis
- [x] Time complexity calculation
- [x] Space complexity calculation
- [x] Step-by-step execution
- [x] Error handling
- [x] Responsive split-view layout

## Customization Guide

### Changing Theme Colors
Edit `styles/main.css`:
```css
:root {
    --primary-bg: #1e1e1e;        /* Background color */
    --accent-color: #4CAF50;      /* Highlight color */
    --text-color: #e0e0e0;        /* Text color */
    /* ... more variables */
}
```

### Adding New DSA Topics
1. Add topic content to `script/learning-topics.js`
2. Add topic tab to `learning.html`
3. Add topic content div to `learning.html`
4. Implement topic initialization function

### Adding New Challenges
Edit `script/practice.js` and add to `challenges` object:
```javascript
const challenges = {
    beginner: [
        {
            id: 1,
            title: "Your Challenge",
            difficulty: "Beginner",
            points: 100,
            // ... more properties
        }
    ]
};
```

## Testing

### Manual Testing Checklist

**Home Page**:
- [ ] All sections load properly
- [ ] Smooth scroll works
- [ ] Mobile menu opens/closes
- [ ] Login modal appears
- [ ] All buttons are clickable

**Learning Page**:
- [ ] Topic tabs switch content
- [ ] Animations run smoothly
- [ ] Controls work (Insert, Delete, Update)
- [ ] Responsive layout on mobile

**Practice Page**:
- [ ] Challenges load
- [ ] Code editor works
- [ ] Difficulty filtering works
- [ ] Submit button submits code

**Code Analysis Page**:
- [ ] Code can be entered
- [ ] Analysis runs
- [ ] Complexity displayed
- [ ] Language selector works

### Responsive Testing
- [ ] Test on various screen sizes
- [ ] Test touch interactions
- [ ] Test keyboard navigation
- [ ] Test on mobile devices

## Performance Optimization

- **CSS**: Minified and organized
- **JavaScript**: Modular structure for fast loading
- **Images**: Optimized SVG icons
- **Animations**: CSS-based for better performance
- **Loading**: Lazy loading for heavy components

## Accessibility Features

- [ ] Semantic HTML structure
- [x] ARIA labels (to be added)
- [x] Keyboard navigation
- [x] Color contrast compliance
- [x] Screen reader friendly

## Known Issues & Solutions

### Issue: Authentication not working
**Solution**: Backend server must be running on port 3000. Check MongoDB connection.

### Issue: Animations not showing
**Solution**: Check browser console for errors. Ensure JavaScript is enabled.

### Issue: Layout breaking on mobile
**Solution**: Check viewport meta tag is present. Clear browser cache.

## Future Enhancements

- [ ] User profiles and progress tracking
- [ ] Leaderboards
- [ ] Social features (share solutions)
- [ ] AI-powered code review
- [ ] Advanced debugging tools
- [ ] Collaborative coding
- [ ] Video tutorials integration

## Deployment

### Deploy to GitHub Pages
```bash
# Build (if needed)
npm run build

# Push to gh-pages branch
git subtree push --prefix . origin gh-pages
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy Backend to Heroku
```bash
heroku create your-app-name
git push heroku main
```

## Support & Contribution

For issues, feature requests, or contributions:
1. Create an issue with detailed description
2. Follow the contribution guidelines
3. Submit pull requests for review

## License

MIT License - See LICENSE file for details

## Contact & Credits

Created by: CodePal Team
Last Updated: January 2026

---

**Enjoy Learning with CodePal!** 🚀
