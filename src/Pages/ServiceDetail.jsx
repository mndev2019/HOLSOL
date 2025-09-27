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
    desc: `At Holsol India, we bring you a trusted range of high-yield solar products from 1KW to 100 KW, designed to deliver maximum energy efficiency and long-term savings. Whether it’s for residential, commercial, or industrial use, our systems are built to generate more power, ensure reliable performance, and optimize your investment.`,
    points: [
      "Wide Range (1KW – 100 KW) – Solutions tailored for homes, offices, and industries.",
      "Maximum Energy Output – Advanced solar technology that delivers higher generation even in low-light conditions.",
      "Cost-Efficient – Reduce electricity bills and enjoy faster ROI with durable, long-lasting systems.",
      "Scalable & Flexible – Easy to expand or customize as per your power requirements.",
      "Reliable & Safe – Built with top-quality components, certified for safety and durability.",
    ],
    benefits: [
      "Save up to 80% on electricity costs",
      "Low maintenance, high performance systems",
      "Sustainable, eco-friendly energy solutions",
      "Powering Your Growth: From a compact 1KW home setup to a robust 15KW industrial solution, Holsol’s high-yield products ensure that every unit of sunlight is converted into maximum energy output. With us, you don’t just go solar—you go smarter.",
    ],
    icon: solarsolution,
    bgColor: "bg-blue-100",
  },
  {
    title: "IIT Approved Solar Structure Designs",
    desc: `At Holsol India, we ensure that every solar installation is approved by strength, safety, and engineering excellence. Our solar structures are designed and approved by IIT experts, guaranteeing unmatched reliability and durability for all projects.`,
    points: [
      "Engineering Precision – Developed with advanced structural analysis to withstand extreme weather conditions like high wind speed, rain, and heat.",
      "Safety & Stability – Tested for load-bearing capacity, corrosion resistance, and long-term structural strength.",
      "Standard Compliance – Fully compliant with national and international quality standards, ensuring secure solar mounting.",
      "Optimized Performance – Designed for proper module alignment and tilt angle to maximize solar power generation.",
    ],
    benefits: [
      "Long-lasting, maintenance-free structures",
      "Assurance of safety and compliance",
      "Higher efficiency with optimal solar panel positioning",
      "Peace of mind with IIT-backed engineering validation",
      "With Holsol’s IIT-approved solar structures, you get more than just a mounting system you get the confidence of world-class design, robust performance, and sustainable reliability.",
    ],
    icon: solarstructure,
    bgColor: "bg-red-100",
  },
  {
    title: "Insured Panels & Structure",
    desc: `First time in India at Holsol India you get the insurance on your complete rooftop system, we go beyond delivering high-performance solar systems we also provide the assurance of insured panels and structures. This means your investment is safeguarded against unforeseen risks, giving you complete peace of mind.`,
    points: [
      "Financial Protection – Coverage against accidental damage, natural calamities, or unexpected failures.",
      "Long-Term Security – Ensures your solar assets are protected throughout their lifecycle.",
      "Trusted Assurance – Backed by reliable insurance partners for worry-free ownership.",
    ],
    benefits: [
      "With Holsol’s insured panels and structures, you don’t just get sustainable energy you also get the confidence of knowing your system is safe, secure, and fully protected.",
    ],
    icon: insured,
    bgColor: "bg-green-100",
  },
  {
    title: "Loyalty Cashback Card",
    desc: `Loyalty Cashback Card by Holsol – India’s first reward program designed exclusively for solar customers. With this unique benefit, you enjoy ₹1,000 cashback every month, for up to 10 years, making your solar investment even more rewarding.`,
    points: [
      "Guaranteed Cashback – ₹1,000 credited monthly.",
      "Long-Term Value – Earn up to ₹1,20,000 over 10 years.",
      "Exclusive Benefit – First-of-its-kind program in India for Indian customers.",
      "Smarter Investment – Save on energy and earn rewards simultaneously.",
    ],
    benefits: [
      "With Holsol’s Loyalty Cashback Card, you don’t just switch to solar you unlock a guaranteed income from the next 10 years.",
    ],
    icon: cashback,
    bgColor: "bg-yellow-100",
  },
  {
    title: "Maintenance-Free Period",
    desc: `With Holsol India, your solar journey is completely hassle-free. Every installation comes with a 5-year maintenance-free period, ensuring zero maintenance cost and uninterrupted performance.`,
    points: [
      "No Extra Expenses – Save on service and upkeep for 5 years.",
      "Worry-Free Ownership – Systems are monitored and supported by Holsol experts.",
      "Reliable Performance – Enjoy consistent energy generation without hidden costs.",
    ],
    benefits: [
      "Holsol’s maintenance-free period means you focus on savings, while we take care of performance.",
    ],
    icon:maintenanace,
    bgColor: "bg-indigo-100",
  },
  {
    title: "Fast & Easy Finance",
    desc: `Going solar with Holsol India is now simpler and more affordable. We offer loan facilities with easy EMI options, so you can invest in clean energy without straining your budget.`,
    points: [
      "Flexible EMI Plans – Choose a payment plan that suits your financial convenience.",
      "Quick Approvals – Fast processing to get your solar system up and running sooner.",
      "Affordable Investment – Make renewable energy accessible without large upfront costs.",
    ],
    benefits: [
      "With Holsol’s Fast & Easy Finance, switching to solar is not just smart it’s hassle-free.",
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
                  <img src={service.icon} className="lg:h-[140px] md:h-[100px] h-[70px]"/>
                  
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
