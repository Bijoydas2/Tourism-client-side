import React from 'react';

const OfferSection = () => {
  return (
    <section className=" mt-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-4">Special Summer Offers!</h2>
        <p className="text-gray-400 mb-8 max-w-xl  mx-auto">
          Book your dream tour now and get amazing discounts. Limited time offers available for early birds!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mx-auto">
          {/* Offer 1 */}
          <div className="bg-white bg-opacity-20 rounded-lg p-6 shadow-lg hover:bg-opacity-30 transition">
            <h3 className="text-2xl text-blue-700 font-semibold mb-2">20% Off</h3>
            <p className='text-gray-400'>Get 20% discount on all beach tours booked before July 31.</p>
          </div>

          {/* Offer 2 */}
          <div className="bg-white bg-opacity-20 rounded-lg p-6 shadow-lg hover:bg-opacity-30 transition">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Buy 1 Get 1 Free</h3>
            <p className='text-gray-400'>Bring a friend along on selected mountain tours – pay for 1, get 1 free!</p>
          </div>

          {/* Offer 3 */}
          <div className="bg-white bg-opacity-20 rounded-lg p-6 shadow-lg hover:bg-opacity-30 transition">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Free Airport Pickup</h3>
            <p className='text-gray-400'>Enjoy free airport pickup on all tours over $500.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
