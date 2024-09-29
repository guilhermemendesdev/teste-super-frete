const { createNewRecord } = require('../index'); // Ajuste o caminho conforme necessário

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
        id: expect.any(String), // Espera um ID gerado automaticamente
        name: 'Test',
        increment_id: expect.any(Number) // Verifica se o increment_id é um número
    });
});
