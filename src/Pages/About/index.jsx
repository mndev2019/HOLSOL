import React from 'react'
import aboutusleft from '../../assets/Image/bannerbg.jpg'
// import aboutussecond from '../../assets/Image/aboutsecond.jpg'
import Aboutpresence from './Aboutpresence'


const About = () => {
    return (
        <>
            <section className="lg:px-20 px-5 lg:py-20 py-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Left Side */}
                    <div className="relative">
                        {/* Main Image */}
                        <img src={aboutusleft} alt="About Us" className="rounded-lg " />

                        {/* Green Badge with Yellow Angled Corner */}
                        <div className="absolute top-10 -left-5">
                            <div className="relative bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white px-10 py-6">
                                {/* Circle with 40 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full bg-[#00C6FF] flex items-center justify-center text-4xl font-bold">
                                        25
                                    </div>
                                    <p className="mt-2 text-sm font-medium text-center">Years of Experience</p>
                                </div>

                                {/* Yellow angled corner */}
                                <div className="absolute bottom-0 -left-5 w-0 h-0 
                border-t-[40px] border-t-transparent 
                border-r-[40px] border-r-yellow-500">
                                </div>
                            </div>
                        </div>

                        {/* Small Video Thumbnail (Bottom Right) */}
                        {/* <div className="absolute bottom-5 right-5">
                            <div className="relative w-50 rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={aboutussecond}
                                    alt="Video Thumbnail"
                                    className="w-full h-full object-cover"
                                />
                                <button className="absolute inset-0 flex items-center justify-center">
                                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-green-700 text-xl shadow-lg">
                                    ▶
                                </span>
                            </button>
                            </div>
                        </div> */}
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
                           <li className="flex items-center gap-2 font-semibold text-lg">
    <span className="bg-gradient-to-r from-[#00C6FF] to-[#0047FF] bg-clip-text text-transparent text-xl">✔</span>
    Zero-Risk Solar – First in India to provide 5-year solar insurance on structures & systems.
</li>
<li className="flex items-center gap-2 font-semibold text-lg">
    <span className="bg-gradient-to-r from-[#00C6FF] to-[#0047FF] bg-clip-text text-transparent text-xl">✔</span>
    Tailored Solutions – Custom designs for residential, commercial, and rooftop needs.
</li>
<li className="flex items-center gap-2 font-semibold text-lg">
    <span className="bg-gradient-to-r from-[#00C6FF] to-[#0047FF] bg-clip-text text-transparent text-xl">✔</span>
    Hassle-Free Service – From consultation to maintenance, everything handled end-to-end.
</li>

                        </ul>

                        {/* Button */}
                        <button className="bg-gradient-to-r from-yellow-400 to-orange-500   text-black font-medium px-6 py-3 rounded-md shadow-md hover:bg-yellow-600 transition">
                            Discover More
                        </button>
                    </div>
                </div>
            </section>
            <Aboutpresence />
        </>

    )
}

export default About
