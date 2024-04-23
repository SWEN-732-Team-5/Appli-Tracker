const User = require('../models/user');

module.exports = async function userLoginController(requestBody) {
  const { email, userSecKey } = requestBody;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return { status_code: 404, data: { message: 'User not found' } };
    }

    const isPasswordValid = await user.isValidPassword(userSecKey);

    if (!isPasswordValid) {
      return { status_code: 401, data: { message: 'Invalid Credentials' } };
    }

    return { status_code: 200, data: { message: 'Login successful', user: { email } } };
  } catch (error) {
    console.error('Login error:', error);
    return { status_code: 500, data: { message: 'Internal server error' } };
  }
};
