import React from 'react';
import { Link, useLoaderData} from 'react-router';

const PackageDetails = () => {
  const pkg = useLoaderData();
  
  
 

  if (!pkg) return <div className="text-center py-20">Package not found.</div>;

  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-xl my-4">
      <img src={pkg.image} alt={pkg.tour_name} className="w-full h-96 object-cover rounded-lg shadow-lg" />
      <h1 className="text-4xl font-bold mt-6">{pkg.tour_name}</h1>

      <div className="flex items-center gap-4 mt-4">
        <img src={pkg.guide_photo} alt={pkg.guide_name} className="w-16 h-16 rounded-full" />
        <div>
          <p className="font-semibold">{pkg.guide_name}</p>
          <p>Contact: {pkg.guide_contact_no}</p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <p><strong>Duration:</strong> {pkg.duration}</p>
        <p><strong>Price:</strong> ${pkg.price}</p>
        <p><strong>Description:</strong> {pkg.package_details}</p>
        <p><strong>Booking Count:</strong> {pkg.bookingCount || 0}</p>
        <p><strong>Departure:</strong> {pkg.departure_location || 'N/A'} - {pkg.departure_date}</p>
        <p><strong>Destination:</strong> {pkg.destination}</p>
        <p className="mt-4 whitespace-pre-line">{pkg.full_description}</p>
      </div>

     <Link to={`/booking/${pkg._id}`}>
       <button
       
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Book Now
      </button>
     </Link>
    </div>
  );
};

export default PackageDetails;
