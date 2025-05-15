const express = require('express');
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/index');
const { authenticateToken } = require('../middlewares/auth');

// Public routes
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is running' });
});

// Protected routes
router.get('/users', authenticateToken, getUsers);
router.post('/users', authenticateToken, createUser);
router.put('/users/:id', authenticateToken, updateUser);
router.delete('/users/:id', authenticateToken, deleteUser);

module.exports = router;