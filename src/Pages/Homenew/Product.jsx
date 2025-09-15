import React from 'react'
import rooftop from '../../assets/Image/rooftop.jpg'
import commercial from '../../assets/Image/commercial.jpg'
import industrial from '../../assets/Image/industrial (2).jpg'
import solarepc from '../../assets/Image/solarepc (2).jpg'
import pmsgy from '../../assets/Image/pmsgy (2).jpg'
import pmkusum from '../../assets/Image/pm.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Product = () => {
    const NextArrow = ({ onClick }) => (
        <div
            onClick={onClick}
            className="absolute top-1/3 right-[-41px] z-10 cursor-pointer bg-white/80 backdrop-blur-md shadow-lg rounded-full p-3 hover:bg-gradient-to-r from-[#00C6FF] to-[#0047FF] hover:text-white transition transform hover:scale-110"
        >
            <FaChevronRight size={20} />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div
            onClick={onClick}
            className="absolute top-1/3 left-[-41px] z-10 cursor-pointer bg-white/80 backdrop-blur-md shadow-lg rounded-full p-3 hover:bg-gradient-to-r from-[#00C6FF] to-[#0047FF] hover:text-white transition transform hover:scale-110"
        >
            <FaChevronLeft size={20} />
        </div>
    );
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };
    const product = [
        {
            image: pmsgy,
            text: "PMSGY Installation ",
        },
        {
            image: rooftop,
            text: "Solar Rooftop",
        },
        {
            image: commercial,
            text: "Commercial Solutions",
        },
        {
            image: industrial,
            text: "Industrial Solutions",
        },
        {
            image: solarepc,
            text: "Solar EPC",
        },

        {
            image: pmkusum,
            text: "PM KUSUM installations",
        },
    ]
    return (
        <>
            <section className='relative lg:px-20 px-5 lg:py-20 py-14 bg-gradient-to-br from-[#f8fbff] to-[#eef7ff] overflow-hidden'>
                <div className="absolute top-0 -left-20 w-96 h-96 bg-[#00C6FF]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#0047FF]/20 rounded-full blur-3xl"></div>

                <div className="text-center mb-16 relative z-10">
                    <h4 className="uppercase text-sm tracking-widest text-gray-600">
                        Innovative Solar Energy Products
                    </h4>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">

                        <span className="block">
                            our{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF] ">
                                products
                            </span>

                        </span>
                    </h2>

                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {product.map((itm, index) => (
                            <div key={index} className="px-3">

                                <img
                                    src={itm.image}
                                    alt={itm.text}
                                    className="h-[250px] w-full object-cover"
                                />
                                <h3 className="text-[20px] text-center mt-3 font-semibold">
                                    {itm.text}
                                </h3>

                            </div>
                        ))}
                    </Slider>
                </div>



            </section>
        </>
    )
}

export default Product
