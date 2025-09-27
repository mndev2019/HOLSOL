// import React, { useEffect, useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";

// import popup from "../assets/Image/bannerbg.jpg";
// import logo from '../../src/assets/Image/newlogocolored.png'

// const Popup = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     setShowPopup(true);
//   }, []);

//   return (
//     <>
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50">
//           {/* Popup Container */}
//           <div className="relative w-[500px] max-w-[95%] bg-white rounded-3xl shadow-2xl overflow-hidden animate-[fadeIn_0.4s_ease]">

//             {/* Cross Button */}
//             <button
//               onClick={() => setShowPopup(false)}
//               className="absolute top-[3px] right-[10px] font-bold text-white p-2 rounded-full  transition z-10"
//             >
//               <AiOutlineClose size={22} />
//             </button>

//             {/* Image Header */}
//             <div className="relative h-48 w-full">
//               <img
//                 src={popup}
//                 alt="Solar Panel"
//                 className="h-full w-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//               <div className="absolute bottom-4 left-6 text-white">
//                 <div className="flex">

//                 </div>
//                 <div className="flex items-end space-x-2">
//                   {/* <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-[43px] font-[700]">
//                     HOLSOL
//                   </span> */}
//                   <img src={logo} alt='image' className='h-[40px]' />
//                   <h3 className="text-2xl font-bold">India</h3>
//                 </div>
//                 <p className="text-sm opacity-90">Empowering Generation</p>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="p-6">
//               <h2 className="text-2xl font-extrabold text-center text-[#192e5b]">
//                 To Avail Government Subsidy & Free Site Visit
//               </h2>
//               <p className="text-center text-gray-600 mb-6 text-sm">
//                 Fill out the form below and we’ll get in touch with you
//               </p>

//               {/* Form */}
//               <form className="space-y-4">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     required
//                     className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-5 pb-2 text-sm outline-none focus:border-blue-600"
//                   />
//                   <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all 
//                     peer-placeholder-shown:top-5 
//                     peer-placeholder-shown:text-base 
//                     peer-placeholder-shown:text-gray-400 
//                     peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
//                     Name
//                   </label>
//                 </div>

//                 <div className="relative">
//                   <input
//                     type="text"
//                     required
//                     className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-5 pb-2 text-sm outline-none focus:border-blue-600"
//                   />
//                   <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all 
//                     peer-placeholder-shown:top-5 
//                     peer-placeholder-shown:text-base 
//                     peer-placeholder-shown:text-gray-400 
//                     peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
//                     Mobile Number
//                   </label>
//                 </div>

//                 <div className="relative">
//                   <select
//                     required
//                     className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-5 pb-2 text-sm outline-none focus:border-blue-600"
//                   >
//                     <option value="" hidden></option>
//                     <option value="Jaipur">Jaipur</option>
//                     <option value="Udaipur">Udaipur</option>
//                     <option value="Jodhpur">Jodhpur</option>
//                     <option value="Ajmer">Ajmer</option>
//                     <option value="Kanpur">Kanpur</option>
//                     <option value="Lucknow">Lucknow</option>
//                     <option value="Varanasi">Varanasi</option>
//                     <option value="Agra">Agra</option>
//                     <option value="Mumbai">Mumbai</option>
//                     <option value="Pune">Pune</option>
//                     <option value="Nagpur">Nagpur</option>
//                     <option value="Nashik">Nashik</option>
//                     {/* Coming Soon */}
//                     <option value="coming-soon" >
//                       Coming Soon
//                     </option>

//                   </select>
//                   <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all 
//                     peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
//                     City
//                   </label>
//                 </div>

//                 <div className="relative">
//                   <input
//                     type="text"
//                     required
//                     className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-5 pb-2 text-sm outline-none focus:border-blue-600"
//                   />
//                   <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all 
//                     peer-placeholder-shown:top-5 
//                     peer-placeholder-shown:text-base 
//                     peer-placeholder-shown:text-gray-400 
//                     peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
//                     Pincode
//                   </label>
//                 </div>

//                 <button
//                   type="submit"
//                   onClick={() => setShowPopup(false)}
//                   className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-xl font-semibold shadow-lg transition"
//                 >
//                   Submit & Book Visit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Popup;
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import popup from "../assets/Image/bannerbg.jpg";
import logo from '../../src/assets/Image/newlogocolored.png';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const cities = [
    "Jaipur",
    "Udaipur",
    "Jodhpur",
    "Ajmer",
    "Kanpur",
    "Lucknow",
    "Varanasi",
    "Agra",
    "Mumbai",
    "Pune",
    "Nagpur",
    "Nashik",
  ];

  const [inputCity, setInputCity] = useState("");
  const [displayCity, setDisplayCity] = useState("");

  useEffect(() => {
    setShowPopup(true);
  }, []);

  // const handleCityChange = (e) => {
  //   setInputCity(e.target.value);
  // };
  const handleCityChange = (e) => {
    const value = e.target.value;
    setInputCity(value);

    if (value.trim() === "") {
      setDisplayCity(""); // empty input → no message
      return;
    }

    // Check if typed city exists in the list (case-insensitive)
    const match = cities.find((c) => c.toLowerCase() === value.toLowerCase());

    if (match) {
      setDisplayCity(""); // city exists → no message
    } else {
      setDisplayCity("Coming Soon"); // city not in list → show warning
    }
  };

  // const handleCityBlur = () => {
  //   if (inputCity.trim() === "") {
  //     setDisplayCity("");
  //     return;
  //   }

  //   const match = cities.find(
  //     (c) => c.toLowerCase() === inputCity.toLowerCase()
  //   );

  //   if (match) {
  //     setDisplayCity(match); // Show proper capitalization
  //   } else {
  //     setDisplayCity("Coming Soon"); // Show for cities not in list
  //   }
  // };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50">
          <div className="relative w-[500px] max-w-[95%] bg-white rounded-3xl shadow-2xl overflow-hidden animate-[fadeIn_0.4s_ease]">

            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-[3px] right-[10px] font-bold text-white p-2 rounded-full transition z-10"
            >
              <AiOutlineClose size={22} />
            </button>

            {/* Image Header */}
            <div className="relative h-48 w-full">
              <img src={popup} alt="Solar Panel" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <div className="flex items-end space-x-2">
                  <img src={logo} alt="logo" className="h-[40px]" />
                  <h3 className="text-2xl font-bold">India</h3>
                </div>
                <p className="text-sm opacity-90">Empowering Generation</p>
              </div>
            </div>

            {/* Form */}
            <div className="p-6">
              <h2 className="text-2xl font-extrabold text-center text-[#192e5b]">
                To Avail Government Subsidy & Free Site Visit
              </h2>
              <p className="text-center text-gray-600 mb-6 text-sm">
                Fill out the form below and we’ll get in touch with you
              </p>

              <form className="space-y-4">
                {/* Name */}
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

                {/* Mobile */}
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

                {/* City */}
                {/* <div className="relative w-full">
                  <input
                    type="text"
                    required
                    value={inputCity}
                    onChange={handleCityChange}
                    onBlur={handleCityBlur}
                    placeholder=""
                    className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-5 pb-2 text-sm outline-none focus:border-blue-600"
                  />
                  <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all 
                    peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                    City
                  </label>
                  {inputCity && displayCity === "Coming Soon" && (
                    <p className="text-xs mt-1 text-red-500">
                      Service not available in this city – Coming Soon
                    </p>
                  )}
                </div> */}
                <div className="relative w-full">
                  <input
                    type="text"
                    required
                    value={inputCity}
                    onChange={handleCityChange}
                    placeholder=""
                    className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-5 pb-2 text-sm outline-none focus:border-blue-600"
                  />
                  <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all 
    peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                    City
                  </label>

                  {/* Show message instantly while typing */}
                  {displayCity === "Coming Soon" && (
                    <p className="text-xs mt-1 text-red-500">
                      Service not available in this city – Coming Soon
                    </p>
                  )}
                </div>


                {/* Pincode */}
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

                {/* Submit */}
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


