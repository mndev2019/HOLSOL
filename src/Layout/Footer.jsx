import { FaAngleRight, FaGift } from "react-icons/fa";
import Logo from "../assets/Image/newlogo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img src={Logo} alt="Truzon Solar" className="w-40 mb-4" />
          <p className="text-gray-300 text-sm">
            HOLSOL Energy Systems Pvt Ltd, established in 2022, is a leading manufacturer,
            trader, and system integrator in the solar industry. Founded by Shri Ch. Bhavani
            Suresh, Suntek has grown exponentially, driven by a passion for innovation and
            out-of-the-box thinking.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            {["Home", "About Us", "Awards", "Testimonials", "Our Clients", "Contact Us"].map((link) => (
              <li key={link} className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                <FaAngleRight className="text-[var(--primary)]" />
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-300">
            {["Blog", "Dealer Form", "Warranty Policy", "Privacy Policy", "Terms & Conditions", "Website Usage Policy"].map((link) => (
              <li key={link} className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                <FaAngleRight className="text-[var(--primary)]" />
                {link}
              </li>
            ))}
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
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} HOLSOL Solar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
