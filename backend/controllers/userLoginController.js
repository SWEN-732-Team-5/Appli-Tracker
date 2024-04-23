const User = require('../models/user');

module.exports = async function userLoginController(requestBody)
{
  const { email, userSecKey } = requestBody;


  try {
    const user = await User.findOne({ email, userSecKey });
   
    if (!user) {
      return {"message" : "INVALID", "data":null};
    }

    return {"message" : "SUCCESS", "data":user};
   
  } catch (error) {
   
  }
}
