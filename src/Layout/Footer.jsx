import { FaAngleRight, FaArrowUp, FaGift } from "react-icons/fa";
import logo from "../assets/Image/newlogocolored.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            from-[#00C6FF] to-[#6889dd] text-white font-semibold 
            py-3 px-6 rounded-lg w-full">
              <FaGift className="text-xl" />
              <span>Refer & Earn</span>
            </div>

            <p className="mt-3 text-gray-300 text-sm text-center md:text-left">
              Invite your friends and earn rewards for every successful referral!
            </p>


          


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
