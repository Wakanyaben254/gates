"use client";
import React, { useState, } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const GatesNavbar: React.FC = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50 ">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-26">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
  <Link href="/">
    <Image
      src="/logo.jpg"
      alt="Bill & Melinda Gates Foundation Logo"
      width={150} // Adjust width as needed
      height={100} // Adjust height as needed
      priority
      className="full object-cover" // Ensure the logo fits well in the navbar
    />
  </Link>
</div>
         
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="#about"
              scroll={true}
              className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              href="#programs"
              scroll={true}
              className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Programs
            </Link>
            <Link
              href="/impact"
              className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Our Impact
            </Link>
          
            <Link
              href="#contact"
              scroll={true}
              className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              href="/donate"
              className="bg-orange-500 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-md text-sm"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="#about"
            scroll={true}
            className="bg-gray-100 text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 hover:text-orange-500"
          >
            About Us
          </Link>
          <Link
            href="#programs"
            scroll={true}
            className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 hover:text-orange-500"
          >
            Programs
          </Link>
          <Link
            href="/impact"
            className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 hover:text-orange-500"
          >
            Our Impact
          </Link>
         
          <Link
            href="#contact"
            scroll={true}
            className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 hover:text-orange-500"
          >
            Contact
          </Link>
          <Link
            href="/donate"
            className="bg-orange-500 hover:bg-orange-700 text-white block py-2 px-4 rounded-md text-base font-medium text-center"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default GatesNavbar;