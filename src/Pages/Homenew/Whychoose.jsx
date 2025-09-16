import React, { useEffect } from 'react';
import sun from '../../assets/Image/sun.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Whychoose = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // duration in ms
    }, []);
    const features = [
        "Zero-Risk Solar – 5-year solar insurance on structures & systems",
        "Tailored Solutions – Custom designs for residential, commercial & rooftop needs",
        "Hassle-Free Service – Consultation to maintenance, handled end-to-end",
        "Innovative Technology – Smart and sustainable solar solutions",
        "Holsol, an RS Group company, brings India closer to a greener future with smart, sustainable solar solutions.",
        "Empanelled with PM Surya Ghar Portal"
    ];

    return (
        <section className="w-full py-14 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 relative">
            <img src={sun} className='absolute right-[17px] top-[23px] md:h-auto h-[50px]' style={{ animation: "spin 10s linear infinite" }} />
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl font-bold mb-5 text-black" data-aos="flip-left">
                    Why Choose <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0047FF]'>HOLSOL Energy</span>
                </h2>
                <p className="text-lg mb-8 text-gray-700">
                    We provide innovative, reliable, and sustainable solar solutions tailored to your needs.
                </p>

                {/* Feature Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <span className="bg-gradient-to-r from-[#00C6FF] to-[#0047FF] bg-clip-text text-transparent text-2xl font-bold">✔</span>
                            <p className="text-gray-800 lg:text-md font-[500] text-sm text-start">{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Whychoose;
