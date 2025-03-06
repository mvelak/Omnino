import React, { createContext, useContext, useState, useEffect } from 'react';
import { onIdTokenChanged } from 'firebase/auth';
import { auth, db } from '@/backend/firebase'
import { doc, getDoc } from "firebase/firestore";

const Context = createContext();

export const StateContext = ({ children }) => {

    const [user, setUser] = useState(undefined);
    const [userInfo, setUserInfo] = useState(undefined);
    const [blueskyIdentifier, setBlueskyIdentifier] = useState(null);
    const [blueskyPassword, setBlueskyPassword] = useState(null);

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
                setUser(null);
                setUserInfo(null);
                setBlueskyIdentifier(null);
                setBlueskyPassword(null);
            }
        });
        return () => unsubscribe();
    }, []);

    return(
        <Context.Provider value={{user, setUser, userInfo, setUserInfo, blueskyIdentifier, setBlueskyIdentifier, blueskyPassword, setBlueskyPassword }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);