import React from 'react'

const Career = () => {
    return (
        <>
            <section className="relative lg:px-20 px-5 lg:py-20 py-14 bg-gradient-to-br from-[#f8fbff] to-[#eef7ff] overflow-hidden">
                {/* Decorative Blobs */}
                <div className="absolute top-0 -left-20 w-96 h-96 bg-[#00C6FF]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#0047FF]/20 rounded-full blur-3xl"></div>

                {/* Heading */}
                <div className="mb-12 relative z-10">
                    <h4 className="uppercase text-sm tracking-widest text-gray-600">
                        Join Our Team
                    </h4>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">
                        Career
                    </h2>
                </div>

                {/* Content */}
                <div className="space-y-10 relative z-10">
                    {/* Top Text */}
                    <p className="text-gray-800 text-lg leading-relaxed">
                        At HOLSOL, we seek hard-working, self-starters to join our family of
                        collaborative and ambitious industry professionals
                    </p>

                    {/* Highlight Box */}
                    <div className="relative rounded-md shadow-sm">
                        {/* Gradient Border Wrapper */}
                        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#00C6FF] to-[#0047FF] rounded-l-md"></div>

                        {/* Content Box */}
                        <div className="bg-[#f5faff] p-6 rounded-md ml-[4px]">
                            <p className="text-gray-800 text-lg leading-relaxed">
                                We believe in providing equal opportunities and exposure across different
                                skill sets to enhance employability and career growth for all.
                            </p>
                        </div>
                    </div>


                    {/* Bottom Text */}
                    <p className="text-gray-800 text-lg leading-relaxed">
                        If you faced any issue while uploading the resume, you can directly send us
                        an email at
                        <a
                            href="mailto:info@holsolindia.com"
                            className="text-blue-600 font-medium hover:underline ml-1"
                        >
                           info@holsolindia.com
                        </a>{" "}
                        with subject <span className="font-semibold">“Career: Applied for post name”</span>
                    </p>
                </div>
            </section>



        </>
    )
}

export default Career
