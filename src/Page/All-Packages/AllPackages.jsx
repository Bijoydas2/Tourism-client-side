import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import {
  FaEye,
  FaClock,
  FaCalendarAlt,
  FaDollarSign,
  FaUser,
} from 'react-icons/fa';

const iconStyle = {
  fontSize: '1rem',
  verticalAlign: 'middle',
  marginRight: '0.5rem',
};

const AllPackages = () => {
  const [searchText, setSearchText] = useState('');
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // loader state

  const fetchPackages = (query = '') => {
    setIsLoading(true);
    fetch(`http://localhost:3000/packages?search=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    fetchPackages(value);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-6">
        All Tour Packages
      </h2>

      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Search by name or destination"
          value={searchText}
          onChange={handleSearch}
          className="input input-bordered w-full md:w-1/2"
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <span className="loading loading-spinner text-blue-600 w-16 h-16"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg._id}
              className="rounded-lg shadow-lg p-4 border border-blue-100 hover:shadow-xl transition duration-300"
            >
              <img
                src={pkg.image}
                alt={pkg.tour_name}
                className="w-full h-40 object-cover rounded"
              />

              <h3 className="text-xl font-semibold mt-3 flex items-center text-blue-700">
                <FaEye style={{ ...iconStyle, color: '#2563EB' }} /> {pkg.tour_name}
              </h3>

              <div className="flex items-center gap-2 mt-2">
                <img
                  src={pkg.guide_photo}
                  alt={pkg.guide_name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-green-600 flex items-center gap-1">
                  <FaUser style={{ fontSize: '0.9rem', color: '#16A34A' }} />{' '}
                  {pkg.guide_name}
                </span>
              </div>

              <p className="mt-2 flex items-center text-purple-600">
                <FaClock style={{ ...iconStyle, color: '#7C3AED' }} />{' '}
                <strong>Duration:</strong> {pkg.duration}
              </p>
              <p className="flex items-center text-indigo-600">
                <FaCalendarAlt style={{ ...iconStyle, color: '#4F46E5' }} />{' '}
                <strong>Departure:</strong> {pkg.departure_date}
              </p>
              <p className="flex items-center text-red-600">
                <FaDollarSign style={{ ...iconStyle, color: '#DC2626' }} />{' '}
                <strong>Price:</strong> ${pkg.price}
              </p>

              <Link
                to={`/packages/${pkg._id}`}
                className="btn bg-blue-600 text-white hover:bg-white hover:text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg transition duration-300 w-full flex items-center justify-center gap-2 mt-3"
              >
                <FaEye /> View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPackages;
