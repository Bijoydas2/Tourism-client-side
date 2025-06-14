import React, { use } from 'react';
import FeaturedCard from '../Shared/FeaturedCard';
import { Link } from 'react-router';

const FeaturedPackages = ({ feauturedPackagesPromise }) => {
  const packages = use(feauturedPackagesPromise);

  return (
    <section className=" pt-8 w-11/12 mx-auto">
      <h2 className="text-4xl font-semibold mb-8 text-center text-blue-700">Featured Packages</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map(pkg => (
          <FeaturedCard key={pkg._id} package={pkg} />
        ))}
      </div>
        <div className="flex justify-center mt-10">
        <Link to="/Packages">
          <button className="btn bg-blue-600 text-white hover:bg-white hover:text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg transition duration-300">
            Show All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedPackages;