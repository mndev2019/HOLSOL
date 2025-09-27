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
      description: `Holsol India deliver the Solar Rooftop solutions are designed to help homes harness the power of the sun efficiently. By installing solar panels directly on your roof, you can generate clean, renewable energy, reduce electricity bills, and contribute to a sustainable future.`,
      benefits: [
        'Cost Savings – Significantly lower your monthly electricity expenses.',
        'Eco-Friendly Energy – Reduce your carbon footprint with renewable power.',
        'Customized Solutions – Tailored systems to match your rooftop size and energy needs.',
        'Reliable & Safe – Durable panels and IIT-approved structures for long-lasting performance.',
        'Government Subsidy Assistance – Guidance to avail applicable solar incentives.',
        'Cashback – First time in India you get guaranteed income for the next 10 years.',
      ],
      summary: "With Holsol’s Solar Rooftop systems, you don’t just produce energy—you make a smart, sustainable investment for the future."
    },
    {
      title: 'Commercial & Industrial Solar Solutions',
      image: commercialImg,
      description: `Holsol India offers high-performance solar solutions for commercial and industrial applications, helping businesses cut energy costs, improve sustainability, and boost operational efficiency. Our systems are designed to meet large-scale energy demands while ensuring maximum reliability and ROI.`,
      benefits: [
        'Significant Cost Savings – Reduce electricity bills and operational expenses.',
        'Scalable Solutions – From medium-sized offices to large industrial units, systems are tailored to your energy needs.',
        'High Efficiency – Advanced solar technology for consistent power generation, even in low-light conditions.',
        'Durable & Safe – IIT-approved structures and quality components ensure long-term performance.',
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
