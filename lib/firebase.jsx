// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCABTJ2OLO_aqyYVjSh3KqINn0PWjh6C6c",
  authDomain: "chadmin-blog.firebaseapp.com",
  projectId: "chadmin-blog",
  storageBucket: "chadmin-blog.appspot.com",
  messagingSenderId: "803594338863",
  appId: "1:803594338863:web:85a546c5d8f6a92bbdbcda",
  measurementId: "G-27LPG6ZSZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app);   
export const auth = getAuth(app);
