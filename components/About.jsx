"use client"
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className="mx-auto mt-5 md:mx-[4rem] px-4 py-3 text-[#F9F9F9]"
      id='about-us'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h1 className="text-4xl text-center font-bold mb-4 md:text-[64px]" variants={titleVariants}>
        About us
      </motion.h1>
      
      <div className="mb-8 md:text-[20px]">
        <motion.p className="mb-4" variants={paragraphVariants}>
          We are a leading tech solutions provider, shaping the future across the most in-demand niches in the tech space. Our mission is to equip businesses with powerful strategies that align with the latest market trends, deploying precise and innovative tactics to ensure visibility, authority, leadership, and success.
        </motion.p>
        <motion.p className="mb-4" variants={paragraphVariants}>
          We are driven by a commitment to excellence and an unwavering belief in charting unconventional paths to deliver real, unmatched value to our clients. This approach has earned us the trust and loyalty of our customers, leading to repeat business and long-lasting partnerships.
        </motion.p>
        <motion.p variants={paragraphVariants}>
          In today&apos;s ever-changing global market, thriving requires intense collaboration, creative thinking, and cutting-edge digital upgrades. We are ready to be your partner in this journey, offering solutions that not only meet your needs but also set you apart from the competition.
        </motion.p>
      </div>

      <motion.h2 className="text-2xl font-semibold mb-4 md:text-[48px] md:mt-16" variants={titleVariants}>
        What we do
      </motion.h2>
      <motion.p className="mb-8 md:text-[20px]" variants={paragraphVariants}>
        We specialize in providing end-to-end tech services encompassing design, development, and digital marketing. From crafting captivating brand identities to developing robust web and mobile applications, we offer a comprehensive suite of services to propel your business forward in the digital age.
      </motion.p>

      <motion.h2 className="text-2xl font-semibold mb-4 md:text-[48px] md:mt-16" variants={titleVariants}>
        Why choose us?
      </motion.h2>
      <div className="md:text-[20px]">
        <motion.p className="mb-2" variants={paragraphVariants}>
          <span className="font-semibold">Innovation:</span> In a rapidly evolving global business environment, we set the pace by driving thought leadership and staying ahead of industry trends. Our commitment to employing cutting-edge strategies ensures that we deliver unmatched value, fostering a community of thriving businesses.
        </motion.p>
        <motion.p className="mb-2" variants={paragraphVariants}>
          <span className="font-semibold">Quality:</span> Excellence is our standard at Swift. We meticulously craft our processes to ensure you receive the highest value for every investment. If your goal is to elevate your business to meet globally recognized standards, Swift is your partner of choice.
        </motion.p>
        <motion.p className="mb-2" variants={paragraphVariants}>
          <span className="font-semibold">Collaboration:</span> Partnership is the cornerstone of our approach. We believe in the power of collaboration to achieve service leadership. By aligning with Swift, you enter a synergy that redefines your business and ensures its continuous growth and success.
        </motion.p>
        <motion.p variants={paragraphVariants}>
          <span className="font-semibold">Expertise:</span> Our team is a hub of diverse talent, dedicated to improving and expanding our services. With a workforce skilled in creativity, critical thinking, and collaboration, we bring the expertise needed for sustained corporate success.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;