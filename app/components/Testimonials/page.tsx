"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Williams",
      role: "Wedding Client",
      image: "/images/testimonials/testimonial-1.jpg",
      text: "From the initial planning to the final execution, Eventora made everything seamless and stress-free. The team was professional, creative, and truly cared about every little detail. Our event was beyond our expectations!"
    },
    {
      id: 2,
      name: "Jacob Wallace",
      role: "Corporate Client",
      image: "/images/testimonials/testimonial-2.jpg",
      text: "From the initial planning to the final execution, Eventora made everything seamless and stress-free. The team was professional, creative, and truly cared about every little detail. Our event was beyond our expectations!"
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Birthday Party",
      image: "/images/testimonials/3.jpg",
      text: "Eventora took our vision and turned it into reality! Every detail was perfect, and the atmosphere they created was magical. I highly recommend them for any special occasion."
    },
    {
      id: 4,
      name: "Michael Brown",
      role: "Conference Organizer",
      image: "/images/testimonials/4.jpg",
      text: "The level of professionalism and dedication from the Eventora team was outstanding. Our annual conference ran smoother than ever before. Fantastic service from start to finish!"
    },
    {
      id: 5,
      name: "Olivia & James",
      role: "Anniversary Celebration",
      image: "/images/testimonials/5.jpg",
      text: "We wanted a memorable night, and Eventora delivered exactly that. From the beautiful decorations to the flawless catering coordination, everything was handled beautifully."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="pt-8 pb-10 bg-[#fdfdfd]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center mb-2">
            <h4 className="text-purple-600 font-bold tracking-[0.2em] text-[16px] md:text-[18px] uppercase mb-1">
              OUR TESTIMONIALS
            </h4>
            <div className="flex items-center gap-2">
              <span className="w-12 h-[2px] bg-pink-500 rounded-full"></span>
              <span className="text-purple-600 text-[16px]">✦</span>
              <span className="w-12 h-[2px] bg-purple-600 rounded-full"></span>
            </div>
          </div>
          <h2 className="text-[42px] md:text-[56px] font-bold text-[#0b0410] leading-tight mb-0">
            What Our Clients Say About
          </h2>
          <div className="relative inline-block mb-4 -mt-2 md:-mt-4">
            <h3 className="text-[80px] md:text-[100px] font-dancing font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 leading-none pb-2 px-2">
              Eventora
            </h3>
            <svg className="absolute bottom-2 left-0 w-full h-[12px]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10 Q 100 2 196 10" stroke="url(#paint0_linear)" strokeWidth="2.5" strokeLinecap="round" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ec4899" />
                  <stop offset="1" stopColor="#9333ea" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="text-[#191c49] font-medium text-[17px] max-w-[650px] mx-auto leading-relaxed">
            Real experiences, genuine feedback, and lasting impressions <br className="hidden md:block" /> from clients who trusted us with their special moments.
          </p>
        </motion.div>

        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out [--slide-width:100%] md:[--slide-width:50%] -mx-4"
              style={{ transform: `translateX(calc(-1 * ${currentIndex} * var(--slide-width)))` }}
            >
              {testimonials.map((test) => (
                <div key={test.id} className="w-full md:w-1/2 flex-shrink-0 px-4">
                  <motion.div
                    className="bg-white rounded-2xl px-8 py-6 md:px-12 md:py-8 shadow-sm border border-gray-100 relative z-10 hover:shadow-xl transition-shadow h-full flex flex-col"
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                    }}
                  >
                    <div className="flex justify-between items-start mb-0">
                      <div className="flex items-center gap-3 md:gap-5">
                        <div className="p-[2px] md:p-[3px] rounded-full bg-gradient-to-tr from-pink-400 to-purple-600">
                          <img src={test.image} alt={test.name} className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-[3px] md:border-[4px] border-white" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-[#0b0410] text-[18px] md:text-[24px] tracking-tight">{test.name}</h5>
                          <p className="text-[#6b7280] text-[12px] md:text-[14px] uppercase tracking-[0.1em] mt-0.5 md:mt-1">{test.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 text-[#ffb800] mt-4 md:mt-0">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 md:w-[18px] md:h-[18px]" fill="currentColor" strokeWidth={0} />)}
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-0 md:gap-4 mt-2">
                      <div className="text-pink-200 font-serif text-[60px] md:text-[80px] leading-[0.8]">“</div>
                      <p className="text-[#191c49] font-normal text-[15px] md:text-[18px] leading-[1.8] md:leading-[1.9] px-2 md:px-0 -mt-7 md:mt-0">
                        {test.text}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between w-full mt-12 gap-6 md:gap-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex-1 hidden md:block"></div>

            {/* Center pagination */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-2 text-[20px] font-bold text-[#0b0410]">
                <span>0{currentIndex + 1}</span>
                <span className="text-pink-500">—</span>
                <span>0{testimonials.length}</span>
              </div>
              <div className="h-[2px] w-full bg-gradient-to-r from-pink-500 to-purple-600 mt-1 rounded-full"></div>
            </div>

            {/* Right buttons */}
            <div className="flex-1 flex justify-center md:justify-end gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-purple-600 hover:bg-pink-100 transition-colors cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-purple-600 hover:bg-pink-100 transition-colors cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
