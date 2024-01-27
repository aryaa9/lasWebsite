import React from 'react';
import EventImage from '../assets/Events.jpg';

const Events = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={EventImage} alt='Event Photo' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>UPCOMING EVENTS</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Join Us at Our Next Data-Driven Experience</h1>
          <p>
            Laurier Analytics Society hosts a variety of events throughout the year, ranging from workshops and networking sessions. Stay tuned for our upcoming events where you can enhance your skills, connect with industry professionals, and be a part of the data analytics community.
          </p>
          <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Explore Events</button>
        </div>
      </div>
    </div>
  );
};

export default Events;