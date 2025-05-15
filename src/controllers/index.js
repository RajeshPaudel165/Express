const { User } = require('../models/index');

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new user
const createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const user = new User({ username, password, email });
        
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a user
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        
        const user = await User.findByIdAndUpdate(id, updates, { new: true });
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};