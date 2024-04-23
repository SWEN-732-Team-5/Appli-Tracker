const User = require('../models/user');

module.exports = async function userLoginController(requestBody)
{
  const stringifiedBody = {};
  for (const key in requestBody) {
      stringifiedBody[key] = String(requestBody[key]);
  }

  const { email, userSecKey } = stringifiedBody;


  try {
    const user = await User.findOne({ email, userSecKey });
    if (!user) {
      return {"message" : "INVALID", "data":null};
    }

    return {"message" : "SUCCESS", "data":user};
   
  } catch (error) {
   
  }
}