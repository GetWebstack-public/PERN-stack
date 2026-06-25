const { pool } = require('../config/db');

const getUsers = async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT id, name, email, role, created_at, updated_at FROM users ORDER BY created_at DESC'
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT id, name, email, role, created_at, updated_at FROM users WHERE id = $1',
      [req.params.id]
    );
    if (!rows[0]) return res.status(404).json({ message: 'User not found' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const targetId = Number(req.params.id);
    const isAdmin = req.user.role === 'admin';

    // A user may only update their own record; admins may update anyone.
    if (!isAdmin && req.user.id !== targetId) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    const { name, email } = req.body;
    // Only admins may change a role; a client-supplied role is ignored otherwise.
    const role = isAdmin ? req.body.role : undefined;

    const { rows } = await pool.query(
      `UPDATE users SET
        name = COALESCE($1, name),
        email = COALESCE($2, email),
        role = COALESCE($3, role),
        updated_at = NOW()
       WHERE id = $4
       RETURNING id, name, email, role, created_at, updated_at`,
      [name, email, role, targetId]
    );
    if (!rows[0]) return res.status(404).json({ message: 'User not found' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { rows } = await pool.query('DELETE FROM users WHERE id = $1 RETURNING id', [req.params.id]);
    if (!rows[0]) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User removed' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getUsers, getUserById, updateUser, deleteUser };
