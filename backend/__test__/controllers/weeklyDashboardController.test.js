const request = require('supertest');

const weeklyDashboardController = require('../../controllers/weeklyDashboardController');
const JobCreationSchema = require('../../models/jobCreationModel'); 

//  TEST CASE - 8
// Following test case tests for Jobs that are applied during that particular week
// It takes start_date and end_date and returns list of jobs applied within that specific period.

test('It should return all jobs created for that particular week for dashboard view ', async () => {
  const mockFind = jest.fn().mockResolvedValueOnce([
    { _id: 1, job_title: 'Software Engineer', location:'New York', applied_date: '2024-04-08' },
    { _id: 2, job_title: 'Web Developer',location:'Buffalo', applied_date: '2024-04-10'  },
    { _id: 3, job_title: 'Data Engineering',location:'San Francisco', applied_date: '2024-04-12'  }
  ]);

  JobCreationSchema.find = mockFind;

  const requestBody = {
    startDate: '2024-04-07',
    endDate: '2024-04-13'
  }; 
  const searchResult = await weeklyDashboardController(requestBody);

  // Assertions
  expect(searchResult).toEqual([
    { _id: 1, job_title: 'Software Engineer', location:'New York', applied_date: '2024-04-08' },
    { _id: 2, job_title: 'Web Developer',location:'Buffalo', applied_date: '2024-04-10'  },
    { _id: 3, job_title: 'Data Engineering',location:'San Francisco', applied_date: '2024-04-12'  }
  ]);

   expect(mockFind).toHaveBeenCalledWith({ applied_date: { $gte: expect.any(Date), $lt: expect.any(Date) } });
});