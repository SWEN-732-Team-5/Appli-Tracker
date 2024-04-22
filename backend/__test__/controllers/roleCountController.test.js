const request = require('supertest');

const roleCountController = require('../../controllers/roleCountController');
const JobCreationSchema = require('../../models/jobCreationModel');

//  TEST CASE 


describe('roleCountController', () => {
    test("It should extract all jobs count w.r.t roles", async () => {

        const mockFind = jest.fn().mockResolvedValueOnce([
            {
                "count": 1,
                "role": "Backend Engineer -1 "
            },
            {
                "count": 2,
                "role": "Product Designer"
            }
        ]);

          JobCreationSchema.aggregate = mockFind;

        const requestBody = {
            "username": "Manasi",
            "email": "manasi@gmail.com"
            }; 
        const searchResult = await roleCountController(requestBody);

          // Assertions
        expect(searchResult).toEqual([
            {
                "count": 1,
                "role": "Backend Engineer -1 "
            },
            {
                "count": 2,
                "role": "Product Designer"
            }
        ]);
    });
});

