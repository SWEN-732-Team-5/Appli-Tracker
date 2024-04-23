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
      password:"*****"
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
    // expect(mockFindOneAndUpdate).toHaveBeenCalledWith({ _id: '123' }, { stage: 'Interview' }, { new: true });
  });

// const request = require('supertest');
// const { userLogin } = require('../../controllers/userLoginController');
// const User = require('../../models/user');

// describe('userLoginController', () => {
//   test('It should login a user with correct credentials', async () => {
//     // Mock the findOne method of the User model to simulate finding a user by email
//     User.findOne = jest.fn().mockResolvedValueOnce({
//       email: 'group5@gmail.com',
//       isValidPassword: jest.fn().mockResolvedValueOnce(true), // Mocking isValidPassword to return true
//     });

//     // Mock the response object
//     const res = {
//       status: jest.fn(() => res),
//       json: jest.fn(),
//     };

//     // Simulate a login request
//     await userLogin(
//       { body: { email: 'group5@gmail.com', password: '*****' } }, // Simulated request object
//       res // Mocked response object
//     );

//     // Assertions
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith({
//       message: 'Login successful',
//       user: {
//         email: 'group5@gmail.com',
//       },
//     });
//   });

//   test('It should return an error for invalid credentials', async () => {
//     // Mock the findOne method of the User model to simulate not finding a user by email
//     User.findOne = jest.fn().mockResolvedValueOnce(null);

//     // Mock the response object
//     const res = {
//       status: jest.fn(() => res),
//       json: jest.fn(),
//     };

//     // Simulate a login request with incorrect email
//     await userLogin(
//       { body: { email: 'nonexistent@gmail.com', password: '*****' } }, // Simulated request object
//       res // Mocked response object
//     );

//     // Assertions
//     expect(res.status).toHaveBeenCalledWith(404);
//     expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });

//     // Simulate a login request with incorrect password for an existing email
//     User.findOne = jest.fn().mockResolvedValueOnce({
//       email: 'group5@gmail.com',
//       isValidPassword: jest.fn().mockResolvedValueOnce(false), // Mocking isValidPassword to return false
//     });
//     await userLogin(
//       { body: { email: 'group5@gmail.com', password: 'incorrectpassword' } }, // Simulated request object
//       res // Mocked response object
//     );

//     // Assertions
//     expect(res.status).toHaveBeenCalledWith(401);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Invalid email or password' });
//   });
// });
