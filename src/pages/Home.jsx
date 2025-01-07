import React, { useEffect, useState } from "react";
import HomeHeading from "../components/HomeHeading";
import { Outlet } from "react-router-dom";
import ApplicationProcess from "../components/ApplicationProcess";
import About from "./../components/About";
import BuyerReview from "../components/BuyerReview";
import Immigration from "../components/Immigration";
import CountriesSection from "../components/Countries";

const Home = () => {
  return (
    <div>
      <div>
        <HomeHeading />
        <Immigration/>
        <Outlet />
        <About />
        <ApplicationProcess />
        <CountriesSection/>
        <BuyerReview />
      </div>
    </div>
  );
};

export default Home;
