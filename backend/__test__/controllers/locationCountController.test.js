const request = require('supertest');

const locationCountController = require('../../controllers/locationCountController');
const JobCreationSchema = require('../../models/jobCreationModel');

//  TEST CASE 


describe('locationCountController', () => {
    test("It should extract all jobs count w.r.t location", async () => {

        const mockFind = jest.fn().mockResolvedValueOnce([
            {
                "count": 2,
                "location": "California"
            },
            {
                "count": 1,
                "location": "Utah"
            }]);

          JobCreationSchema.aggregate = mockFind;

        const requestBody = {
            "username": "Manasi",
            "email": "manasi@gmail.com"
            }; 
        const searchResult = await locationCountController(requestBody);

          // Assertions
        expect(searchResult).toEqual([
            {
                "count": 2,
                "location": "California"
            },
            {
                "count": 1,
                "location": "Utah"
            }]);

    });
});

