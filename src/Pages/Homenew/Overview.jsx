import React from "react";
import Slider from "react-slick";
import team2 from '../../assets/Image/team.png';
import overview from '../../assets/Image/overviewbg.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Overview = () => {
    const team = [
        { img: team2, name: "Ishwar Singh", role: "Managing Director" },
        { img: team2, name: "Ishwar Singh", role: "Managing Director" },
        { img: team2, name: "Ishwar Singh", role: "Managing Director" },
        { img: team2, name: "Ishwar Singh", role: "Managing Director" },
        { img: team2, name: "Ishwar Singh", role: "Managing Director" },
        { img: team2, name: "Ishwar Singh", role: "Managing Director" },
    ];

    // Slider settings
    const settings = {
        arrows:false,
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
                        <h2 className="text-3xl font-bold mb-4 leading-snug bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                            OVERVIEW OF COMPANY
                        </h2>
                        <p className="text-lg leading-relaxed">
                            HOLSOL Energy Systems Pvt Ltd aims to make India the smartest solar-powered nation, leading the world with clean and affordable energy.
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
