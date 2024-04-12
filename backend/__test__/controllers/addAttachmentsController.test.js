const request = require('supertest');

const addAttachmentsController = require('../../controllers/addAttachmentsController');
const JobCreationSchema = require('../../models/jobCreationModel');

describe('addAttachmentsController', () => {
    test("It should add attachment to an existing job", async () => {
        const mockFindOneAndUpdate = jest.fn().mockResolvedValueOnce({
            _id: '123',
            job_title: 'Software Engineer',
            attachments: ['resume.pdf', 'cover_letter.docx', 'additional_document.pdf'],
        });

        JobCreationSchema.findOneAndUpdate = mockFindOneAndUpdate;
        const requestBody = { id: '123', attachment: 'additional_document.pdf' };
        const updatedJob = await addAttachmentsController(requestBody);

        // Assertions
        expect(updatedJob).toEqual({
            _id: '123',
            job_title: 'Software Engineer',
            attachments: ['resume.pdf', 'cover_letter.docx', 'additional_document.pdf'],
        });
        expect(mockFindOneAndUpdate).toHaveBeenCalledWith(
            { _id: '123' },
            { $push: { attachments: 'additional_document.pdf' } },
            { new: true }
        );
    });
});
