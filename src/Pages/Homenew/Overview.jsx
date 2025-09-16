import React, { useEffect } from "react";
import Slider from "react-slick";
// import team2 from '../../assets/Image/team.png';
import overview from '../../assets/Image/overviewbg.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ceo from '../../assets/Image/ceo.JPG'
import cfo from '../../assets/Image/cfo.jpeg'
import cmd from '../../assets/Image/cmd.jpeg'
import head from '../../assets/Image/head.jpeg'
import operation from '../../assets/Image/headoperation.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Overview = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const team = [
        { img: ceo, name: "Mr. Avinash Sharma", role: "CEO" },
        { img: cfo, name: "Mr. Amit Kumar", role: "CFO" },
        { img: cmd, name: "Mr. Ishwar Singh", role: "CMD" },
        { img: head, name: "Mr. Hemant Sharma", role: "Head of Commercial" },
        { img: operation, name: "Mr Akash Gupta", role: "Head of Operations" },
    ];



    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="w-full lg:px-20 px-5 lg:py-16 py-14" style={{ backgroundImage: `url(${overview})` }}>
            <div className="grid md:grid-cols-12 grid-cols-1 lg:gap-5 gap-0">
                {/* Left Side */}
                <div className="col-span-4  text-white flex items-center" data-aos="fade-right">
                    <div>
                        <h2 className="md:text-3xl text-2xl font-bold md:mb-4 mb-3 leading-snug text-white">
                            OVERVIEW OF COMPANY
                        </h2>
                        <p className="md:text-lg text-sm leading-relaxed lg:mb-0 mb-5">
                            HOLSOL Energy Systems Pvt Ltd, in collaboration with RS Group, aims to make India the smartest solar-powered nation,leading the world with clean and affordable energy.

                        </p>

                    </div>
                </div>

                {/* Right Side - Slider */}
                <div className="col-span-8 flex items-center justify-center ">
                    <Slider {...settings} className="w-full">
                        {team.map((member, index) => (
                            <div key={index} className="text-center px-4">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full lg:h-64 h-[320px] object-cover object-top rounded-lg"
                                />

                                <h3 className="text-white font-bold mt-4">{member.name}</h3>
                                <p className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-sm font-semibold">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Overview;
