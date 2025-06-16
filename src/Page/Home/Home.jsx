import React, { Suspense } from 'react';
import HeroBanner from '../Shared/HeroBanner';
import FeaturedPackages from './featuredPackages';
import Loading from '../Shared/Loading';

const Home = () => {
    const feauturedPackagesPromise= fetch('http://localhost:3000/featuredPackages').then(res=> res.json());
    return (
        <div>
            <HeroBanner></HeroBanner>
           <Suspense fallback={<Loading/>}>
             <FeaturedPackages feauturedPackagesPromise={feauturedPackagesPromise}></FeaturedPackages>
           </Suspense>
        </div>
    );
};

export default Home;