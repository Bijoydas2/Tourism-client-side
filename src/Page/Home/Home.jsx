import React, { Suspense } from 'react';
import HeroBanner from '../Shared/HeroBanner';
import FeaturedPackages from './featuredPackages';

const Home = () => {
    const feauturedPackagesPromise= fetch('http://localhost:3000/featured-packages').then(res=> res.json());
    return (
        <div>
            <HeroBanner></HeroBanner>
           <Suspense fallback="loading">
             <FeaturedPackages feauturedPackagesPromise={feauturedPackagesPromise}></FeaturedPackages>
           </Suspense>
        </div>
    );
};

export default Home;