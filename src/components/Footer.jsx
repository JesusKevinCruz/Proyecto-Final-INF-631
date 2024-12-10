import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-50">
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center lg:text-2xl sm:text-1xl">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Jesus. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.facebook.com/kevin.cruzhinojosa/" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fcypaxl" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/JesusKevinCruz/" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;