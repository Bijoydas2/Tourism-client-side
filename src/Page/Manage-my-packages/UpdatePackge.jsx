import React, { useEffect, useState, use } from 'react';
import { useParams, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/Context';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const UpdatePackage = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [pkg, setPkg] = useState(null);

  useEffect(() => {
    axios.get(`https://package-booking-server.vercel.app/packages/${id}`, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => setPkg(res.data))
      .catch((err) =>
        toast.error('There was a problem loading the package', err)
      );
  }, [id]);

  const handleUpdateTour = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const duration = `${data.days} Days ${data.nights} Nights`;

    const updatedPackage = {
      tour_name: data.tourName,
      image: data.image,
      duration,
      departure_location: data.departureLocation,
      destination: data.destination,
      price: parseFloat(data.price),
      departure_date: data.departureDate,
      package_details: data.packageDetails,
      guide_name: data.guideName,
      guide_email: data.guideEmail,
      guide_photo: data.guidePhoto,
      guide_contact_no: data.contactNo,
    };

    axios
      .patch(
        `https://package-booking-server.vercel.app/packages/${id}?email=${user.email}`,
        updatedPackage,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success('Tour Package Updated Successfully!');
          navigate('/managePackages');
        }
      })
      .catch((err) => {
        toast.error('Failed to update package. Try again.');
        console.error(err);
      });
  };

  if (!pkg) return <p className="text-center mt-10"><Loading /></p>;

  const getDays = () => pkg.duration?.split(' ')[0] || '';
  const getNights = () => pkg.duration?.split(' ')[2] || '';

  const inputClass =
    'w-full p-2 border border-gray-300 text-gray-700 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500';

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded mt-8">
      <title>Update Package</title>
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Update Tour Package
      </h2>
      <form onSubmit={handleUpdateTour} className="space-y-4">

        <div>
          <label className="block font-medium text-gray-700 mb-1">Tour Name</label>
          <input type="text" name="tourName" defaultValue={pkg.tour_name} className={inputClass} required />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Image URL</label>
          <input type="text" name="image" defaultValue={pkg.image} className={inputClass} required />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Duration</label>
          <div className="flex gap-4">
            <input type="number" name="days" placeholder="Days" defaultValue={getDays()} className={inputClass} required />
            <input type="number" name="nights" placeholder="Nights" defaultValue={getNights()} className={inputClass} required />
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Departure Location</label>
          <input type="text" name="departureLocation" defaultValue={pkg.departure_location} className={inputClass} required />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Destination</label>
          <input type="text" name="destination" defaultValue={pkg.destination} className={inputClass} required />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Price</label>
          <input type="number" name="price" defaultValue={pkg.price} className={inputClass} required />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Departure Date</label>
          <input type="date" name="departureDate" defaultValue={pkg.departure_date} className={inputClass} required />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Package Details</label>
          <textarea name="packageDetails" defaultValue={pkg.package_details} className={inputClass} rows={4} required />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Contact No.</label>
          <input type="text" name="contactNo" defaultValue={pkg.guide_contact_no} className={inputClass} required />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Guide Name</label>
          <input type="text" name="guideName" value={user?.displayName || ''} readOnly className={`${inputClass} bg-gray-100`} />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Guide Photo URL</label>
          <input type="text" name="guidePhoto" value={user?.photoURL || ''} readOnly className={`${inputClass} bg-gray-100`} />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Guide Email</label>
          <input type="text" name="guideEmail" value={user?.email || ''} readOnly className={`${inputClass} bg-gray-100`} />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdatePackage;
