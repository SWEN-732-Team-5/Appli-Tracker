const request = require('supertest');

const userLoginController = require('../../controllers/userLoginController');
const userCreationSchema = require('../../models/user'); 


//  TEST CASE 

test("It should check credentials for users details", async () => {

    const mockFindOne = jest.fn().mockResolvedValueOnce({
          "_id": "662721b13386f51297251cbc",
          "name": "Manasi",
          "email": "manasi@gmail.com",
          "userSecKey": "*****",
          "__v": 0
      }
  );
  
  userCreationSchema.findOne = mockFindOne;
  
    const requestBody = {
      email:"manasi@gmail.com",
      userSecKey:"*****"
    };
    const updatedJob = await userLoginController(requestBody);

    // Assertions
    expect(updatedJob).toEqual({
      "message": "SUCCESS",
      "data": {
          "_id": "662721b13386f51297251cbc",
          "name": "Manasi",
          "email": "manasi@gmail.com",
          "userSecKey": "*****",
          "__v": 0
      }
  });
  
  });



  //  TEST CASE 

test("It should check credentials for users details for Invalid credentials", async () => {

  const mockFindOne = jest.fn().mockResolvedValueOnce(null
);

userCreationSchema.findOne = mockFindOne;

  const requestBody = {
    email:"manasi@gmail.com",
    userSecKey:"****"
  };
  const updatedJob = await userLoginController(requestBody);

  // Assertions
  expect(updatedJob).toEqual({"message" : "INVALID", "data":null});

});