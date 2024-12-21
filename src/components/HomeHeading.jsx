import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
const HomeHeading = () => {
    const slides = [ 
        {
          id: 1,
          title: "Welcome to VisaGo",
          description: "VisaGo simplifies the process of obtaining visas, providing fast, secure, and easy access to visa information and application services for travelers worldwide.",
          bgImage:
            "https://s3.wns.com/S3_5/Images/Articles/HeaderImage/7064/98/2040.png",
        },
        {
          id: 2,
          title: "Effortless Visa Applications",
          description: "Get your visa approved with ease using our simple, step-by-step application process. Fast, secure, and reliable assistance for your international travels.",
          bgImage:
            "https://www.sabre.com/locations/apac/wp/wp-content/uploads/Framed-Plane-720x415.jpg",
        },
        {
          id: 3,
          title: "Global Reach, Local Support",
          description: "Whether you're traveling for business or leisure, our expert team is here to guide you through every stage of your visa application, wherever you are.",
          bgImage:
            "https://www.aa.com/content/images/homepage/mobile-hero/en_US/Airplane-1.png",
        },
      ];
  return (
    <div>
      <AwesomeSlider bullets={false} style={{ height: "90vh" }}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            style={{
              position: "relative",
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh", 
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
              margin: 0, 
            }}
          >
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)", 
                zIndex: 1,
              }}
            />
            {/* Content */}
            <div className="relative z-20">
              <h1 className="md:text-5xl text-2xl mb-4 px-5 font-bold text-secondary">
                {slide.title}
              </h1>
              <p className="md:text-xl mx-auto max-w-2xl px-5">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default HomeHeading;
