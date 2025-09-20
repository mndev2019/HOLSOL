import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurLegacy = () => {
   useEffect(() => {
          AOS.init({ duration: 1000 }); // duration in ms
      }, []);
  return (
    <>
      <section className="relative lg:py-16 py-10 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f0f9ff] via-[#e6f0ff] to-[#d0e4ff]"></div>

          {/* Floating Circles */}
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300 rounded-full opacity-15 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-pink-200 rounded-full opacity-10 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="lg:text-4xl text-3xl font-extrabold text-gray-900 mb-4" data-aos="flip-left">
            <span className="block">
              Our Strength at a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF] ">
                Glance
              </span>

            </span>

          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Trusted by thousands, backed by decades of excellence
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { number: "25+", label: "Years of Legacy", color: "from-blue-400 to-blue-600" },
              { number: "200+", label: "Offices", color: "from-purple-400 to-purple-600" },
              { number: "12,000+", label: "Employees", color: "from-pink-400 to-pink-600" },
              { number: "100+", label: "Service Centers", color: "from-green-400 to-green-600" },
              { number: "500+", label: "Corporate Clients", color: "from-yellow-400 to-yellow-500" },
              { number: "✔", label: "Empaneled in PM Surya Ghar Yojana(Govt. Of India)", color: "from-purple-300 to-purple-700" },
              { number: "✔", label: "Insurance on Solar Panels", color: "from-indigo-400 to-indigo-600" },
              { number: "₹1.2L", label: "Cashback Loyalty Card", color: "from-orange-400 to-orange-500" },
              { number: "✔", label: "Insurance on Solar Structure", color: "from-teal-400 to-teal-600" },
              { number: "✔", label: "IIT & MNIT Approved Solar Structure", color: "from-red-400 to-red-600" },
              
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              >
                {/* Gradient Circle Background */}
                <div className={`absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-tr ${item.color} opacity-30`}></div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.number}</h3>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* <section className="py-16 bg-gradient-to-r from-[#FFF7E5] to-[#F7E8FF]">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Our Legacy & Trust
                    </h2>
                    <p className="mt-2 text-gray-700">
                        25+ years of building excellence, innovation, and reliability
                    </p>


                    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            { number: "25+", label: "Years Legacy", color: "from-[#FF6B6B] to-[#FF8E53]" },
                            { number: "200+", label: "Offices", color: "from-[#6BCB77] to-[#38A169]" },
                            { number: "12,000+", label: "Employees", color: "from-[#4D96FF] to-[#2563EB]" },
                            { number: "100+", label: "Service Centers", color: "from-[#FFD93D] to-[#FBBF24]" },
                            { number: "100+", label: "Corporate Clients", color: "from-[#FF8FA3] to-[#FF5678]" },
                            { number: "✔", label: "Insurance on Solar Panels", color: "from-[#6BCB77] to-[#4ADE80]" },
                            { number: "✔", label: "IIT Approved Designs", color: "from-[#4D96FF] to-[#60A5FA]" },
                            { number: "₹1.2L", label: "Cashback Loyalty Card", color: "from-[#FFB347] to-[#FF7746]" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className={`p-6 rounded-2xl shadow-lg text-white bg-gradient-to-r ${item.color} transform hover:scale-105 transition`}
                            >
                                <h3 className="text-2xl font-bold">{item.number}</h3>
                                <p className="mt-2 text-sm">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}




    </>
  )
}

export default OurLegacy
