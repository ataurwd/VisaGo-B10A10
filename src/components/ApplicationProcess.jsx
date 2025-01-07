import React, { useContext } from "react";
import Lottie from "lottie-react";
import Animation from "../../src/lottie/firstAnimation.json";
import { Typewriter } from "react-simple-typewriter";
import { ThemeContext } from "../context/Theme";

const ApplicationProcess = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`${theme === 'dark' ? 'bg-themeDatak' : ''}`}>
      <div className="text-center pb-12 lg:w-1/2 mx-auto lg:pt-10 md:pt-8 pt-5 p-3">
        <h1 className={`text-4xl font-bold mb-4 ${theme == 'light' ? 'text-primary' : 'text-white'}`}>
            <Typewriter
              className="text-4xl font-bold mb-4 text-primary"
              words={["Our application process"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={800}
            />
        </h1>
        <p className={`text-lg  dark:text-gray-300 ${theme == 'light' ? 'text-gray-600' : 'text-gray-500'}`}>
          Our streamlined application process is designed to make your visa
          journey effortless. From initial inquiry to final approval, we guide
          you every step of the way, ensuring a smooth and hassle-free
          experience.
        </p>
      </div>
      <div className="flex flex-col w-[80%] mx-auto lg:flex-row items-center gap-8 py-12">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="flex items-start gap-4">
            <div
              className="bg-secondary border-primary border-2 text-black font-bold text-xl flex items-center
             justify-center w-[75px] h-14 rounded-full"
            >
              01
            </div>
            <div>
              <h6 className="text-lg font-semibold">Apply</h6>
              <p  className={`${
                    theme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}>
                Answer some initial information, make your payment, and provide
                some final information.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div
              className="bg-secondary border-primary border-2 text-black font-bold text-xl flex items-center
             justify-center w-[109px] h-14 rounded-full"
            >
              02
            </div>
            <div>
              <h6 className="text-lg font-semibold">Leave the rest to us</h6>
              <p  className={`${
                    theme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}>
                Get easy access to your document via email. If an embassy
                appointment is required to get your document, we’ll schedule it
                for you.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-secondary border-primary border-2 text-black font-bold text-xl flex items-center justify-center w-[70px] h-14 rounded-full">
              03
            </div>
            <div>
              <h6 className="text-lg font-semibold">Enjoy your visit!</h6>
              <p  className={`${
                    theme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}>
                Be ready to show your passport and document when you land at
                your destination.
              </p>
            </div>
          </div>

          <div>
            <button className="btn bg-custom-gradient text-white flex items-center gap-2">
              Apply Now
              <svg
                className="w-4 h-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className=" w-auto mx-auto">
          <Lottie animationData={Animation} loop={true} className="h-96" />
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;
