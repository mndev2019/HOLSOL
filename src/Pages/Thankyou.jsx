// src/pages/ThankYou.jsx
import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="p-8 bg-white rounded-xl md:shadow-lg text-center">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF] mb-4">
          Thank You!
        </h1>
        <p className="text-gray-700 mb-6">
          Your form has been submitted successfully. We will contact you soon.
        </p>

        {/* Go Back to Home Button */}
        <Link
          to="/"
          className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white font-medium hover:opacity-90 transition"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;

