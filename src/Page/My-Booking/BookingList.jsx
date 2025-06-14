import axios from 'axios';
import React, { use } from 'react';
import { toast } from 'react-toastify';

const BookingList = ({ myBookingsPromise,onConfirmed }) => {
  const bookings = use(myBookingsPromise);





 
  const handleConfirm = async (id) => {
    const res = await axios.patch(`http://localhost:3000/bookings/${id}`);
    if (res.status === 200) {
      onConfirmed(); 
      toast.success('Booking confirmed successfully!')
    }
  };


  return (
    <div className="max-w-5xl mx-auto my-10 px-4 font-sans">
      <h3 className="text-2xl font-semibold mb-6 text-center">
        Your Bookings ({bookings.length})
      </h3>
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Tour Name</th>
            <th className="py-3 px-4 text-left">Guide Name, Contact</th>
            <th className="py-3 px-4 text-left">Departure Date</th>
            <th className="py-3 px-4 text-left">Departure Location</th>
            <th className="py-3 px-4 text-left">Destination</th>
            <th className="py-3 px-4 text-left">Special Note</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Confirm</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr
              key={booking._id}
              className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
            >
              <td className="py-3 px-4">{booking.tour_name}</td>
              <td className="py-3 px-4 whitespace-pre-line">
                {booking.guide_name}
                <br />
                {booking.guide_contact_no}
              </td>
              <td className="py-3 px-4">{booking.departure_date}</td>
              <td className="py-3 px-4">{booking.departure_location}</td>
              <td className="py-3 px-4">{booking.destination}</td>
              <td className="py-3 px-4">{booking.notes || '-'}</td>
              <td
                className={`py-3 px-4 font-semibold ${
                  booking.status === 'completed'
                    ? 'text-green-600'
                    : 'text-gray-700'
                }`}
              >
                {booking.status || 'pending'}
              </td>
              <td className="py-3 px-4">
                {booking.status === 'completed' ? (
                  <span className="text-green-600 font-semibold">Confirmed</span>
                ) : (
                  <button

                     onClick={() => handleConfirm(booking._id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition"
                   
                  >
                    Confirm
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
