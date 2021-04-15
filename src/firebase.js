import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl0C9NCM0hPblrkTRg7HaLEP5ZzVoE-y4",
  authDomain: "clone-a8c4e.firebaseapp.com",
  projectId: "clone-a8c4e",
  storageBucket: "clone-a8c4e.appspot.com",
  messagingSenderId: "804438280712",
  appId: "1:804438280712:web:66b6c14cfc4acd10059fbd",
  measurementId: "G-5H6RM9SZ1K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };