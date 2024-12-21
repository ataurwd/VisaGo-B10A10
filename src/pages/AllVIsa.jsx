import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import Loading from "../components/Loading";

const AllVisa = () => {
  const allVisaData = useLoaderData();
  const [filter, setFilter] = useState("");

  // Filter visas based on selected visa type
  const filteredVisas = allVisaData.filter(
    (visa) => !filter || visa.visaType === filter
  );

  return (
    <div>
      <Helmet>
        <title>Visa Ease | All Visa</title>
      </Helmet>

        <div>
          {/* Filter Dropdown */}
          <div className="md:w-[20%] w-[40%] lg:pl-[6vw] lg:mt-10 pl-3">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full p-2 border border-primary rounded"
            >
              <option value="">All</option>
              <option value="Tourist">Tourist Visa</option>
              <option value="Student">Student Visa</option>
              <option value="Official">Official Visa</option>
              <option value="Business">Business Visa</option>
              <option value="Transit">Transit Visa</option>
            </select>
          </div>

          {/* Visa Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:w-[90%] mx-auto lg:my-10 md:my-5 my-4 lg:gap-7 gap-4 p-3">
            {filteredVisas.length > 0 ? (
              filteredVisas.map((data) => (
                <div
                  key={data?._id || "N/A"}
                  className="rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800"
                >
                  <img
                    className="w-full md:h-60 h-40 object-cover"
                    src={data?.countryImage || "N/A"}
                    alt={data?.countryName || "N/A"}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-gray-800 dark:text-white">
                      {data?.countryName || "N/A"} - {data?.visaType || "N/A"}{" "}
                      Visa
                    </div>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 mb-3">
                      <li>
                        <strong>Fee:</strong> ${data?.fee || "N/A"}
                      </li>
                      <li>
                        <strong>Validity:</strong> {data?.validity || "N/A"}
                      </li>
                      <li>
                        <strong>Application Method:</strong>{" "}
                        {data?.applicationMethod || "N/A"}
                      </li>
                    </ul>
                    <Link
                      to={`/all-visa/${data?._id || "N/A"}`}
                      className="bg-custom-gradient custom-btn text-white"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <h1>No data found</h1>
            )}
          </div>
        </div>
    </div>
  );
};

export default AllVisa;
