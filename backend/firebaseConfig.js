// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx9NzHK58rBOYvA2az9VyD8pVupPqkys4",
  authDomain: "e-commerce-9f602.firebaseapp.com",
  projectId: "e-commerce-9f602",
  storageBucket: "e-commerce-9f602.appspot.com",
  messagingSenderId: "106247370366",
  appId: "1:106247370366:web:062b5a340e48e5368f4a2f",
  measurementId: "G-GV5M8XQEM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);