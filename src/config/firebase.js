// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM9dGRP671R2_9QPh-WjGWpjwUmloSsUs",
  authDomain: "contacts-9e9b8.firebaseapp.com",
  projectId: "contacts-9e9b8",
  storageBucket: "contacts-9e9b8.appspot.com",
  messagingSenderId: "93755523371",
  appId: "1:93755523371:web:3516ced6b5a448023fc56e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
