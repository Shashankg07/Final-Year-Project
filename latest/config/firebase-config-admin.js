const admin = require("firebase-admin");
const serviceAccount = require("../secrets/food-donation-1ec8c-firebase-adminsdk-u27d0-9ebcbed23f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://food-donation-1ec8c-default-rtdb.firebaseio.com/"
});

module.exports = admin;

