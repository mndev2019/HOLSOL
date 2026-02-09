import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import solar from "../assets/Image/auth.jpeg";
import axios from "axios";
import { Base_Url } from "../API/Base_Url";
import { toast } from "react-toastify";
import logo from '../assets/Image/newlogocolored.png'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // 🔑 CHECK PROFILE & REDIRECT
  const checkProfileAndRedirect = async (token) => {
    try {
      const res = await axios.get(`${Base_Url}api/profile/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // ✅ profile exists
      if (res.data?.data) {
        navigate("/profile-detail");
      }
    } catch (error) {
      // ❌ profile not created
      if (error.response?.status === 404) {
        navigate("/profile");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  // 🔐 LOGIN SUBMIT
  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${Base_Url}api/web-login`, {
        email,
        password,
      });

      if (res.data.success) {
        toast.success("Login successful 🚀");

        localStorage.setItem("token", res.data.token);

        // 🔥 DECIDE WHERE TO GO
        await checkProfileAndRedirect(res.data.token);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f0f9ff] via-[#e6f0ff] to-[#d0e4ff] flex items-center justify-center lg:px-6">

      <div className="px-4 sm:px-8 lg:px-20 py-10 w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            ☀️ Holsol Solar
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight flex flex-wrap items-center gap-2">
            Welcome Back to
            <img src={logo} alt="Holsol" className="h-[26px] sm:h-[30px]" />
          </h1>
          <p className="text-gray-600 mt-5 max-w-lg text-sm sm:text-base">
            Monitor your solar performance, manage installations,
            and track savings—all in one dashboard.
          </p>

          <div className="md:mt-5 mt-3">
            <img src={solar} className="object-cover rounded-lg" />
          </div>
        </div>

        {/* RIGHT LOGIN */}
        <div className="bg-white rounded-2xl shadow-xl sm:p-8 p-5 md:p-10 max-w-md w-full mx-auto">

          <h2 className="text-2xl font-bold text-gray-900">
            Login to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF]">
              Account
            </span>
          </h2>

          <form onSubmit={handlesubmit} className="space-y-5 mt-6">

            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email"
              required
              className="w-full border rounded-lg px-4 py-2"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full border rounded-lg px-4 py-2 pr-10"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2
    cursor-pointer text-gray-500 hover:text-[#0047FF]"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </span>
            </div>

            <div className="flex justify-end">
              <span
                onClick={() => navigate("/forgot-password")}
                className="tfont-medium text-[#0047FF] text-sm cursor-pointer hover:underline"
              >
                Forgot Password?
              </span>
            </div>


            <button
              disabled={loading}
              className="w-full py-3 rounded-lg text-sm font-semibold text-white
              bg-gradient-to-b from-[#00C6FF] to-[#0047FF]"
            >
              {loading ? "Checking..." : "Login"}
            </button>

          </form>

          <div className="text-center text-sm text-gray-600 mt-6 flex justify-center">
            Don’t have an account?{" "}
            <p onClick={() => navigate('/register')} className="font-medium text-[#0047FF]">
              Create Account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
