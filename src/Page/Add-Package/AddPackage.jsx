import React, { use } from 'react';
import { AuthContext } from '../../Context/Context';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddPackage = () => {
    const {user} = use(AuthContext);

    const handleAddTour= e=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries()); 
        console.log(data)

        const duration = `${data.days} Days ${data.nights} Nights`;
        const newDate =new Date().toISOString().slice(0, 10);

      const newPackage = {
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
      bookingCount: 0,
      created_at: newDate,
    };
    // saved package
    axios.post(
  `http://localhost:3000/packages?email=${user.email}`,
  newPackage,
  {
    headers: {
      Authorization: `Bearer ${user.accessToken}`
    }
  }
 )
   .then(res => {
   if (res.data.insertedId) {
    toast.success('Tour Package Added Successfully!');
   }
   })
   .catch(error => {
   toast.error('Failed to add package. Try again.');
   console.error(error);
   });
    }
    return (
           <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Add Tour Package</h2>
      <form onSubmit={handleAddTour} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Tour Name</label>
          <input type="text" name="tourName" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input type="text" name="image" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block font-medium mb-1">Duration (e.g., 3 Days 2 Nights)</label>
          <div className="flex gap-4">
            <input type="number" name="days" placeholder="Days" className="w-full p-2 border rounded" required />
            <input type="number" name="nights" placeholder="Nights" className="w-full p-2 border rounded" required />
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Departure Location</label>
          <input type="text" name="departureLocation" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block font-medium mb-1">Destination</label>
          <input type="text" name="destination" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block font-medium mb-1">Price</label>
          <input type="number" name="price" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block font-medium mb-1">Departure Date</label>
          <input type="date" name="departureDate" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block font-medium mb-1">Package Details</label>
          <textarea name="packageDetails" className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block font-medium mb-1">Contact No.</label>
          <input type="text" name="contactNo" className="w-full p-2 border rounded" required />
        </div>

        {/* Guide Info */}
        <div>
          <label className="block font-medium mb-1">Guide Name</label>
          <input
            type="text"
            name="guideName"
            value={user?.displayName || ''}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Guide Photo URL</label>
          <input
            type="text"
            name="guidePhoto"
            value={user?.photoURL || ''}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Guide Email</label>
          <input
            type="text"
            name="guideEmail"
            value={user?.email || ''}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
    );
};

export default AddPackage;