import React from "react";
import Slider from "react-slick";
// import team2 from '../../assets/Image/team.png';
import overview from '../../assets/Image/overviewbg.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ceo from '../../assets/Image/ceo.JPG'
import cfo from '../../assets/Image/cfo.jpeg'
import cmd from '../../assets/Image/cmd.jpeg'
import head from '../../assets/Image/head.jpeg'

const Overview = () => {
    const team = [
        { img: ceo, name: "Mr. Avinash Sharma", role: "CEO" },
        { img: cfo, name: "Mr. Amit Kumar", role: "CFO" },
        { img: cmd, name: "Mr. Ishwar Singh", role: "CMD" },
        { img: head, name: "Mr. Hemant Sharma", role: "Head of Commercial" },
        { img: cfo, name: "Mr. Amit Kumar", role: "CFO" },
        { img: cmd, name: "Mr. Ishwar Singh", role: "CMD" },
    ];

    // Slider settings
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,  // number of visible slides
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
        <section className="w-full" style={{ backgroundImage: `url(${overview})` }}>
            <div className="grid grid-cols-12">
                {/* Left Side */}
                <div className="col-span-4 bg-gradient-to-b from-[#00C6FF] to-[#0047FF] text-white flex items-center px-12 py-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 leading-snug text-white">
                            OVERVIEW OF COMPANY
                        </h2>
                        <p className="text-lg leading-relaxed">
                            HOLSOL Energy Systems Pvt Ltd, in collaboration with RS Group, aims to make India the smartest solar-powered nation, leading the world with clean and affordable energy.
                        </p>

                    </div>
                </div>

                {/* Right Side - Slider */}
                <div className="col-span-8 flex items-center justify-center px-8 py-16">
                    <Slider {...settings} className="w-full">
                        {team.map((member, index) => (
                            <div key={index} className="text-center px-4">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-64 object-cover rounded-lg"
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
