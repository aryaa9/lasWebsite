import React from 'react';
import {FaInstagram,FaDiscord,FaLinkedin} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Laurier Analytics Society</h1>
        <p className='py-4'>LAS Development Team</p>
        <div className='flex justify-between md:w-[50%] my-6'>    
            <FaInstagram size={30} />
            <FaDiscord size={30} />
            <FaLinkedin size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
      </div>
    </div>
  );
};
export default Footer;
