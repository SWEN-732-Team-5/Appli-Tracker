const request = require('supertest');
const TodoSchema = require('../../models/todoSchema');

//  TEST CASE - 2
// Following unit test case tests if new Job is created successfully, Here we have mocked jobCreationController and jobCreationController() is called
// and job details are passed in request body which comprises of 'job_title','description', 'type' and 'payment'
// and in response the controller returns the json of recently created Job.
// Here, we are testing whether job_title, description, type and payment matches with the created job

describe('addTodoController', () => {
    test('It should create a new Job and return saved job details (mocking controller)', async () => {
      const mockSave = jest.fn().mockReturnValueOnce(Promise.resolve({
        username: "Soudagar",
        email: "saudagar1209@gmail.com",
        title: "OA Round 1 for Paychex",
        deadline: "03/12/2024",
        description: "Complete the Online Assesment for Round 1 and refer the practice question before",
        _id: expect.anything()
      }));

      TodoSchema.prototype.save = mockSave;
      const mockTodoController = jest.fn().mockImplementation((data) => {
        const mockSave = TodoSchema.prototype.save;
        return mockSave(data);
      });

    jest.mock('../../controllers/addTodoController', () => mockTodoController);

      const testData = {
        username:"Soudagar",
        email:"saudagar1209@gmail.com",
        title:"OA Round 1 for Paychex",
        deadline:"03/12/2024",
        description:"Complete the Online Assesment for Round 1 and refer the practice question before"
    };
  
      const savedJob = await mockTodoController(testData);
  
      // Assertions
        expect(savedJob).toEqual({
            username: "Soudagar",
            email: "saudagar1209@gmail.com",
            title: "OA Round 1 for Paychex",
            deadline: "03/12/2024",
            description: "Complete the Online Assesment for Round 1 and refer the practice question before",
            _id: expect.anything()
          });
    
      expect(mockTodoController).toHaveBeenCalledWith(testData);
    });
  });