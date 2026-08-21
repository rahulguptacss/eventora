"use client";

import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Wedding",
    desc: "Beautifully planned weddings that reflect your love story and create memories for a lifetime.",
    img: "/images/services/s1.png"
  },
  {
    id: 2,
    title: "Birthday",
    desc: "Creative themes, fun setups and perfect planning to make every birthday extra special.",
    img: "/images/services/s2.png"
  },
  {
    id: 3,
    title: "Corporate Events",
    desc: "Professional events that inspire, engage and deliver results for your brand and business goals.",
    img: "/images/services/s3.png"
  },
  {
    id: 4,
    title: "Engagement & Anniversary",
    desc: "Celebrate your special moments with elegant setups and unforgettable experiences.",
    img: "/images/services/s4.png"
  },
  {
    id: 5,
    title: "Baby Shower",
    desc: "Adorable themes and joyful setups to celebrate the little one on the way with love and happiness.",
    img: "/images/services/s5.png"
  },
  {
    id: 6,
    title: "Private Parties",
    desc: "From intimate gatherings to grand celebrations, we create the perfect ambience for your special moments.",
    img: "/images/services/s6.png"
  },
  {
    id: 7,
    title: "Award Ceremonies",
    desc: "Recognize achievements in style with flawless planning and impactful ceremonies.",
    img: "/images/services/s7.png"
  },
  {
    id: 8,
    title: "Fashion Shows",
    desc: "High-energy runway shows with stunning production and attention to every detail.",
    img: "/images/services/s8.png"
  }
];

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="pt-8 pb-10 lg:pt-10 lg:pb-12 overflow-hidden" style={{ background: '#f8f8fb' }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        
        <motion.div 
          className="text-center mx-auto mb-4 flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mb-1">
            <h4 className="text-[#be29ab] font-extrabold tracking-[0.25em] text-[16px] sm:text-[18px] uppercase mb-0.5">
              OUR SERVICES
            </h4>
            <div className="flex items-center gap-1 mt-0">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#be29ab] to-[#5129ea] inline-block rounded-full"></span>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#be29ab]">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/>
              </svg>
            </div>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-[34px] sm:text-[40px] lg:text-[52px] font-extrabold text-[#0b1021] leading-[1.05] tracking-[-0.02em]">
            Comprehensive Solutions
          </motion.h2>
          
          <motion.h3 variants={itemVariants} className="text-[34px] sm:text-[40px] lg:text-[52px] font-extrabold text-[#0b1021] mb-3 leading-[1.05] tracking-[-0.02em] flex flex-wrap justify-center items-center gap-x-2 gap-y-0">
            For 
            <span className="relative inline-block align-bottom">
              <span className="font-dancing text-[40px] sm:text-[48px] lg:text-[68px] text-transparent bg-clip-text bg-gradient-to-r from-[#be29ab] to-[#5129ea] pr-3 pb-0 leading-none font-bold">
                Unforgettable Events
              </span>
              {/* Curved underline SVG */}
              <svg className="absolute bottom-0 left-[35%] w-[50%] h-[10px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M2,13 Q50,22 98,6" fill="none" stroke="url(#grad2)" strokeWidth="2.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#be29ab" />
                    <stop offset="100%" stopColor="#5129ea" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h3>
          
          <motion.p variants={itemVariants} className="text-[#191c49] max-w-2xl leading-relaxed text-[16px] sm:text-[17px] font-medium mx-auto mt-1">
            From concept to celebration, we handle every detail<br className="hidden sm:block"/>
            to create seamless and memorable experiences.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="bg-white rounded-[16px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col group border border-gray-50">
              <div className="h-[180px] sm:h-[200px] overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-grow bg-white">
                <h4 className="text-[16px] sm:text-[17px] font-bold text-[#0f172a] mb-2 group-hover:text-[#5129ea] transition-colors">{service.title}</h4>
                <div className="w-8 h-[2px] bg-gradient-to-r from-[#be29ab] to-[#5129ea] rounded-full mb-3 sm:mb-4"></div>
                <p className="text-[#262755] text-[12px] sm:text-[13px] font-medium leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="cursor-pointer bg-gradient-to-r from-[#be29ab] to-[#5129ea] text-white pl-7 pr-3 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-4 shadow-[0_8px_25px_rgba(91,40,231,0.35)]">
            <span className="text-[15px]">Explore All Services</span>
            <span className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center shrink-0">
              <ArrowRight size={16} strokeWidth={2} />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
