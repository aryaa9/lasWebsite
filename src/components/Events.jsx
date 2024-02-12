import React from 'react';
import EventImage from '../assets/Events.jpg';

const Events = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <style>
        {`
          .event-card {
            transition: transform 0.3s ease;
          }
          
          .event-card:hover {
            transform: translateY(-5px);
          }
        `}
      </style>
      <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* First Event Card */}
        <div className='event-card bg-gray-100 rounded-lg p-6'>
          <img className='w-full mb-4' src={EventImage} alt='Event Photo' />
          <p className='text-[#00df9a] font-bold'>UPCOMING EVENT</p>
          <h2 className='text-xl font-bold py-2'>Event Name</h2>
          <p className='text-gray-700'>
            Description of the event goes here.
          </p>
          <button className='bg-[#00df9a] text-black w-full rounded-md font-medium my-6 py-3'>Explore Event</button>
        </div>

        {/* Second Event Card */}
        <div className='event-card bg-gray-100 rounded-lg p-6'>
          <img className='w-full mb-4' src={EventImage} alt='Event Photo' />
          <p className='text-[#00df9a] font-bold'>UPCOMING EVENT</p>
          <h2 className='text-xl font-bold py-2'>Event Name</h2>
          <p className='text-gray-700'>
            Description of the event goes here.
          </p>
          <button className='bg-[#00df9a] text-black w-full rounded-md font-medium my-6 py-3'>Explore Event</button>
        </div>

        {/* Third Event Card */}
        <div className='event-card bg-gray-100 rounded-lg p-6'>
          <img className='w-full mb-4' src={EventImage} alt='Event Photo' />
          <p className='text-[#00df9a] font-bold'>UPCOMING EVENT</p>
          <h2 className='text-xl font-bold py-2'>Event Name</h2>
          <p className='text-gray-700'>
            Description of the event goes here.
          </p>
          <button className='bg-[#00df9a] text-black w-full rounded-md font-medium my-6 py-3'>Explore Event</button>
        </div>
      </div>
    </div>
  );
};

export default Events;
