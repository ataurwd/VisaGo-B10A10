import React, { useEffect, useState } from "react";
import HomeHeading from "../components/HomeHeading";
import { Outlet } from "react-router-dom";
import ApplicationProcess from "../components/ApplicationProcess";
import About from "./../components/About";

const Home = () => {


  return (
    <div>

        <div>
          <HomeHeading />
          <Outlet />
          <About />
          <ApplicationProcess />
        </div>
    </div>
  );
};

export default Home;
