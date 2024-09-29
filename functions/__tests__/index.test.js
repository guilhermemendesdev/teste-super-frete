const { createNewRecord } = require('../index');

test('createNewRecord should return 201 and created record', async () => {
    const req = {
        method: 'POST',
        body: {
            name: 'Test'
        }
    };
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    };

    await createNewRecord(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
        id: expect.any(String), // Expect an automatically generated ID
        name: 'Test',
        increment_id: expect.any(Number) // Checks if the increment_id is a number
    });
});
