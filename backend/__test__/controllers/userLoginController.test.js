const request = require('supertest');
const { userLogin } = require('../../controllers/userLoginController');
const User = require('../../models/user');

describe('userLoginController', () => {
  test('It should login a user with correct credentials', async () => {
    // Mock the findOne method of the User model to simulate finding a user by email
    User.findOne = jest.fn().mockResolvedValueOnce({
      email: 'group5@gmail.com',
      isValidPassword: jest.fn().mockResolvedValueOnce(true), // Mocking isValidPassword to return true
    });

    // Mock the response object
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    // Simulate a login request
    await userLogin(
      { body: { email: 'group5@gmail.com', password: '*****' } }, // Simulated request object
      res // Mocked response object
    );

    // Assertions
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Login successful',
      user: {
        email: 'group5@gmail.com',
      },
    });
  });

  test('It should return an error for invalid credentials', async () => {
    // Mock the findOne method of the User model to simulate not finding a user by email
    User.findOne = jest.fn().mockResolvedValueOnce(null);

    // Mock the response object
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    // Simulate a login request with incorrect email
    await userLogin(
      { body: { email: 'nonexistent@gmail.com', password: '*****' } }, // Simulated request object
      res // Mocked response object
    );

    // Assertions
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });

    // Simulate a login request with incorrect password for an existing email
    User.findOne = jest.fn().mockResolvedValueOnce({
      email: 'group5@gmail.com',
      isValidPassword: jest.fn().mockResolvedValueOnce(false), // Mocking isValidPassword to return false
    });
    await userLogin(
      { body: { email: 'group5@gmail.com', password: 'incorrectpassword' } }, // Simulated request object
      res // Mocked response object
    );

    // Assertions
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid email or password' });
  });
});
