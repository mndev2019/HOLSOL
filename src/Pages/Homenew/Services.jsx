import React, { useEffect } from "react";
import Slider from "react-slick";
import service from "../../assets/Image/servicebg.jpg";
// import inatallation from '../../assets/Image/installation.png';
// import maintenance from '../../assets/Image/maintenanace.png';
// import design from '../../assets/Image/design.png';
// import energy from '../../assets/Image/energyconsulting.png';
// import Financing from '../../assets/Image/financing.png';
import intallation from '../../assets/Image/intallation.jpg'
import energy from '../../assets/Image/energy.jpg'
import loyalty from '../../assets/Image/loyalty.jpg'
import maintenanace from '../../assets/Image/maintenanace.jpg'
import financing from '../../assets/Image/finanacing.jpg'
import systemdesign from '../../assets/Image/systemdesign.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const services = [
    {
        title: "High Yield Products",
        description:
            "1KW – 15KW energy-saving rooftop systems",
        img: intallation,
    },
    {
        title: "IIT Approved Designs",
        description:
            "Hercules HDG GI structure design (IIT approved).",
        img: systemdesign,
    },
    {
        title: "Insured Panels & Structure",
        description:
            "Only company to provide insurance cover.",
        img: energy,
    },
    {
        title: "Loyalty Cashback Card",
        description:
            "First reward program in India offering ₹1,000 cashback per month up to 10 years.",
        img: loyalty
        ,
    },
    {
        title: "Maintenance-Free Period",
        description:
            "Zero maintenance cost for 5 years post-installation.",
        img: maintenanace,
    },
    {
        title: "Fast & Easy Finance",
        description:
            "Loan facility with easy EMI options.",
        img: financing,
    },

];

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // duration in ms
    }, []);
    const navigate = useNavigate();
    const NextArrow = ({ onClick }) => (
        <div
            onClick={onClick}
            className="absolute top-1/2 right-[-41px] z-10 cursor-pointer bg-white/80 backdrop-blur-md shadow-lg rounded-full p-2 hover:bg-gradient-to-r from-[#00C6FF] to-[#0047FF] hover:text-white transition transform hover:scale-110"
        >
            <FaChevronRight size={15} />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div
            onClick={onClick}
            className="absolute top-1/2 left-[-41px] z-10 cursor-pointer bg-white/80 backdrop-blur-md shadow-lg rounded-full p-2 hover:bg-gradient-to-r from-[#00C6FF] to-[#0047FF] hover:text-white transition transform hover:scale-110"
        >
            <FaChevronLeft size={15} />
        </div>
    );
    const settings = {
        arrows: true, // enable arrows on desktop
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, arrows: true } // arrows visible
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, arrows: true } // arrows visible
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, arrows: false } // hide arrows on mobile
            }
        ]
    };


    return (
        <section
            className="lg:px-20 px-5 lg:py-20 py-14 bg-gray-50 md:block hidden"
            style={{ backgroundImage: `url(${service})` }}
        >
            <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-4">
                    <h4 className="uppercase text-[16px] tracking-widest text-gray-600">
                        Services
                    </h4>
                    <span className="h-[1px] w-16 bg-gray-600"></span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2" data-aos="flip-left">
                    Our Offering in {" "}
                    <span className="block">

                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF]">
                            Solar Rooftop
                        </span>

                    </span>
                </h2>
            </div>



            <Slider {...settings}>
                {services.map((srv, index) => (
                    <div key={index} className="px-3 h-full">
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center 
             hover:shadow-xl transition-all duration-500 min-h-[400px] 
             hover:bg-gradient-to-r from-[#00C6FF] to-[#0047FF] group"
                        >
                            {/* Circle Image with Green Border */}
                            {/* Gradient Border Wrapper */}
                            <div className="p-[4px] rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0047FF] mb-6">
                                <div className="w-[150px] h-[150px] rounded-full overflow-hidden bg-white">
                                    <img
                                        src={srv.img}
                                        alt={srv.title}
                                        className="rounded-full object-cover transition-all duration-500 group-hover:scale-105 w-[150px] h-[150px]"
                                    />
                                </div>
                            </div>



                            {/* Title */}
                            <h3 className="text-lg font-bold text-gray-900 mb-3 transition-all duration-500 group-hover:text-white">
                                {srv.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm tracking-[0.5px] mb-6 transition-all duration-500 group-hover:text-white">
                                {srv.description}
                            </p>

                            {/* Button */}
                            <button onClick={() => navigate('/service-detail')} className="w-12 h-12 flex items-center justify-center rounded-full 
                     bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white 
                     transition-all duration-500 group-hover:bg-white group-hover:text-[#0047FF]">
                                ↗
                            </button>
                        </div>

                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Services;
