import React, { use } from 'react';
import FeaturedCard from '../Shared/FeaturedCard';

const FeaturedPackages = ({feauturedPackagesPromise}) => {
    const packages= use(feauturedPackagesPromise);
    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {
       packages.map(pkg => (
      <FeaturedCard key={pkg._id} package={pkg} />
     ))
    }
</div>
        </div>
    );
};

export default FeaturedPackages;