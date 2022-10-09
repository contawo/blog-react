// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBTh7kp25pw1PNfx3wjKBdJmkVWVQE4iRY",
  authDomain: "blog-react-1baf1.firebaseapp.com",
  projectId: "blog-react-1baf1",
  storageBucket: "blog-react-1baf1.appspot.com",
  messagingSenderId: "1064659605452",
  appId: "1:1064659605452:web:3383840605a2006f7aaf69",
  measurementId: "G-6XLKBX682C"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);