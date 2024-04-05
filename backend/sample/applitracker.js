// const request = require('supertest');


// const JobCreationSchema = require('../models/jobCreationModel'); // Assuming path is correct
// const jobCreateController = require('../controllers/jobCreationController');
// const { mock } = require('mockito');

// describe('jobCreateController', () => {
//   test('It should create a new Job and return saved job details', async () => {
//     // Mock the entire JobCreationSchema class
//     const mockSchema = mock(JobCreationSchema);

//     // Mock the save method on the mock schema (optional, if needed)
//         const mockSavedJob = {
//         job_title: "Microsoft",
//         description: "Job application for Software Engineering-1",
//         type: "Full-Time",
//         payment: 800,
//         applied_date: "04/12/2024",
//         location: "New York",
//         priority: "high",
//       };
//     mockSchema.prototype.save.mockReturnValueOnce(Promise.resolve(mockSavedJob));

//     // Call the controller with test data
//      const testData = {
//         job_title: "Microsoft",
//         description: "Job application for Software Engineering-1",
//         type: "Full-Time",
//         payment: 800,
//         applied_date: "04/12/2024",
//         location: "New York",
//         priority: "high",
//       };

//     // Assuming jobCreateController uses the mocked schema (replace with actual usage):
//     const savedJob = await jobCreateController(testData, mockSchema);

//     // Assertions
//     expect(savedJob).toEqual(mockSavedJob);
//     // Additional assertions on mock schema usage (if applicable)
//   });
// });




// const JobCreationSchema = require('../models/jobCreationModel'); // Assuming path is correct
// const jobCreateController = require('../controllers/jobCreationController');
// const { mock } = require('mockito'); // Mockito library

// describe('jobCreateController', () => {
//   test('It should create a new Job and return saved job details', async () => {
//     // Mock JobCreationSchema.save()
//     const mockSavedJob = {
//         job_title: "Microsoft",
//         description: "Job application for Software Engineering-1",
//         type: "Full-Time",
//         payment: 800,
//         applied_date: "04/12/2024",
//         location: "New York",
//         priority: "high",
//       };
//     const mockSave = mock(JobCreationSchema.prototype.save);
//     mockSave.mockReturnValueOnce(Promise.resolve(mockSavedJob));

//     // Call the controller with some test data
//     const testData = {
//         job_title: "Microsoft",
//         description: "Job application for Software Engineering-1",
//         type: "Full-Time",
//         payment: 800,
//         applied_date: "04/12/2024",
//         location: "New York",
//         priority: "high",
//       };
//     const savedJob = await jobCreateController(testData);

//     // Assertions
//     expect(savedJob).toEqual(mockSavedJob);
//     expect(mockSave).toHaveBeenCalledWith(); // Verify save was called
//   });
// });




// //  TEST CASE 1
// // Following unit test case tests if new Job is created successfully, When API endpoint /createjob is 
// // called and job details are passed in request body which comprises of 'job_title','description', 'type' and 'payment'
// // These data is saved in Mongo database. If successfully saved it returns status code as 200 and 
// // also returns the json of recently created Job.
// // Here, we are testing whether response status, job_title, description, type and payment matches.
// describe('POST /createjob', () => {
//     test('It should create a new Full-Time Job and return job details', async () => {
//        const response =await request('http://localhost:8000')
//         .post('/createjob').send({"job_title":"Microsoft","description":"Job application for Software Engineering-1","type":"Full-Time","payment":800,"applied_date":"04/12/2024","location":"New York","priority":"high"})
//         expect(response.status).toBe(200);
//         expect(response.body.job_title).toBe('Microsoft');
//         expect(response.body.description).toBe('Job application for Software Engineering-1');
//         expect(response.body.type).toBe('Full-Time');
//         expect(response.body.payment).toBe(800);
       
//     });
// });

// //  TEST CASE 2
// // Following test case defines about creation of new Co-op position for a 'Apple' company once it is created successfully
// // it checks whether the description, Job type 'Co-op' and 'Pay' matches with the actual create Co-op Job.
// describe('POST /createjob', () => {
//     test('It should create a new Co-op and return the create co-op details', async () => {
//        const response =await request('http://localhost:8000')
//         .post('/createjob').send({
//             "job_title": "Apple",
//             "description": "Frontend Developer",
//             "type": "Co-op",
//             "payment": 27,
//             "applied_date": "04/19/2024",
//             "location": "San Franciso",
//             "priority": "low",
//             "weblink":"https://google.com"
//         })
//         expect(response.status).toBe(200);
//         expect(response.body.job_title).toBe('Apple');
//         expect(response.body.description).toBe('Frontend Developer');
//         expect(response.body.type).toBe('Co-op');
//         expect(response.body.payment).toBe(27);
       
//     });
// });

// //  TEST CASE 3
// // Following test case tests for searching a Job w.r.t location, if user wants to search all the jobs he/she applied based on 
// // Rochester location, here we are testing whether jobs returned by API is Rochester based only.
// describe('POST /searchjob', () => {
//     test('It should search Job that is Rochester based Location', async () => {
//        const response =await request('http://localhost:8000')
//         .get('/searchjob').send({"location":"Rochester"})
//         expect(response.status).toBe(200);
//         expect(response.body[0].location).toBe('Rochester');
//     });
// });

// // TEST CASE 4
// // Following test case tests for searching a Job w.r.t date, if user wants the Job data based on date which he/she has
// // applied. Here we are testing whether all jobs searched w.r.t 02/12/2024 date matches or not.
// describe('POST /searchjob', () => {
//     test('It should search Job that was created on 02/12/2024 date', async () => {
//        const response =await request('http://localhost:8000')
//         .get('/searchjob').send({"applied_date":"02/12/2024"})
//         expect(response.status).toBe(200);
//         expect(response.body[0].applied_date).toBe('02/12/2024');
//     });
// });

// //  TEST CASE 5
// // Following test case tests for assigning priority to the job. Here we are assigning priority as 'High' for a particular Job
// // which is distinguished by 'JobID', the updated Job should also have priority as High.
// describe('POST /assign_priority', () => {
//     test('It should set priority as high w.r.t jobID', async () => {
//        const response =await request('http://localhost:8000')
//         .post('/assign_priority').send({
//             "id": "6604dcda864f36241d7c53fc",
//             "priority": "high"
//         })
//         expect(response.status).toBe(200);
//         expect(response.body.priority).toBe('high');
//     });
// });

// //  TEST CASE 6
// // Following test case tests for updating a status or stage of a Job as a 'Interview'. Based on recruiters response if user 
// // wants to update status of a particular Job, he/she can update the stage. Here we are testing whether the updated 
// // stage is Interview.
// describe('POST /update_stage', () => {
//     test(`It should update Job's stage as an Interview w.r.t jobID`, async () => {
//        const response =await request('http://localhost:8000')
//         .post('/assign_priority').send({
//             "id":"6604e81e8eab186daec649b2",
//             "stage":"Interview"
//         })
//         expect(response.status).toBe(200);
//         expect(response.body.stage).toBe('Interview');
//     });
// });

