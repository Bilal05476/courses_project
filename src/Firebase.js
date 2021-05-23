import firebase from "firebase/app";
import "firebase/auth";
//ecommstore
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseApp = firebase.initializeApp({
  apiKey:`${process.env.API_KEY}`,
  authDomain: `${process.env.AUTH_DOMAIN}`,
  projectId: "ecommstore-55",
  storageBucket: "ecommstore-55.appspot.com",
  messagingSenderId: "934453280015",
  appId: `${process.env.APP_ID}`,
  measurementId: "G-D6XK2LX3BW",
});

//for authentication connect witth google, (login, sign up)
const auth = firebaseApp.auth();
// const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
