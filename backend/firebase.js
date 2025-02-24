// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgpsM42thYn1h6Fwn8M1F1m9O4E4q8B1g",
    authDomain: "studyowl-7904e.firebaseapp.com",
    projectId: "studyowl-7904e",
    storageBucket: "studyowl-7904e.firebasestorage.app",
    messagingSenderId: "942334663223",
    appId: "1:942334663223:web:1dfa0ac42bbaeebb5f3db2",
    measurementId: "G-VS7YRCVHKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAnalytics();

const analytics = getAnalytics(app);