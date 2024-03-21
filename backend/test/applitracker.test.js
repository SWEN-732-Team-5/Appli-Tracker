const request = require('supertest');

// Following unit test case tests if new Job is created successfully, When API endpoint /createjob is 
// called and job details are passed in request body which comprises of 'job_title','description', 'type' and 'payment'
// These data is saved in Mongo database. If successfully saved it returns status code as 200 and 
// also returns the json of recently created Job.
// Here, we are testing whether response status, job_title, description, type and payment matches.
describe('POST /createjob', () => {
    test('It should create a new job and return job details', async () => {
       const response =await request('http://localhost:8000')
        .post('/createjob').send({"job_title":"Google","description":"Job application for Data Engineering II","type":"Full-Time","payment":100})
        expect(response.status).toBe(200);
        expect(response.body.job_title).toBe('Google');
        expect(response.body.description).toBe('Job application for Data Engineering II');
        expect(response.body.type).toBe('Full-Time');
        expect(response.body.payment).toBe(100);
       
    });
});