import React, { useEffect } from 'react';
import rooftop from '../../assets/Image/newsolarrooftop.jpg';
import commercial from '../../assets/Image/commercial.jpg';
import industrial from '../../assets/Image/industrial (2).jpg';
import solarepc from '../../assets/Image/solarepc.jpg';
import pmsgy from '../../assets/Image/pmsgy.jpg';
import solarkit from '../../assets/Image/solarkit.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Mobileproduct = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

 

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
       
       
    };

    const product = [
        { image: pmsgy, text: "PM Surya Ghar Yojana" },
        { image: rooftop, text: "Solar Rooftop" },
        { image: commercial, text: "Commercial Solutions" },
        { image: industrial, text: "Industrial Solutions" },
        { image: solarepc, text: "Solar EPC Works" },
        { image: solarkit, text: "Solar Kit OEM" },
       
    ];

    return (
        <section className="relative lg:px-20 px-5 py-14 bg-gradient-to-br from-[#f8fbff] to-[#eef7ff] overflow-hidden md:hidden block">
        
            <div className="absolute top-0 -left-20 w-96 h-96 bg-[#00C6FF]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#0047FF]/20 rounded-full blur-3xl"></div>

        
            <div className="text-center mb-10 relative z-10">
                <h4 className="uppercase text-[16px] tracking-widest text-gray-600">
                    Innovative Solar Energy Products
                </h4>
                <h2
                    className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2"
                    data-aos="flip-left"
                >
                    <span className="block">
                        our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF]">
                            products
                        </span>
                    </span>
                </h2>
            </div>

            {/* Slider */}
            <div className="slider-container">
                <Slider {...settings}>
                    {product.map((itm, index) => (
                        <div key={index}>
                            <div className="px-3 relative"> 
                                 {itm.text === "Solar Kit OEM" && (
                                    <span className="absolute top-2 left-4 bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white text-xs px-3 py-1 rounded-full shadow-md z-10">
                                        Ready to Install
                                    </span>
                                )}
                                <img
                                    src={itm.image}
                                    alt={itm.text}
                                    className="h-[250px] w-full object-cover transform hover:-translate-y-2 hover:scale-105 duration-300 cursor-pointer"
                                />
                                <h3 className="text-[20px] text-center mt-3 font-semibold">
                                    {itm.text}
                                </h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Mobileproduct;
