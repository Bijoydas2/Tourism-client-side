import React from 'react';
import { Link } from 'react-router';

const FeaturedCard = ({ package: pkg }) => {
  return (
    <div className="w-11/12 mx-auto rounded-2xl p-4 shadow-md hover:shadow-xl transition duration-300 bg-white mt-6">
      <img
        src={pkg.image}
        alt={pkg.tour_name}
        className="w-full h-48 object-cover rounded-xl"
      />

      <h3 className="text-xl font-bold mt-3 text-gray-800">{pkg.tour_name}</h3>

      <div className="flex items-center gap-3 mt-3">
        <img
          src={pkg.guide_photo}
          alt={pkg.guide_name}
          className="w-9 h-9 rounded-full border"
        />
        <span className="text-gray-700 font-medium">{pkg.guide_name}</span>
      </div>

      <p className="mt-3 text-sm text-gray-600">
        <strong>Duration:</strong> {pkg.duration}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Departure:</strong> {pkg.departure_date}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Price:</strong> ৳{pkg.price}
      </p>

      <Link
        to={`/packages/${pkg._id}`}
        className="inline-block mt-4 w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default FeaturedCard;
