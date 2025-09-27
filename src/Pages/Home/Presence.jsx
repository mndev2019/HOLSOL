import React, { useEffect } from "react";
import { PiBuildingOfficeFill } from "react-icons/pi";
import overview from '../../assets/Image/overviewbg.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import AOS from 'aos';
import 'aos/dist/aos.css';
const Presence = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    arrows: false,
    infinite: true,
    pauseOnHover: false,
    vertical: true,
    verticalSwiping: true,
  };


  const offices = [
    {
      title: "Zonal Offices - Lucknow",
      address:
        
         "6/349, Sector - 6, Gomati Nagar , Lucknow , Uttar Pradesh , India , Postal Code 226010  Lucknow India   ",
         

    },
    {
      title: "Zonal Offices - Haryana",
      address:
        "Tosham  Road  Siwani  Mandi  , Pana  Lohdi  , Siwani , Haryana , India , postal code 127046 Siwani Haryana India",
    },
    {
      title: "Zonal Offices - Bathinda",
      address:
        "Guru Sarshanawala, Dabwali Road, Division Bathind -  Sub Division TECH - 2, Bathinda, Punjab - 151001",
    },
    {
      title: "Zonal Offices - Pune",
      address:
        "Office No. 926, Regus, The Platinum Towers, Old Mundhwa Rd, Tukaram Nagar, Kharadi, Pune, Maharashtra 411014",
    },
  ];

  return (
    <section className="relative lg:px-20 px-5 py-14 bg-gradient-to-br from-[#f8fbff] to-[#eef7ff] overflow-hidden" style={{ backgroundImage: `url(${overview})` }}>

      <div className="text-center mb-10 relative z-10">
        <h4 className="uppercase text-sm tracking-widest text-white">
          Best Solar Energy Solutions
        </h4>
        <h2 className="lg:text-4xl text-3xl  font-extrabold text-white mt-2" data-aos="flip-left">
          Our Presence
        </h2>

      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1  gap-10 items-center relative z-10">
        <div className="relative">
          <div
            className="relative flex gap-6 p-5 rounded-2xl bg-white backdrop-blur-md shadow-lg border border-white/40 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 mb-5"
          >
            <div className="absolute -left-3 top-6 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white shadow-xl animate-bounce">
              <PiBuildingOfficeFill />
            </div>
            <div className="ml-8">
              <h4 className="font-semibold text-md text-gray-900">
                Head Office - Jaipur
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed tracking-[0.5px]">
                201, Gangasagar-B, Amarpali Marg, Vaishali Nagar, Jaipur, Rajasthan-302021
              </p>
            </div>
          </div>
          <Slider {...settings}>
            {offices.map((office, index) => (
              <div key={index} className="py-1 px-3">
                <div className="relative flex  p-5 rounded-2xl bg-white backdrop-blur-md shadow-lg border border-white/40 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 ">
                  <div className="absolute -left-3 top-6 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white shadow-xl animate-bounce">
                    <PiBuildingOfficeFill />
                  </div>

                  <div className="ml-8">
                    <h4 className="font-semibold text-md text-gray-900">
                      {office.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed tracking-[0.5px]">
                      {office.address}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed tracking-[0.5px]">
                      {office.postalcode}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

        </div>


        <div className="relative w-full h-[300px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:scale-[1.02] transition-all duration-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.245217806453!2d75.73235777525845!3d26.861119576690184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db57add311b17%3A0x7039970c4300422b!2sRS%20group!5e0!3m2!1sen!2sin!4v1726069584863!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="Suntek Office Location"
            className="border-0"
          ></iframe>

          {/* Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Presence;
