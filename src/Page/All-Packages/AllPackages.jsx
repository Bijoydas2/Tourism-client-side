import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const AllPackages = () => {
  const [searchText, setSearchText] = useState('');
  const [packages, setPackages] = useState([]);

  const fetchPackages = (query = '') => {
    fetch(`http://localhost:3000/packages?search=${query}`)
      .then(res => res.json())
      .then(data => setPackages(data));
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
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-6">All Tour Packages</h2>

      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Search by name or destination"
          value={searchText}
          onChange={handleSearch}
          className="input input-bordered w-full md:w-1/2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map(pkg => (
          <div key={pkg._id} className=" rounded-lg shadow-lg p-4">
            <img src={pkg.image} alt={pkg.tour_name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-3">{pkg.tour_name}</h3>
            <div className="flex items-center gap-2 mt-2">
              <img src={pkg.guide_photo} alt={pkg.guide_name} className="w-8 h-8 rounded-full" />
              <span>{pkg.guide_name}</span>
            </div>
            <p className="mt-2"><strong>Duration:</strong> {pkg.duration}</p>
            <p><strong>Departure:</strong> {pkg.departure_date}</p>
            <p><strong>Price:</strong> ${pkg.price}</p>
             <Link
              to={`/packages/${pkg._id}`}
              className="mt-4 block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPackages;
