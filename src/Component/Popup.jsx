import React, { useEffect, useState } from 'react'

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);

    // Show popup when website opens
    useEffect(() => {
        setShowPopup(true);
    }, []);

    return (
        <>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
                    <div className="bg-white rounded-2xl shadow-lg w-96 p-6 relative">
                        {/* Close button */}
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                        >
                            ✖
                        </button>

                        <h2 className="text-xl font-semibold mb-4 text-center">
                            HOLSOL
                        </h2>

                        <div className="space-y-3">
                            <div>
                                <label className="block text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Number</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter your number"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">City</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter your city"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium">Pincode</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"
                                    placeholder="Enter your pincode"
                                />
                            </div>
                        </div>

                        <button
                         onClick={() => setShowPopup(false)}
                            className="mt-5 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Popup
