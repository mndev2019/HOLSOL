import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import solar from "../assets/Image/auth.jpeg";
import axios from "axios";
import { Base_Url } from "../API/Base_Url";
import { toast } from "react-toastify";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  // resend otp
  const [resending, setResending] = useState(false);

  const handleResendOtp = async () => {
    try {
      setResending(true);

      const res = await axios.post(`${Base_Url}api/web-forgot-password`, {
        email: state.email,
      });

      if (res.data.success) {
        toast.success("OTP resent successfully");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to resend OTP");
    } finally {
      setResending(false);
    }
  };


  const handleVerify = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter 6 digit OTP");
      return;
    }

    try {
      const res = await axios.post(`${Base_Url}api/web-verify-otp`, {
        email: state.email,
        otp,
      });

      if (res.data.success) {
        toast.success("OTP verified successfully");
        navigate("/reset-password", { state });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="lg:min-h-screen bg-gradient-to-r from-[#f0f9ff] via-[#e6f0ff] to-[#d0e4ff] flex items-center justify-center md:px-6">
      <div className="px-4 sm:px-8 lg:px-20 py-10 w-full grid lg:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT (Same Login Feel) */}
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            🔐 Secure Verification
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Verify your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF]">
              OTP
            </span>
          </h1>

          <p className="text-gray-600 mt-5 max-w-lg">
            We’ve sent a 6-digit verification code to your registered email.
            Please enter it below to continue.
          </p>

          <div className="mt-6 mb-5">
            <img src={solar} className="rounded-lg shadow-sm" />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-md w-full mx-auto">

          <h2 className="text-2xl font-bold text-gray-900 text-center">
            OTP{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF]">
              Verification
            </span>
          </h2>

          <p className="text-gray-500 text-sm mt-2 text-center">
            Enter the 6-digit code
          </p>

          {/* OTP INPUT */}
          <div className="mt-8 flex justify-center">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              shouldAutoFocus
              renderInput={(props) => (
                <input
                  {...props}
                  className="w-50 h-12 mx-1 border border-gray-300 rounded-lg
                  text-center text-lg font-semibold
                  focus:outline-none focus:border-[#00C6FF]
                  focus:ring-1 focus:ring-[#00C6FF]"
                />
              )}
            />
          </div>

          {/* VERIFY BUTTON */}
          <button
            onClick={handleVerify}
            className="w-full mt-8 py-3 rounded-lg text-sm font-semibold text-white
            bg-gradient-to-b from-[#00C6FF] to-[#0047FF]
            hover:opacity-90 transition"
          >
            Verify OTP
          </button>

          {/* RESEND */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Didn’t receive the code?{" "}
            <span
              onClick={handleResendOtp}
              className={`font-medium cursor-pointer hover:underline
      ${resending ? "text-gray-400 pointer-events-none" : "text-[#0047FF]"}`}
            >
              {resending ? "Resending..." : "Resend OTP"}
            </span>
          </p>


        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
