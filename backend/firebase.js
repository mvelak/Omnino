// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBv16IibB-ugX4dJDDl7iQ-1LcvQYwF1Vg",
    authDomain: "omnino-2912a.firebaseapp.com",
    projectId: "omnino-2912a",
    storageBucket: "omnino-2912a.firebasestorage.app",
    messagingSenderId: "239790992261",
    appId: "1:239790992261:web:cc01eadfcae52cfc0fb2ec",
    measurementId: "G-NJHT6DTYGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);