import React from 'react';
import news from "../assets/episode.png"

const NewsletterBanner = () => {
  return (
    <div className=" flex items-center justify-center bg-black bg-opacity-75 p-4">
      <div className="relative w-full max-w-lg overflow-hidden rounded-lg  bg-opacity-90 p-8 shadow-lg md:p-12">
        {/* Background image/overlay (you might replace this with an actual image or a more dynamic background) */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${news})` }} // Replace with your actual background image
        ></div>

        <div className="relative z-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Stay Ahead In Property
          </h2>
          <p className="mb-8 text-base text-gray-300 md:text-lg">
            Get exclusive property tips, expert strategies, and bonus content delivered to your inbox weekly.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full flex-grow rounded-md border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:w-auto"
            />
            <button className="w-full rounded-md bg-purple-600 px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-purple-700 sm:w-auto">
              Subscribe
            </button>
          </div>
          {/* This part seems to be an annotation from the design tool, not part of the UI.
              If it needs to be displayed, you might place it differently, e.g., for debugging. */}
          {/* <p className="mt-4 text-xs text-gray-500">404 × 62 Hug</p> */}
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner;