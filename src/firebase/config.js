import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAAQuGk1u4fDrz8pB6SfdN5tsSoSQBr8GI",
  authDomain: "fir-vue-app-c8d17.firebaseapp.com",
  projectId: "fir-vue-app-c8d17",
  storageBucket: "fir-vue-app-c8d17.appspot.com",
  messagingSenderId: "647921303272",
  appId: "1:647921303272:web:326152b08ca7584a04135d",
};
firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectFirebase = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirebase, timestamp, projectAuth };
