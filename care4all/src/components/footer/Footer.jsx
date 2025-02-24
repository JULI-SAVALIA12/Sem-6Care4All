import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGoogle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="accent2-bg text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Logo and Description Column */}
          <div className="col-12 col-md-6 col-lg-4 px-4 mb-8 lg:mb-0">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white">Care4all</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Care4all is a healthcare platform to build Elderly People Care. It has good features and you will love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-[#2E7BEF] hover:border-[#2E7BEF] transition-colors">
                <FaFacebookF className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-[#2E7BEF] hover:border-[#2E7BEF] transition-colors">
                <FaLinkedinIn className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-[#2E7BEF] hover:border-[#2E7BEF] transition-colors">
                <FaTwitter className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-[#2E7BEF] hover:border-[#2E7BEF] transition-colors">
                <FaGoogle className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-12 col-md-6 col-lg-3 px-4 mb-8 lg:mb-0">
            <h3 className="text-xl font-bold mb-6">Quick links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="neutral-text text-white transition-colors">About Us</a></li>
              <li><a href="#" className="neutral-text text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="neutral-text text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="neutral-text text-white transition-colors">Blog Standard</a></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="col-12 col-md-6 col-lg-2 px-4 mb-8 lg:mb-0">
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <p className="text-xl font-bold text-gray-300">(1800)-574-9687</p>
              <p className="text-gray-300">256, Victory Street, New York City, AZ 550067</p>
              <p className="text-gray-300">Email: info@example.com</p>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="col-12 col-md-6 col-lg-3 px-4">
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">Get Special offers & Discounts</p>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter Email Address" 
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-[#2E7BEF] text-white"
              />
              <button className="w-full text-white py-3 rounded-lg hover:primary-bg transition-colors">
                SUBSCRIBE NOW
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white mt-12 pt-8 text-center pb-4">
          <p className="neutral-text p-0 m-0">© Copyright Care4all. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
