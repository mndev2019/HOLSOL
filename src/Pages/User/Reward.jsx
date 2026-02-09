import React from "react";
import { FaGift } from "react-icons/fa";

const Rewards = () => {
    const rewards = [
        { title: "10% Discount Coupon", points: 50 },
        { title: "Free Solar Panel Maintenance", points: 100 },
        { title: "Referral Bonus ₹500", points: 150 },
    ];

    return (
        <div className="relative min-h-screen lg:py-16 py-10 px-4 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f0f9ff] via-[#e6f0ff] to-[#d0e4ff]" />

            <div className="relative max-w-5xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-10 text-center">
                    Your <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF]">Rewards</span>
                </h2>

                {/* Rewards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rewards.map((reward, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition cursor-pointer">
                            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-b from-[#00C6FF] to-[#0047FF] text-white rounded-full text-2xl mb-4">
                                <FaGift />
                            </div>
                            <h4 className="font-semibold text-gray-800">{reward.title}</h4>
                            <p className="text-sm text-gray-500 mt-1">{reward.points} Points</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rewards;
