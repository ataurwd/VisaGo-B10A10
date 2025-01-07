import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-themeDatak text-white py-10 px-6 md:px-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        {/* Website Logo and Info */}
        <div>
          <h2 className="text-2xl font-bold">VisaEase</h2>
          <p className="text-gray-400 mt-2">
            Your trusted partner for all visa-related services.
          </p>
          <p className="text-gray-400 mt-4">
            © {new Date().getFullYear()} VisaEase. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-gray-400" : "hover:text-gray-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-visa"
                className={({ isActive }) =>
                  isActive ? "text-gray-400" : "hover:text-gray-300"
                }
              >
                Add Visa
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-added-visa"
                className={({ isActive }) =>
                  isActive ? "text-gray-400" : "hover:text-gray-300"
                }
              >
                My Added Visas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-visa-application"
                className={({ isActive }) =>
                  isActive ? "text-gray-400" : "hover:text-gray-300"
                }
              >
                My Visa Applications
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-gray-400" : "hover:text-gray-300"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-bold">Follow Us</h3>
          <ul className="mt-4 flex justify-center sm:justify-start space-x-6">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        Designed with ❤️ by{" "}
        <span className="font-bold text-white">AtaurWD</span>
      </div>
    </footer>
  );
};

export default Footer;
