import React, { Suspense, use, useState } from 'react';
import BookingList from './BookingList';
import Loading from '../Shared/Loading';

import { myBookingsPromise } from '../../api/bookingsApi';
import { AuthContext } from '../../Context/Context';


const MyBooking = () => {
    const {user}=use(AuthContext);
    const [refreshIndex, setRefreshIndex] = useState(0);
      const promise = myBookingsPromise(user.email,user.accessToken, refreshIndex);
   
      
    return (
        <div>
          <title>My Booking</title>
            <Suspense fallback={<Loading/>}>
                <BookingList
                myBookingsPromise={promise}
                onConfirmed={() => setRefreshIndex((prev) => prev + 1)}>
                
                </BookingList>
            </Suspense>
        </div>
    );
};

export default MyBooking;