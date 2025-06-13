import React, { use } from 'react';
import { AuthContext } from '../../Context/Context';
import { toast } from 'react-toastify';
import {  useNavigate } from 'react-router';

const SocailLogin = ({from}) => {
    const {googleSignIn}= use(AuthContext);
 
    const navigate= useNavigate();
    
    const handleGoogleLogin= ()=>{
        googleSignIn()
         .then((result) => {
            console.log(result.user);
            toast.success("YOur Account LogIn successfully !");
             navigate(from || '/')
          })
          .catch((error) => {
            const errorCode = error.code;
        
            console.log(errorCode);
             toast.error(error.code);
          })

    }
    return (
          <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">Or login with</p>
                    <button
                        onClick={handleGoogleLogin}
                        className="mt-2 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200"
                    >
                        Google
                    </button>
                </div>
    );
};

export default SocailLogin;