const request = require('supertest');

const extractAllJobsController = require('../../controllers/extractAllJobsController');
const JobCreationSchema = require('../../models/jobCreationModel');


describe('extractAllJobController', () => {
    test("It should extract all jobs associated with a specific username and email", async () => {

        const mockFind = jest.fn().mockResolvedValueOnce([
            { _id: 1, job_title: 'Software Engineer', location:'Rochester', username: 'user1', email: 'user1@example.com' },
            { _id: 2, job_title: 'Web Developer',location:'Rochester', username: 'user1', email: 'user1@example.com' }
          ]);

          JobCreationSchema.find = mockFind;

        const requestBody = { 'username': 'user1', 'email': 'user1@example.com' }; 
        const searchResult = await extractAllJobsController(requestBody);

          // Assertions
        expect(searchResult).toEqual([
            { _id: 1, job_title: 'Software Engineer', location:'Rochester', username: 'user1', email: 'user1@example.com' },
            { _id: 2, job_title: 'Web Developer', location:'Rochester', username: 'user1', email: 'user1@example.com' }
        ]);

        expect(mockFind).toHaveBeenCalledWith(requestBody);

    });
});

