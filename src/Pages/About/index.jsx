import React from 'react'
import { useState } from "react";
import aboutusleft from '../../assets/Image/bannerbg.jpg'
// import aboutussecond from '../../assets/Image/aboutsecond.jpg'
import Aboutpresence from './Aboutpresence'
import Popup from "../../Component/Popup";


const About = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    return (
        <>
            <section className="lg:px-20 px-5 lg:py-20 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-5 items-center">

                    {/* Left Side */}
                    <div className="relative">
                        {/* Main Image */}
                        <img src={aboutusleft} alt="About Us" className="rounded-lg " />

                        <div className="absolute top-10 -left-5">
                            <div className="relative bg-white shadow-xl rounded-2xl lg:px-10 px-3 lg:py-8 py-2 overflow-hidden">
                                {/* Gradient Ring Circle */}
                                <div className="relative flex items-center justify-center">
                                    <div className="lg:w-28 w-18 lg:h-28 h-18 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0047FF] p-[3px]">
                                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                            <span className="lg:text-4xl text-2xl font-extrabold text-[#0047FF]">25</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Text */}
                                <p className="lg:mt-4 mt-2 lg:mb-0 mb-2 text-gray-800 lg:font-bold font-semibold text-center text-base tracking-wide">
                                    Years of Experience
                                </p>

                                {/* Decorative Gradient Bar */}
                                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#00C6FF] to-[#0047FF]"></div>
                            </div>
                        </div>

                    </div>

                    {/* Right Side */}
                    <div>
                        <p className="bg-gradient-to-r from-[#00C6FF] to-[#0047FF] font-medium uppercase tracking-wide mb-2 flex items-center gap-2 bg-clip-text text-transparent">
                            <span className="h-[2px] w-8 bg-gradient-to-r from-[#00C6FF] to-[#0047FF] inline-block"></span>
                            About Us
                        </p>

                        <h2 className="text-3xl lg:text-4xl font-bold leading-snug mb-4">
                            HOLSOL – Powering India’s Smarter Solar Future
                        </h2>
                        <p className="text-gray-600 mb-6">
                            At HOLSOL, we make solar simple, secure, and sustainable. With insured solar solutions, tailored designs, and government-backed subsidies, we help every household and business save more, worry less, and move toward a smarter, greener India.
                        </p>

                        {/* Mission & Vision */}
                        <div className="grid grid-cols-2 gap-6 mb-6">
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                                <p className="text-gray-600 text-sm">
                                    To deliver zero-risk, insured solar solutions that are tailored, affordable, and designed to empower every household, business, and community.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
                                <p className="text-gray-600 text-sm">
                                    To make India the smartest solar-powered nation, leading the world with clean and affordable energy.
                                </p>
                            </div>
                        </div>

                        {/* Checklist */}
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center gap-2 font-semibold lg:text-lg md:text-md text-sm">
                                <span className="bg-gradient-to-r from-[#00C6FF] to-[#0047FF] bg-clip-text text-transparent text-xl">✔</span>
                                Zero-Risk Solar – First in India to provide 5-year solar insurance on structures & systems.
                            </li>
                            <li className="flex items-center gap-2 font-semibold lg:text-lg md:text-md text-sm">
                                <span className="bg-gradient-to-r from-[#00C6FF] to-[#0047FF] bg-clip-text text-transparent text-xl">✔</span>
                                Tailored Solutions – Custom designs for residential, commercial, and rooftop needs.
                            </li>
                            <li className="flex items-center gap-2 font-semibold lg:text-lg md:text-md text-sm">
                                <span className="bg-gradient-to-r from-[#00C6FF] to-[#0047FF] bg-clip-text text-transparent text-xl">✔</span>
                                Hassle-Free Service – From consultation to maintenance, everything handled end-to-end.
                            </li>
                            <li className="flex items-center gap-2 font-semibold lg:text-lg md:text-md text-sm">
                                <span className="bg-gradient-to-r from-[#00C6FF] to-[#0047FF] bg-clip-text text-transparent text-xl">✔</span>
                                Powered by RS Group
                            </li>
                            <li className="flex items-center gap-2 font-semibold lg:text-lg md:text-md text-sm">
                                <span className="bg-gradient-to-r from-[#00C6FF] to-[#0047FF] bg-clip-text text-transparent text-xl">✔</span>
                                Empanelled with PM Surya Ghar Portal
                            </li>

                        </ul>

                        {/* Button */}
                        <button onClick={() => setIsPopupOpen(true)} className="bg-gradient-to-r from-yellow-400 to-orange-500   text-black font-medium px-6 py-3 rounded-md shadow-md hover:bg-yellow-600 transition">
                            Discover More
                        </button>
                    </div>
                </div>
            </section>
            {isPopupOpen && (
                <Popup onClose={() => setIsPopupOpen(false)} />
            )}
            <Aboutpresence />
        </>

    )
}

export default About
