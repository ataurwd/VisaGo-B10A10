import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { ThemeContext } from "../context/Theme";

const LatestVisa = () => {
  const [loading, setLoading] = useState(true);
  const letestVisa = useLoaderData().slice(0, 6);
  const { theme } = useContext(ThemeContext)
  

  return (
    <div>
      <div className="text-center mb-12 lg:w-[60%] mx-auto lg:pt-10 md:mt-8 mt-5 px-5">
        <h1 className={`text-4xl font-bold mb-4 ${theme == 'light' ? 'text-primary' : 'text-white'}`}>
          <Typewriter
            words={["Explore the Latest Visa Opportunities"]}
            loop={true}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={800}
          />
        </h1>
        <p className={`text-lg  dark:text-gray-300 lg:w-[80%] mx-auto ${theme == 'light' ? 'text-gray-600' : 'text-gray-500'}`}>
          Stay updated with the newest visa options tailored to your needs.
          Whether you are planning a vacation, studying abroad, or official
          travel, discover the latest visas and make your journey seamless.
        </p>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:w-[90%] lg:mx-auto lg:my-10 md:my-5 my-4 gap-7 mx-4">
          {letestVisa.map((data) => (
            <div
              key={data._id}
              className=" rounded overflow-hidden shadow-lg dark:bg-gray-800 bg-white"
            >
              {/* Country Image */}
              <img
                className="w-full md:h-60 h-40 object-cover"
                src={data.countryImage}
                alt={`${data.countryName}`}
              />
              {/* Card Content */}
              <div className="px-6 py-4">
                {/* Country Name and Visa Type */}
                <div className={`font-bold text-xl mb-2 text-black`}>
                  {data.countryName}
                </div>
                {/* Details */}
                <ul className="space-y-4 text-base text-black">
                  <li>
                    <strong>Fee:</strong> ${data.fee}
                  </li>
                  <li>
                    <strong>Validity:</strong> {data.validity}
                  </li>
                  <li>
                    <strong>Processing Time:</strong> {data.formatHour}
                  </li>
                  <li>
                    <strong>Application Method:</strong> {data.applicationMethod}
                  </li>
                </ul>
                <div className="my-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">Visa Type</h3>
                  <ul className="list-disc pl-6 text-black dark:text-gray-400">
                    {data.requiredDocuments.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={`/all-visa/${data._id}`}
                  className="bg-custom-gradient px-4 py-2 rounded-md text-white"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      <div className="flex justify-center">
      <Link to={'/all-visa'} className="px-3 py-2 bg-custom-gradient text-white font-bold rounded-md">See all visas</Link>
      </div>
    </div>
  );
};

export default LatestVisa;
