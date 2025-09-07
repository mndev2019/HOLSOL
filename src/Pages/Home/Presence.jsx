import React from 'react'
import Heading from '../../Component/Heading'
import { FaHome } from 'react-icons/fa'

const Presence = () => {
  const offices = [
    {
      title: "Corporate Office - Hyderabad",
      address: "SUNTEK ENERGY SYSTEMS PVT LTD 5A, Astral heights, Road No-1, Banjara Hills, Hyderabad, Telangana - 500034",
    },
    {
      title: "Branch Office - Andhra Pradesh",
      address: "Upstairs, Mistubishi Electronics Showroom, D.NO.65-3-32, NTR Circle, Patamata, Vijayawada, Andhra Pradesh, 520010",
    },
    {
      title: "Branch Office - Maharashtra",
      address: "4 and 6, PLOT NO.- 88, 1701, Fairmount, situated at, Palm Beach Rd, Sector 17, Sanpada, Navi Mumbai, Maharashtra 400705",
    },
   
  ]

  return (
    <section className="lg:px-20 px-5 lg:py-10 py-5 bg-gray-100">
      <Heading title="Best Solar Energy Solutions" />
      <h3 className="text-[2em] font-[700] text-[#192e5b] py-3">
        Our Presence
      </h3>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
        {/* Left side - Addresses */}
        <div className="space-y-6">
          {offices.map((office, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-[var(--primary)] text-2xl">
                <FaHome />
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">
                  {office.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {office.address}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Map */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.42028201968!2d78.44238231522016!3d17.415573706063184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97338b41b3b5%3A0x70e870f63e8696b0!2sSuntek%20Energy%20Systems%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1632828293745!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="Suntek Office Location"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Presence
