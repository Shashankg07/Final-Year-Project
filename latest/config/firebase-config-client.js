const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyDU_-bA7uiLTgFpEg3Gq5bu-4Jqq_WRYsU",
  authDomain: "food-donation-1ec8c.firebaseapp.com",
  projectId: "food-donation-1ec8c",
  storageBucket: "food-donation-1ec8c.appspot.com",
  messagingSenderId: "1060204688496",
  appId: "1:1060204688496:web:6f2b2cc154e5eb24f070b5"
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;

