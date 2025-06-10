import React, { useState } from 'react';
import { AuthContext } from './Context';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {
  const [loading,setLoading] =useState(true)

  // create user
 const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }
//  login User

 const signIn = (email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
 }


   const authInfo = {
       loading,
       createUser,
       signIn
   }



    return (
        <AuthContext value={authInfo}>
          {children}
        </AuthContext>
    );
};

export default AuthProvider;