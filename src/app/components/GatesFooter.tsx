"use client";
// components/Footer.tsx
import React from 'react';

const GatesFooter: React.FC = () => {
  

  return (
     <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BM</span>
                </div>
                <span className="ml-3 text-xl font-bold">Bill & Melinda Gates Foundation</span>
              </div>
              <p className="text-gray-400">
                Empowering communities across Kenya through sustainable development initiatives.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#work" className="hover:text-white transition-colors">Our Work</a></li>
                <li><a href="/apply" className="hover:text-white transition-colors">Apply</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Focus Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Climate Works</li>
                <li>Urban Farming</li>
                <li>Youth Empowerment</li>
                <li>Community Development</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>Nairobi, Kenya</p>
                <p>+254 700 222 000</p>
                <p>info@billgatesfoundation.ke</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025  Bill & Melinda Gates Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default GatesFooter;