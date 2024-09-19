'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import DesktopContactForm from './DesktopContact';

const Contact = () => {
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
    <div>
      <motion.div 
        ref={ref}
        className="container md:hidden mx-auto px-4 py-8" 
        id='contact-us'
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1 
          className="text-3xl font-bold text-[#F9F9F9] mb-2 text-center sm:text-4xl"
          variants={itemVariants}
        >
          Contact Us
        </motion.h1>
        <motion.h2 
          className="mb-6 text-center text-[14px] text-[#C1BFBF]"
          variants={itemVariants}
        >
          Cultivating Connections: Reach Out and Connect With Us.
        </motion.h2>

        <motion.form 
          className="mx-auto md:w-[80%]"
          variants={containerVariants}
        >
          <div className="space-y-4 md:space-y-0 md:flex justify-center items-top">
            <div className="space-y-4">
              <motion.input
                variants={itemVariants}
                type="text"
                placeholder="Name"
                className="w-full p-3 border-none outline-none rounded bg-[#F9F9F9] bg-opacity-10"
              />
              <motion.input
                variants={itemVariants}
                type="email"
                placeholder="Email"
                className="w-full p-3 border-none outline-none rounded bg-[#F9F9F9] bg-opacity-10"
              />
              <motion.input
                variants={itemVariants}
                type="tel"
                placeholder="Phone number"
                className="w-full p-3 border-none outline-none rounded bg-[#F9F9F9] bg-opacity-10"
              />
            </div>
            <div className="space-y-4">
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
                className="w-full p-3 border-none outline-none rounded bg-[#F9F9F9] bg-opacity-10"
              />
              <motion.textarea
                variants={itemVariants}
                placeholder="Project Details"
                rows="5"
                className="w-full p-3 border-none outline-none rounded bg-[#F9F9F9] bg-opacity-10"
              ></motion.textarea>
            </div>
          </div>

          <motion.div 
            className="mt-6 text-center"
            variants={itemVariants}
          >
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-[#4C80FF] to-[#4CFFD6] text-[#F9F9F9] text-lg font-bold px-6 py-2 rounded-lg hover:cursor-pointer transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>

      <DesktopContactForm />
    </div>
  );
};

export default Contact;