import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
// Create a context

export const AuthContext = createContext()



const AuthProvider = ({children}) => {

    const [user,setUser]= useState(null)
   

    
// create an account with email and password

const createUserWithEmail = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

// login with email and 

const loginUserWithEmailAndPass = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

// registration with email and password

// signinWithpopup

const signInWithProvider = (provider)=>{
    return signInWithPopup(auth,provider)
}






// state observer
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        


            setUser(currentUser);
        
      
    });

    return () => {
        unsubscribe();
        
    }

}, [])


console.log(user)


    const authInfo = {createUserWithEmail,loginUserWithEmailAndPass,signInWithProvider,user}

    return (
        <AuthContext.Provider value= {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;