import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"


const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)


    const newRegister = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log(currentUser);
        })
        return ()=>{
           return unSubscribe;
        }
    },[])

    const authInfo = {
       user,
       loading,
       newRegister,
       signIn
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;