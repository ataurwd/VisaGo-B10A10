import React from "react";

const Immigration = () => {
  const data = [
    {
        title: "Apply Online Visa",
      description: "Immigraition Process Responsibility",
      img: "https://i.ibb.co.com/nMtks7w/passport.png",
    },
    {
        title: "Apply Online Visa",
      description: "Quick & Easy Visa Application",
      img: "https://i.ibb.co.com/HPPnCVX/group.png",
    },
    {
        title: "Apply Online Visa",
      description: "Skilled & Professional Consultants",
      img: "https://i.ibb.co.com/BP9wCNv/visa.png",
    },
  ];
  return (
<div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-28 md:px-20 md:my-16 my-5 sm:place-items-center">
  {data.map((item, index) => (
    <div key={index} className="flex items-center space-x-4">
      <img
        className="w-16 h-16 object-cover rounded-lg"
        src={item.img}
        alt={item.title || "Image"}
      />
      <div className="space-y-2">
        <h1 className="text-sm text-gray-500">{item.title}</h1>
        <p className="md:text-2xl text-lg font-semibold">{item.description}</p>
      </div>
    </div>
  ))}
</div>

  );
};

export default Immigration;
