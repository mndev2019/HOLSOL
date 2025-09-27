import { useState } from "react";
import { FaSun, FaBolt, FaSolarPanel, FaArrowRight } from "react-icons/fa";
import Popup from "../../Component/Popup";
// import commercial from '../../assets/Image/commercialsolution.jpg'
// import solarepc from '../../assets/Image/homes.jpg'
// import rooftop from '../../assets/Image/solarrooftop.jpgs'
// import industrial from '../../assets/Image/industrial.jpg'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Innovation = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 800,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     arrows: false,
    //     responsive: [
    //         {
    //             breakpoint: 1024, // tablets
    //             settings: {
    //                 slidesToShow: 2,
    //             },
    //         },
    //         {
    //             breakpoint: 768, // mobile
    //             settings: {
    //                 slidesToShow: 1,
    //             },
    //         },
    //     ],
    // };

    const steps = [
        {
            id: 1,
            icon: <FaSun className="w-12 h-12 text-yellow-400" />,
            title: "Sunlight Collection",
            desc: "Solar panels, also known as photovoltaic (PV) panels, are installed on rooftops or other suitable locations to capture sunlight.",
        },
        {
            id: 2,
            icon: <FaBolt className="w-12 h-12 text-orange-400" />,
            title: "Photon Absorption",
            desc: "When sunlight hits the solar cells, photons (light particles) are absorbed by the semiconductor material.",
        },
        {
            id: 3,
            icon: <FaSolarPanel className="w-12 h-12 text-green-400" />,
            title: "Electron Movement",
            desc: "The energy from the absorbed photons causes electrons to become excited and move through the semiconductor material.",
        },
    ];
    //  const images = [commercial, solarepc, rooftop, industrial];

    return (
        <>
            <section className="py-5 px-6 lg:px-20 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
                {/* Heading */}
                <div className="text-center lg:text-left max-w-2xl mb-10">
                    <div className="flex items-center justify-center lg:justify-start gap-4 ">
                        <h4 className="uppercase text-[16px] tracking-widest text-gray-600">
                            Process
                        </h4>
                        <span className="h-[1px] w-16 bg-gray-600"></span>
                    </div>
                    {/* <h4 className="uppercase text-[16px] tracking-widest text-gray-600">
                        Process
                    </h4> */}
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mt-2">
                        REnergy Innovation
                    </h2>
                    <p className="mt-2 text-gray-700 text-md">
                        The process involves site assessment, system design, installation,
                        grid connection, maintenance, monitoring, and customer support.
                    </p>
                    {/* <button
                        onClick={() => setIsPopupOpen(true)} // 👈 open popup
                        className="mt-2 px-8 py-3 rounded-full border border-gray-900 text-gray-900 font-semibold flex items-center gap-2 hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                        Get in Touch
                        <span>↗</span>
                    </button> */}
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-10 mt-2 relative">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all p-5 flex flex-col items-center text-center relative transform hover:-translate-y-2 hover:scale-105 duration-300"
                        >


                            {/* Icon */}
                            <div className="mb-6">{step.icon}</div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>

                            {/* Description */}
                            <p className="text-gray-600 mt-3">{step.desc}</p>

                            {/* Arrow (except last card) */}
                            {index < steps.length - 1 && (
                                <FaArrowRight className="hidden md:block text-3xl text-gray-600 absolute top-1/2 -right-8 transform -translate-y-1/2" />
                            )}
                        </div>
                    ))}
                </div>

            </section>
            {/* ✅ Popup Component */}
            {isPopupOpen && (
                <Popup onClose={() => setIsPopupOpen(false)} />
            )}

        </>

    );
};

export default Innovation;
