import React from 'react'
import map from '../../assets/Image/map.png'

const Aboutpresence = () => {
    const states = [
        "Rajasthan",
        "Uttarakhand",
        "Punjab",
        "Gujrat",
        "Chattisgarh",
        "Delhi",
        "Madhya Pradesh",
        "Himachal Pradesh",
        "Uttar Pradesh",
        "Maharashtra",
        "Haryana",
        "Orissa",
        "Andhra Pradesh",
        "Telangana"
    ];

    return (
        <section className="relative lg:px-20 px-5 lg:py-20 py-14 bg-gradient-to-br from-[#f8fbff] to-[#eef7ff] overflow-hidden">
            {/* Decorative Blobs */}
            <div className="absolute top-0 -left-20 w-96 h-96 bg-[#00C6FF]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#0047FF]/20 rounded-full blur-3xl"></div>

            {/* Heading */}
            <div className="text-center mb-16 relative z-10">
                <h4 className="uppercase text-sm tracking-widest text-gray-600">
                    Best Solar Energy Solutions
                </h4>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">
                    Our Presence
                </h2>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center relative z-10">
                {/* Left - Map Image */}
                <div className="col-span-1">
                    <img src={map} alt="India Map" />
                </div>

                {/* Right - States List */}
                <div className="grid grid-cols-2 gap-4">
                    {states.map((state, index) => (
                        <div
                            key={index}
                            className="border rounded-md py-3 px-4 text-gray-800 font-semibold text-center bg-white shadow hover:shadow-md transition"
                        >
                            {state}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Aboutpresence
