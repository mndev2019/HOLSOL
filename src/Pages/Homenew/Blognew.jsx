import React from 'react'
import blog from '../../assets/Image/blog1.jpg'
import blog1 from '../../assets/Image/solarrooftop.jpg'
import blog3 from '../../assets/Image/blog3.jpg'

const Blognew = () => {
    const blogs = [
        {
            image: blog,
            date: "19 Feb",
            title: "Investing in a Sustainable Energy Future",
            para: "  Profitable business makes your profit Lorem ipsum dolor sit amet consectetur adipiscing elit, sed"
        },
        {
            image: blog1,
            date: "19 Feb",
            title: "Beneath the Surface: Geothermal Energy Explored",
            para: "Profitable business makes your profit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        },
        {
            image: blog3,
            date: "19 Feb",
            title: "May, 2024Biomass Energy Demystified: Fueling a Future",
            para: "Profitable business makes your profit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        },
    ]
    return (
        <>
            <section className='py-20 px-6 lg:px-20 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100'>
                <div className="text-center lg:text-left max-w-2xl mb-10">
                    <h4 className="uppercase text-sm tracking-widest text-gray-600">
                        Our Blog
                    </h4>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">
                        Uncover insights, inspiration, and innovation in our blog
                    </h2>
                </div>
                {
                    blogs.map((itm) => (
                        <>
                            <div className="grid grid-cols-12 items-center border-b border-[#02160933] py-8">
                                <div className="col-span-4">
                                    <div className="relative max-w-[300px] max-h-[169px]">
                                        {/* Image */}
                                        <img
                                            src={itm.image}
                                            className="w-full max-h-[169px] rounded-[10px] object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                                            alt="blog"
                                        />

                                        {/* Date Button */}
                                        <button className="absolute top-3 right-3 rounded-full px-4 py-1 text-white text-sm font-medium bg-gradient-to-r from-[#00C6FF] to-[#0047FF] shadow-md">
                                            {itm.date}
                                        </button>
                                    </div>
                                </div>

                                <div className="col-span-8">
                                    <div className="w-full flex items-center justify-between">
                                        {/* Text Content */}
                                        <div>
                                            <h3 className="text-[24px] font-semibold text-[#00210E]">
                                                {itm.title}
                                            </h3>
                                            <p className="text-[17px] text-[#5a5a5a] mt-2">
                                                {itm.para}
                                            </p>
                                        </div>

                                        {/* Arrow Button */}
                                        <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0047FF] flex items-center justify-center text-white shadow-md  transition">
                                            ↗
                                        </button>
                                    </div>
                                </div>


                            </div>
                        </>
                    ))
                }

            </section>
        </>
    )
}

export default Blognew
