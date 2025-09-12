// import React from "react";
// // import bannerImg from "../../assets/Image/bannerbg.jpg";
// import bannerImg from "../../assets/Image/newbanner.jpg";

// const Bannernew = () => {
//     return (
//         <section className="relative h-[80vh] w-full flex items-center justify-start overflow-hidden">
//             {/* Background Image */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center bdt-animation-kenburns"
//                 style={{ backgroundImage: `url(${bannerImg})` }}
//             ></div>

//             {/* Overlay shade */}
//             <div className="absolute inset-0 bg-black/30"></div>

//             {/* Content */}
//             <div className="relative z-10 text-left text-white max-w-3xl px-8 md:px-16">
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
//                     Power Your Future with <br />
//                     {/* <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
//             Solar Energy
//           </span> */}
//                     <span className="bg-gradient-to-r from-[#00C6FF] to-[#0047FF] bg-clip-text text-transparent">
//                         Solar Energy
//                     </span>
//                 </h1>
//                 <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
//                     Sustainable, affordable, and renewable solutions for a brighter tomorrow.
//                 </p>
//                 <div className="flex gap-4">
//                     <button className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[var(--primary)] to-blue-600 shadow-lg hover:scale-105 transition">
//                         Learn More
//                     </button>
//                     <button className="px-6 py-3 rounded-xl font-semibold border border-white/70 hover:bg-white hover:text-black transition">
//                         Get Started
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Bannernew;
import React from "react";
import { FaFacebookF, FaInstagram, FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6"; // For X (Twitter)
import bannerImg from "../../assets/Image/bannerbg.jpg";
// import bannerImg from "../../assets/Image/newbanner.jpg";

const Bannernew = () => {
    return (
        <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bdt-animation-kenburns"
                style={{ backgroundImage: `url(${bannerImg})` }}
            ></div>

            {/* Overlay shade */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Social Icons Left */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-white text-lg z-10">
                <a href="#" className="hover:text-blue-400 transition">
                    <FaFacebookF />
                </a>
                <a href="#" className="hover:text-gray-300 transition">
                    <FaXTwitter />
                </a>
                <a href="#" className="hover:text-pink-400 transition">
                    <FaInstagram />
                </a>
            </div>

            {/* Content Center-Left */}
            <div className="relative z-10 text-left text-white max-w-3xl px-8 md:px-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                    Power Your Future with <br />
                    {/* <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                               Solar Energy
                              </span> */}
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                        Solar Energy
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
                    Sustainable, affordable, and renewable solutions for a brighter tomorrow.
                </p>
                <div className="flex gap-4">
                    <button className="group relative flex items-center gap-3 px-5 py-2 rounded-full border border-white/60 text-white font-medium text-lg shadow-lg overflow-hidden transition-all duration-300 hover:bg-white hover:text-black">
                        Services
                        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                          <FaArrowRightLong />
                        </div>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Bannernew;
