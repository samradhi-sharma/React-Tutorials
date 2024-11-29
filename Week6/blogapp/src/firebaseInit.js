// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWnbDmh84m6jV_Ne2xPTNiXEWutphqGIw",
  authDomain: "blogging-app-98c3c.firebaseapp.com",
  projectId: "blogging-app-98c3c",
//   storageBucket: "blogging-app-98c3c.firebasestorage.app",
storageBucket: "blogging-app-98c3c.appspot.com",
  
messagingSenderId: "289728255359",
  appId: "1:289728255359:web:5453081677bad1d718364a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);