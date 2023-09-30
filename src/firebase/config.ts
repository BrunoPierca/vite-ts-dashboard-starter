import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-OmHKYupYiSCJnUK_huzC1BmFzrNtC9I",
  authDomain: "powerstaffing-50997.firebaseapp.com",
  projectId: "powerstaffing-50997",
  storageBucket: "powerstaffing-50997.appspot.com",
  messagingSenderId: "773344017018",
  appId: "1:773344017018:web:5b66ee6a8347a7624e19c3",
  measurementId: "G-DZQWJNTT9X"
};

const FirebaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(FirebaseApp)

export {
  FirebaseApp,
  FirebaseAuth,
};
