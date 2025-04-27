import React from 'react';
import { CiFacebook, CiLinkedin, CiTwitter, CiYoutube } from 'react-icons/ci';
import { IoLogoInstagram } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 mt-10 py-8 px-2 lg:px-52">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* ABOUT XMEALS */}
          <div>
            <h3 className="text-xl font-bold mb-4">ABOUT XMEALS</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">Who We Are</a></li>
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
              <li><a href="#" className="hover:text-gray-400">Work With Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Investor Relations</a></li>
              <li><a href="#" className="hover:text-gray-400">Report Fraud</a></li>
              <li><a href="#" className="hover:text-gray-400">Press Kit</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>

          {/* XMEALSVERSE */}
          <div>
            <h3 className="text-xl font-bold mb-4">XMEALSVERSE</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">XMeals</a></li>
              <li><a href="#" className="hover:text-gray-400">Blinkit</a></li>
              <li><a href="#" className="hover:text-gray-400">District</a></li>
              <li><a href="#" className="hover:text-gray-400">Feeding India</a></li>
              <li><a href="#" className="hover:text-gray-400">Hyperpure</a></li>
              <li><a href="#" className="hover:text-gray-400">XMeals Live</a></li>
              <li><a href="#" className="hover:text-gray-400">XMealsland</a></li>
              <li><a href="#" className="hover:text-gray-400">Weather Union</a></li>
            </ul>
          </div>

          {/* FOR RESTAURANTS */}
          <div>
            <h3 className="text-xl font-bold mb-4">FOR RESTAURANTS</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">Partner With Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Apps For You</a></li>
            </ul>
          </div>

          {/* LEARN MORE */}
          <div>
            <h3 className="text-xl font-bold mb-4">LEARN MORE</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-400">Security</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms</a></li>
            </ul>
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-4">SOCIAL LINKS</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-gray-400"><CiLinkedin /></a>
              <a href="#" className="hover:text-gray-400"><IoLogoInstagram /></a>
              <a href="#" className="hover:text-gray-400"><CiTwitter /></a>
              <a href="#" className="hover:text-gray-400"><CiYoutube /></a>
              <a href="#" className="hover:text-gray-400"><CiFacebook /></a>
            </div>
            <div className="flex space-x-8">
              <button className=" text-sm py-2  rounded-lg ">
                App Store
              </button>
              <button className=" text-sm py-2  rounded-lg  ">
                Google Play
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-sm text-gray-400">
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy
          and Content Policies. All trademarks are properties of their respective owners.
          <br /> 2008-2025 © XMeals™ Ltd. All rights reserved.
        </div>

        {/* Dropdowns */}
        <div className="mt-4 flex justify-center space-x-4">
          <div>
            <label htmlFor="country" className="text-gray-400">Country:</label>
            <select
              id="country"
              className="bg-gray-800 text-white border border-gray-600 rounded-md ml-2 p-1"
            >
              <option>India</option>
            </select>
          </div>
          <div>
            <label htmlFor="language" className="text-gray-400">Language:</label>
            <select
              id="language"
              className="bg-gray-800 text-white border border-gray-600 rounded-md ml-2 p-1"
            >
              <option>English</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
