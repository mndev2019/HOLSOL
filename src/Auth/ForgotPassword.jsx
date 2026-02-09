import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import solar from "../assets/Image/auth.jpeg";
import axios from "axios";
import { Base_Url } from "../API/Base_Url";
import { toast } from "react-toastify";
import logo from '../assets/Image/newlogocolored.png'

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${Base_Url}api/web-forgot-password`, { email });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/verify-otp", { state: { email } });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="lg:min-h-screen bg-gradient-to-r from-[#f0f9ff] via-[#e6f0ff] to-[#d0e4ff] flex items-center justify-center md:px-6">
      <div className="px-4 sm:px-8 lg:px-20 py-10 w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 items-center gap-2">
            Forgot your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF]">
              Password?
            </span>
             <img src={logo} alt="Holsol" className="h-[26px] sm:h-[30px] mt-3 lg:block hidden" />
          </h1>
      
          <p className="text-gray-600 mt-3">
            Enter your registered email to receive OTP
          </p>
          <img src={solar} className="mt-6 rounded-lg" />
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-2xl shadow-xl md:p-8 p-4 max-w-md w-full mx-auto">
          <h2 className="text-2xl font-bold">Forgot Password</h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Enter registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white bg-gradient-to-b from-[#00C6FF] to-[#0047FF]"
            >
              Send OTP
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;
