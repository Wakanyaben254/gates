"use client";
import React from 'react';
import Link from 'next/link';

import { ArrowLeft, Target, Heart, Users, Globe } from 'lucide-react';
import GatesNavbar from './GatesNavbar';

const GatesLearn: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <GatesNavbar />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-green-50 via-white to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Foundation&#39;s
              <span className="text-green-600 block">Mandate</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Gates Foundation is transforming communities across Kenya through 
              sustainable development, empowerment, and collaborative partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower communities across Kenya by providing sustainable funding, resources, 
                and support for grassroots initiatives that address climate change, promote 
                urban farming, advance youth development, and foster economic empowerment.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-4">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A Kenya where every community has the tools, knowledge, and resources to 
                create sustainable change, leading to improved livelihoods, environmental 
                conservation, and social cohesion across all 47 counties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide our work and partnerships
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community-Centered</h3>
              <p className="text-gray-600">
                We believe in the power of community-led initiatives and ensure that local 
                voices and needs drive our funding decisions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                Every project we support must demonstrate long-term impact and environmental 
                responsibility for future generations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600">
                We maintain open communication with our partners and provide clear reporting 
                on fund allocation and project outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
            <p className="text-xl text-gray-600">
              Strategic areas where we concentrate our efforts for maximum impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Climate Works",
                description: "Supporting initiatives that address climate change and promote environmental conservation.",
                icon: "🌱"
              },
              {
                title: "Urban Farming",
                description: "Empowering communities to grow their own food and create sustainable food systems.",
                icon: "🌾"
              },
              {
                title: "Youth Empowerment",
                description: "Providing opportunities for young people to develop skills and create positive change.",
                icon: "👥"
              },
              {
                title: "Economic Development",
                description: "We aim to cultivate entrepreneurship, support local businesses, and enhance market access, ensuring lasting economic well-being for vulnerable populations.",
                icon: "💼"
              }
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join us in creating lasting change across Kenya. Apply for funding and 
            become part of our community-driven impact network.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Apply Funding
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GatesLearn;
