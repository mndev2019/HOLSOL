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
const MobileOverview = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const team = [
          { img: cmd, name: "Mr. Ishwar Singh Rathore", role: "CMD & Founder" },
          { img: ceo, name: "Mr. Avinash Sharma", role: "CEO" },
          { img: cfo, name: "Mr. Amit Kumar", role: "CFO" },
          { img: head, name: "Mr. Hemant Sharma", role: " Head Finance" },
          { img: operation, name: "Mr Akash Gupta", role: "Head Operations" },
      ];
  



    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    
    };

    return (
        <section className="w-full lg:px-20 px-5 lg:py-16 py-14 md:hidden block" style={{ backgroundImage: `url(${overview})` }}>
            <div className="grid md:grid-cols-12 grid-cols-1 lg:gap-5 gap-0">
                {/* Left Side */}
                <div className="col-span-4  text-white flex items-center" data-aos="fade-right">
                    <div>
                        <h2 className="md:text-3xl text-2xl font-bold md:mb-4 mb-3 leading-snug text-white">
                            OVERVIEW OF COMPANY
                        </h2>
                        <p className="md:text-lg text-sm leading-relaxed lg:mb-0 mb-5">
                             HOLSOL India Pvt. Ltd. is a green initiative by R S Group in the renewable energy segment.

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

export default MobileOverview;
