const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const connectDB = async (retries = 10, delayMs = 2000) => {
  for (let attempt = 1; ; attempt++) {
    try {
      const client = await pool.connect();
      console.log(`PostgreSQL connected: ${client.database}`);
      client.release();
      await initSchema();
      return;
    } catch (err) {
      if (attempt >= retries) throw err;
      console.warn(
        `PostgreSQL not ready (attempt ${attempt}/${retries}): ${err.code || err.message}. Retrying in ${delayMs}ms...`
      );
      await sleep(delayMs);
    }
  }
};

const initSchema = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id        SERIAL PRIMARY KEY,
      name      TEXT NOT NULL,
      email     TEXT NOT NULL UNIQUE,
      password  TEXT NOT NULL,
      role      TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS todos (
      id         SERIAL PRIMARY KEY,
      title      TEXT NOT NULL,
      completed  BOOLEAN NOT NULL DEFAULT FALSE,
      user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    );
  `);
};

module.exports = { pool, connectDB };
