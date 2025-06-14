import React from 'react';
import { FaEye, FaClock, FaCalendarAlt, FaDollarSign, FaUser } from 'react-icons/fa';
import { Link } from 'react-router';

const iconStyle = {
  fontSize: '1rem',
  verticalAlign: 'middle',
  marginRight: '0.5rem',
};

const FeaturedCard = ({ package: pkg }) => {
  return (
    <div className="w-11/12 mx-auto rounded-2xl p-4 shadow-md hover:shadow-xl transition duration-300 bg-white mt-6">
      <img
        src={pkg.image}
        alt={pkg.tour_name}
        className="w-full h-48 object-cover rounded-xl"
      />

      <h3 className="text-xl font-bold mt-3 text-blue-700 flex items-center">
        <FaEye style={{ ...iconStyle, color: '#2563EB' }} /> {pkg.tour_name}
      </h3>

      <div className="flex items-center gap-3 mt-3">
        <img
          src={pkg.guide_photo}
          alt={pkg.guide_name}
          className="w-9 h-9 rounded-full border"
        />
        <span className="text-green-600 font-medium flex items-center gap-1">
          <FaUser style={{ fontSize: '0.9rem', color: '#16A34A' }} /> {pkg.guide_name}
        </span>
      </div>

      <p className="mt-3 text-sm text-purple-600 flex items-center">
        <FaClock style={{ ...iconStyle, color: '#7C3AED' }} /> 
        <strong>Duration:</strong>&nbsp;{pkg.duration}
      </p>
      <p className="text-sm text-indigo-600 flex items-center">
        <FaCalendarAlt style={{ ...iconStyle, color: '#4F46E5' }} /> 
        <strong>Departure:</strong>&nbsp;{pkg.departure_date}
      </p>
      <p className="text-sm text-red-600 flex items-center">
        <FaDollarSign style={{ ...iconStyle, color: '#DC2626' }} /> 
        <strong>Price:</strong>&nbsp;${pkg.price}
      </p>

      <Link
        to={`/packages/${pkg._id}`}
        className="btn bg-blue-600 text-white hover:bg-white hover:text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg transition duration-300 w-full flex items-center justify-center gap-2 mt-3"
      >
        <FaEye /> View Details
      </Link>
    </div>
  );
};

export default FeaturedCard;
