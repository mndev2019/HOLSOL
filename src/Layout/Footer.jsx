import { FaAngleRight, FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../src/assets/Image/newlogoo.png';

const Footer = () => {
  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Contact Us", url: "" }, // empty URL handled safely
    { name: "RS Group", url: "https://rs-group.co.in/", external: true }
  ];

  const usefulLinks = [
    { name: "Blog", url: "/blog-detail" },
    { name: "Warranty Policy", url: "" },
    { name: "Privacy Policy", url: "" },
    { name: "Terms & Conditions", url: "" },
    { name: "Website Usage Policy", url: "" }
  ];

  const renderLink = (item) => {
    if (!item.url) return <span>{item.name}</span>; // no URL
    if (item.external) return (
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
        {item.name}
      </a>
    );
    return <Link to={item.url} className="hover:underline">{item.name}</Link>; // internal route
  };

  return (
    <footer className="bg-black text-gray-200 py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img src={logo} alt='HOLSOL' className='lg:h-[60px] h-[40px]' />
          <p className="text-gray-300 text-sm mt-3">
            HOLSOL aims to make India the smartest solar-powered nation, leading the world with clean and affordable energy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            {quickLinks.map((item) => (
              <li key={item.name} className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                <FaAngleRight className="text-[var(--primary)]" />
                {renderLink(item)}
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-300">
            {usefulLinks.map((item) => (
              <li key={item.name} className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                <FaAngleRight className="text-[var(--primary)]" />
                {renderLink(item)}
              </li>
            ))}
          </ul>
        </div>

        {/* Refer & Earn */}
        <div className="flex flex-col justify-start items-center md:items-start">
          <div className="flex items-center gap-3 bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white font-semibold py-3 px-6 rounded-lg cursor-pointer transition w-full text-center md:text-left">
            <FaGift className="text-xl" />
            <span>Refer & Earn</span>
          </div>
          <p className="mt-3 text-gray-300 text-sm text-center md:text-left">
            Invite your friends and earn rewards for every successful referral!
          </p>
        </div>
      </div>

      <div className="mt-5 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} HOLSOL Solar. All rights reserved.
        <br />
        Developed by{" "}
        <a href="https://ramot.cloud/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Ramot.cloud
        </a>
      </div>
    </footer>
  );
};

export default Footer;
