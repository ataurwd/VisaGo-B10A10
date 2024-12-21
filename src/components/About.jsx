import React, { useContext } from "react";
import Lottie from "lottie-react";
import AboutAninmation from "../../src/lottie/about.json";
import { ThemeContext } from "../context/Theme";

const About = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className="flex items-center justify-center p-6">
      <div className="max-w-screen-lg w-full p-8">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Heading Text */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 flex flex-col justify-center">
            <h1 className={`text-3xl font-bold mb-4 ${theme == "dark" ? 'text-white' : ''}`}>About Us</h1>
            <p className={`text-lg ${theme == 'dark' ? 'text-gray-400' : ''}`}>
              We are a passionate team committed to delivering the best user
              experiences through innovative solutions. Our expertise spans web
              development, UI/UX design, and cutting-edge technologies to help
              businesses grow and thrive.
            </p>
          </div>

          {/* Right Side: Demo Image (Lottie Animation) */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <Lottie animationData={AboutAninmation} loop={true} className="h-96" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
