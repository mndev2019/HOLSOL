import React from "react";
import { FaUserCircle, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-10 flex items-center justify-center px-4 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f0f9ff] via-[#e6f0ff] to-[#d0e4ff]">
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#00C6FF] rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FFD200] rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF]">
              Holsol
            </span>
          </h2>
          <p className="text-gray-600 mt-2">
            Manage your solar journey from one place
          </p>
        </div>

        {/* Profile Card */}
        <div
          onClick={() => navigate("/profile")}
          className="group cursor-pointer bg-gradient-to-b from-[#00C6FF] to-[#0047FF]  rounded-2xl p-1"
        >
          <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl transition">

            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#00C6FF] to-[#0047FF] flex items-center justify-center text-white text-5xl">
              <FaUserCircle />
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900">
                Your Profile
              </h3>
              <p className="text-gray-600 mt-1">
                Complete your personal & installation details
              </p>
            </div>

            {/* Button */}
            <div>
              <button className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold
                bg-gradient-to-b from-[#00C6FF] to-[#0047FF]
                group-hover:opacity-90 transition">
                Go to Profile
                <FaArrowRight />
              </button>
            </div>

          </div>
        </div>

        {/* Footer hint */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Complete your profile to proceed with solar installation ☀️
        </p>

      </div>
    </section>
  );
};

export default Dashboard;
