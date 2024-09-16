import React from 'react';

const DesktopContactForm = () => {
  const services = ['Web Development', 'Mobile App Development', 'UI/UX Design', 'Digital Marketing', 'Cloud Services', 'Consulting'];

  return (
    <div className="hidden md:block text-white px-8 py-16" id='contact-us'>
      <h1 className="text-[64px] font-bold text-center mb-2">Contact us</h1>
      <p className="text-center text-[20px] text-gray-400 mb-8">
        Cultivating Connections: Reach Out and Connect with us
      </p>
      <form className="grid grid-cols-2 gap-7 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="bg-[#F9F9F9] bg-opacity-10 p-3 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-[#F9F9F9] bg-opacity-10 p-3 rounded"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="bg-[#F9F9F9] bg-opacity-10 p-3 rounded"
        />
        <select
            className="w-full p-3 text-[#C1BFBF] border-none outline-none rounded bg-[#F9F9F9] bg-opacity-10"
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
          className="bg-[#F9F9F9] bg-opacity-10 p-3 rounded"
        />
        <textarea
          placeholder="Project Details..."
          className="bg-[#F9F9F9] bg-opacity-10 p-3 rounded row-span-2"
          rows="4"
        ></textarea>
        <div className="col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#4C80FF] to-[#4CFFD6] text-[#F9F9F9] font-bold text-white px-8 py-2 rounded"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default DesktopContactForm;