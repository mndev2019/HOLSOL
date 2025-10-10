import React, { useEffect } from "react";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { FaWhatsapp } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
     useEffect(() => {
              AOS.init({ duration: 1000 }); // duration in ms
          }, []);
    const phone = "+91 9257055583";
    const whatsapp = "+91 9257055583";
    const email = "info@holsolindia.com";
    const mapEmbedSrc =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.245217806453!2d75.73235777525845!3d26.861119576690184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db57add311b17%3A0x7039970c4300422b!2sRS%20group!5e0!3m2!1sen!2sin!4v1726069584863!5m2!1sen!2sin"; // Replace with your actual Google Maps embed link

    return (
        <>
            <section className="relative lg:py-16 py-10 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f0f9ff] via-[#e6f0ff] to-[#d0e4ff]"></div>

                    {/* Floating Circles */}
                    <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300 rounded-full opacity-15 animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-pink-200 rounded-full opacity-10 animate-pulse"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 text-center">
                    <h2 className="lg:text-4xl text-3xl font-extrabold text-gray-900 mb-4" data-aos="flip-left">
                        <span className="block">
                            Contact {' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF] ">
                                Us
                            </span>

                        </span>

                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-12">
                        Reach out to us via phone, WhatsApp, or email. We’d love to hear from you!
                    </p>
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        {/* Map */}
                        <div>
                            <iframe
                                src={mapEmbedSrc}
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg shadow-md"
                            ></iframe>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-center space-x-4">
                                <div className="bg-gradient-to-b from-[#00C6FF] to-[#0047FF] text-white w-12 h-12 rounded-full flex justify-center items-center text-2xl">
                                    <PhoneOutlined />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-medium">Phone</h3>
                                    <a
                                        href={`tel:${phone}`}
                                        className="text-blue-600 hover:underline block"
                                    >
                                        {phone}
                                    </a>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="flex items-center space-x-4">
                                <div className="bg-gradient-to-b from-[#00C6FF] to-[#0047FF] text-white w-12 h-12 rounded-full flex justify-center items-center text-2xl">
                                    <FaWhatsapp />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-medium">WhatsApp</h3>
                                    <a
                                        href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline block"
                                    >
                                        {whatsapp}
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center space-x-4">
                                <div className="bg-gradient-to-b from-[#00C6FF] to-[#0047FF] text-white w-12 h-12 rounded-full flex justify-center items-center text-2xl">
                                    <MailOutlined />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-medium">Email</h3>
                                    <a
                                        href={`mailto:${email}`}
                                        className="text-blue-600 hover:underline block"
                                    >
                                        {email}
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>


    );
};

export default Contact;

