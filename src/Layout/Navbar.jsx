import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { FaRegFileAlt } from 'react-icons/fa';
import brochure from "../assets/Pdffile/holsolbrochure.pdf";
import logo from '../assets/Image/newlogocolored.png'
import Popup from '../Component/Popup';

const Navbar = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // track dropdown (products/services)
    const toggleMenu = () => setIsOpen(!isOpen);

    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    const navlist = (
        <ul
            className={`flex lg:flex-row flex-col list-none gap-8 font-semibold items-center lg:text-xl text-md ${location.pathname === "/" ? "lg:text-white text-black" : "text-black"
                }`}
        >
            <li>
                <NavLink to="/" onClick={() => setIsOpen(false)} end>
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" onClick={() => setIsOpen(false)}>ABOUT US</NavLink>
            </li>

            {/* Services Dropdown */}
            <li className="relative">
                <button
                    onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                    className="focus:outline-none"
                >
                    SERVICES
                </button>

                {openDropdown === "services" && (
                    <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md z-50 text-[17px]">
                        <li>
                            <NavLink to="/service-detail" className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r from-[#00C6FF] to-[#0047FF] hover:text-white" onClick={() => {
                                setOpenDropdown(null)
                                setIsOpen(false)
                            }}>Insurance</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service-detail" className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r from-[#00C6FF] to-[#0047FF] hover:text-white" onClick={() => {
                                setOpenDropdown(null)
                                setIsOpen(false)
                            }}>Installation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service-detail" className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r from-[#00C6FF] to-[#0047FF] hover:text-white" onClick={() => {
                                setOpenDropdown(null)
                                setIsOpen(false)
                            }}>Maintenance</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service-detail" className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r from-[#00C6FF] to-[#0047FF] hover:text-white" onClick={() => {
                                setOpenDropdown(null)
                                setIsOpen(false)
                            }}>Financing</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service-detail" className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r from-[#00C6FF] to-[#0047FF] hover:text-white" onClick={() => {
                                setOpenDropdown(null)
                                setIsOpen(false)
                            }}>System Design</NavLink>
                        </li>
                        <li>
                            <button
                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gradient-to-r from-[#00C6FF] to-[#0047FF] hover:text-white"
                                onClick={() => {
                                    setOpenDropdown(null);
                                    setIsOpen(false);

                                    // Force reset before reopening
                                    setIsPopupOpen(false);
                                    setTimeout(() => setIsPopupOpen(true), 0);
                                }}
                            >
                                Energy Consulting
                            </button>
                        </li>



                    </ul>
                )}
            </li>

            {/* Products Dropdown */}
            <li className="relative">
                <button
                    onClick={() => setOpenDropdown(openDropdown === "products" ? null : "products")}
                    className="focus:outline-none"
                >
                    PRODUCTS
                </button>

                {openDropdown === "products" && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 text-[17px]" >
                        <li>
                            <NavLink to="/product-detail" className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r from-[#00C6FF] to-[#0047FF] hover:text-white" onClick={() => {
                                setOpenDropdown(null)
                                setIsOpen(false)
                            }}>Solar Rooftop</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product-detail" className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r from-[#00C6FF] to-[#0047FF] hover:text-white" onClick={() => {
                                setOpenDropdown(null)
                                setIsOpen(false)
                            }}>Industrial</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product-detail" className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r from-[#00C6FF] to-[#0047FF] hover:text-white" onClick={() => {
                                setOpenDropdown(null)
                                setIsOpen(false)
                            }}>Commercial</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product-detail" className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r from-[#00C6FF] to-[#0047FF] hover:text-white" onClick={() => {
                                setOpenDropdown(null)
                                setIsOpen(false)
                            }}>Solar EPC</NavLink>
                        </li>
                    </ul>
                )}
            </li>

            <li>
                <NavLink to="/blog-detail" onClick={() => setIsOpen(false)}>NEWS</NavLink>
            </li>
            <li>
                <NavLink to="/career" onClick={() => setIsOpen(false)}>CAREER</NavLink>
            </li>
        </ul>
    );

    return (
        <>
            <section className={`px-6 lg:px-10 shadow py-2 ${location.pathname === "/" ? "absolute top-0 left-0 w-full z-50 " : ""}`}>
                <div className="container mx-auto">
                    <div className="flex justify-between items-center py-1">
                        {/* Logo */}
                        <NavLink to="/">
                            {/* <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-[43px] font-[700]">
                            HOLSOL
                        </span> */}
                            <img src={logo} alt='image' className='lg:h-[45px] h-[30px]' />
                        </NavLink>

                        {/* Nav Links */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navlist}
                        </div>

                        {/* Brochure button */}
                        <div className="hidden lg:flex items-center gap-2 text-right">
                            <a href={brochure} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 rounded bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white font-semibold shadow-md hover:scale-105 transition">
                                <FaRegFileAlt className="text-lg" />
                                <span>Brochure</span>
                            </a>
                            <button  onClick={() => {
                                    setOpenDropdown(null);
                                    setIsOpen(false);

                                    // Force reset before reopening
                                    setIsPopupOpen(false);
                                    setTimeout(() => setIsPopupOpen(true), 0);
                                }} className="flex items-center gap-2 px-5 py-2 rounded bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white font-semibold shadow-md hover:scale-105 transition">
                                <span>Get Free Quote</span>
                            </button>
                            <a
                                href="tel:9257055583"
                                className="flex items-center gap-2 px-5 py-2 rounded bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white font-semibold shadow-md hover:scale-105 transition"
                            >
                                <span>Call Now</span>
                            </a>

                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button onClick={toggleMenu}>
                                <MenuOutlined className="!text-yellow-500 text-3xl" />

                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar */}
                <div className={`fixed inset-0 bg-white z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 lg:hidden`} style={{ width: "70%" }}>
                    <div className="p-6">
                        {/* Close button */}
                        <div className="flex justify-end mb-6">
                            <button onClick={toggleMenu}>
                                <CloseOutlined className="text-2xl" />
                            </button>
                        </div>
                        {navlist}

                        {/* Brochure in mobile */}

                        <a
                            href={brochure}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-2 lg:mt-0 mt-2 flex justify-center items-center gap-2 px-5 py-2 rounded bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white font-semibold shadow-md hover:scale-105 transition"
                        >
                            <FaRegFileAlt className="text-lg" />
                            <span>Brochure</span>
                        </a>

                        <button onClick={() => setIsPopupOpen(true)} className="w-full text-center px-5 py-2 rounded bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white font-semibold shadow-md hover:scale-105 transition">
                            <span>Get Free Quote</span>
                        </button>
                        <a
                            href="tel:9257055583"
                            className="mt-2 block text-center px-5 py-2 rounded bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white font-semibold shadow-md hover:scale-105 transition"
                        >
                            Call Now
                        </a>


                    </div>
                </div>
            </section>
            {
                isPopupOpen && (
                    <Popup onClose={() => setIsPopupOpen(false)} />
                )
            }
        </>

    );
};

export default Navbar;
