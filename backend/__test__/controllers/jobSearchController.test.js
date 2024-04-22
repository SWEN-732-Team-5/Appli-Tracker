const request = require('supertest');

const jobSearchController = require('../../controllers/jobSearchController');
const JobCreationSchema = require('../../models/jobCreationModel'); 

// TEST CASE - 9
// Following test case tests for searching a Job w.r.t location, if user wants to search all the jobs he/she applied based on 
// Rochester location, here we are testing whether jobs returned by jobSearchController is Rochester based only.

test('It should search Job that is Rochester based Location', async () => {
  const mockFind = jest.fn().mockResolvedValueOnce([
    { _id: 1, job_title: 'Software Engineer', location:'Rochester' },
    { _id: 2, job_title: 'Web Developer',location:'Rochester' }
  ]);

  JobCreationSchema.find = mockFind;

  const requestBody = {
    "username":"Manasi",
    "email":"manasi@gmail.com",
    "stage": "",
    "applied_date": "",
    "location": "Rochester"
  }; 
  const searchResult = await jobSearchController(requestBody);

  // Assertions
  expect(searchResult).toEqual([
    { _id: 1, job_title: 'Software Engineer', location:'Rochester' },
    { _id: 2, job_title: 'Web Developer', location:'Rochester' }
  ]);

  expect(searchResult[0].location).toBe('Rochester');
});



// TEST CASE - 10
// Following test case tests for searching a Job w.r.t date, if user wants the Job data based on date which he/she has
// applied. Here we are testing whether all jobs searched w.r.t 02/12/2024 date matches or not.

test('It should search Job that was created on 02/12/2024 date', async () => {
    const mockFind = jest.fn().mockResolvedValueOnce([
      { _id: 1, job_title: 'Software Engineer - II', applied_date:'02/12/2024' },
      { _id: 2, job_title: 'Web Developer',applied_date:'02/12/2024' }
    ]);
  
    JobCreationSchema.find = mockFind;

    const requestBody = {
      "username":"Manasi",
      "email":"manasi@gmail.com",
      "stage": "",
      "applied_date": "02/12/2024"
    };

    const searchResult = await jobSearchController(requestBody);
  
    // Assertions
    expect(searchResult).toEqual([
        { _id: 1, job_title: 'Software Engineer - II', applied_date:'02/12/2024' },
        { _id: 2, job_title: 'Web Developer',applied_date:'02/12/2024' }
    ]);
  
    expect(searchResult[0].applied_date).toBe('02/12/2024');
  });