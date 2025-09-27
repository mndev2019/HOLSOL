import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import bannerImg1 from "../../assets/Image/bannerbg.jpg";
import desktopcardimage from "../../assets/Image/redcardbanner.png";
import mobilecardimage from "../../assets/Image/mobileviewloyalcard.jpg";
import bannerImg4 from "../../assets/Image/insurancehand.png";
import bannerImg5 from "../../assets/Image/industrial.jpg";
import Popup from "../../Component/Popup";

const slides = [
  {
    image: bannerImg1,
    title: "A LEGACY FOR GENERATIONS",
    highlight: "AN EMPOWERMENT FOR THE NATION",
    description:
      "Sustainable, affordable, and renewable solutions for a brighter tomorrow.",
    button: "Services",
    link: "/service-detail",
    type: "link",
  },
  {
    // image: bannerImg2,
    image: desktopcardimage, 
    mobileImage: mobilecardimage,  
    title: "",
    // highlight: "₹1,000 Cashback",
    highlight: "Loyalty Card",
    description:
      "₹1,20,000 Cashback. Enjoy exclusive benefits with our co-branded bank card, offering ₹1,000 cashback per month for up to 10 years",
    button: "Services",
    link: "/service-detail",
    type: "link",
  },
  // {
  //   image: bannerImg3,
  //   title: "Diwali Offer",
  //   highlight: "LED TV / Android Tab",
  //   description:
  //     "Colour LED TV / Android Tab for every 3rd customer (T&C Apply).",
  //   button: "Services",
  //   link: "/service-detail",
  // },
  {
    image: bannerImg4,
    title: "Insurance",
    highlight: "₹1 Lakh Coverage",
    description:
      "First time in India — get insurance worth ₹1 Lakh on solar panels and structures for complete peace of mind.",
    button: "Get a Quote",
    type: "popup",
  },
  {
    image: bannerImg5,
    title: "Design Approval",
    highlight: "IIT & MNIT Certified",
    description:
      "The Hercules Solar Structure Design is approved by IIT and MNIT, ensuring strength, safety, and reliability.",
    button: "Services",
    link: "/service-detail",
    type: "link",
  },
];

const Bannernew = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 sm:flex hidden items-center justify-center w-9 h-9 rounded-full bg-white/30 text-white cursor-pointer hover:bg-white/50 transition"
        onClick={onClick}
      >
        <FaArrowRightLong className="text-lg" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 sm:flex hidden items-center justify-center w-9 h-9 rounded-full bg-white/30 text-white cursor-pointer hover:bg-white/50 transition"
        onClick={onClick}
      >
        {/* rotate the arrow for left */}
        <FaArrowRightLong className="text-lg rotate-180" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <section className="relative md:h-[100vh] h-auto w-full overflow-hidden md:block hidden">
        <Slider {...settings} className="h-full">
          {slides.map((s, index) => (
            <div key={index} className="relative  md:h-[100vh] h-[400px]">
              {/* Background Image */}
              <div
                className={`h-full w-full  bg-center bg-no-repeat  bg-cover flex items-center overflow-hidden ${index === 0 ? " bdt-animation-kenburns" : ""
                  } ${index === 1 ? "md:pl-8" : index === 2 ? "justify-end" : "justify-center"}`}
                style={{ backgroundImage: `url(${s.image})` }}
                // style={{
                //   backgroundImage: `url(${window.innerWidth >= 768 ? s.image : s.mobileImage
                //     })`,
                // }}
              >


                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Social Icons Left */}
                <div className="absolute left-15 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 text-white text-lg z-10">
                  <a href="#" className="hover:text-blue-400 transition">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="hover:text-gray-300 transition">
                    <FaXTwitter />
                  </a>
                  <a href=" https://www.instagram.com/holsol.india/#" target="_blank" className="hover:text-pink-400 transition">
                    <FaInstagram />
                  </a>
                </div>

                {/* Content Centered */}
                <div className="relative z-10 text-left text-white max-w-3xl px-8 md:px-16 md:py-0 py-10">
                  <h1 className={`text-3xl  md:text-5xl font-bold leading-tight md:mb-6 mb-4 ${index === 2 ? "sm:text-[#6c4d47] text-white" : "text-white"}`}>
                    {s.title} <br />
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      {s.highlight}
                    </span>
                  </h1>
                  <p className="text-md md:text-xl text-gray-200 mb-8 max-w-xl">
                    {s.description}
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        if (s.type === "popup") {
                          setShowPopup(true);
                        } else {
                          navigate(s.link);
                        }
                      }}
                      className={`group relative flex items-center gap-3 sm:px-5 px-4 sm:py-2 py-2 rounded-full border   font-medium sm:text-lg text-md shadow-lg overflow-hidden transition-all duration-300 hover:bg-white hover:text-black
                    ${index === 2 ? "sm:text-[#6c4d47] text-white sm:border-[#6c4d47] border-white hover:border-white/60" : " border-white/60"}`}>
                      {s.button}
                      <div className="flex items-center justify-center sm:w-9 w-7 sm:h-9 h-7 rounded-full bg-white text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                        <FaArrowRightLong />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      {showPopup &&
        <Popup onClose={() => setShowPopup(false)} />
      }

    </>

  );
};

export default Bannernew;
