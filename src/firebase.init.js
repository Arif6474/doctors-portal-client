// Import the functions you need from the SDKs you need
import {  initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2vQpfhuO_fbc0jGsaljR2K06xUO0El0g",
  authDomain: "doctors-portal-808f1.firebaseapp.com",
  projectId: "doctors-portal-808f1",
  storageBucket: "doctors-portal-808f1.appspot.com",
  messagingSenderId: "575565970099",
  appId: "1:575565970099:web:d0c831d2f9bedb7cb2cec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth