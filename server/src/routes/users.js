const { Router } = require('express');
const { getUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const { protect, admin } = require('../middleware/auth');

const router = Router();

router.use(protect);

// Reject non-numeric ids with a clean 400 instead of letting a non-integer
// reach Postgres and surface as a 500 with a raw type-cast error.
router.param('id', (req, res, next, id) => {
  if (!/^\d+$/.test(id)) {
    return res.status(400).json({ message: 'Invalid user id' });
  }
  next();
});

router.get('/', admin, getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', admin, deleteUser);

module.exports = router;
