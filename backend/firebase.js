// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your Firebase configuration
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
export const auth = getAuth(app);
const db = getFirestore(app);

export const signUp = async (email, password, name) => {
    try {
        // Create user with email and password
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        // Add user data to Firestore
        await setDoc(doc(db, "users", userCred.user.uid), {
            name: name,
            email: email,
            plan: "basic",
        });
        return true;
    } catch (error) {
        console.error("Error creating user: ", error);
        return false;
    }
};

export const logIn = async (email, password) => {
    try {
        // Sign in user with email and password
        await signInWithEmailAndPassword(getAuth(), email, password);
        return true;
    } catch (error) {
        console.error("Error logging in user : ", error);
        return false;
    }
}