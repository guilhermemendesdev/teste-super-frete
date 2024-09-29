const firestore = jest.fn(() => ({
    collection: jest.fn(() => ({
        add: jest.fn().mockResolvedValue({ id: 'new-id' }),
        orderBy: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        get: jest.fn().mockResolvedValue({ empty: true, docs: [] }),
    })),
}));

const admin = {
    initializeApp: jest.fn(),
    firestore: jest.fn(firestore),
};

module.exports = admin;
