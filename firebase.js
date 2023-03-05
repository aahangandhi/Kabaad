import * as firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDNaNDLRykTBqrFD_Vnv9u9Zq5deeAsJ74",
  authDomain: "garning-dce74.firebaseapp.com",
  databaseURL: "https://garning-dce74-default-rtdb.firebaseio.com",
  projectId: "garning-dce74",
  storageBucket: "garning-dce74.appspot.com",
  messagingSenderId: "1005191183165",
  appId: "1:1005191183165:web:b2a16103a6711932ea6354"
});

var db = firebaseApp.firestore();
var auth = firebase.auth()

export { db, auth };