import React from "react";
import { FaHome } from "react-icons/fa";

const Presence = () => {
  const offices = [
    {
      title: "Corporate Office - Rajasthan",
      address:
        "201, Gangasagar - B Amrapali Marg, Nemi Nagar Extension, Nemi Nagar, Vaishali Nagar, Jaipur, Rajasthan 302021",
    },
    {
      title: "Branch Office - Uttar Pradesh",
      address:
        "QVQQ+H9R, Aman Palace, Purani Chungi, Kanpur Road, Lucknow, Uttar Pradesh 226023",
    },
    {
      title: "Branch Office - Maharashtra",
      address:
        "4 and 6, PLOT NO.- 88, 1701, Fairmount, Palm Beach Rd, Sector 17, Sanpada, Navi Mumbai, Maharashtra 400705",
    },
  ];

  return (
    <section className="relative lg:px-20 px-5 lg:py-20 py-14 bg-gradient-to-br from-[#f8fbff] to-[#eef7ff] overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-[#00C6FF]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#0047FF]/20 rounded-full blur-3xl"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h4 className="uppercase text-sm tracking-widest text-gray-600">
          Best Solar Energy Solutions
        </h4>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">
          Our Presence
        </h2>

      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center relative z-10">
        {/* Left side - Glassmorphism Cards */}
        <div className="relative">
          {/* Vertical Gradient Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00C6FF] to-[#0047FF] animate-pulse" />

          <div className="space-y-10">
            {offices.map((office, index) => (
              <div
                key={index}
                className="relative flex gap-6 p-6 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg border border-white/40 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon inside glowing circle */}
                <div className="absolute -left-3 top-6 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white shadow-xl animate-bounce">
                  <FaHome />
                </div>

                {/* Text */}
                <div className="ml-12">
                  <h4 className="font-semibold text-lg text-gray-900">
                    {office.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {office.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Floating Map */}
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:scale-[1.02] transition-all duration-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.245217806453!2d75.73235777525845!3d26.861119576690184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db57add311b17%3A0x7039970c4300422b!2sRS%20group!5e0!3m2!1sen!2sin!4v1726069584863!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="Suntek Office Location"
            className="border-0"
          ></iframe>

          {/* Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Presence;
