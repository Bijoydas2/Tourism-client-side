import React from 'react';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800 p-6">
      <FaExclamationTriangle className="text-red-500 text-7xl mb-4 animate-bounce" />
      <h1 className="text-5xl font-bold mb-2">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-md">
        The page you're looking for doesn't exist or might have been moved.
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300 shadow-lg"
      >
        <FaHome />
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
