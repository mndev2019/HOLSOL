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
            <section className='lg:py-20 py-14 px-6 lg:px-50 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 relative'>
                <img src={arrow} className='absolute lg:right-[30%] right-[10%] top-[23px] lg:h-auto h-[50px]' style={{
                    animation: "moveBackForth 3s ease-in-out infinite",
                }} />
                <div className="text-center lg:text-left max-w-2xl lg:mb-10 mb-4">
                    <div className="flex items-center lg:justify-start justify-center gap-4">
                        <h4 className="uppercase text-[16px] tracking-widest text-gray-600">
                           News and Updates
                        </h4>
                        <span className="h-[1px] w-16 bg-gray-600"></span>
                    </div>

                    <h2 className="lg:text-4xl text-2xl  font-extrabold text-gray-900 mt-2">
                        HOLSOL Uncover insights, inspiration, and innovation in our News
                    </h2>
                </div>
                {
                    blogs.map((itm) => (
                        <>
                            <div className="grid lg:grid-cols-12 grid-cols-1 items-center border-b border-[#02160933] py-8">
                                <div className="lg:col-span-5 col-span-1">
                                    <div className="relative ">
                                        <div className="flex gap-6 items-center">
                                            {/* Image */}
                                            <img
                                                src={itm.image}
                                                alt="blog"
                                                data-aos="zoom-in"
                                                className="lg:w-[250px] w-full h-[140px] rounded-[10px] object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                                            />

                                            {/* Date Card */}
                                            <div className="bg-white rounded-xl shadow-md px-8 py-6 text-center group hover:bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white lg:block hidden">
                                                <p className="text-3xl font-bold text-[#00210E] leading-none group-hover:text-white">
                                                    {itm.day}
                                                </p>
                                                <p className="uppercase text-sm tracking-wider text-gray-600 mt-1 group-hover:text-white">
                                                    {itm.month}{itm.year}
                                                </p>
                                            </div>
                                        </div>
                                        <button className="lg:hidden block absolute top-3 right-3 rounded-full px-4 py-1 text-white text-sm font-medium bg-gradient-to-r from-[#00C6FF] to-[#0047FF] shadow-md">
                                            {itm.day}  {itm.month}
                                        </button>
                                    </div>
                                </div>

                                <div className="lg:col-span-7 col-span-1">
                                    <div className="w-full flex items-center justify-between">
                                        {/* Text Content */}
                                        <div>
                                            <h3 className="lg:text-[24px] text-[18px] font-semibold text-[#00210E]">
                                                {itm.title}
                                            </h3>
                                            <p className="lg:text-[17px] text-[14px] text-[#5a5a5a] mt-2">
                                                {itm.para}
                                            </p>
                                        </div>

                                        {/* Arrow Button */}
                                        <button onClick={() => navigate('/blog-detail')} className="lg:w-12 w-[30px] lg:h-12 h-[30px] rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0047FF] flex items-center justify-center text-white shadow-md  transition lg:block hidden">
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
