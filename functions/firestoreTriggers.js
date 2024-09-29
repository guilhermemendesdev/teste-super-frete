const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports.setIncrementId = functions.firestore
    .document("records/{recordId}")
    .onCreate(async (snap) => {
      const newValue = snap.data();
      const incrementId = await getNextIncrementId();

      // eslint-disable-next-line max-len
      await snap.ref.set({...newValue, increment_id: incrementId}, {merge: true});
    });

// eslint-disable-next-line require-jsdoc
async function getNextIncrementId() {
  // eslint-disable-next-line max-len
  const snapshot = await admin.firestore().collection("records").orderBy("increment_id", "desc").limit(1).get();
  return snapshot.empty ? 1 : snapshot.docs[0].data().increment_id + 1;
}
