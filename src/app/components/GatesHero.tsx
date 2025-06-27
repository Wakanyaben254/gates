// components/HeroSectionKenya.tsx
"use client"; // This line is necessary for Next.js 13+ App Router for client-side features

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSectionKenya: React.FC = () => {
  return (
    // Outer container matching the card-like structure in the image
    <section className="bg-[#F8FFF8] p-4 sm:p-6 md:p-10 lg:p-12 rounded-2xl shadow-xl mx-auto my-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="lg:pr-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            <span className="text-gray-900">Empowering</span>{' '}
            <span className="text-green-600">Communities</span>{' '} {/* Specific green color */}
            <span className="text-gray-900">Across Kenya</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-xl">
            Join our mission to create lasting impact through community-driven initiatives. We support local groups in climate action, urban farming, education, and sustainable development.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/apply" >
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300 ease-in-out">
                Apply Funding
              </button>
            </Link>
            <Link href="/learn" >
              <button className="bg-transparent border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 font-bold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300 ease-in-out">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl hover:scale-105  active:scale-105 focus:scale-105 transition-transform duration-300 ease-in-out">
          <Image
            src="/au.jpg" // Placeholder: Replace with your actual image path
            alt="Screens displaying various visuals, symbolizing interconnected communities"
            fill
            
            className="object-cover z-0"   
            quality={80}
            priority // Prioritize loading for LCP
          />
          {/* A subtle dark overlay if the image itself is too bright, though the original is already dark */}
          <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionKenya;