// userLoginController.js

const User = require('../models/user');

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body); // This line is for debugging purposes

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isValidPassword = await user.isValidPassword(password);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    return res.status(200).json({ message: 'Login successful', user: { email } });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { userLogin };
