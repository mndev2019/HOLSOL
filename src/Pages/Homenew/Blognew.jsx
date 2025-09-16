import React, { useEffect } from 'react'
import blog from '../../assets/Image/blogres.jpg'
// import blog1 from '../../assets/Image/solarrooftop.jpg'
import blog1 from '../../assets/Image/blogres2.jpg'
// import blog3 from '../../assets/Image/blog3.jpg'
// import blog3 from '../../assets/Image/blogres3.jpg'
import { Navigate, useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import arrow from '../../assets/Image/arrows.png'

const Blognew = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // duration in ms
    }, []);
    const navigate = useNavigate();
    const blogs = [
        {
            image: blog,
            day: "19",
            month: "JAN",
            year: "2025",
            title: "Investing in a Sustainable Energy Future",
            para: "  Profitable business makes your profit Lorem ipsum dolor sit amet consectetur adipiscing elit, sed"
        },
        {
            image: blog1,
            day: "19",
            month: "JAN",
            year: "2025",
            title: "Beneath the Surface: Geothermal Energy Explored",
            para: "Profitable business makes your profit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        },
        // {
        //     image: blog3,
        //     day: "19",
        //     month: "JAN",
        //     year: "2025",
        //     title: "May, 2024Biomass Energy Demystified: Fueling a Future",
        //     para: "Profitable business makes your profit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        // },
    ]
    return (
        <>
            <section className='py-20 px-6 lg:px-50 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 relative'>
                <img src={arrow} className='absolute right-[30%] top-[23px]' style={{
                    animation: "moveBackForth 3s ease-in-out infinite",
                }} />
                <div className="text-center lg:text-left max-w-2xl mb-10">
                    <div className="flex items-center gap-4">
                        <h4 className="uppercase text-[16px] tracking-widest text-gray-600">
                            Our News
                        </h4>
                        <span className="h-[1px] w-16 bg-gray-600"></span>
                    </div>

                    <h2 className="text-4xl  font-extrabold text-gray-900 mt-2">
                        Uncover insights, inspiration, and innovation in our News
                    </h2>
                </div>
                {
                    blogs.map((itm) => (
                        <>
                            <div className="grid grid-cols-12 items-center border-b border-[#02160933] py-8">
                                <div className="col-span-5">
                                    <div className="relative ">
                                        <div className="flex gap-6 items-center">
                                            {/* Image */}
                                            <img
                                                src={itm.image}
                                                alt="blog"
                                                data-aos="zoom-in"
                                                className="w-[250px] h-[140px] rounded-[10px] object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                                            />

                                            {/* Date Card */}
                                            <div className="bg-white rounded-xl shadow-md px-8 py-6 text-center group hover:bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white">
                                                <p className="text-3xl font-bold text-[#00210E] leading-none group-hover:text-white">
                                                    {itm.day}
                                                </p>
                                                <p className="uppercase text-sm tracking-wider text-gray-600 mt-1 group-hover:text-white">
                                                    {itm.month}{itm.year}
                                                </p>
                                            </div>
                                        </div>



                                        {/* Date Button */}
                                        {/* <button className="absolute top-3 right-3 rounded-full px-4 py-1 text-white text-sm font-medium bg-gradient-to-r from-[#00C6FF] to-[#0047FF] shadow-md">
                                            {itm.date}
                                        </button> */}
                                    </div>
                                </div>

                                <div className="col-span-7">
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
                                        <button onClick={() => navigate('/blog-detail')} className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0047FF] flex items-center justify-center text-white shadow-md  transition">
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
