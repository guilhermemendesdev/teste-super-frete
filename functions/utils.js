const admin = require("firebase-admin");

// eslint-disable-next-line require-jsdoc
async function createRecord(name) {
  const recordRef = await admin.firestore().collection("records").add({name});
  return {id: recordRef.id, name};
}

module.exports = {createRecord};
