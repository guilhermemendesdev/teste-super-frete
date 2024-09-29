const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp();

async function getNextIncrementId() {
    const snapshot = await admin.firestore().collection('records').orderBy('increment_id').limit(1).get();
    if (snapshot.empty) {
        return 1; // Starts at 1 if there are no records
    }
    const lastRecord = snapshot.docs[0].data();
    return lastRecord.increment_id + 1; // Increment the ID
}

exports.createNewRecord = functions.https.onRequest(async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const { name } = req.body;
    if (!name) {
        return res.status(400).send('Name is required');
    }

    try {
        const incrementId = await getNextIncrementId();
        const newRecord = { name, increment_id: incrementId };
        const docRef = await admin.firestore().collection('records').add(newRecord);

        // Reply with the created document ID and data
        return res.status(201).json({ id: docRef.id, ...newRecord });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});
