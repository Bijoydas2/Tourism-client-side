import React, { useState } from 'react';
import { AuthContext } from './Context';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {
  const [loading,setLoading] =useState(true)

 const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }


   const authInfo = {
       loading,
       createUser
   }



    return (
        <AuthContext value={authInfo}>
          {children}
        </AuthContext>
    );
};

export default AuthProvider;