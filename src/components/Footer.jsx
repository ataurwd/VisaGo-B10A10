import React from "react";

const Footer = () => {
  return (
    <footer className="bg-themeDatak text-white py-6 md:px-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        {/* Website Info */}
        <div>
          <h2 className="text-lg font-bold">VisaEase</h2>
          <p className="text-gray-400">
            Your trusted partner for all visa-related services.
          </p>
          <p className="text-gray-400 mt-2">
            © {new Date().getFullYear()} VisaEase. All rights reserved.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-md font-bold">Contact Us</h3>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li>Email: support@visaease.com</li>
            <li>Phone: +1 (234) 567-890</li>
            <li>Address: 123 Main Street, Cityville</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-md font-bold">Follow Us</h3>
          <ul className="mt-2 flex justify-center sm:justify-start space-x-4">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        Designed with ❤️ by <span className="font-bold text-white">AtaurWD</span>
      </div>
    </footer>
  );
};

export default Footer;
