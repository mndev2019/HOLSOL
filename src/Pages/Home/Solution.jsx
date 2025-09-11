import React from "react";
import homesImg from "../../assets/Image/homes.jpg"
import societyImg from "../../assets/Image/housing.jpg";
import commercialImg from "../../assets/Image/commercialsolution.jpg";

const Solution = () => {
  const solutions = [
    { img: homesImg, label: "Homes" },
    { img: societyImg, label: "Housing Society" },
    { img: commercialImg, label: "Commercial" },
  ];

  return (
    <section
      className="lg:px-20 px-5 lg:py-14 py-8"
      style={{ background: "linear-gradient(90.16deg, #0070c5 -15.84%, #11111c 122.54%)" }}
    >
      <h3 className="text-[2em] font-bold text-white py-3 text-center">
        Our Solar Solutions
      </h3>

      <div className="flex flex-col lg:flex-row gap-6 mt-8 justify-center">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-[#192e5b] rounded-xl overflow-hidden shadow-lg flex-1 max-w-sm mx-auto"
          >
            <img
              src={solution.img}
              alt={solution.label}
              className="w-full h-64 object-cover"
            />
            <h4 className="text-center text-white font-semibold text-lg py-4">
              {solution.label}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solution;
