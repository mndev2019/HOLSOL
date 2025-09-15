import React from 'react';

const Whychoose = () => {
    const features = [
        "Zero-Risk Solar – 5-year solar insurance on structures & systems",
        "Tailored Solutions – Custom designs for residential, commercial & rooftop needs",
        "Hassle-Free Service – Consultation to maintenance, handled end-to-end",
        "Innovative Technology – Smart and sustainable solar solutions",
    ];

    return (
        <section className="w-full py-20 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-4xl font-bold mb-8 text-black">
                    Why Choose <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#0047FF]'>HOLSOL Energy</span> 
                </h2>
                <p className="text-lg mb-12 text-gray-700">
                    We provide innovative, reliable, and sustainable solar solutions tailored to your needs.
                </p>

                {/* Feature Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <span className="bg-gradient-to-r from-[#00C6FF] to-[#0047FF] bg-clip-text text-transparent text-2xl font-bold">✔</span>
                            <p className="text-gray-800 font-semibold">{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Whychoose;
