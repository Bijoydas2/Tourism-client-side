import React, { use } from 'react';
import FeaturedCard from '../Shared/FeaturedCard';

const FeaturedPackages = ({ feauturedPackagesPromise }) => {
  const packages = use(feauturedPackagesPromise);

  return (
    <section className=" pt-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-semibold mb-8 text-center text-blue-700">Featured Packages</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map(pkg => (
          <FeaturedCard key={pkg._id} package={pkg} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPackages;