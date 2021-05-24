import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseApp = firebase.initializeApp({
  apiKey: "hello",
  authDomain: "batechnos.firebaseapp.com",
  databaseURL: "https://batechnos.firebaseio.com",
  projectId: "batechnos",
  storageBucket: "hello",
  messagingSenderId: "322110694598",
  appId: "hello",
  measurementId: "G-XZ07ZGEJ18",
});

//for authentication connect witth google, (login, sign up)
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth, db };
