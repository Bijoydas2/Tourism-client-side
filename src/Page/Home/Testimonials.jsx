import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {
  const testimonials = [
    {
      name: "Anika Rahman",
      review: "The tour was unforgettable! Everything was well-planned and the guide was super helpful.",
      location: "Dhaka, Bangladesh",
    },
    {
      name: "Sajjad Hossain",
      review: "Loved the experience! Will definitely book again with this site.",
      location: "Chittagong, Bangladesh",
    },
    {
      name: "Mehzabin Akter",
      review: "Booking was smooth and the destination was just as described. Highly recommended!",
      location: "Sylhet, Bangladesh",
    },
    {
      name: "Tanvir Ahmed",
      review: "Great service and friendly staff. The guide knew all the hidden gems.",
      location: "Rajshahi, Bangladesh",
    },
    {
      name: "Farzana Yasmin",
      review: "I had some doubts at first, but the tour exceeded all expectations!",
      location: "Khulna, Bangladesh",
    },
    {
      name: "Rafiq Hasan",
      review: "Our family trip was well-organized and super enjoyable. Thank you!",
      location: "Barisal, Bangladesh",
    },
  ];

  return (
    <section className=" my-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-600">What Our Travelers Say</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-indigo-500 hover:border-indigo-600 transition duration-300"
          >
            <FaQuoteLeft className="text-indigo-400 text-2xl mb-4" />
            <p className="text-gray-700 italic mb-4">“{t.review}”</p>
            <div className="border-t pt-3">
              <p className="text-sm font-bold text-gray-900">{t.name}</p>
              <p className="text-sm text-gray-600">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
