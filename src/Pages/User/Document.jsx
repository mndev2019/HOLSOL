import React from "react";
import { FaUpload, FaFileAlt } from "react-icons/fa";

const Documents = () => {
    return (
        <div className="relative min-h-screen lg:py-16 py-10 px-4 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f0f9ff] via-[#e6f0ff] to-[#d0e4ff]" />

            <div className="relative max-w-5xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-10 text-center">
                    Your <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF]">Documents</span>
                </h2>

                {/* Upload Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Upload New Document</h3>
                    <div className="flex items-center space-x-4">
                        <input
                            type="file"
                            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-[#00C6FF]"
                        />
                        <button className="flex items-center gap-2 px-5 py-2 bg-gradient-to-b from-[#00C6FF] to-[#0047FF] text-white font-semibold rounded-lg hover:opacity-90 transition">
                            <FaUpload /> Upload
                        </button>
                    </div>
                </div>

                {/* Uploaded Documents */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((doc) => (
                        <div key={doc} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition cursor-pointer">
                            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-b from-[#00C6FF] to-[#0047FF] text-white rounded-full text-2xl mb-4">
                                <FaFileAlt />
                            </div>
                            <h4 className="font-semibold text-gray-800">Document {doc}</h4>
                            <p className="text-sm text-gray-500 mt-1">Uploaded on 2026-01-30</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Documents;
