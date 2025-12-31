import { FaAngleRight, FaArrowUp, FaGift } from "react-icons/fa";
import logo from "../assets/Image/newlogocolored.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fireworks from '../assets/Image/happy-new-year.png'
import Popup from "../Component/Popup";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {
        isPopupOpen && (
          <Popup immediateOpen={true} onClose={() => setIsPopupOpen(false)} />
        )
      }
      <footer className="bg-black text-gray-200 py-10 px-6 lg:px-20 relative">
        {/* Scroll To Top */}
        {isVisible && (
          <div
            onClick={scrollToTop}
            className="items-center justify-center flex w-[40px] h-[40px] 
          rounded-full text-white bg-gradient-to-r from-[#00C6FF] to-[#0047FF] 
          fixed right-[13px] bottom-[35px] z-50 shadow-lg cursor-pointer"
          >
            <FaArrowUp />
          </div>
        )}

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="logo" className="h-[45px]" />
            <p className="text-gray-300 text-sm mt-2">
              HOLSOL India Pvt. Ltd. is a green initiative by R S Group in the renewable energy segment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2 hover:text-white">
                <FaAngleRight className="text-[var(--primary)]" />
                <Link to="/">Home</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-white">
                <FaAngleRight className="text-[var(--primary)]" />
                <Link to="/about">About Us</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-white">
                <FaAngleRight className="text-[var(--primary)]" />
                <Link to="https://rs-group.co.in/">RS Group</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-white">
                <FaAngleRight className="text-[var(--primary)]" />
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2 hover:text-white">
                <FaAngleRight className="text-[var(--primary)]" />
                <Link to="/blog-detail">Blog</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-white">
                <FaAngleRight className="text-[var(--primary)]" />
                <Link to="/warranty-policy">Warranty Policy</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-white">
                <FaAngleRight className="text-[var(--primary)]" />
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-white">
                <FaAngleRight className="text-[var(--primary)]" />
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-white">
                <FaAngleRight className="text-[var(--primary)]" />
                <Link to="/usage-policy">Website Usage Policy</Link>
              </li>
            </ul>
          </div>

          {/* Refer & Earn */}
          <div className="flex flex-col justify-start items-center md:items-start">
            <div className="flex items-center gap-3 bg-gradient-to-r 
            from-[#00C6FF] to-[#0047FF] text-white font-semibold 
            py-3 px-6 rounded-lg w-full">
              <FaGift className="text-xl" />
              <span>Refer & Earn</span>
            </div>

            <p className="mt-3 text-gray-300 text-sm text-center md:text-left">
              Invite your friends and earn rewards for every successful referral!
            </p>

            {/* 🎁 Christmas Button (ADDED) */}
            {/* <div
              onClick={() => {
                setIsPopupOpen(false);
                setTimeout(() => setIsPopupOpen(true), 0);
              }}
              className="cursor-pointer mt-4 w-full flex items-center gap-4
            bg-[#0a1224]
             border border-[#facc15]/60
            rounded-xl px-5 py-4
            shadow-[0_0_30px_rgba(250,204,21,0.35)]
            transition hover:scale-[1.02]">

            
              <div

                className="flex items-center justify-center 
               w-12 h-12 rounded-full 
                     bg-white ring-2 ring-[#facc15]">
                <img
                  src={tree}
                  alt="Christmas Tree"
                  className="w-7 h-7 object-contain"
                />
              </div>

             
              <div className="text-left">
                <p className="text-sm font-semibold text-white">
                  Merry Christmas
                </p>
                <p className="text-xs text-gray-300">
                  Warm wishes from{" "}
                  <span className="text-[#facc15] font-semibold">
                    HOLSOL
                  </span>
                </p>
              </div>
            </div> */}
            <div
              onClick={() => {
                setIsPopupOpen(false);
                setTimeout(() => setIsPopupOpen(true), 0);
              }}
              className="cursor-pointer mt-4 w-full flex items-center gap-4
  bg-[linear-gradient(135deg,#0f2027,#203a43,#2c5364)]
  border border-[#60a5fa]/60
  rounded-xl px-5 py-4
  shadow-[0_0_35px_rgba(96,165,250,0.45)]
  transition hover:scale-[1.02]"
            >

              {/* Icon Badge */}
              <div
                className="flex items-center justify-center 
    w-12 h-12 rounded-full 
    bg-white/90 ring-2 ring-[#60a5fa] shadow-md"
              >
                <img
                  src={fireworks}  
                  alt="New Year"
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Text */}
              <div className="text-left">
                <p className="text-sm font-semibold text-white">
                  Happy New Year 2026 🎉
                </p>
                <p className="text-xs text-gray-300">
                  Cheers to new beginnings with{" "}
                  <span className="text-[#60a5fa] font-semibold">
                    HOLSOL
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} HOLSOL India. All rights reserved.
          <br />
          Developed by{" "}
          <a
            href="https://ramot.cloud/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Ramot.cloud
          </a>
        </div>
      </footer>
    </>


  );
};

export default Footer;
