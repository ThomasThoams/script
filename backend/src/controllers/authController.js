// backend/src/controllers/authController.js
const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        user = new User({ email, password });
        await user.save();

        const payload = {
            user: { id: user.id }
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
