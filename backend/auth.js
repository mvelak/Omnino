import { auth } from "./Firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    fetchSignInMethodsForEmail,
    getAuth
} from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword = signInWithEmailAndPassword()
    .then(UserCredential => {
        const user = UserCredential.user
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message);
    })
