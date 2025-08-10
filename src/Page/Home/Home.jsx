import React, { Suspense } from 'react';
import HeroBanner from '../Shared/HeroBanner';
import FeaturedPackages from './featuredPackages';
import Loading from '../Shared/Loading';
import PhotoGallery from './PhotoGallery';
import Testimonial from './Testimonials';
import OfferSection from '../Shared/OfferSection';
import Newsletter from '../Shared/Newsletter';

const Home = () => {
    const feauturedPackagesPromise= fetch('https://package-booking-server.vercel.app/featuredPackages').then(res=> res.json());
    return (
        <div>
            <title>Feauture Tour</title>
            <HeroBanner></HeroBanner>
           <Suspense fallback={<Loading/>}>
             <FeaturedPackages feauturedPackagesPromise={feauturedPackagesPromise}></FeaturedPackages>
           </Suspense>
           <OfferSection/>
           <PhotoGallery/>
           <Testimonial/>
           <Newsletter/>
        </div>
    );
};

export default Home;