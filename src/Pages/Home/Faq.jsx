import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi';
import { LuMinus } from 'react-icons/lu';

const Faq = () => {
      const [activeIndex, setActiveIndex] = useState("");
    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
      const faqdata = [
        {
            question: "Do solar panels work during cloudy days?",
            answer: "Solar panels can still generate electricity on cloudy days, although their efficiency is reduced. The amount of sunlight directly affects the power output, so a bright, overcast day will still produce some energy. "
        },
        {
            question: "Can solar panels be installed on any roof?",
            answer: "In general, solar panels can be installed on most roofs. Factors such as roof orientation, slope, and shading should be considered. Flat roofs may require additional mounting structures, while shaded areas may impact overall efficiency."
        },
        {
            question: " What is the payback period for a solar system?",
            answer: "The payback period for a solar system depends on various factors, including installation costs, energy savings, and local incentives. On average, it can range from 5 to 15 years."
        },
        {
            question: "Are there government incentives for solar installations?",
            answer: "Yes, There is a subsidy- MNRE scheme for the Domestic depending upon the different parameters. For Industries they can claim the GST & Take the Depreciation which more compare to subsidy."
        },
        {
            question: "What are products Suntek Solar ?",
            answer: "Suntek Solar is into Solar RoofTop Installations Industrial, Commercial & Residential. We undertake solar installations, solar water heaters & solar fencing."
        },
    ]
    return (
        <>
            <section className='lg:px-20 px-5 lg:py-10 py-5'>
                <h3 className="text-[2em] font-[700] text-[#192e5b] py-3">
                    FAQS
                </h3>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqdata?.length > 0 ? (
                        faqdata?.map((item, index) => (
                            <div key={item._id} className="border border-gray-200 rounded-lg shadow-sm">
                                <button
                                    className="w-full flex justify-between items-center md:p-4 p-3 text-left font-medium bg-gray-100 hover:bg-gray-200 transition"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span className="text-gray-800 md:text-[16px] text-[14px]">{item.question}</span>
                                    <span className="text-gray-600 bg-black p-1  rounded-full">
                                        {activeIndex === index ? <LuMinus size={20} className="text-white" /> : <FiPlus size={20} className="text-white" />}
                                    </span>
                                </button>
                                {activeIndex === index && (
                                    <div className="p-4 text-gray-700 bg-white border-t md:text-[16px] text-[14px]">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No FAQs available.</p>
                    )}
                </div>
            </section>
        </>
    )
}

export default Faq
