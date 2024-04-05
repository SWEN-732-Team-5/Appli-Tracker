const request = require('supertest');


const JobCreationSchema = require('../../models/jobCreationModel');

//  TEST CASE - 2
// Following unit test case tests if new Job is created successfully, Here we have mocked jobCreationController and jobCreationController() is called
// and job details are passed in request body which comprises of 'job_title','description', 'type' and 'payment'
// and in response the controller returns the json of recently created Job.
// Here, we are testing whether job_title, description, type and payment matches with the created job

describe('jobCreateController', () => {
    test('It should create a new Job and return saved job details (mocking controller)', async () => {
      const mockSave = jest.fn().mockReturnValueOnce(Promise.resolve({
        job_title: "Microsoft Software Associate",
        description: "Job application for Software Engineering-1",
        type: "Full-Time",
        payment: 800,
        applied_date: "04/12/2024",
        location: "New York",
        priority: "high",
        weblink: "https://mcrosoft.com",
        _id: expect.anything()
      }));

      JobCreationSchema.prototype.save = mockSave;
      const mockJobCreateController = jest.fn().mockImplementation((data) => {
        const mockSave = JobCreationSchema.prototype.save;
        return mockSave(data);
      });

    jest.mock('../../controllers/jobCreationController', () => mockJobCreateController);

      const testData = {
        job_title: "Microsoft Software Associate",
        description: "Job application for Software Engineering-1",
        type: "Full-Time",
        payment: 800,
        applied_date: "04/12/2024",
        location: "New York",
        priority: "high",
        weblink: "https://mcrosoft.com"
      };
  
      const savedJob = await mockJobCreateController(testData);
  
      // Assertions
        expect(savedJob.job_title).toBe('Microsoft Software Associate');
        expect(savedJob.description).toBe('Job application for Software Engineering-1');
        expect(savedJob.type).toBe('Full-Time');
        expect(savedJob.payment).toBe(800);

        expect(savedJob).toEqual({
            applied_date: "04/12/2024",
            description: "Job application for Software Engineering-1",
            job_title: "Microsoft Software Associate",
            location: "New York",
            type: "Full-Time",
            payment: 800,
            priority: "high",
            weblink: "https://mcrosoft.com",
            _id: expect.anything()
        });
    
    //   console.log("Mock Logs ::");
    //   console.log(mockSave.mock.calls);
  
      // Assertion for mocked controller call
      expect(mockJobCreateController).toHaveBeenCalledWith(testData);
    });
  });




//  TEST CASE - 3
// Following test case defines about creation of new Co-op position for a 'Apple' company once it is created successfully
// it checks whether the description, Job type 'Co-op' and 'Pay' matches with the actual create Co-op Job.

describe('jobCreateController', () => {
    test('It should create a new Co-op and return the create co-op details', async () => {
      const mockSave = jest.fn().mockReturnValueOnce(Promise.resolve({
        job_title: "Apple Software Intern",
        description: "Job application for Software Engineering Intern-1",
        type: "Co-op",
        payment: 800,
        applied_date: "04/12/2024",
        location: "New York",
        priority: "high",
        weblink: "https://apple.com",
        _id: expect.anything()
      }));

      JobCreationSchema.prototype.save = mockSave;
      const mockJobCreateController = jest.fn().mockImplementation((data) => {
        const mockSave = JobCreationSchema.prototype.save;
        return mockSave(data);
      });

    jest.mock('../../controllers/jobCreationController', () => mockJobCreateController);

      const testData = {
        job_title: "Apple Software Intern",
        description: "Job application for Software Engineering Intern-1",
        type: "Co-op",
        payment: 800,
        applied_date: "04/12/2024",
        location: "New York",
        priority: "high",
        weblink: "https://apple.com"
      };
  
      const savedJob = await mockJobCreateController(testData);
  
      // Assertions
        expect(savedJob.job_title).toBe('Apple Software Intern');
        expect(savedJob.description).toBe('Job application for Software Engineering Intern-1');
        expect(savedJob.type).toBe('Co-op');
        expect(savedJob.payment).toBe(800);

        expect(savedJob).toEqual({
            applied_date: "04/12/2024",
            description: "Job application for Software Engineering Intern-1",
            job_title: "Apple Software Intern",
            location: "New York",
            type: "Co-op",
            payment: 800,
            priority: "high",
            weblink: "https://apple.com",
            _id: expect.anything()
        });
    
    //   console.log("Mock Logs ::");
    //   console.log(mockSave.mock.calls);
  
      // Assertion for mocked controller call
      expect(mockJobCreateController).toHaveBeenCalledWith(testData);
    });
  });