import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';

const auth = getAuth(app)

// create an account with email and password

const createUserWithEmail = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

// login with email and 

// registration with email and password

// signinWithpopup

const signInWithProvider = (provider)=>{
    return signInWithPopup(auth,provider)
}




// Create a context

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const authInfo = {createUserWithEmail,signInWithProvider}

    return (
        <AuthContext.Provider value= {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;