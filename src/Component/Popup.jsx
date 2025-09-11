import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import popup from '../assets/Image/popupimage.jpg'
import logo from '../assets/Image/newlogo.jpeg'

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-2xl flex w-[800px] max-w-full relative overflow-hidden">

            {/* Left side with image */}
            <div className="w-1/2 bg-gray-100 relative hidden md:block">
              <img
                src={popup}
                alt="Solar Panel"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold text-[var(--primary)]">HOLSOL Solar</h3>
                <p className="text-sm text-[var(--primary)]">Avail Government Subsidy</p>
              </div>
            </div>

            {/* Right side form */}
            <div className="w-full md:w-1/2 p-8 relative">
              {/* Close button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                <AiOutlineClose size={22} />
              </button>

              {/* Logo */}
              {/* <div className="flex justify-center mb-4">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="h-20 w-auto"
                />
              </div> */}
              <h3 className="">
                HOLSOL
              </h3>

              <h2 className="text-2xl font-bold text-center text-[var(--primary)] mb-2">
                Avail Government Subsidy
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Number</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <select className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Choose a city</option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Pincode</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your pincode"
                  />
                </div>

                <button
                  onClick={() => setShowPopup(false)}
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold shadow-md transition"
                >
                  GET FREE SITE VISIT
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
