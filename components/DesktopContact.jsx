'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DesktopContactForm = () => {
  const services = ['Web Development', 'Mobile App Development', 'UI/UX Design', 'Digital Marketing', 'Cloud Services', 'Consulting'];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div 
      ref={ref}
      className="hidden md:block text-white px-8 py-16" 
      id='contact-us'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1 
        className="text-[64px] font-bold text-center mb-2"
        variants={itemVariants}
      >
        Contact us
      </motion.h1>
      <motion.p 
        className="text-center text-[20px] text-gray-400 mb-8"
        variants={itemVariants}
      >
        Cultivating Connections: Reach Out and Connect with us
      </motion.p>
      <motion.form 
        className="grid grid-cols-2 gap-7 max-w-4xl mx-auto"
        variants={containerVariants}
      >
        <motion.input
          variants={itemVariants}
          type="text"
          placeholder="Name"
          className="bg-[#F9F9F9] bg-opacity-10 p-3 rounded"
        />
        <motion.input
          variants={itemVariants}
          type="email"
          placeholder="Email"
          className="bg-[#F9F9F9] bg-opacity-10 p-3 rounded"
        />
        <motion.input
          variants={itemVariants}
          type="tel"
          placeholder="Phone Number"
          className="bg-[#F9F9F9] bg-opacity-10 p-3 rounded"
        />
        <motion.select
          variants={itemVariants}
          className="w-full p-3 text-[#C1BFBF] border-none outline-none rounded bg-[#F9F9F9] bg-opacity-10"
          defaultValue=""
        >
          <option value="" disabled>Service of Interest</option>
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </motion.select>
        <motion.input
          variants={itemVariants}
          type="text"
          placeholder="Timeline"
          className="bg-[#F9F9F9] bg-opacity-10 p-3 rounded"
        />
        <motion.textarea
          variants={itemVariants}
          placeholder="Project Details..."
          className="bg-[#F9F9F9] bg-opacity-10 p-3 rounded row-span-2"
          rows="4"
        ></motion.textarea>
        <motion.div 
          className="col-span-2 flex justify-end"
          variants={itemVariants}
        >
          <motion.button
            type="submit"
            className="bg-gradient-to-r from-[#4C80FF] to-[#4CFFD6] text-[#F9F9F9] font-bold text-white px-8 py-2 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default DesktopContactForm;