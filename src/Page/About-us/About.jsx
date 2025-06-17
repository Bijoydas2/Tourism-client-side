import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import img from '../../assets/banner2.jpg'

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <title>About</title>
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={img}
            alt="About our tours"
            className="w-full h-96 object-cover rounded-xl shadow-md"
          />
        </div>

        <div className="text-gray-700 space-y-4">
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-semibold text-blue-600">ExploreVista</span> – your trusted platform for discovering unforgettable travel experiences. Whether you're a solo adventurer, family vacationer, or group explorer, we connect you with passionate local guides and exciting tour packages tailored to your interests.
          </p>
          <p className="text-lg leading-relaxed">
            From majestic mountains to serene beaches, cultural landmarks to hidden gems – we help you explore it all. Our mission is to empower local tour guides while providing travelers with easy booking, secure communication, and reliable services.
          </p>
          <p className="text-lg leading-relaxed">
            All our guides are verified and experienced. You can view package details, check reviews, and even customize your tour before booking. We believe in transparency, safety, and delivering real experiences.
          </p>
          <p className="text-lg leading-relaxed">
            Join the thousands of travelers who trust <span className="font-semibold text-blue-600">ExploreVista</span> to make their journeys seamless, joyful, and memorable.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-xl text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Why Choose Us?</h2>
        <ul className="text-lg text-gray-600 space-y-3 text-left max-w-md mx-auto">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Verified & Trusted Tour Guides
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Easy Booking System with Secure Payments
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Diverse Destinations & Customizable Packages
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> 24/7 Support for Any Travel Assistance
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
