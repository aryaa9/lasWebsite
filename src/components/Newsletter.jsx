import React from 'react';

const Newsletter = () => {
  // URL to your Google Form
  const googleFormUrl = 'https://forms.gle/zSEnK8pdWd9FreAm7';

  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Sign up to be a member
          </h1>
          <p>Sign up to our Google Form and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
