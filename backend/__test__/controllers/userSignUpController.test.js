const request = require('supertest')

const userCreationSchema = require('../../models/user')

describe('userSignUpController', () => {
    test('It should create a new User and return saved User Detail', async () => {
        const mockSave = jest.fn().mockReturnValueOnce(Promise.resolve({
            name: 'Swen 732',
            email: 'group5@gmail.com',
            password: 'Group5Password',
            _id: expect.anything()
        }));

        userCreationSchema.prototype.save = mockSave;
        const mockUserSignUpController = jest.fn().mockImplementation((data) => {
            const mockSave = userCreationSchema.prototype.save;
            return mockSave(data);
        })

        jest.mock('../../controllers/userSignUpController', () => mockUserSignUpController);

            const testData = {
                name: 'Swen 732',
                email: 'group5@gmail.com',
                password: '*****',
                _id: expect.anything()
            };

            const savedUser = await mockUserSignUpController(testData);

            //Assertions
            expect(savedUser.name).toBe('Swen 732');
            expect(savedUser.email).toBe('group5@gmail.com');
            expect(savedUser.password).toBe('*****');

            expect(mockUserSignUpController).toHaveBeenCalledWith(testData);
    });
});