import React from "react";
import Heading from "../../Component/Heading";
import blog1 from '../../assets/Image/blog1.jpg'
import blog2 from '../../assets/Image/bannerbg.jpg'
import blog3 from '../../assets/Image/blog3.jpg'

const blogData = [
  {
    id: 1,
    date: "Nov 3, 2022",
    source: "YourStory",
    title:
      "SolarSquare raises Rs 100 Cr Series A funding led by Elevation Capital, Lowercarbon",
    img: blog1,
    link: "#",
  },
  {
    id: 2,
    date: "Dec 12, 2024",
    source: "Forbes",
    title:
      "How SolarSquare has a chance to become a home energy brand in India",
    img:blog2,
    link: "#",
  },
  {
    id: 3,
    date: "Dec 12, 2024",
    source: "Business Today",
    title:
      "SolarSquare raises $40 million in one of India’s largest solar VC deals, Lightspeed leads the round",
    img:blog3,
    link: "#",
  },
];

const Blogs = () => {
  return (
    <section className="lg:px-20 px-5 lg:py-14 py-8 bg-gray-100">
      <Heading title="Blogs of the week" />
      <h3 className="text-[2em] font-[700] text-[#192e5b] py-3">
        Powered by <span className="text-[var(--primary)]">RS Group</span>, a trusted company.
      </h3>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-6">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Blog Image */}
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90"></div>

            {/* Blog Content */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm text-gray-300">
                {blog.date} – {blog.source}
              </p>
              <h4 className="font-semibold text-lg mt-1 leading-snug group-hover:text-[var(--primary)] transition-colors">
                {blog.title}
              </h4>
              {/* <a
                href={blog.link}
                className="inline-block mt-2 text-sm font-medium text-[var(--primary)] bg-white px-4 py-1 rounded-full shadow-md hover:bg-[var(--primary)] hover:text-white transition"
              >
                Read More
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
