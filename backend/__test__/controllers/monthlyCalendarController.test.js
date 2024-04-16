const monthlyCalendarController = require('../../controllers/monthlyCalendarController');
const TodoSchema = require('../../models/todoSchema');

// TEST CASE - 11
// Following test case tests for extracting all to complete required task created by user w.r.t to month and year so that displaying in 
// the calendar view would be easy to navigate through the deadline for the user. Here we have passed 'username', 'email' 
// and monthyear passed in format MM/YYYY as March 2024, it will return all Todos for March 2024

describe('monthlyCalendarController', () => {
    test("It should fetch todos for the given month and year for calendar", async () => {
    
        const mockTodos = [
            { _id: '1', username: 'testUser', email: 'test@example.com', deadline: '03/12/2024', title: 'Todo 1' },
            { _id: '2', username: 'testUser', email: 'test@example.com', deadline: '03/15/2024', title: 'Todo 2' }
        ];

        const mockAggregate = jest.fn().mockResolvedValueOnce(mockTodos);
        TodoSchema.aggregate = mockAggregate;

        const requestBody = {
            username: 'testUser',
            email: 'test@example.com',
            monthyear: '03/2024'
        };

        const todos = await monthlyCalendarController(requestBody);

        // Assertions
        expect(todos).toEqual(mockTodos);
        expect(mockAggregate).toHaveBeenCalledWith([
            {
                $match: {
                    username: 'testUser',
                    email: 'test@example.com',
                    $expr: {
                        $and: [
                            { $eq: [{ $month: { $dateFromString: { dateString: "$deadline", format: "%m/%d/%Y" } } }, 3] },
                            { $eq: [{ $year: { $dateFromString: { dateString: "$deadline", format: "%m/%d/%Y" } } }, 2024] }
                        ]
                    }
                }
            }
        ]);
    });
});



// TEST CASE - 12
// Following test case tests for extracting all to complete required task created by user w.r.t to month and year so that displaying in 
// the calendar view would be easy to navigate through the deadline for the user. Here we have passed 'username', 'email' 
// and monthyear passed in format MM/YYYY as April 2024, it will return all Todos for April 2024
describe('monthlyCalendarController', () => {
    test("It should fetch todos for the given 4th month and 2024th year ", async () => {
    
        const mockTodos = [
            { _id: '3', username: 'testUserDemo', email: 'testdemo@example.com', deadline: '04/12/2024', title: 'Todo 1' },
            { _id: '4', username: 'testUserDemo', email: 'testdemo@example.com', deadline: '04/15/2024', title: 'Todo 2' }
        ];

        const mockAggregate = jest.fn().mockResolvedValueOnce(mockTodos);
        TodoSchema.aggregate = mockAggregate;

        const requestBody = {
            username: 'testUserDemo',
            email: 'testdemo@example.com',
            monthyear: '04/2024'
        };

        const todos = await monthlyCalendarController(requestBody);

        // Assertions
        expect(todos).toEqual(mockTodos);
        expect(mockAggregate).toHaveBeenCalledWith([
            {
                $match: {
                    username: 'testUserDemo',
                    email: 'testdemo@example.com',
                    $expr: {
                        $and: [
                            { $eq: [{ $month: { $dateFromString: { dateString: "$deadline", format: "%m/%d/%Y" } } }, 4] },
                            { $eq: [{ $year: { $dateFromString: { dateString: "$deadline", format: "%m/%d/%Y" } } }, 2024] }
                        ]
                    }
                }
            }
        ]);
    });
});