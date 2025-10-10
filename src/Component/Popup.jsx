import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import popup from "../assets/Image/bannerbg.jpg";
import logo from '../../src/assets/Image/newlogocolored.png';
import ThankYou from "../Pages/Thankyou";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");



  useEffect(() => {
    setShowPopup(true);
  }, []);




  //  const handleSubmit = (e) => {
  //   e.preventDefault(); // ✅ Stop React from reloading the page

  //   // Actually submit the form to FormSubmit
  //   e.target.submit(); // ✅ This is crucial

  //   // Close popup after a tiny delay so the form can finish submitting
  //   setTimeout(() => {
  //     setShowPopup(false);
  //   }, 100);
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


            <div className="px-6 py-4">
              <h2 className="lg:text-2xl text-xl font-extrabold text-center text-[#192e5b]">
                To Avail Government Subsidy & Free Site Visit
              </h2>
              <p className="text-center text-gray-600 lg:mb-6 mb-1 text-sm">
                Fill out the form below and we’ll get in touch with you
              </p>


              {/* <form className="space-y-4" onSubmit={handleSubmit} action="https://formsubmit.co/info@holsolindia.com" method="POST" target="_blank"> */}
              <form className="space-y-4" action="https://formsubmit.co/info@holsolindia.com" method="POST" target="_blank">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://holsolindia.com/thank-you" />
                <input type="hidden" name="_cc" value="info@ramot.cloud" />


                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    required
                    name="name"
                    className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-5  pb-2 text-sm outline-none focus:border-blue-600"
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
                    type="tel"
                    required
                    name="mobile"
                    pattern="[0-9]{10}"         // Only 10 digits
                    maxLength="10"              // Prevents typing more than 10
                    inputMode="numeric"
                    onKeyPress={(e) => {
                      if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();  // block non-numeric characters
                      }
                    }}
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
                <div className="relative">
                  <select
                    required
                    name="state"
                    value={selectedState}
                    onChange={(e) => {
                      setSelectedState(e.target.value);
                      setSelectedCity(""); // reset city when state changes
                    }}
                    className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-5 pb-2 text-sm outline-none focus:border-blue-600 appearance-none"
                  >
                    <option value="" disabled hidden></option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Maharashtra">Maharashtra</option>
                  </select>
                  <label
                    className="absolute left-1 top-2 text-gray-500 text-sm transition-all 
                      peer-placeholder-shown:top-5 
                      peer-placeholder-shown:text-base 
                      peer-placeholder-shown:text-gray-400 
                      peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    State
                  </label>
                </div>

                {/* Uttar Pradesh Cities */}
                {selectedState === "Uttar Pradesh" && (
                  <div className="relative">
                    <select
                      required
                      name="city"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-5 pb-2 text-sm outline-none focus:border-blue-600 appearance-none"
                    >
                      <option value="" disabled hidden></option>
                      <option value="agra">Agra</option>
                      <option value="aligarh">Aligarh</option>
                      <option value="ambedkarnagar">Ambedkar Nagar</option>
                      <option value="amethi">Amethi</option>

                      <option value="Auraiya">Auraiya</option>
                      <option value="amroha">Amroha</option>
                      <option value="ayodhya">Ayodhya</option>
                      <option value="azamgarh">Azamgarh</option>
                      <option value="budaun">Budaun</option>
                      <option value="bagpat">Bagpat</option>
                      <option value="bahraich">Bahraich</option>
                      <option value="ballia">Ballia</option>
                      <option value="balrampur">Balrampur</option>
                      <option value="banda">Banda</option>
                      <option value="barabanki">Barabanki</option>
                      <option value="bareilly">Bareilly</option>
                      <option value="basti">Basti</option>
                      <option value="bhadohi">Bhadohi</option>
                      <option value="bijnor">Bijnor</option>
                      <option value="bulandshahr">Bulandshahr</option>
                      <option value="chandauli">Chandauli</option>
                      <option value="chitrakoot">Chitrakoot</option>
                      <option value="deoria">Deoria</option>
                      <option value="etah">Etah</option>
                      <option value="etawah">Etawah</option>
                      <option value="farrukhabad">Farrukhabad</option>
                      <option value="fatehpur">Fatehpur</option>
                      <option value="firozabad">Firozabad</option>
                      <option value="gautambuddhnagar">Gautam Buddh Nagar (Noida)</option>
                      <option value="ghaziabad">Ghaziabad</option>
                      <option value="ghazipur">Ghazipur</option>
                      <option value="gonda">Gonda</option>
                      <option value="gorakhpur">Gorakhpur</option>
                      <option value="hamirpur">Hamirpur</option>
                      <option value="hapur">Hapur</option>
                      <option value="hardoi">Hardoi</option>
                      <option value="hathras">Hathras</option>
                      <option value="jalaun">Jalaun</option>
                      <option value="jaunpur">Jaunpur</option>
                      <option value="jhansi">Jhansi</option>
                      <option value="kannauj">Kannauj</option>
                      <option value="kanpurnagar">Kanpur Nagar</option>
                      <option value="kanpurdehat">Kanpur Dehat</option>
                      <option value="kasganj">Kasganj</option>
                      <option value="kaushambi">Kaushambi</option>


                      <option value="kushinagar">Kushinagar</option>
                      <option value="lakhimpurkheri">Lakhimpur Kheri</option>
                      <option value="lalitpur">Lalitpur</option>
                      <option value="lucknow">Lucknow</option>
                      <option value="maharajganj">Maharajganj</option>
                      <option value="mahoba">Mahoba</option>
                      <option value="mainpuri">Mainpuri</option>
                      <option value="mathura">Mathura</option>
                      <option value="mau">Mau</option>
                      <option value="meerut">Meerut</option>
                      <option value="mirzapur">Mirzapur</option>
                      <option value="moradabad">Moradabad</option>
                      <option value="muzaffarnagar">Muzaffarnagar</option>
                      <option value="pilibhit">Pilibhit</option>
                      <option value="pratapgarh">Pratapgarh</option>
                      <option value="prayagraj">Prayagraj</option>
                      <option value="rae-bareli">Rae Bareli</option>
                      <option value="rampur">Rampur</option>
                      <option value="saharanpur">Saharanpur</option>
                      <option value="santkabirnagar">Sant Kabir Nagar</option>
                      <option value="sambhal">Sambhal</option>
                      <option value="shahjahanpur">Shahjahanpur</option>
                      <option value="shamli">Shamli</option>
                      <option value="shravasti">Shravasti</option>
                      <option value="siddharthnagar">Siddharthnagar</option>
                      <option value="sitapur">Sitapur</option>
                      <option value="sonbhadra">Sonbhadra</option>
                      <option value="sultanpur">Sultanpur</option>
                      <option value="unnao">Unnao</option>
                      <option value="varanasi">Varanasi</option>
                    </select>
                    <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all 
                      peer-placeholder-shown:top-5 
                      peer-placeholder-shown:text-base 
                      peer-placeholder-shown:text-gray-400 
                      peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                      City
                    </label>
                  </div>
                )}

                {/* Rajasthan Cities */}
                {selectedState === "Rajasthan" && (
                  <div className="relative">
                    <select
                      required
                      name="city"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-5 pb-2 text-sm outline-none focus:border-blue-600 appearance-none"
                    >
                      <option value="" disabled hidden></option>
                      <option value="ajmer">Ajmer</option>
                      <option value="alwar">Alwar</option>
                      <option value="banswara">Banswara</option>
                      <option value="baran">Baran</option>
                      <option value="barmer">Barmer</option>
                      <option value="bharatpur">Bharatpur</option>
                      <option value="bhilwara">Bhilwara</option>
                      <option value="bikaner">Bikaner</option>
                      <option value="bundi">Bundi</option>
                      <option value="chittorgarh">Chittorgarh</option>
                      <option value="churu">Churu</option>
                      <option value="dausa">Dausa</option>
                      <option value="dholpur">Dholpur</option>
                      <option value="dungarpur">Dungarpur</option>
                      <option value="ganganagar">Ganganagar</option>
                      <option value="hanumangarh">Hanumangarh</option>
                      <option value="jaipur">Jaipur</option>
                      <option value="jaisalmer">Jaisalmer</option>
                      <option value="jalore">Jalore</option>
                      <option value="jhalawar">Jhalawar</option>
                      <option value="jhunjhunu">Jhunjhunu</option>
                      <option value="jodhpur">Jodhpur</option>
                      <option value="karauli">Karauli</option>
                      <option value="kota">Kota</option>
                      <option value="nagaur">Nagaur</option>
                      <option value="pali">Pali</option>
                      <option value="pratapgarh">Pratapgarh</option>
                      <option value="rajsamand">Rajsamand</option>
                      <option value="sawai-madhopur">Sawai Madhopur</option>
                      <option value="sikar">Sikar</option>
                      <option value="sirohi">Sirohi</option>
                      <option value="tonk">Tonk</option>
                      <option value="udaipur">Udaipur</option>
                      <option value="anoopgarh">Anoopgarh</option>
                      <option value="balotra">Balotra</option>
                      <option value="beawar">Beawar</option>
                      <option value="kekri">Kekri</option>
                      <option value="deeg">Deeg</option>
                      <option value="deedwanakuchaman">Deedwana Kuchaman</option>
                      <option value="dudu">Dudu</option>
                      <option value="gangapurcity">Gangapur City</option>
                      <option value="jaipurrural">Jaipur Rural</option>
                      <option value="jodhpurrural">Jodhpur
                        Rural</option>
                      <option value="kotputlibehror">Kotputli Behror</option>
                      <option value="khairthaltijara">Khairthal Tijara</option>
                      <option value="neemkathana">Neem ka Thana</option>
                      <option value="phalodi">Phalodi</option>
                      <option value="salumber">salumber</option>
                      <option value="sanchore">sanchore</option>
                      <option value="shahpura">shahpura</option>
                    </select>
                    <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all 
                      peer-placeholder-shown:top-5 
                      peer-placeholder-shown:text-base 
                      peer-placeholder-shown:text-gray-400 
                      peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                      City
                    </label>
                  </div>
                )}

                {selectedState === "Maharashtra" && (
                  <div className="relative">
                    <select
                      required
                      name="city"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="peer w-full border-b-2 border-gray-300 bg-transparent px-1 pt-5 pb-2 text-sm outline-none focus:border-blue-600 appearance-none"
                    >
                      <option value="" disabled hidden></option>
                      <option value="sangli">Sangli</option>
                      <option value="satara">Satara</option>
                      <option value="solapur">Solapur</option>
                      <option value="kolhapur">Kolhapur</option>
                      <option value="pune">Pune</option>
                      <option value="akola">Akola</option>
                      <option value="amravati">Amravati</option>
                      <option value="buldhana">Buldhana</option>
                      <option value="yavatmal">Yavatmal</option>
                      <option value="washim">Washim</option>
                      <option value="aurangabad">Aurangabad</option>
                      <option value="beed">Beed</option>
                      <option value="jalna">Jalna</option>
                      <option value="osmanabad">Osmanabad</option>
                      <option value="nanded">Nanded</option>
                      <option value="latur">Latur</option>
                      <option value="parbhani">Parbhani</option>
                      <option value="hingoli">Hingoli</option>
                      <option value="bhandara">Bhandara</option>
                      <option value="chandrapur">Chandrapur</option>
                      <option value="gadchiroli">Gadchiroli</option>
                      <option value="gondia">Gondia</option>
                      <option value="nagpur">Nagpur</option>
                      <option value="wardha">Wardha</option>
                      <option value="ahmednagar">Ahmednagar</option>
                      <option value="dhule">Dhule</option>
                      <option value="jalgaon">Jalgaon</option>
                      <option value="nandurbar">Nandurbar</option>
                      <option value="nashik">Nashik</option>
                      <option value="mumbaicitydistrict">Mumbai City District</option>
                      <option value="mumbaisuburbandistrict">Mumbai Suburban District</option>


                      <option value="thane">Thane</option>

                      <option value="palghar">Palghar</option>
                      <option value="raigad">Raigad</option>
                      <option value="ratnagiri">Ratnagiri</option>
                      <option value="sindhudurg">Sindhudurg</option>


                    </select>
                    <label className="absolute left-1 top-2 text-gray-500 text-sm transition-all
      peer-placeholder-shown:top-5 
      peer-placeholder-shown:text-base 
      peer-placeholder-shown:text-gray-400 
      peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                      City
                    </label>
                  </div>
                )}



                {/* Pincode */}
                <div className="relative">
                  <input
                    type="text"
                    required
                    name="pincode"
                    maxLength="6"
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

                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white lg:py-3 py-2 rounded-xl font-semibold shadow-lg transition lg:text-lg text-sm"
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


