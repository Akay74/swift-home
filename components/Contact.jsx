import React from 'react';

const Contact = () => {
  const services = ['Web Development', 'Mobile App Development', 'UI/UX Design', 'Digital Marketing', 'Cloud Services', 'Consulting'];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-center sm:text-4xl">Contact Us</h1>
      <h2 className="text-xl mb-6 text-center text-gray-600 sm:text-2xl">
        Cultivating Connections: Reach Out and Connect With Us.
      </h2>

      <form className="max-w-lg mx-auto">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <select
            className="w-full p-2 border border-gray-300 rounded bg-white"
            defaultValue=""
          >
            <option value="" disabled>Service of Interest</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Timeline"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Project Details"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>

        <div className="mt-6 text-right">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;