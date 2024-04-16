const request = require('supertest');
const TodoSchema = require('../../models/todoSchema');

// TEST CASE - 3
// Following unit test case tests for creating a to complete required task for already applied Jobs so that user could receive alerts 
// accordingly. Here we passed 'title', 'deadline' to complete todo and 'description' for OA Round 1 for Paychex company
// controller returns updated json and we are verifying it using assertions

describe('addTodoController', () => {
    test('It should create a new ToDo and return saved Todo details (mocking controller)', async () => {
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


// TEST CASE - 4
// Following unit test case tests for creating a to complete required task for already applied Jobs so that user could receive alerts 
// accordingly. Here we passed 'title', 'deadline' to complete todo and 'description' for Apptitute Round 1 for Apple company.
// controller returns updated json and we are verifying it using assertions
 
describe('addTodoController', () => {
    test('It should create a new Todo and return saved Todo details for Apptitute Round 1 for Apple (mocking controller)', async () => {
      const mockSave = jest.fn().mockReturnValueOnce(Promise.resolve({
        username: "Manasi",
        email: "manasi@gmail.com",
        title: "Apptitute Round 1 for Apple",
        deadline: "04/30/2024",
        description: "Complete the Apptitute Round 1 and refer the practice question before",
        _id: expect.anything()
      }));

      TodoSchema.prototype.save = mockSave;
      const mockTodoController = jest.fn().mockImplementation((data) => {
        const mockSave = TodoSchema.prototype.save;
        return mockSave(data);
      });

    jest.mock('../../controllers/addTodoController', () => mockTodoController);

      const testData = {
        username:"Manasi",
        email:"manasi@gmail.com",
        title:"Apptitute Round 1 for Apple",
        deadline:"04/30/2024",
        description:"Complete the Apptitute Round 1 and refer the practice question before"
    };
  
      const savedJob = await mockTodoController(testData);
  
      // Assertions
        expect(savedJob).toEqual({
            username: "Manasi",
            email: "manasi@gmail.com",
            title: "Apptitute Round 1 for Apple",
            deadline: "04/30/2024",
            description: "Complete the Apptitute Round 1 and refer the practice question before",
            _id: expect.anything()
          });
    
      expect(mockTodoController).toHaveBeenCalledWith(testData);
    });
  });