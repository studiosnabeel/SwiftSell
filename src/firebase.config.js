// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJlGpSTqb4GNoESLcmb0ldbr2w18UcHKQ",
  authDomain: "swiftsellapp.firebaseapp.com",
  projectId: "swiftsellapp",
  storageBucket: "swiftsellapp.appspot.com",
  messagingSenderId: "1042698428775",
  appId: "1:1042698428775:web:536fa01de788be0ac4cfc2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);