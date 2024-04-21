const request = require('supertest');

const applydateCountController = require('../../controllers/applydateCountController');
const JobCreationSchema = require('../../models/jobCreationModel');

//  TEST CASE 


describe('applydateCountController', () => {
    test("It should extract all jobs count w.r.t dates", async () => {

        const mockFind = jest.fn().mockResolvedValueOnce([
            {
                "x": "2023-02-12",
                "y": 3
            },
            {
                "x": "2024-01-12",
                "y": 3
            }
        ]);

          JobCreationSchema.aggregate = mockFind;

        const requestBody = {
            "username": "Manasi",
            "email": "manasi@gmail.com"
            }; 
        const searchResult = await applydateCountController(requestBody);

          // Assertions
        expect(searchResult).toEqual([
            {
                "x": "2023-02-12",
                "y": 3
            },
            {
                "x": "2024-01-12",
                "y": 3
            }
        ]);

        // expect(mockFind).toHaveBeenCalledWith(requestBody);

    });
});

