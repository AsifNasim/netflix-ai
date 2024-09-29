// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7p8b2Z4Qzhf3mCaPOUkR83Sz4zrs0YPg",
  authDomain: "zeeflix-ai.firebaseapp.com",
  projectId: "zeeflix-ai",
  storageBucket: "zeeflix-ai.appspot.com",
  messagingSenderId: "44423812587",
  appId: "1:44423812587:web:7d120706b69a0ab6c275ae",
  measurementId: "G-RSCV5Y6VJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);