import React from "react";
import bannerImg from "../../assets/Image/bannerbg.jpg";

const Banner = () => {
  return (
    <section
      className="relative h-[80vh]  bn  w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Overlay shade */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-2xl px-4">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Power Your Future with Solar Energy
        </h1>
        <p className="text-lg lg:text-xl mb-6">
          Sustainable, affordable, and renewable solutions for a brighter tomorrow.
        </p>
        <button className="px-6 py-3 bg-[var(--primary)] hover:bg-blue-700 transition rounded-lg font-semibold">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Banner;
