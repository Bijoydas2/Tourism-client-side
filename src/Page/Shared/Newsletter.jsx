import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('https://package-booking-server.vercel.app/newsletter', { email });
      if (res.status === 201) {
        toast.success('Subscribed successfully!');
        setEmail('');
      } else {
        toast.error(res.data.message || 'Subscription failed');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Subscription failed');
    }
    setLoading(false);
  };

  return (
    <section className="newsletter-section pb-10 px-4 max-w-7xl mx-auto rounded-lg">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-700">
        Subscribe to our Newsletter
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 justify-center items-center"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full max-w-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <button
          type="submit"
          className="btn btn-primary px-8"
          disabled={loading}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
