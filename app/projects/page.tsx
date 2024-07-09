
" use client"

import React, { useState } from 'react';

const PortfolioSection = () => {
 /*  const [showCards, setShowCards] = useState(""); */

  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark  hover:text-red-600">
    <div className="container mx-auto">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-[510px] text-center">
            <span className="text-primary mb-2 block text-lg font-semibold">
              Our Portfolio
            </span>
            <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
              Our Discover Projects
            </h2>
            <p className="text-body-color text-base dark:text-dark-6">
              There are many variations of Projects, we have made. Majority of them completed on time.
            </p>
          </div>
        </div>
      </div>
      <div className="-mx-4 flex flex-wrap justify-center">
        <div className="w-full px-4">
          <ul className="mb-12 flex flex-wrap justify-center space-x-1">
            <li className="mb-1">
              <button className="button-style">
                All Projects
              </button>
            </li>
            <li className="mb-1">
              <button className="button-style">
                Developing,
              </button>
            </li>
            <li className="mb-1">
              <button className="button-style">
                Design,
              </button>
            </li>
            <li className="mb-1">
              <button className="button-style">
                Marketing,
              </button>
            </li>
            <li className="mb-1">
              <button className="button-style">
                Planing
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="-mx-4 flex flex-wrap  hover:text-pink-600">
        {/* Branding Card */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4  hover:text-re
        
        ">
          <div className="relative mb-12 dark:bg-dark-2 rounded-lg shadow-portfolio dark:shadow-box-dark">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/1.jpeg"
                alt="portfolio"
                className="w-full"
              />
            </div>
            <div className="relative z-10 mx-7 -mt-20 bg-white dark:bg-dark-2 py-6 px-3 text-center shadow-portfolio dark:shadow-box-dark hover:">
              <span className="text-primary mb-2 block text-sm font-medium text-black">Pirate Holidays</span>
              <h3 className="text-dark  mb-3 text-xl font-bold text-black ">Enjoy Freedom Land</h3>
              <a
                href="#"
                className=" text-body-color dark:text-dark-6 hover:border-primary  text-black hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-2 px-6 text-sm font-medium transition hover:text-white"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
        {/* Marketing Card */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <div className="relative mb-12 dark:bg-dark-2 rounded-lg shadow-portfolio dark:shadow-box-dark">
            <div className="overflow-hidden rounded-lg">
              <img
                src="2.jpeg"
                alt="portfolio"
                className="w-full"
              />
            </div>
            <div className="relative z-10 mx-7 -mt-20 bg-white dark:bg-dark-2 py-6 px-3 text-center shadow-portfolio dark:shadow-box-dark">
              <span className="text-primary mb-2 block text-sm font-medium text-black">Active Box</span>
              <h3 className="text-dark  mb-3 text-xl font-bold  text-black">Favourite  Multipurpose </h3>
              <a
                href="#"
                className="text-body-color dark:text-dark-6 hover:border-primary  text-black hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-2 px-6 text-sm font-medium transition hover:text-white"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
        {/* Development Card */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <div className="relative mb-12 dark:bg-dark-2 rounded-lg shadow-portfolio dark:shadow-box-dark">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/3.jpeg"
                alt="portfolio"
                className="w-full"
              />
            </div>
            <div className="relative z-10 mx-7 -mt-20 bg-white dark:bg-dark-2 py-6 px-3 text-center shadow-portfolio dark:shadow-box-dark">
              <span className="text-primary mb-2 block text-sm font-medium text-black">Axite Site</span>
              <h3 className="text-dark mb-3 text-xl font-bold text-black">Travel Tourisim</h3>
              <a
                href="#"
                className="text-body-color dark:text-dark-6 hover:border-primary  text-black hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-2 px-6 text-sm font-medium transition hover:text-white"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
        {/* Design Card */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <div className="relative mb-12 dark:bg-dark-2 rounded-lg shadow-portfolio dark:shadow-box-dark">
            <div className="overflow-hidden rounded-lg">
              <img
                src="4.jpeg"
                alt="portfolio"
                className="w-full"
              />
            </div>
            <div className="relative z-10 mx-7 -mt-20 bg-white dark:bg-dark-2 py-6 px-3 text-center shadow-portfolio dark:shadow-box-dark">
              <span className="text-primary mb-2 block text-sm font-medium text-black">Car Rent Unit</span>
              <h3 className="text-dark  mb-3 text-xl font-bold text-black  ">Business Car Shorum </h3>
              <a
                href="#"
                className="text-body-color dark:text-dark-6 hover:border-primary  text-black hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-2 px-6 text-sm font-medium transition hover:text-white"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
        {/* Marketing Card 2 */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <div className="relative mb-12 dark:bg-dark-2 rounded-lg shadow-portfolio dark:shadow-box-dark">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/6.jpeg"
                alt="portfolio"
                className="w-full"
              />
            </div>
            <div className="relative z-10 mx-7 -mt-20 bg-white dark:bg-dark-2 py-6 px-3 text-center shadow-portfolio dark:shadow-box-dark">
              <span className="text-primary mb-2 block text-sm font-medium text-black">Blood LinE</span>
              <h3 className="text-dark  mb-3 text-xl font-bold text-black">Blood Collection Center </h3>
              <a
                href="#"
                className="text-body-color dark:text-dark-6 hover:border-primary  text-black hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-2 px-6 text-sm font-medium transition hover:text-whitee"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
        {/* Branding Card 2 */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <div className="relative mb-12 dark:bg-dark-2 rounded-lg shadow-portfolio dark:shadow-box-dark">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/5.jpeg"
                alt="portfolio"
                className="w-full"
              />
            </div>
            <div className="relative z-10 mx-7 -mt-20 bg-white dark:bg-dark-2 py-6 px-3 text-center shadow-portfolio dark:shadow-box-dark">
              <span className="text-primary mb-2 block text-sm font-medium text-black"> Food Point</span>
              <h3 className="text-dark  mb-3 text-xl font-bold text-black">Online Food Store </h3>
              <a
                href="#"
                className="text-body-color dark:text-dark-6 hover:border-primary  text-black hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-2 px-6 text-sm font-medium transition hover:text-white"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default PortfolioSection;
