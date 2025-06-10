import { Link } from "react-router";
import SocailLogin from "../Shared/SocailLogin";
import Lottie from "lottie-react";
import registerLottie from "../../assets/Lotties/register.json";
import { use } from "react";
import { AuthContext } from "../../Context/Context";

const Register = () => {
   const {createUser}= use(AuthContext)

  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photoURL.value;
    console.log(name,email,password,photo)
    // createUser
    createUser(email,password)
    .then((result) => {
    console.log(result.user)
     
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    console.log(errorCode)
  })

  }

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-4">
          
                <div className="max-w-xs w-full">
                    <Lottie animationData={registerLottie} loop={true} />
                </div>
           

           
            <div className="w-full md:w-1/2 bg-white shadow-xl rounded-xl p-8 max-w-lg mx-auto">
                <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-8">Create an Account</h2>
                
                <form onSubmit={handleRegister}>
                    
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Your Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Your Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                   
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <p className="text-xs text-gray-500 mt-1">Min 6 chars, 1 uppercase, 1 lowercase</p>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1" htmlFor="photoURL">Photo URL</label>
                        <input
                            type="text"
                            name="photoURL"
                            id="photoURL"
                            placeholder="Photo URL"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
                    >
                        Register
                    </button>
                </form>

                
                <SocailLogin />

              
                <div className="mt-6 text-center">
                    <p className="text-sm">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-600 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
