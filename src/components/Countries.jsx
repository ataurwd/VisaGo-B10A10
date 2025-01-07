import React from "react";

const countries = [
  {
    name: "Australia",
    img: "https://wp2022.kodesolution.com/vizox/wp-content/uploads/2022/12/flag-1.jpg",
  },
  {
    name: "Germany",
    img: "https://wp2022.kodesolution.com/vizox/wp-content/uploads/2022/12/f1-150x150.png",
  },
  {
    name: "Brazil",
    img: "https://wp2022.kodesolution.com/vizox/wp-content/uploads/2022/12/f2-150x150.png",
  },
  {
    name: "Russia",
    img: "https://wp2022.kodesolution.com/vizox/wp-content/uploads/2022/12/f4-150x150.png",
  },
  {
    name: "Saudi Arabia",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1200px-Flag_of_Saudi_Arabia.svg.png",
  },
  {
    name: "United Kingdom",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
  },
];

const CountryCard = ({ country }) => (
  <div className="bg-white shadow-md p-4 rounded-md flex flex-col items-center text-center">
    <img
      src={country.img}
      alt={country.name}
      className="w-24 h-24 object-cover rounded-full mb-4"
    />
    <h4 className="text-xl font-semibold mb-2">{country.name}</h4>
    <p className="text-gray-600">{country.details}</p>
  </div>
);

const CountriesSection = () => {
  return (
    <section className="bg-primary py-16 px-4" style={{backgroundImage: 'url(https://wp2022.kodesolution.com/vizox/wp-content/uploads/2023/01/lines-waves1.png)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h6 className="text-lg text-gray-500 font-semibold uppercase">
            Countries we offer
          </h6>
          <h2 className="text-3xl font-bold text-secondary">
            Countries We Support for Immigration
          </h2>
          <div className="w-16 h-1 bg-gray-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
