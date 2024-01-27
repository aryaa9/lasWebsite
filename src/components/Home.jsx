import React from 'react';
import Laptop from '../assets/laptop.jpg';
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        {/* Image Section */}
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='Team Photo' />
        {/* Text Section */}
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>ABOUT LAURIER ANALYTICS SOCIETY</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Empowering Insights, Fostering Innovation</h1>
          <p>
            The Laurier Analytics Society (LAS) is a community of data enthusiasts at Wilfrid Laurier University. Our mission is to empower students with the knowledge and skills in data analytics and foster innovation in the field.
          </p>
          <p>
            Whether you are a beginner or an experienced data professional, LAS provides a supportive environment for learning, collaboration, and networking. Join us in exploring the vast world of data analytics and its applications.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
