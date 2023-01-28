import React, { createContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const [userEmail, setuserEmail] = useState('')

    const providerLogin = (provider) => {

        return signInWithPopup(auth, provider)
    }

    const logOut = () => {

        return signOut(auth);
    }

    const userCreate = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('user inside state changed', currentUser);
            setUser(currentUser)

        })

        return () => {
            unsubscribe()
        }
    }, [])


    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }


    const authInfo = {
        userCreate,
        user,
        userEmail,
        setuserEmail,
        setUser,
        providerLogin,
        logOut,
        signIn,
        updateUserProfile,
        auth
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;