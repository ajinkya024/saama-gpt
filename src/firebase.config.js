// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
// const firebaseApp = true || initializeApp(firebaseConfig);
const firebaseApp = true;
// const auth = true || getAuth(firebaseApp);
const auth = true;

// const goggleAuthProvider = true || new GoogleAuthProvider();
const goggleAuthProvider = true;


// Initialize Cloud Firestore and get a reference to the service
// const db = true || getFirestore(firebaseApp);
const db = true;


export { auth, goggleAuthProvider, db };
