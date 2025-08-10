import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import SocailLogin from '../Shared/SocailLogin';
import Lottie from 'lottie-react';
import loginLottie from '../../assets/Lotties/login.json';
import { AuthContext } from '../../Context/Context';
import { toast } from 'react-toastify';

const Login = () => {
    const {signIn}= use(AuthContext)
    const location = useLocation();
    const navigate= useNavigate();
    const from=location.state || "/";

   const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email =form.email.value;
    const password = form.password.value;
    console.log(email,password);

    // sign in user

    signIn(email,password)
       .then((result) => {
        console.log(result.user);
        toast.success("Your Account LogIn successfully!");
        
        form.reset();
        navigate(from)
         
      })
      .catch((error) => {
        const errorCode = error.code;
    
        console.log(errorCode);
         toast.error(`Login failed: ${error.code}`);
      })

   }

    return (
           <div className="min-h-screen flex flex-col md:flex-row items-center justify-center   p-4">
             <title>Login</title>
             <div className='max-w-xs w-full'>
                <Lottie animationData={loginLottie} loop={true} />;
             </div>
            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
                <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">Login</h2>

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Enter Your Email'
                            required
                            className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm text-gray-700 font-medium mb-1" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Correct Password'
                            required
                            className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>

              <SocailLogin from={from}></SocailLogin>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-blue-600 hover:underline">
                            Register here
                        </Link>
                    </p>
                </div>

                
            </div>
        </div>
    );
};

export default Login;