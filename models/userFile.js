const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const DATA_DIR = path.join(__dirname, '..', 'data');
const FILE_PATH = path.join(DATA_DIR, 'users.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, JSON.stringify([]), 'utf8');
}

ensureDataDir();

function readUsers() {
  try {
    const raw = fs.readFileSync(FILE_PATH, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (e) {
    return [];
  }
}

function writeUsers(users) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2), 'utf8');
}

class UserFile {
  constructor(obj) {
    Object.assign(this, obj);
  }

  async save() {
    const users = readUsers();
    const exists = users.find(u => u.email === this.email || u.username === this.username);
    if (exists) {
      const err = new Error('User already exists');
      err.code = 'USER_EXISTS';
      throw err;
    }

    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    this._id = Date.now().toString();
    users.push({
      _id: this._id,
      username: this.username,
      email: this.email,
      password: this.password,
      createdAt: new Date().toISOString()
    });
    writeUsers(users);
    return this;
  }

  static async findOne(query) {
    const users = readUsers();
    const key = query.email ? 'email' : query.username ? 'username' : null;
    if (!key) return null;
    const value = (query[key] || '').toString().toLowerCase();
    const found = users.find(u => (u[key] || '').toString().toLowerCase() === value);
    if (!found) return null;
    return new UserFile(found);
  }

  async comparePassword(candidate) {
    return bcrypt.compare(candidate, this.password);
  }
}

module.exports = UserFile;
