const request = require('supertest');

const updateStageController = require('../../controllers/updateStageController');
const JobCreationSchema = require('../../models/jobCreationModel'); 


//  TEST CASE - 6
// Following test case tests for updating a status or stage of a Job as a 'Interview'. Based on recruiters response if user 
// wants to update status of a particular Job, he/she can update the stage. Here we are testing whether the updated 
// stage is set to Interview.

test("It should update Job's stage as an Interview w.r.t jobID", async () => {

    const mockFindOneAndUpdate = jest.fn().mockResolvedValueOnce({
      _id: '123',
      job_title: 'Software Engineer',
      stage:"Interview"
    });
  
    JobCreationSchema.findOneAndUpdate = mockFindOneAndUpdate;
  
    const requestBody = { id: '123', stage:"Interview" };
    const updatedJob = await updateStageController(requestBody);
  
    // Assertions
    expect(updatedJob).toEqual({
        _id: '123',
        job_title: 'Software Engineer',
        stage:"Interview"
    });
    expect(mockFindOneAndUpdate).toHaveBeenCalledWith({ _id: '123' }, { stage: 'Interview' }, { new: true });
  });


//  TEST CASE - 7
// Following test case tests for updating a status or stage of a Job as a 'HR Round'. Based on recruiters response if user 
// wants to update status of a particular Job, he/she can update the stage. Here we are testing whether the updated 
// stage is set to HR Round.

test("It should update Job's stage as an Interview w.r.t jobID", async () => {

    const mockFindOneAndUpdate = jest.fn().mockResolvedValueOnce({
      _id: '562',
      job_title: 'Data Engineering',
      stage:"HR Round"
    });
  
    JobCreationSchema.findOneAndUpdate = mockFindOneAndUpdate;
  
    const requestBody = { id: '562', stage:"HR Round" };
    const updatedJob = await updateStageController(requestBody);
  
    // Assertions
    expect(updatedJob).toEqual({
        _id: '562',
        job_title: 'Data Engineering',
        stage:"HR Round"
    });
    expect(mockFindOneAndUpdate).toHaveBeenCalledWith({ _id: '562' }, { stage: 'HR Round' }, { new: true });
  });
