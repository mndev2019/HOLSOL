import { FaAngleRight, FaArrowUp, FaGift } from "react-icons/fa";
// import Logo from "../assets/Image/newlogo.jpeg";
import logo from '../assets/Image/newlogocolored.png'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-black text-gray-200 py-10 px-6 lg:px-20 relative">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="items-center justify-center flex w-[40px] h-[40px] 
                     rounded-full text-white bg-gradient-to-r from-[#00C6FF] to-[#0047FF] 
                     fixed right-[13px] bottom-[35px] z-50 shadow-lg cursor-pointer 
                     transition-opacity duration-300"
        >
          <FaArrowUp />
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          {/* <img src={Logo} alt="Truzon Solar" className="w-40 mb-4" /> */}
          {/* <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-[43px] font-[700]">
            HOLSOL
          </span> */}
          <img src={logo} alt='image' className='h-[45px]' />
          <p className="text-gray-300 text-sm mt-2">

            HOLSOL aims to make India the smartest solar-powered nation, leading the world with clean and affordable energy.


          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li

              className="flex items-center gap-2 hover:text-white cursor-pointer transition"
            >
              <FaAngleRight className="text-[var(--primary)]" />
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li

              className="flex items-center gap-2 hover:text-white cursor-pointer transition"
            >
              <FaAngleRight className="text-[var(--primary)]" />
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li

              className="flex items-center gap-2 hover:text-white cursor-pointer transition"
            >
              <FaAngleRight className="text-[var(--primary)]" />
              <Link to="https://rs-group.co.in/" className="hover:underline">
                RS Group
              </Link>
            </li>
            <li
              className="flex items-center gap-2 hover:text-white cursor-pointer transition"
            >
              <FaAngleRight className="text-[var(--primary)]" />
              <a href="tel:9257055583" className="hover:underline">
                Contact
              </a>
            </li>


          </ul>

        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Useful Links</h3>

          <ul className="space-y-2 text-gray-300">
            <li

              className="flex items-center gap-2 hover:text-white cursor-pointer transition"
            >
              <FaAngleRight className="text-[var(--primary)]" />
              <Link to="/blog-detail" className="hover:underline">
                Blog
              </Link>
            </li>
            <li

              className="flex items-center gap-2 hover:text-white cursor-pointer transition"
            >
              <FaAngleRight className="text-[var(--primary)]" />
              <Link to="/warranty-policy" className="hover:underline">
                Warranty Policy
              </Link>
            </li>
            <li

              className="flex items-center gap-2 hover:text-white cursor-pointer transition"
            >
              <FaAngleRight className="text-[var(--primary)]" />
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li

              className="flex items-center gap-2 hover:text-white cursor-pointer transition"
            >
              <FaAngleRight className="text-[var(--primary)]" />
              <Link to="/terms" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li

              className="flex items-center gap-2 hover:text-white cursor-pointer transition"
            >
              <FaAngleRight className="text-[var(--primary)]" />
              <Link to="/usage-policy" className="hover:underline">
                Website Usage Policy
              </Link>
            </li>

          </ul>

        </div>

        {/* Refer & Earn Highlight */}
        <div className="flex flex-col justify-start items-center md:items-start">
          <div className="flex items-center gap-3 bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white font-semibold py-3 px-6 rounded-lg  cursor-pointer transition w-full text-center md:text-left">
            <FaGift className="text-xl" />
            <span>Refer & Earn</span>
          </div>
          <p className="mt-3 text-gray-300 text-sm text-center md:text-left">
            Invite your friends and earn rewards for every successful referral!
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-5 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
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
  );
};

export default Footer;
