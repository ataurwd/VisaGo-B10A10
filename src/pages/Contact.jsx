import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-200 via-emerald-500 to-emerald-700 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-center text-lg mb-12">
          Feel free to get in touch! Connect with Us or send a message below.
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section: Contact Details */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <p className="text-lg">
              We love to hear from you! Whether you have a question or just
              want to say hi, Our inbox is always open.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="w-8 h-8 flex items-center justify-center bg-white text-emerald-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 7v5m0 0h-4m4 0h4"
                    />
                  </svg>
                </span>
                <span>
                  Email:{" "}
                  <a
                    href="mailto:ataur@example.com"
                    className="hover:underline"
                  >
                    ataurrahman24707@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="w-8 h-8 flex items-center justify-center bg-white text-emerald-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h11m-9 4h5m4 4h-5a4 4 0 01-4-4V5a4 4 0 014-4h3a4 4 0 014 4v7a4 4 0 01-4 4z"
                    />
                  </svg>
                </span>
                <span>
                  Phone:{" "}
                  <a href="tel:+1234567890" className="hover:underline">
                    +88 01723025991
                  </a>
                </span>
              </div>
              <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9120431.442599641!2d-15.010438734450643!3d54.102608694230064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e1!3m2!1sen!2sbd!4v1736242867821!5m2!1sen!2sbd" width="450" height="220" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Send a Message
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="Type your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-400 to-emerald-700 text-white py-2 px-4 rounded-md hover:opacity-90 transition duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;