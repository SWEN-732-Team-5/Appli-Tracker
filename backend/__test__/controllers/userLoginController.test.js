const userLoginController = require('../../controllers/userLoginController');
const User = require('../../models/user');

describe('userLoginController', () => {
  test('It should login a user with correct credentials', async () => {
    // Mock the findOne method of the User model to simulate finding a user by email
    User.findOne = jest.fn().mockResolvedValueOnce({
      email: 'group5@gmail.com',
      isValidPassword: jest.fn().mockResolvedValueOnce(true), // Mocking isValidPassword to return true
    });

    // Simulate a login request
    const requestBody = { email: 'group5@gmail.com', userSecKey: '*****' };
    const response = await userLoginController(requestBody);

    // Assertions
    expect(response.status_code).toEqual(200);
    expect(response.data.message).toEqual('Login successful');
    expect(response.data.user.email).toEqual('group5@gmail.com');
  });

  test('It should return an error for invalid credentials', async () => {
    // Mock the findOne method of the User model to simulate not finding a user by email
    User.findOne = jest.fn().mockResolvedValueOnce(null);

    // Simulate a login request with incorrect email
    const requestBody = { email: 'nonexistent@gmail.com', userSecKey: '*****' };
    const response = await userLoginController(requestBody);

    // Assertions
    expect(response.status_code).toEqual(404);
    expect(response.data.message).toEqual('User not found');

    // Simulate a login request with incorrect password for an existing email
    User.findOne = jest.fn().mockResolvedValueOnce({
      email: 'group5@gmail.com',
      isValidPassword: jest.fn().mockResolvedValueOnce(false), // Mocking isValidPassword to return false
    });
    const requestBody2 = { email: 'group5@gmail.com', userSecKey: 'incorrectpassword' };
    const response2 = await userLoginController(requestBody2);

    // Assertions
    expect(response2.status_code).toEqual(401);
    expect(response2.data.message).toEqual('Invalid Credentials');
  });
});
