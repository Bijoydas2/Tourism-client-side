import React from 'react';
import { Link } from 'react-router';
import SocailLogin from '../Shared/SocailLogin';
import Lottie from 'lottie-react';
import loginLottie from '../../assets/Lotties/login.json';

const Login = () => {
    return (
           <div className="min-h-screen flex flex-col md:flex-row items-center justify-center  bg-gradient-to-r from-green-100 to-blue-100 p-4">
             <div className='max-w-xs w-full'>
                <Lottie animationData={loginLottie} loop={true} />;
             </div>
            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Login</h2>

                <form >
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>

              <SocailLogin/>

                <div className="mt-6 text-center">
                    <p className="text-sm">
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