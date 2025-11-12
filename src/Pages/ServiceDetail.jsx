import React, { useEffect } from "react";
import {
  FaSolarPanel,
  FaShieldAlt,
  FaCheckCircle,
  FaCreditCard,
  FaTools,
  FaBolt,
} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import solarsolution from '../assets/Image/solarsolution.png'
import solarstructure from '../assets/Image/solarstructure.png'
import insured from '../assets/Image/insuredpanel.png'
import cashback from '../assets/Image/loyaltycashback.png'
import maintenanace from '../assets/Image/maintenanaceservice.png'
import finance from '../assets/Image/finanaceservice.png'

const services = [
  {
    title: "High Yield Solar Solutions (1KW – 100 KW)",
    desc: `At Holsol India, we offer a trusted range of high-yield solar systems from 1KW to 100KW, engineered to deliver maximum energy efficiency and long-term savings. Whether you need solar power for residential, commercial, or industrial use, our solutions are designed to generate more electricity, ensure reliable performance, and maximize your overall investment.`,

    points: [
      "Wide Capacity Range (1KW – 100KW) – Tailored solar systems for homes, offices, commercial spaces, and industrial setups.",
      "Maximum Energy Generation – Advanced solar technology designed to deliver higher output—even in low-light or challenging weather conditions.",
      "Cost-Efficient & High ROI – Reduce monthly electricity bills and enjoy faster returns with durable, long-lasting solar systems.",
      "Scalable & Flexible Design – Easily expandable and customizable based on your energy consumption and future power requirements.",
      "Reliable & Safe – Built using premium components that meet industry standards for safety, reliability, and performance.",
    ],
    benefits: [
      "Save up to 80% on electricity costs",
      "Low maintenance, high performance systems",
      "Sustainable, eco-friendly energy solutions",
      "Powering Your Growth: From a compact 1KW home setup to a robust 15KW industrial system, Holsol’s high-yield solar solutions ensure that every unit of sunlight is converted into maximum usable energy. With Holsol, you don’t just switch to solar—you choose a smarter, more efficient energy future.",
    ],
    icon: solarsolution,
    bgColor: "bg-blue-100",
  },
  {
    title: "IIT Approved Solar Structure Designs",
    desc: `At Holsol India, every solar installation is built on a foundation of strength, safety, and engineering excellence. Our solar mounting structures are designed and approved by IIT experts, ensuring unmatched reliability, durability, and long-term performance for all types of solar projects.`,
    points: [
      "Engineering Precision – Developed using advanced structural analysis to withstand extreme weather conditions such as high wind speeds, heavy rainfall, and intense heat.",
      "Safety & Stability – Thoroughly tested for load-bearing capacity, corrosion resistance, and long-lasting structural strength to ensure secure installations.",
      "Standard Compliance – Fully compliant with national and international quality standards, delivering safe, certified, and dependable solar mounting solutions.",
      "Optimized Performance – Designed for accurate module alignment and ideal tilt angle to maximize solar power generation and improve system efficiency.",
    ],
    benefits: [

      "Long-lasting, maintenance-free structures",
      "Guaranteed safety, stability, and compliance",
      "Higher efficiency through optimal solar panel positioning",
      "Confidence backed by IIT-approved engineering validation",
      "With Holsol’s IIT-approved solar structures, you get more than just a mounting system you gain the assurance of world-class design, robust performance, and long-term sustainable reliability",
    ],
    icon: solarstructure,
    bgColor: "bg-red-100",
  },
  {
    title: "Insured Panels & Structure",
    desc: `For the first time in India, Holsol India provides complete insurance coverage for your rooftop solar system. We don’t just deliver high-performance solar installations we also give you the added assurance of insured panels and structures, ensuring your investment remains protected against unforeseen risks.`,
    points: [
      "Financial Protection – Get coverage against accidental damage, natural calamities, and unexpected system failures.",
      "Long-Term Security – Ensures your solar assets are protected throughout their lifecycle.",
      "Trusted Assurance – Backed by credible insurance partners, giving you worry-free ownership and complete peace of mind.",
    ],
    benefits: [
      "With Holsol’s insured panels and structures, you don’t just choose sustainable energy—you choose security, confidence, and long-term protection for your entire solar system.",
    ],
    icon: insured,
    bgColor: "bg-green-100",
  },
  {
    title: "Loyalty Cashback Card",
    desc: `Holsol brings you India’s first-ever Loyalty Cashback Card, a unique reward program created exclusively for solar customers. With this benefit, you receive ₹1,000 cashback every month for up to 10 years, making your solar investment smarter, more valuable, and financially rewarding.`,
    points: [
      "Guaranteed Cashback – Receive ₹1,000 credited to your account every month, without fail.",
      "Long-Term Value – Earn up to ₹1,20,000 over 10 years, adding significant returns to your solar investment.",
      "Exclusive Solar Benefit – India’s first-of-its-kind loyalty program designed specifically for solar customers.",
      "Smarter Overall Investment – Save on electricity while earning guaranteed cashback double benefits from a single solution.",
    ],
    benefits: [
      "With Holsol’s Loyalty Cashback Card, you don’t just switch to solar you unlock guaranteed monthly income for the next 10 years.",
    ],
    icon: cashback,
    bgColor: "bg-yellow-100",
  },
  {
    title: "Maintenance-Free Period",
    desc: `With Holsol India, your solar experience is truly hassle-free. Every installation includes a 5-year maintenance-free period, ensuring zero upkeep costs and uninterrupted system performance from day one.`,
    points: [
      "No Extra Expenses – Save on all service and maintenance costs for the first 5 years.",
      "Worry-Free Ownership – Systems are monitored and supported by Holsol experts.",
      "Reliable Performance – Enjoy consistent energy generation without hidden costs.",
    ],
    benefits: [
      "Holsol’s maintenance-free period means you focus on savings, while we take care of performance.",
    ],
    icon: maintenanace,
    bgColor: "bg-indigo-100",
  },
  {
    title: "Fast & Easy Finance",
    desc: `Going solar with Holsol India is now more affordable and convenient than ever. We provide flexible loan facilities with simple EMI options, allowing you to switch to clean energy without heavy upfront expenses.`,
    points: [
      "Flexible EMI Plans – Choose a financing plan that perfectly matches your budget and repayment comfort.",
      "Quick Approvals – Enjoy fast and smooth loan processing so your solar system can be installed sooner.",
      "Affordable Investment – Make renewable energy accessible and budget-friendly with minimal initial cost.",
    ],
    benefits: [
      "With Holsol’s Fast & Easy Finance, switching to solar isn’t just smart it’s truly hassle-free.",
    ],
    icon: finance,
    bgColor: "bg-pink-100",
  },
];

const ServiceDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="py-10 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="lg:text-4xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF]" data-aos="flip-left">
            Services
          </h2>

        </div>

        <div className="space-y-12">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                data-aos="zoom-in"
                className={`flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition ${isEven ? "" : "md:flex-row-reverse"
                  }`}
              >
                {/* Icon Section with full light bg */}
                <div
                  className={`flex items-center justify-center md:w-1/4 p-8 text-2xl ${service.bgColor}`}
                >
                  <img src={service.icon} className="lg:h-[140px] md:h-[100px] h-[70px]" />

                </div>

                {/* Content Section */}
                <div className="md:w-3/4 p-8">
                  <h3 className="lg:text-2xl text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-800 mb-4 tracking-[0.3px] text-justify">{service.desc}</p>
                  <ul className="list-disc list-inside text-gray-800 space-y-1 mb-4 tracking-[0.3px] text-justify">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  {service.benefits && (
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0047FF]">

                      <ul className="list-disc list-inside text-gray-800 space-y-1 tracking-[0.3px] text-justify">
                        {service.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
