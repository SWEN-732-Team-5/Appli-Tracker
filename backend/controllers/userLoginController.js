const User = require('../models/user');

// const userLogin = async (req, res) => {

module.exports = async function userLoginController(requestBody)
{
  const { email, password } = requestBody;


  try {
    const user = await User.findOne({ email, userSecKey: password });
   
    if (!user) {
      return {"message" : "INVALID", "data":null};
    }

    return {"message" : "SUCCESS", "data":user};
    // const isValidPassword = await user.isValidPassword(password);

    // if (!isValidPassword) {
    //   return res.status(401).json({ message: 'Invalid email or password' });
    // }

    // return res.status(200).json({ message: 'Login successful', user: { email } });
  } catch (error) {
    // console.error('Login error:', error);
    // return {"message" : "INVALID", "data":null};
  }
}
