const monthlyCalendarController = require('../../controllers/monthlyCalendarController');
const TodoSchema = require('../../models/todoSchema');

describe('monthlyCalendarController', () => {
    test("It should fetch todos for the given month and year", async () => {
    
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
