import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import blog from '../assets/Image/blogresreduce.jpeg'
import blog1 from '../assets/Image/blognewreduce.jpeg'

const BlogDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const blogs = [
    {
      id: 1,
      image: blog,
      date: "22 September 2025",
      title: "Sunrise for Solar: GST Cut Spurs Clean Energy Growth",
      content: `The Indian government has announced a major reduction in the Goods and Services Tax (GST) on solar equipment, lowering it to just 5%. This policy change makes solar systems more affordable for both households and businesses. Industry experts predict that this move will significantly boost clean energy adoption, strengthen India’s renewable energy goals, and reduce reliance on fossil fuels.`,
    },
    {
      id: 2,
      image: blog1,
      date: "25 September 2025",
      title: "R.S. Logistics Opens New Warehouse in Lucknow",
      content: `R.S. Logistics & Warehouse Services Pvt. Ltd. has inaugurated a state-of-the-art warehouse in Lucknow, developed in collaboration with TATA Power Renewable Energy. The new facility has been designed with a strong focus on energy efficiency and modern infrastructure, enabling smoother and more reliable supply chain operations. This strategic expansion not only enhances regional trade and distribution networks across Uttar Pradesh but also reinforces the company’s commitment to sustainable logistics powered by renewable energy solutions.`,
    },
  ];
  return (
    <>
      <section className='relative  px-8 py-10 bg-gradient-to-br from-[#f8fbff] to-[#eef7ff] overflow-hidden'>
        <div className="absolute top-0 -left-20 w-96 h-96 bg-[#00C6FF]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#0047FF]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        {/* Animated Heading */}
        <div className="text-center mb-10">
          <h1 className="lg:text-4xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF]" data-aos="flip-left">
             News and Updates
          </h1>
        </div>
       {blogs.map((blog, index) => (
  <div
    key={blog.id}
    className="grid lg:grid-cols-12 grid-cols-1 gap-8 items-center max-w-7xl mx-auto space-y-4"
  >
    {/* Image Section */}
    <div
      className={`lg:col-span-4 col-span-1 ${
        index % 2 === 1 ? "lg:order-2" : "lg:order-1"
      }`}
    >
      <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[250px] md:h-[300px] object-cover transform hover:scale-105 transition duration-500"
        />
      </div>
    </div>

    {/* Content Section */}
    <div
      className={`lg:col-span-8 col-span-1 ${
        index % 2 === 1 ? "lg:order-1" : "lg:order-2"
      }`}
    >
      <span className="inline-block bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
        {blog.date}
      </span>
      <h2 className="mt-4 text-2xl md:text-3xl font-bold text-[#00210E] leading-snug">
        {blog.title}
      </h2>
      <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed text-justify lg:mb-0 mb-4">
        {blog.content}
      </p>
    </div>
  </div>
))}


      </section>
    </>
  )
}

export default BlogDetail
