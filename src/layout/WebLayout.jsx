import React from "react";
import NavBer from "../components/NavBer";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const WebLayout = () => {
  const navigation = useNavigation();
  const isNavigation = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen">
      {isNavigation ? (
        <div className="flex justify-center items-center h-screen bg-gray-50">
          <Loading />
        </div>
      ) : (
        <>
          <NavBer />
          <main className="min-h-[calc(100vh-285px)] bg-white">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default WebLayout;
