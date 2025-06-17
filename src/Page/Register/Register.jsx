import { Link, useLocation, useNavigate} from "react-router";
import SocailLogin from "../Shared/SocailLogin";
import Lottie from "lottie-react";
import registerLottie from "../../assets/Lotties/register.json";
import { use } from "react";
import { AuthContext } from "../../Context/Context";
import { toast } from "react-toastify";

const Register = () => {
   const {createUser,updateUserProfile}= use(AuthContext)
   const location =useLocation();
   const navigate = useNavigate();
   const from =location.state || '/';
  
const handleRegister = e => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const photo = form.photoURL.value;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  if (!name || !email || !password || !photo) {
    toast.error("All fields are required!");
    return;
  }

  if (!passwordRegex.test(password)) {
    toast.error("Password must be at least 6 characters long and include one uppercase and one lowercase letter.");
    return;
  }
//  create user
  createUser(email, password)
    .then(result => {
      const user = result.user;
       console.log(user);
       
      // update profile with name and photo
      updateUserProfile({
        displayName: name,
        photoURL: photo
      }).then(() => {
        toast.success("Your Account created successfully!");
        
        form.reset();
        navigate(from)
        
      }).catch(error => {
        toast.error(`Profile update failed: ${error.message}`);
      });
    })
    .catch(error => {
      toast.error(`Registration failed: ${error.message}`);
    });
};

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-4">
              <title>Register</title>
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
