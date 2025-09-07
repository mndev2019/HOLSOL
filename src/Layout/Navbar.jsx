// import React, { useEffect, useState } from 'react';
// import logo from '../assets/Image/logo.jpeg';


// import { NavLink, useLocation } from 'react-router-dom';
// import { MenuOutlined, CloseOutlined } from '@ant-design/icons';


// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };


//     const location = useLocation();




//     useEffect(() => {
//         // Scroll to the bottom when the page changes
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth', // Smooth scroll
//         });
//     }, [location]);




//     const navlist = (
//         <ul className="flex lg:flex-row flex-col list-none gap-8 font-semibold items-center">
//             <li>
//                 <NavLink
//                     to="/"
//                     className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}
//                 >
//                     HOME
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink
//                     to="/booking"
//                     className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}
//                 >
//                     ABOUT US
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink
//                     to="/pricing"
//                     className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}
//                 >
//                     PRODUCTS
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink
//                     to="/pricing"
//                     className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}
//                 >
//                     CLIENT STORIES
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink
//                     to="/pricing"
//                     className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}
//                 >
//                     GALLERY
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink
//                     to="/pricing"
//                     className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}
//                 >
//                     BLOGS
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink
//                     to="/blogs"
//                     className={({ isActive }) => isActive ? "text-secondary" : "hover:text-secondary"}
//                 >
//                     CONTACT US
//                 </NavLink>
//             </li>





//         </ul>
//     );


//     return (
//         <>
//             <section className=' px-10'>
//                 <div className="container mx-auto">
//                     <div className="flex justify-between items-center">
//                          <NavLink to='/'>
//                             <img src={logo} alt='Logo' className='h-[80px]' />
//                         </NavLink>
//   <div className="hidden lg:flex items-center gap-8">
//                             {navlist}


//                         </div>

//                         {/* Sidebar icon for mobile */}
//                         <div className="lg:hidden">
//                             <button onClick={toggleMenu}>
//                                 <MenuOutlined className="text-3xl" />
//                             </button>
//                         </div>


//                     </div>
//                 </div>

//                 {/* Sidebar menu for mobile */}
//                 <div className={`fixed inset-0 bg-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:hidden`} style={{ width: '50%' }}>
//                     <div className="p-6">
//                         {/* Close button inside the sidebar */}
//                         <div className="flex justify-end mb-6">
//                             <button onClick={toggleMenu}>
//                                 <CloseOutlined className="text-2xl" />
//                             </button>
//                         </div>
//                         {navlist}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Navbar;
import React, { useEffect, useState } from 'react';
import logo from '../assets/Image/logo.jpeg';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const location = useLocation();

    useEffect(() => {
        // Scroll to top when page changes
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [location]);

    const navlist = (
        <ul className="flex lg:flex-row flex-col list-none gap-8 font-semibold items-center">
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"}>
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"}>
                    ABOUT US
                </NavLink>
            </li>
            <li>
                <NavLink to="/products" className={({ isActive }) => isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"}>
                    PRODUCTS
                </NavLink>
            </li>
            <li>
                <NavLink to="/clients" className={({ isActive }) => isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"}>
                    CLIENT STORIES
                </NavLink>
            </li>
            <li>
                <NavLink to="/gallery" className={({ isActive }) => isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"}>
                    GALLERY
                </NavLink>
            </li>
            <li>
                <NavLink to="/blog" className={({ isActive }) => isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"}>
                    BLOG
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"}>
                    CONTACT US
                </NavLink>
            </li>
        </ul>
    );

    return (
        <section className="px-6 lg:px-10 shadow">
            <div className="container mx-auto">
                <div className="flex justify-between items-center py-1">

                    {/* Logo */}
                    <NavLink to="/">
                        <img src={logo} alt="Logo" className="h-[60px] lg:h-[70px]" />
                    </NavLink>

                    {/* Nav Links (center) */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navlist}
                    </div>

                    {/* Right Side - Phone */}
                    <div className="hidden lg:flex items-center gap-2 text-right">
                        <FaPhoneAlt className="text-2xl text-black" />
                        <div className="flex flex-col leading-tight">
                            <span className="text-xs">Call Now !</span>
                            <span className="font-bold">+91 9257055583</span>
                        </div>
                    </div>

                    {/* Mobile menu icon */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu}>
                            <MenuOutlined className="text-3xl" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar for mobile */}
            <div
                className={`fixed inset-0 bg-white z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 lg:hidden`}
                style={{ width: "70%" }}
            >
                <div className="p-6">
                    {/* Close button */}
                    <div className="flex justify-end mb-6">
                        <button onClick={toggleMenu}>
                            <CloseOutlined className="text-2xl" />
                        </button>
                    </div>
                    {navlist}

                    {/* Phone in mobile menu */}
                    <div className="mt-6 flex items-center gap-2">
                        <FaPhoneAlt className="text-2xl text-black" />
                        <div className="flex flex-col leading-tight">
                            <span className="text-xs">Call Now !</span>
                            <span className="font-bold">+91 9257055583</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;

