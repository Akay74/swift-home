import React from 'react';

const Contact = () => {
  const services = ['Web Development', 'Mobile App Development', 'UI/UX Design', 'Digital Marketing', 'Cloud Services', 'Consulting'];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-center sm:text-4xl">Contact Us</h1>
      <h2 className="mb-6 text-center text-[14px] text-[#C1BFBF]">
        Cultivating Connections: Reach Out and Connect With Us.
      </h2>

      <form className="mx-auto md:w-[80%]">
        <div className="space-y-4 md:space-y-0 md:flex justify-center items-top">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border-none outline-none rounded bg-[#F9F9F9] bg-opacity-10"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border-none outline-none rounded bg-[#F9F9F9] bg-opacity-10"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full p-3 border-none outline-none rounded bg-[#F9F9F9] bg-opacity-10"
            />
          </div>
          <div className="space-y-4">
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
              className="w-full p-3 border-none outline-none rounded bg-[#F9F9F9] bg-opacity-10"
            />
            <textarea
              placeholder="Project Details"
              rows="5"
              className="w-full p-3 border-none outline-none rounded bg-[#F9F9F9] bg-opacity-10"
            ></textarea>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#4C80FF] to-[#4CFFD6] text-[#F9F9F9] text-lg font-bold px-6 py-2 rounded-lg hover:cursor-pointer transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;