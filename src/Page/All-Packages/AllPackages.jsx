import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; 
import { FaEye, FaClock, FaCalendarAlt, FaDollarSign, FaUser } from 'react-icons/fa';
import Loading from '../Shared/Loading';

const iconStyle = {
  fontSize: '1rem',
  verticalAlign: 'middle',
  marginRight: '0.5rem',
};

const AllPackages = () => {
  const [searchText, setSearchText] = useState('');
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState('');

  const fetchPackages = (query = '') => {
    setIsLoading(true);
    fetch(`https://package-booking-server.vercel.app/packages?search=${query}`)
      .then((res) => res.json())
      .then((data) => {
        let sortedData = [...data];

        if (sortOption === 'priceLowHigh') sortedData.sort((a, b) => a.price - b.price);
        else if (sortOption === 'priceHighLow') sortedData.sort((a, b) => b.price - a.price);
        else if (sortOption === 'durationShortLong') sortedData.sort((a, b) => a.duration - b.duration);
        else if (sortOption === 'durationLongShort') sortedData.sort((a, b) => b.duration - a.duration);

        setPackages(sortedData);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPackages();
  }, [sortOption]);

  const handleSearch = () => {
    fetchPackages(searchText);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <title>All Tour Packages</title>
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-6">
        All Tour Packages
      </h2>

      {/* Search + Sort */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 overflow-visible">
        <div className="flex w-full md:w-1/2 gap-2">
          <input
            type="text"
            placeholder="Search by name or destination"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-bordered w-full"
          />
          <button onClick={handleSearch} className="btn btn-primary">
            Search
          </button>
        </div>

        <div className="relative w-full md:w-60 max-w-full min-w-0">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="select select-bordered w-full"
          >
            <option value="">Sort by</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="durationShortLong">Duration: Short to Long</option>
            <option value="durationLongShort">Duration: Long to Short</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg._id}
              className="rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 flex flex-col h-full"
            >
             
              <img
                src={pkg.image}
                alt={pkg.tour_name}
                className="w-full h-48 object-cover rounded"
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
                  <FaUser style={{ fontSize: '0.9rem', color: '#16A34A' }} />
                  {pkg.guide_name}
                </span>
              </div>

              <p className="mt-2 flex items-center text-purple-600">
                <FaClock style={{ ...iconStyle, color: '#7C3AED' }} />
                <strong> Duration: </strong> {pkg.duration}
              </p>
              <p className="flex items-center text-indigo-600">
                <FaCalendarAlt style={{ ...iconStyle, color: '#4F46E5' }} />
                <strong> Departure: </strong> {pkg.departure_date}
              </p>
              <p className="flex items-center text-red-600">
                <FaDollarSign style={{ ...iconStyle, color: '#DC2626' }} />
                <strong> Price: </strong> ${pkg.price}
              </p>

              {/* FIX: Button stays at bottom */}
              <div className="mt-auto">
                <Link
                  to={`/packages/${pkg._id}`}
                  className="btn bg-blue-600 text-white hover:bg-white hover:text-blue-600 border-2 border-blue-600 w-full flex items-center justify-center gap-2"
                >
                  <FaEye /> View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPackages;
