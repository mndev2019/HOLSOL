import React, { useState } from "react";
import solar from "../assets/Image/auth.jpeg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Base_Url } from "../API/Base_Url";
import { toast } from "react-toastify";
import logo from "../assets/Image/newlogocolored.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [city, setcity] = useState("");
  const [password, setpassword] = useState("");
  const [address, setaddress] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();

    let requestdata = {
      name,
      email,
      mobile,
      city,
      password,
      address,
    };

    try {
      const res = await axios.post(`${Base_Url}api/register`, requestdata);

      if (res.data.success === true) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f0f9ff] via-[#e6f0ff] to-[#d0e4ff] flex items-center justify-center px-4 sm:px-6">

      <div className="w-full grid lg:grid-cols-2 gap-12 items-center py-10 px-4 sm:px-8 lg:px-20">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            ☀️ Upgrade to Solar
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight flex flex-wrap items-center gap-2">
            Switch to Smart Solar with
            <img src={logo} alt="Holsol" className="h-[26px] sm:h-[30px]" />
          </h1>

          <p className="text-gray-600 mt-5 max-w-lg text-sm sm:text-base">
            We cover all your solar requirements including Solar Plant Installation,
            AMC services, and ground-mounted solutions. Holsol ensures reliable and
            high-quality solar products.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
            {[
              "Reduce Electricity Bill",
              "Clean Renewable Energy",
              "Expert Solar Team",
              "Long-Term Savings",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-lg
                  bg-gradient-to-b from-[#00C6FF] to-[#0047FF] text-white font-bold"
                >
                  ✓
                </div>
                <p className="text-sm font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          {/* IMAGE (hidden on mobile) */}
          <div className="mt-6 hidden sm:block">
            <img src={solar} alt="solar" className="object-cover rounded-lg" />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 w-full max-w-xl mx-auto">

          <h2 className="text-2xl font-bold text-gray-900">
            Create{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF]">
              Account
            </span>
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Register to manage your solar installation
          </p>

          <form
            onSubmit={handlesubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6"
          >
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                type="text"
                placeholder="Enter full name"
                className="mt-1 w-full border rounded-lg px-4 py-2 text-sm
                focus:outline-none focus:border-[#00C6FF]"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Mobile Number</label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
                placeholder="Enter mobile number"
                className="mt-1 w-full border rounded-lg px-4 py-2 text-sm
                focus:outline-none focus:border-[#00C6FF]"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter email"
                className="mt-1 w-full border rounded-lg px-4 py-2 text-sm
                focus:outline-none focus:border-[#00C6FF]"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setcity(e.target.value)}
                placeholder="Enter city"
                className="mt-1 w-full border rounded-lg px-4 py-2 text-sm
                focus:outline-none focus:border-[#00C6FF]"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm text-gray-600">Address</label>
              <textarea
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                rows="3"
                placeholder="Complete address"
                className="mt-1 w-full border rounded-lg px-4 py-2 text-sm
                focus:outline-none focus:border-[#00C6FF]"
                required
              />
            </div>

            <div className="relative">
              <label className="text-sm text-gray-600">Password</label>

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Create password"
                className="mt-1 w-full border rounded-lg px-4 py-2 pr-10 text-sm
    focus:outline-none focus:border-[#00C6FF]"
                required
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] cursor-pointer text-gray-500 hover:text-[#0047FF]"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </span>
            </div>


            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full py-3 rounded-lg text-sm font-semibold text-white
                bg-gradient-to-b from-[#00C6FF] to-[#0047FF]
                hover:opacity-90 transition"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="text-center text-sm text-gray-600 mt-6 flex justify-center gap-1">
            Already have an account?
            <span
              onClick={() => navigate("/login")}
              className="font-medium text-[#0047FF] cursor-pointer hover:underline"
            >
              Login
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;
