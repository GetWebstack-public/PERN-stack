const { Router } = require('express');
const { getUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const { protect, admin } = require('../middleware/auth');

const router = Router();

router.use(protect);

router.get('/', admin, getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', admin, deleteUser);

module.exports = router;
