import React from 'react'
import Navbar from './Navbar'
import { FaUserFriends, FaPaperPlane, FaRegFileAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Header = () => {
    return (
        <>
            <div className="w-full bg-gray-100 text-sm">
                <div className=" flex justify-end items-center gap-6 py-2 px-4">

                    {/* Refer & Earn */}
                    <div className="flex items-center gap-1 cursor-pointer hover:text-[var(--primary)] transition">
                        <FaUserFriends className="text-base" />
                        <span>Refer & Earn</span>
                    </div>

                    {/* Get Expert Suggestion */}
                    <div className="flex items-center gap-1 cursor-pointer hover:text-[var(--primary)] transition">
                        <FaPaperPlane className="text-base" />
                        <span>Get Expert Suggestion</span>
                    </div>

                    {/* Download Brochure */}
                    <div className="flex items-center gap-1 cursor-pointer hover:text-[var(--primary)] transition">
                        <FaRegFileAlt className="text-base" />
                        <span>Download Brochure</span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 text-lg">
                        <a href="#" className="hover:text-[var(--primary)]"><FaFacebookF /></a>
                        <a href="#" className="hover:text-[var(--primary)]"><FaTwitter /></a>
                        <a href="#" className="hover:text-[var(--primary)]"><FaInstagram /></a>
                        <a href="#" className="hover:text-[var(--primary)]"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    )
}

export default Header
