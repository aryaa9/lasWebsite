import React from 'react';
import { FaInstagram, FaDiscord, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Laurier Analytics Society</h1>
        <p className='py-4'>LAS Development Team</p>
        <div className='flex justify-between md:w-[50%] my-6'>
          <a href="https://www.instagram.com/laurier_analytics/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://discord.gg/5TFHAyRMy9" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={30} />
          </a>
          <a href="https://www.linkedin.com/in/laurier-analytics-society-bb1a48217/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
      </div>
    </div>
  );
};

export default Footer;
