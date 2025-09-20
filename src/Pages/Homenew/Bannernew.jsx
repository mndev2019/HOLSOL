// import React, { useState, useEffect } from "react";
// import { FaFacebookF, FaInstagram } from "react-icons/fa";
// import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";

// // Import your images
// import bannerImg1 from "../../assets/Image/bannerbg.jpg";
// import bannerImg2 from "../../assets/Image/bannercard.png";
// import bannerImg3 from "../../assets/Image/diwalibanner.jpg";
// import bannerImg4 from "../../assets/Image/insurancebanner.jpg";
// import bannerImg5 from "../../assets/Image/industrial.jpg";

// const slides = [
//     {
//         image: bannerImg1,
//         title: "A Legacy for Generations",
//         highlight: "An Empowerment for the Nation",
//         description: "Sustainable, affordable, and renewable solutions for a brighter tomorrow.",
//         button: "Services",
//         link: "/service-detail",
//     },
//     {
//         image: bannerImg2,
//         title: "Loyalty Card",
//         highlight: "₹1,000 Cashback",
//         description: "Enjoy exclusive benefits with our co-branded bank card, offering monthly cashback for up to 10 years.",

//         button: "Services",
//         link: "/service-detail",
//     },
//     {
//         image: bannerImg3,
//         title: "Diwali Offer",
//         highlight: "LED TV / Android Tab",
//         description: "Colour LED TV / Android Tab for every 3rd customer (T&C Apply).",
//         button: "Services",
//         link: "/service-detail",
//     },
//     {
//         image: bannerImg4,
//         title: "Insurance",
//         highlight: "₹1 Lakh Coverage",
//         description: "First time in India — get insurance worth ₹1 Lakh on solar panels and structures for complete peace of mind.",
//         button: "Services",
//         link: "/service-detail",
//     },
//     {
//         image: bannerImg5,
//         title: "Design Approval",
//         highlight: "IIT & MNIT Certified",
//         description: "The Hercules Solar Structure Design is approved by IIT and MNIT, ensuring strength, safety, and reliability.",
//         button: "Services",
//         link: "/service-detail",
//     },
// ];

// const Bannernew = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const navigate = useNavigate();

//     // Auto slide every 6 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % slides.length);
//         }, 6000);
//         return () => clearInterval(interval);
//     }, []);

//     const slide = slides[currentSlide];

//     return (
//         <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
//             {/* Background Images with Fade Animation */}
//             {slides.map((s, index) => (
//                 <div
//                     key={index}
//                     className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out bdt-animation-kenburns ${index === currentSlide ? "opacity-100" : "opacity-0"
//                         }`}
//                     style={{ backgroundImage: `url(${s.image})` }}
//                 ></div>
//             ))}

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/40"></div>

//             {/* Social Icons Left */}
//             <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 text-white text-lg z-10">
//                 <a href="#" className="hover:text-blue-400 transition">
//                     <FaFacebookF />
//                 </a>
//                 <a href="#" className="hover:text-gray-300 transition">
//                     <FaXTwitter />
//                 </a>
//                 <a href="#" className="hover:text-pink-400 transition">
//                     <FaInstagram />
//                 </a>
//             </div>

//             {/* Content */}
//             <div className="relative z-10 text-left text-white max-w-3xl px-8 md:px-16 transition-all duration-1000 ease-in-out">
//                 <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
//                     {slide.title} <br />
//                     <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
//                         {slide.highlight}
//                     </span>
//                 </h1>
//                 <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
//                     {slide.description}
//                 </p>
//                 <div className="flex gap-4">
//                     <button
//                         onClick={() => navigate(slide.link)}
//                         className="group relative flex items-center gap-3 px-5 py-2 rounded-full border border-white/60 text-white font-medium text-lg shadow-lg overflow-hidden transition-all duration-300 hover:bg-white hover:text-black"
//                     >
//                         {slide.button}
//                         <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
//                             <FaArrowRightLong />
//                         </div>
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Bannernew;
import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import bannerImg1 from "../../assets/Image/bannerbg.jpg";
import bannerImg2 from "../../assets/Image/bannerhdfccard.jpg";
import bannerImg3 from "../../assets/Image/diwalitv.png";
import bannerImg4 from "../../assets/Image/insurancebanner.jpg";
import bannerImg5 from "../../assets/Image/industrial.jpg";

const slides = [
  {
    image: bannerImg1,
    title: "A Legacy for Generations",
    highlight: "An Empowerment for the Nation",
    description:
      "Sustainable, affordable, and renewable solutions for a brighter tomorrow.",
    button: "Services",
    link: "/service-detail",
  },
  {
    image: bannerImg2,
    title: "Loyalty Card",
    highlight: "₹1,000 Cashback",
    description:
      "Enjoy exclusive benefits with our co-branded bank card, offering monthly cashback for up to 10 years.",
    button: "Services",
    link: "/service-detail",
  },
  {
    image: bannerImg3,
    title: "Diwali Offer",
    highlight: "LED TV / Android Tab",
    description:
      "Colour LED TV / Android Tab for every 3rd customer (T&C Apply).",
    button: "Services",
    link: "/service-detail",
  },
  {
    image: bannerImg4,
    title: "Insurance",
    highlight: "₹1 Lakh Coverage",
    description:
      "First time in India — get insurance worth ₹1 Lakh on solar panels and structures for complete peace of mind.",
    button: "Services",
    link: "/service-detail",
  },
  {
    image: bannerImg5,
    title: "Design Approval",
    highlight: "IIT & MNIT Certified",
    description:
      "The Hercules Solar Structure Design is approved by IIT and MNIT, ensuring strength, safety, and reliability.",
    button: "Services",
    link: "/service-detail",
  },
];

const Bannernew = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((s, index) => (
          <div
            key={index}
            className="min-w-full h-full bg-cover bg-center relative flex items-center justify-center"
            style={{ backgroundImage: `url(${s.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Social Icons Left */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 text-white text-lg z-10">
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

            {/* Content Centered */}
            <div className="relative z-10 text-left text-white max-w-3xl px-8 md:px-16">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                {s.title} <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {s.highlight}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
                {s.description}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate(s.link)}
                  className="group relative flex items-center gap-3 px-5 py-2 rounded-full border border-white/60 text-white font-medium text-lg shadow-lg overflow-hidden transition-all duration-300 hover:bg-white hover:text-black"
                >
                  {s.button}
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <FaArrowRightLong />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bannernew;
