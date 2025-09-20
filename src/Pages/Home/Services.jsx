import React from 'react'
import Heading from '../../Component/Heading'
import industrial from '../../assets/Image/industrial.jpg'
import reseential from '../../assets/Image/resedential.jpg'
import commercial from '../../assets/Image/commercial.jpg'
import { FaHome, FaIndustry } from 'react-icons/fa'
import { MdBusiness } from 'react-icons/md'

const Services = () => {
    const service = [
        {
            image: industrial,
            icon: <FaIndustry className="w-6 h-6" />,
            title: "Industrial Rooftops",
            para: "At HOLSOL, we are dedicated to providing cutting-edge industrial rooftop solar power solutions that help industries harness the power of the sun."
        },
        {
            image: reseential,
            icon: <FaHome className="w-6 h-6" />,
            title: "Residential Rooftops",
            para: "At HOLSOL, we are dedicated to providing clean and reliable solar solutions for homes, ensuring energy independence and long-term savings."
        },
        {
            image: commercial,
            icon: <MdBusiness className="w-6 h-6" />,
            title: "Commercial Rooftops",
            para: "At HOLSOL, we are helping businesses go green with advanced commercial rooftop solutions that reduce costs and enhance sustainability."
        }
    ]
    return (
        <>
            <section className='lg:px-20 px-5 lg:py-10 py-5'>
                <Heading title="Solar Rooftops" />
                <h3 className='text-[2em] font-[700] text-[#192e5b] py-3'>
                    HOLSOL India: End-to-End Solar Solutions for Residential, Commercial, Industrial Solar Installations Across India
                </h3>
                <p className='text-[15px] tracking-wide'>
                    Established in 2022, HOLSOL Energy Systems Private Limited is a Trusted solar energy company in India, specializing in Residential, Commercial, and  Industrial Solar installations. Our comprehensive portfolio includes advanced Rooftop Solar Systems and Large-Scale Solar Power Plants
                </p>
                <p className='text-[15px] tracking-wide'>
                    Driven by a strong focus on Research and Development, HOLSOL India continuously invests in cutting-edge Solar Technologies to maximize Efficiency, Reduce Electricity Costs and Support India’s transition to Sustainable Energy.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-8">
                    {service.map((itm) => (
                        <>
                            <div className="col-span-1 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                <div className="relative h-52">
                                    <img
                                        src={itm.image}
                                        alt="Industrial Rooftops"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 text-red-600 p-3 rounded-full">
                                            {itm.icon}
                                        </div>
                                        <h3 className="ml-3 text-xl font-bold text-gray-900">{itm.title}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed tracking-wide">
                                        {itm.para}
                                    </p>

                                    {/* Button */}
                                    {/* <div className="mt-5">
                                <button className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                                    Learn More
                                </button>
                            </div> */}
                                </div>
                            </div>
                        </>
                    ))}


                </div>

            </section>

        </>
    )
}

export default Services
