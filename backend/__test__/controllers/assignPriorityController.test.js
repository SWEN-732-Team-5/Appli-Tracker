const request = require('supertest');

const assignPriorityController = require('../../controllers/assignPriorityController');
const JobCreationSchema = require('../../models/jobCreationModel'); 

//  TEST CASE - 5
// Following test case tests for assigning priority to the job. Here we are assigning priority as 'High' for a particular Job
// which is distinguished by 'JobID', the updated Job should also have priority as High.

test("It should set priority as high w.r.t jobID", async () => {
    const mockFindOneAndUpdate = jest.fn().mockResolvedValueOnce({
      _id: '123',
      job_title: 'Software Engineer',
      priority: 'high'
    });
  
    JobCreationSchema.findOneAndUpdate = mockFindOneAndUpdate;
    const requestBody = { id: '123', priority: 'high' };
    const updatedJob = await assignPriorityController(requestBody);
    // Assertions
    expect(updatedJob.priority).toBe('high');
    expect(updatedJob).toEqual({
      _id: '123',
      job_title: 'Software Engineer',
      priority: 'high'
    });
    expect(mockFindOneAndUpdate).toHaveBeenCalledWith({ _id: '123' }, { priority: 'high' }, { new: true });
  });