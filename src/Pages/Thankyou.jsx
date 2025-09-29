// src/pages/ThankYou.jsx
import React from "react";

const ThankYou = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="p-8 bg-white rounded-xl shadow-lg text-center">
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF] mb-4">Thank You!</h1>
                <p className="text-gray-700">Your form has been submitted successfully. We will contact you soon.</p>
            </div>
        </div>
    );
};

export default ThankYou;
