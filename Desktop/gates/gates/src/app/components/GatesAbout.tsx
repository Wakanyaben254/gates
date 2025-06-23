// components/AboutMissionVisionSection.tsx
"use client"; // This component is a client component as it's a presentational UI component.

import React from 'react';
import { Target, Eye } from 'lucide-react'; // Icons for Mission and Vision

const GatesAbout: React.FC = () => {
  return (
    <section className="bg-[#F8FFF8] p-4 sm:p-6 md:p-10 lg:p-12 rounded-2xl shadow-xl mx-auto my-8 max-w-7xl">
      <div className="max-w-4xl mx-auto">
        {/* About gates foundation Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
           About Us ,Kenya nairobi
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <span>The opening of our foundation’s Kenya office in 2024 marked a pivotal milestone in our work within the country and reflected our deepened commitment to supporting meaningful change across East Africa and the continent as a whole. Our expanded presence in the region has also strengthened our ability to collaborate with local communities, governments, and partners to achieve greater impact.</span>
           We are a non-profit organization dedicated to empowering low-income communities across Kenya through sustainable development programs and capacity building initiatives.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
            <span className="inline-flex items-center">
              {/* Icon, styled similarly to program cards for visual consistency */}
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mr-3">
                <Target className="w-7 h-7 text-orange-500" />
              </div>
              Our Mission
            </span>
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            To create lasting positive change by supporting community-led initiatives that address local challenges in finacial inclusion, climate resilience, food security, education, and economic empowerment. We believe in the power of empowered communities to drive sustainable development.
          </p>
        </div>

        {/* Our Vision Section (inferred and styled similarly) */}
        {/* The image provided does not explicitly show a 'Vision' section, so this is an addition based on your prompt's request for 'vision statement' and inferred design. */}
        <div>
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
            <span className="inline-flex items-center">
              {/* Icon, styled similarly to program cards for visual consistency */}
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-3">
                <Eye className="w-7 h-7 text-blue-500" />
              </div>
              Our Vision
            </span>
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            To envision a future where every individual, regardless of their background, has the opportunity to thrive, contribute meaningfully to society, and live a dignified life through sustainable development and empowered communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GatesAbout;