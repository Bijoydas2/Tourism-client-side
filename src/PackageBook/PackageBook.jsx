import React, { use } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../Context/Context';
import axios from 'axios';
import Swal from 'sweetalert2';

const PackageBook = () => {
    const {id: pkgId} =useParams();
    const {tour_name,price, guide_email, guide_name,destination,departure_location,departure_date,guide_contact_no} = useLoaderData();
    const bookingDate = new Date().toISOString().slice(0, 10);
    const {user}=use(AuthContext);

    const handleBookSubmit= e=>{
        e.preventDefault()
        const form = e.target;
        const tourName=form.tourName.value;
        const price =form.price.value;
        const name =form.name.value;
        const email=form.email.value;
        const date =form.date.value;
        const note =form.note.value;
        
         const bookingInfo = {
         tour_id: pkgId,
         tour_name: tourName,
         guide_name: guide_name || '',
         guide_email: guide_email || '',
         buyer_name: name,
         buyer_email: email,
         price,
         booking_date: date,     
         departure_date: departure_date,
         notes: note,
         guide_contact_no,
         departure_location,
         destination,
         status: 'pending'
    };
    axios.post('http://localhost:3000/bookings',bookingInfo)
    .then(res=>{
         if(res.data.insertedId){
             Swal.fire({
             position: "top-end",
             icon: "success",
             title: "Your work has been saved",
             showConfirmButton: false,
             timer: 1500
             });
        }
    })
    .catch(error=>{
        console.log(error)
    })

    }
 
   
    return (
              <div className="max-w-xl mx-auto p-6 shadow-lg rounded-lg bg-white mt-10">
            <h3 className="text-3xl font-bold mb-6 text-blue-700 text-center">Book Now</h3>
            <form onSubmit={handleBookSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Package Name</label>
                    <input type="text" name='tourName' value={tour_name}  disabled className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block text-gray-700">Price</label>
                    <input type="text" name='price' value={`$${price}`}  disabled className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block text-gray-700">Your Name</label>
                    <input type="text" name='name' defaultValue={user?.displayName || ''} className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block text-gray-700">Your Email</label>
                    <input type="email" name='email' defaultValue={user?.email || ''}  className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block text-gray-700">Booking Date</label>
                    <input type="text" name='date' value={bookingDate} className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block text-gray-700">Special Note</label>
                    <textarea name="note"  className="textarea textarea-bordered w-full" placeholder="Add any special requests or comments"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">Confirm Booking</button>
            </form>
        </div>
    );
};

export default PackageBook;