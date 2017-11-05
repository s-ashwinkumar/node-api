'use strict';

var admin = require("firebase-admin");

var serviceAccount = require("../../adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lucky-or-smart.firebaseio.com"
});

// const admin = require('firebase-admin');
// const functions = require('firebase-functions');

// admin.initializeApp(functions.config().firebase);

// var db = admin.firestore();

module.exports.db = admin.firestore();