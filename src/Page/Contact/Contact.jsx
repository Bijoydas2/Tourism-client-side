import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Email sending logic (e.g., EmailJS, backend API)
    setStatus('Message sent! Thanks for contacting us.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Contact Us</h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="md:w-1/3 space-y-6 text-gray-700">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            <p>123 Travel Street, Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-blue-600 text-2xl" />
            <p>+880 1711 223344</p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <p>info@tourmate.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="md:w-2/3 flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 text-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 text-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="border border-gray-300 text-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white  rounded px-6 py-3 font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          {status && <p className="text-green-600 mt-2">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
