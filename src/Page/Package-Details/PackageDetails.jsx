import React, { use, useEffect, useState } from 'react';
import { Link, useParams, } from 'react-router';
import { FaClock, FaDollarSign, FaUser,FaPhone,FaMapMarkerAlt, FaCalendarAlt, FaClipboardList, FaUsers, FaMapMarkedAlt, FaInfoCircle
} from 'react-icons/fa';
import { AuthContext } from '../../Context/Context';

const iconStyle = {
  fontSize: '1.2rem',
  marginRight: '0.5rem',
  verticalAlign: 'middle',
};

const PackageDetails = () => {
  const {user}= use(AuthContext)
  console.log(user.accessToken)
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    fetch(`https://package-booking-server.vercel.app/packages/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPkg(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id, user]);

   if (loading) return <div className="text-center py-20">Loading package details...</div>;
    if (!pkg) return <div className="text-center py-20 text-red-500">Package not found.</div>;
   return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-xl my-4">
       <title>Tour Detailas</title>
      <img
        src={pkg.image}
        alt={pkg.tour_name}
        className="w-full h-96 object-cover rounded-lg shadow-lg"
      />
      <h1 className="text-4xl font-bold mt-6 flex items-center gap-2 text-blue-700">
        <FaClipboardList style={{ ...iconStyle, color: '#2563EB' }} /> {pkg.tour_name}
      </h1>

      <div className="flex items-center gap-4 mt-4">
        <img
          src={pkg.guide_photo}
          alt={pkg.guide_name}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <p className="font-semibold flex items-center gap-2 text-green-600">
            <FaUser style={{ ...iconStyle, color: '#16A34A' }} /> {pkg.guide_name}
          </p>
          <p className="flex items-center gap-2 text-yellow-600">
            <FaPhone style={{ ...iconStyle, color: '#CA8A04' }} /> Contact: {pkg.guide_contact_no}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3 text-lg text-gray-700">
        <p className="flex items-center gap-2 text-purple-600">
          <FaClock style={{ ...iconStyle, color: '#7C3AED' }} /> <strong>Duration:</strong> {pkg.duration}
        </p>
        <p className="flex items-center gap-2 text-red-600">
          <FaDollarSign style={{ ...iconStyle, color: '#DC2626' }} /> <strong>Price:</strong> ${pkg.price}
        </p>
        <p className="flex items-center gap-2 text-cyan-600">
          <FaInfoCircle style={{ ...iconStyle, color: '#0891B2' }} /> <strong>Description:</strong> {pkg.package_details}
        </p>
          <p className="text-lg font-medium text-white bg-gradient-to-r from-pink-500 to-pink-700 px-4 py-2 rounded inline-block mt-2 shadow-md">
          <FaUsers className="inline mr-2" /> {pkg.bookingCount || 0} people booked this tour
        </p>
        <p className="flex items-center gap-2 text-indigo-600">
          <FaMapMarkerAlt style={{ ...iconStyle, color: '#4F46E5' }} /> <strong>Departure:</strong> {pkg.departure_location || 'N/A'}
        </p>
        <p className="flex items-center gap-2 text-indigo-600">
          <FaCalendarAlt style={{ ...iconStyle, color: '#4F46E5' }} /> {pkg.departure_date}
        </p>
        <p className="flex items-center gap-2 text-teal-600">
          <FaMapMarkedAlt style={{ ...iconStyle, color: '#0D9488' }} /> <strong>Destination:</strong> {pkg.destination}
        </p>
        <p className="mt-4 whitespace-pre-line text-gray-800">{pkg.full_description}</p>
      </div>

      <Link to={`/booking/${pkg._id}`}>
        <button
          className="btn bg-blue-600 text-white hover:bg-white hover:text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg transition duration-300 mt-6 flex items-center gap-2"
        >
          <FaClipboardList /> Book Now
        </button>
      </Link>
    </div>
  );
};

export default PackageDetails;
