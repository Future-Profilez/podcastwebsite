import React from 'react';
import news from "../assets/episode.png"
import Image from 'next/image';

const NewsletterBanner = () => {
  return (
    <section className="text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className='max-w-[1440px] mx-auto px-4 w-full'>
        <div className='bg-[#141414] p-4   rounded-[30px]'>
          <div className=" relative rounded-[30px] overflow-hidden shadow-2xl ">
            {/* Blurred Background Image */}
            <div className="absolute inset-0">
              <Image
                src={news}
                alt="Blurred background of people discussing"
                layout="fill"
                objectFit="cover"
                quality={75}
                className="filter blur-md scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-3 sm:p-8 md:p-12 flex flex-col items-center text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-inter leading-tight">
                What more Exclusive content ?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-inter">
                Get exclusive property tips, expert strategies, and bonus content delivered to your inbox: weekly.
              </p>
              {/* Email Input and Subscribe Button */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md border-1  border-[#FFFFFF33] rounded-lg  p-2">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-grow p-3 sm:p-4 rounded-md text-white placeholder-white 
             border-none outline-none focus:outline-none focus:ring-0 focus:border-none 
             hover:border-none bg-transparent"
                />

                <button
                  className="
    px-4 py-2 sm:px-6 sm:py-2 
    rounded-lg bg-[#000000] text-white 
    font-[400] text-[20px] sm:text-[15px] font-inter 
    whitespace-nowrap cursor-pointer transition-colors duration-300

    outline-none border-none 
    focus:outline-none focus:ring-0 focus:border-none 
    hover:outline-none hover:border-none
    active:outline-none active:border-none
  "
                >

                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;