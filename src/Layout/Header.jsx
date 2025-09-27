import React from 'react'
import Navbar from './Navbar'
// import brochure from "../assets/Pdffile/holsolbrochure.pdf";
import { FaUserFriends, FaPaperPlane, FaRegFileAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Header = () => {
    return (
        <>
            {/* <div className="w-full bg-gray-100 text-sm">
                <div className=" flex justify-end items-center gap-6 py-2 px-4">

              
                    <div className="flex items-center gap-1 cursor-pointer hover:text-[var(--primary)] transition">
                        <FaUserFriends className="text-base" />
                        <span>Refer & Earn</span>
                    </div>

                  
                    <div className="flex items-center gap-1 cursor-pointer hover:text-[var(--primary)] transition">
                        <FaPaperPlane className="text-base" />
                        <span>Get Expert Suggestion</span>
                    </div>

                    
                    <a
                        href={brochure}  
                        target="_blank"        
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 cursor-pointer hover:text-[var(--primary)] transition"
                    >
                        <FaRegFileAlt className="text-base" />
                        <span>Download Brochure</span>
                    </a>

                  
                    <div className="flex items-center gap-3 text-lg">
                        <a href="#" className="hover:text-[var(--primary)]"><FaFacebookF /></a>
                        <a href="#" className="hover:text-[var(--primary)]"><FaTwitter /></a>
                        <a href="#" className="hover:text-[var(--primary)]"><FaInstagram /></a>
                        <a href="#" className="hover:text-[var(--primary)]"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div> */}
            <Navbar />
        </>
    )
}

export default Header
