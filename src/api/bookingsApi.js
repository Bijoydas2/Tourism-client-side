export const myBookingsPromise = (email,accessToken) => {
  return fetch(`https://package-booking-server.vercel.app/bookings?email=${email}`,{
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  })
    .then(res => res.json());
};
