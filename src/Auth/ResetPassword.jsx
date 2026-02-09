import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import solar from "../assets/Image/auth.jpeg";
import axios from "axios";
import { Base_Url } from "../API/Base_Url";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { state } = useLocation();
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(`${Base_Url}api/web-reset-password`, {
        email: state.email,
        password,
      });

      if (res.data.success) {
        toast.success("Password reset successfully");
        navigate("/login");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f0f9ff] via-[#e6f0ff] to-[#d0e4ff] flex items-center justify-center lg:px-6">
      <div className="px-4 sm:px-8 lg:px-20 py-10  w-full grid lg:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            🔐 Secure Update
          </span>

          <h1 className="md:text-4xl text-3xl font-extrabold text-gray-900 leading-tight">
            Create a new{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF]">
              Password
            </span>
          </h1>

          <p className="text-gray-600 mt-5 max-w-lg">
            Your new password must be strong and easy to remember.
            Don’t share it with anyone.
          </p>

          <div className="mt-6 mb-3">
            <img src={solar} className="rounded-lg shadow-sm" />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-md w-full mx-auto">

          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Reset{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF]">
              Password
            </span>
          </h2>

          <p className="text-gray-500 text-sm mt-2 text-center">
            Enter your new password below
          </p>

          <form onSubmit={handleReset} className="space-y-5 mt-8">

            <div>
              <label className="text-sm text-gray-600">New Password</label>

              <div className="relative mt-1">
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 pr-10 text-sm
      focus:outline-none focus:border-[#00C6FF]"
                />

                <span
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2
      cursor-pointer text-gray-500 hover:text-[#0047FF]"
                >
                  {showNewPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </span>
              </div>
            </div>


            <div>
              <label className="text-sm text-gray-600">Confirm Password</label>

              <div className="relative mt-1">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 pr-10 text-sm
      focus:outline-none focus:border-[#00C6FF]"
                />

                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2
      cursor-pointer text-gray-500 hover:text-[#0047FF]"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </span>
              </div>
            </div>


            <button
              type="submit"
              className="w-full py-3 rounded-lg text-sm font-semibold text-white
              bg-gradient-to-b from-[#00C6FF] to-[#0047FF]
              hover:opacity-90 transition"
            >
              Update Password
            </button>
          </form>

          <div className="text-center text-sm text-gray-600 mt-6 flex justify-center">
            Remember your password?{" "}
            <p onClick={() => navigate('/login')} className="font-medium text-[#0047FF] hover:underline">
              Back to Login
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
