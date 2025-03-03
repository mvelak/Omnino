import React, { createContext, useContext, useState, useEffect } from 'react';
import { onIdTokenChanged } from 'firebase/auth';
import { auth } from '@/backend/firebase'
import { getFirestore, doc, getDoc } from "firebase/firestore";

const Context = createContext();

export const StateContext = ({ children }) => {

    // Variables to Carry Across Multiple Pages
    const [user, setUser] = useState(undefined)
    const [userInfo, setUserInfo] = useState(undefined)

    const db = getFirestore();

    // AUTHENTICATION REMEMBER ME USE EFFECT
    useEffect(() => {
        const unsubscribe = onIdTokenChanged(auth,  (user) => {
            if (user) {
                // Set user
                console.log('Token or user state changed:', user);
                user.getIdToken().then((token) => {
                    console.log('New ID token:', token);
                    setUser(user);
                });
                // Set user info
                getDoc(doc(db, 'users', user.uid)).then((snapshot) => {
                    console.log('User data from Firestore:', snapshot.data());
                    setUserInfo(snapshot.data());
                });
            }
            else {
                // There is no user signed in
                setUser(null);
                setUserInfo(null);
            }
        });
        return () => unsubscribe();
    }, []);

    return(
        <Context.Provider value={{user, setUser, userInfo, setUserInfo}}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);