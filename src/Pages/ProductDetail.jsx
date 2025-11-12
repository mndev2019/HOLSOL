import React, { useEffect } from 'react';
import solarRooftopImg from '../assets/Image/newsolarrooftop.jpg';
import commercialImg from '../assets/Image/industrial.jpg';
import epcImg from '../assets/Image/solarepc.jpg';
import solarKitImg from '../assets/Image/solarkit.png';
import { FaCheckCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const products = [
    {
      title: 'Solar Rooftop',
      image: solarRooftopImg,
      description: `Holsol India delivers high-quality Solar Rooftop solutions designed to help homes harness solar energy efficiently. By installing solar panels directly on your rooftop, you can generate clean, renewable power, reduce your electricity bills, and contribute to a greener, more sustainable future.`,
      
      benefits: [
        'Cost Savings – Reduce your monthly electricity expenses significantly with rooftop solar power.',
        'Eco-Friendly Energy – Lower your carbon footprint by switching to a clean, renewable energy source.',
        'Customized Solutions – Every system is tailored to match your rooftop size, structure, and energy requirements.',
        'Reliable & Safe – High-quality panels combined with IIT-approved structures ensure long-lasting performance and maximum safety.',
        'Government Subsidy Assistance – Get expert guidance to claim eligible solar subsidies and incentives.',
        'Guaranteed Cashback – For the first time in India, earn guaranteed income for the next 10 years through Holsol’s exclusive cashback program.',
      ],
      summary: "With Holsol’s Solar Rooftop systems, you don’t just generate electricity—you make a smart, secure, and sustainable investment in your future."
    },
    {
      title: 'Commercial & Industrial Solar Solutions',
      image: commercialImg,
      description: `Holsol India provides high-performance solar solutions specially designed for commercial and industrial applications. Our systems help businesses significantly reduce energy costs, enhance sustainability, and improve overall operational efficiency. Built to meet large-scale energy demands, our solutions deliver maximum reliability, productivity, and long-term ROI.`,
      benefits: [
        'Significant Cost Savings – Reduce electricity bills and operational expenses with efficient, high-output solar systems.',
        'Scalable Solutions – From medium-sized commercial spaces to large industrial facilities, every system is customized to meet your specific energy requirements.',
        'High Efficiency – Powered by advanced solar technology for consistent energy generation—even during low-light or challenging weather conditions.',
        'Durable & Safe – Constructed with IIT-approved structures and premium-quality components to ensure long-lasting performance and superior safety.',
        'Sustainable & Green – Contribute to environmental responsibility and corporate sustainability goals.',
      ],
      summary: "With Holsol’s Commercial & Industrial solar solutions, businesses can power growth sustainably while optimizing costs."
    },
    {
      title: 'Solar EPC Works',
      image: epcImg,
      description: `Holsol provides end-to-end Solar EPC services, delivering complete solar power solutions with efficiency, reliability, and quality. From concept to commissioning, we manage every aspect of your solar project, ensuring on-time delivery and maximum performance.`,
      benefits: [
        'Comprehensive Solutions – Complete project handling from design, procurement, installation, to commissioning.',
        'Custom Designs – Tailored solar systems to meet site-specific energy requirements.',
        'Quality Assurance – High-quality components and IIT-approved structures for long-term reliability.',
        'Timely Execution – Efficient project management for on-time delivery.',
        'Maintenance Support – Post-installation monitoring and service to ensure peak performance.',
      ],
      summary: "With Holsol’s Solar EPC Works, you get a turnkey solar solution that is hassle-free, efficient, and designed to maximize your energy output."
    },
    {
      title: 'Solar Kit OEM',
      image: solarKitImg,
      description: `Holsol India offers Solar Kit OEM solutions, providing customizable solar kits that cater to the specific needs of businesses, installers, and distributors. Our kits are designed for ease of installation, high efficiency, and reliable performance, making solar adoption simple and scalable.`,
      benefits: [
        'Customizable Kits – Tailored configurations for residential, commercial, and industrial requirements.',
        'Plug & Play – Easy-to-install kits for quick deployment.',
        'High Efficiency Components – Quality-tested panels, inverters, and accessories for maximum energy output.',
        'Reliable & Durable – Built to withstand environmental stress with long-lasting performance.',
        'Support & Guidance – Technical assistance and documentation for seamless installation and operation.',
      ],
      summary: "With Holsol’s Solar Kit OEM solutions, partners and customers get ready-to-use, high-quality solar kits that simplify solar adoption and ensure optimum performance."
    },
  ];

  return (
    <section className="relative  px-8 py-10 bg-gradient-to-br from-[#f8fbff] to-[#eef7ff] overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-[#00C6FF]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#0047FF]/20 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Animated Heading */}
      <div className="text-center mb-10">
        <h1 className="lg:text-4xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF]" data-aos="flip-left">
          Products
        </h1>

      </div>

      {/* Product Cards */}
      {products.map((product, idx) => (
        <div
          key={idx}
          className={`flex flex-col lg:flex-row items-center gap-10 mb-20  ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
        >
          {/* Product Image */}
          <div className="lg:w-1/2 w-full overflow-hidden rounded-xl shadow-xl hover:shadow-2xl" data-aos="flip-up">
            <img
              src={product.image}
              alt={product.title}
              className="w-full lg:h-[400px] h-[350px] object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 w-full">
            <div className="flex justify-between">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF]">
                {product.title}
              </h2>
              {product.title === "Solar Kit OEM" && (
                <a href="tel:9257055583">
                  <button
                    className="flex items-center gap-2 md:px-6 px-5 md:py-2 py-1 md:rounded-lg rounded-sm bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Call Now
                  </button>
                </a>

              )}
            </div>

            <p className="text-gray-800 mb-6 tracking-[0.3px] text-justify">{product.description}</p>
            <ul className="space-y-3">
              {product.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#00C6FF] mt-1 flex-shrink-0" />
                  <span className="text-gray-800 tracking-[0.3px] text-justify">{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-800 mt-4">{product.summary}</p>

          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductDetail;
