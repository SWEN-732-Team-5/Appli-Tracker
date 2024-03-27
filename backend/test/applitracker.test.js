const request = require('supertest');

// Following unit test case tests if new Job is created successfully, When API endpoint /createjob is 
// called and job details are passed in request body which comprises of 'job_title','description', 'type' and 'payment'
// These data is saved in Mongo database. If successfully saved it returns status code as 200 and 
// also returns the json of recently created Job.
// Here, we are testing whether response status, job_title, description, type and payment matches.
describe('POST /createjob', () => {
    test('It should create a new job and return job details', async () => {
       const response =await request('http://localhost:8000')
        .post('/createjob').send({"job_title":"Microsoft","description":"Job application for Software Engineering-1","type":"Full-Time","payment":800})
        expect(response.status).toBe(200);
        expect(response.body.job_title).toBe('Microsoft');
        expect(response.body.description).toBe('Job application for Software Engineering-1');
        expect(response.body.type).toBe('Full-Time');
        expect(response.body.payment).toBe(800);
       
    });
});

describe('POST /createjob', () => {
    test('It should create a new Co-op and return the create co-op details', async () => {
       const response =await request('http://localhost:8000')
        .post('/createjob').send({"job_title":"Apple","description":"Frontend Developer","type":"Co-op","payment":27})
        expect(response.status).toBe(200);
        expect(response.body.job_title).toBe('Apple');
        expect(response.body.description).toBe('Frontend Developer');
        expect(response.body.type).toBe('Co-op');
        expect(response.body.payment).toBe(27);
       
    });
});