const request = require('supertest');

const addAttachmentsController = require('../../controllers/addAttachmentsController');
const JobCreationSchema = require('../../models/jobCreationModel');

//  TEST CASE - 1
// Following unit test case tests for attachement files or images to a particular Job
// Here we are mocking addAttachmentsController by passing jobId '123' and document 'additional_document.pdf' attach 
// so that it will return the json of updated Job and we are verifying it using Assertions

describe('addAttachmentsController', () => {
    test("It should add 'additional_document.pdf' attachment to an existing Software engineering job", async () => {
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



// TEST CASE - 2
// Following unit test case tests for attachement files or images to a particular Job
// Here we are mocking addAttachmentsController by passing jobId '567' and document 'degree_certificate.pdf' attach 
// so that it will return the json of updated Job and we are verifying it using Assertions

describe('addAttachmentsController', () => {
    test("It should add 'degree_certificate.pdf' attachment to an existing Data Engineer job", async () => {
        const mockFindOneAndUpdate = jest.fn().mockResolvedValueOnce({
            _id: '567',
            job_title: 'Data Engineer',
            attachments: ['resume.pdf', 'cover_letter.docx', 'degree_certificate.pdf'],
        });

        JobCreationSchema.findOneAndUpdate = mockFindOneAndUpdate;
        const requestBody = { id: '567', attachment: 'degree_certificate.pdf' };
        const updatedJob = await addAttachmentsController(requestBody);

        // Assertions
        expect(updatedJob).toEqual({
            _id: '567',
            job_title: 'Data Engineer',
            attachments: ['resume.pdf', 'cover_letter.docx', 'degree_certificate.pdf'],
        });
        expect(mockFindOneAndUpdate).toHaveBeenCalledWith(
            { _id: '567' },
            { $push: { attachments: 'degree_certificate.pdf' } },
            { new: true }
        );
    });
});
