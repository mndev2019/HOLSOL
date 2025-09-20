import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import popup from "../assets/Image/popupimage.jpg";
import popup from "../assets/Image/bannerbg.jpg";
import logo from '../../src/assets/Image/newlogoo.png'

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50">
          {/* Popup Container */}
          <div className="relative w-[500px] max-w-[95%] bg-white rounded-3xl shadow-2xl overflow-hidden animate-[fadeIn_0.4s_ease]">

            {/* Cross Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-[3px] right-[10px] font-bold text-white p-2 rounded-full  transition z-10"
            >
              <AiOutlineClose size={22} />
            </button>

            {/* Image Header */}
            <div className="relative h-48 w-full">
              <img
                src={popup}
                alt="Solar Panel"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <div className="flex">

                </div>
                <div className="flex items-center space-x-2">
                  {/* <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-[43px] font-[700]">
                    HOLSOL
                  </span> */}
                  <img src={logo} alt='image' className='h-[50px]' />
                  <h3 className="text-2xl font-bold">India</h3>
                </div>
                <p className="text-sm opacity-90">Empowering Generation</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-extrabold text-center text-[#192e5b]">
                To Avail Government Subsidy & Free Site Visit
              </h2>
              <p className="text-center text-gray-600 mb-6 text-sm">
                Fill out the form below and we’ll get in touch with you
              </p>

              {/* Form */}
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    required
                    className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-5 pb-2 text-sm outline-none focus:border-blue-600"
                  />
                  <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-5 
                    peer-placeholder-shown:text-base 
                    peer-placeholder-shown:text-gray-400 
                    peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    required
                    className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-5 pb-2 text-sm outline-none focus:border-blue-600"
                  />
                  <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-5 
                    peer-placeholder-shown:text-base 
                    peer-placeholder-shown:text-gray-400 
                    peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                    Mobile Number
                  </label>
                </div>

                <div className="relative">
                  <select
                    required
                    className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-5 pb-2 text-sm outline-none focus:border-blue-600"
                  >
                    <option value="" hidden></option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                  </select>
                  <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all 
                    peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                    City
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    required
                    className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-5 pb-2 text-sm outline-none focus:border-blue-600"
                  />
                  <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all 
                    peer-placeholder-shown:top-5 
                    peer-placeholder-shown:text-base 
                    peer-placeholder-shown:text-gray-400 
                    peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                    Pincode
                  </label>
                </div>

                <button
                  type="submit"
                  onClick={() => setShowPopup(false)}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-xl font-semibold shadow-lg transition"
                >
                  Submit & Book Visit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
