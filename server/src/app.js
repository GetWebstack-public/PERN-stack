const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const todoRoutes = require('./routes/todos');
const errorHandler = require('./middleware/errorHandler');

const app = express();

const allowedOrigins = (process.env.CLIENT_URL || 'http://localhost:5173').split(',').map(o => o.trim());

const isAllowedOrigin = (origin) => {
  if (!origin) return true; // non-browser clients (curl, server-to-server)
  // Exact match only — startsWith would allow attacker hosts like
  // "http://localhost:5173.evil.com" that merely share a configured prefix.
  if (allowedOrigins.includes(origin)) return true;
  try {
    const { hostname } = new URL(origin);
    // Allow any GetWebStack subdomain (e.g. client.pern.local.getwebstack.dev)
    return hostname === 'getwebstack.dev' || hostname.endsWith('.getwebstack.dev');
  } catch {
    return false;
  }
};

app.use(cors({
  // cb(null, true) reflects the request Origin — required because
  // credentials:true forbids the "*" wildcard.
  origin: (origin, cb) => cb(null, isAllowedOrigin(origin)),
  credentials: true,
}));
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);

app.use(errorHandler);

module.exports = app;
