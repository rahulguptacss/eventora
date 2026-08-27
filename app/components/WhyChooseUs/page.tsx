"use client";

import { motion } from "framer-motion";
import { Users, Mic, UserCheck, HeartHandshake, CheckCircle2, Star } from "lucide-react";
import data from "../../data/data.json";
import { WhyChooseUsCard } from '../../types';

export default function WhyChooseUs() {
  const whyData = data.categories.Event.sections.WhyChooseUs.variants.EventWhyChooseUs1;
  
  // Parse title
  const titleParts = whyData.title.split('<span>');
  const mainTitleHtml = titleParts[0] || '';
  const highlightText = titleParts[1] ? titleParts[1].replace('</span>', '') : '';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "speaker": return <Users size={44} className="text-[#c20b92]" strokeWidth={1.2} />;
      case "microphone": return <Mic size={44} className="text-[#c20b92]" strokeWidth={1.2} />;
      case "guest": return <UserCheck size={44} className="text-[#c20b92]" strokeWidth={1.2} />;
      case "environment": return <HeartHandshake size={44} className="text-[#c20b92]" strokeWidth={1.2} />;
      default: return <Star size={44} className="text-[#c20b92]" strokeWidth={1.2} />;
    }
  };

  return (
    <section className="relative pt-8 md:pt-12 pb-16 lg:pb-20 bg-[#fcf8fa] overflow-hidden">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-right opacity-40"
        style={{ backgroundImage: "url('/images/why-choose/why-choose1.png')" }}
      ></div>
      
      <div className="container mx-auto px-6 md:px-10 lg:px-12 max-w-[1400px] relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-10 lg:gap-12">
          
          {/* Left Cards Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {whyData.cards.map((card: WhyChooseUsCard, idx: number) => (
              <motion.div 
                key={idx}
                className="bg-white rounded-[24px] px-6 py-10 md:px-8 md:py-10 shadow-[0_8px_30px_rgba(200,150,200,0.06)] text-center flex flex-col items-center h-full group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-[95px] h-[95px] rounded-full bg-[#fdf7fd] flex items-center justify-center mb-6 border border-pink-50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_10px_20px_rgba(194,11,146,0.1)] group-hover:bg-[#fbf0fc]">
                  {getIcon(card.icon)}
                </div>
                <div className="flex items-center justify-center gap-2 mb-5">
                  <span className="w-8 h-[2px] bg-gradient-to-r from-[#c20b92] to-[#8c17df] rounded-full"></span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#c20b92" />
                  </svg>
                </div>
                <h5 className="text-[17px] md:text-[19px] font-bold text-[#0a071f] mb-4 leading-[1.35] max-w-[220px] mx-auto">
                  {card.title}
                </h5>
                <p className="text-[#51586a] text-[14px] leading-[1.65]">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 pt-8 lg:pt-16 lg:pl-10">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <h4 className="text-[#c20b92] font-extrabold font-sans tracking-[0.15em] text-[13px] md:text-[14px] uppercase -mt-1">
                  {whyData.subtitle}
                </h4>
                <span className="w-12 h-[2px] bg-gradient-to-r from-[#c20b92] to-[#8c17df] rounded-full"></span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#c20b92" />
                </svg>
              </div>
              
              <h2 className="text-[38px] md:text-[42px] lg:text-[48px] font-black text-[#0a071f] leading-[1.3] mb-6 tracking-tight">
                <span dangerouslySetInnerHTML={{ __html: mainTitleHtml }} />
                {highlightText && (
                  <span className="relative inline-block align-baseline">
                    <span className="text-[52px] md:text-[60px] lg:text-[65px] font-dancing font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fc4a90] to-[#9233ea] leading-[0.8] pb-1 pr-6 pl-1">
                      {highlightText}
                    </span>
                    {/* Small 4-point star at top right */}
                    <svg className="absolute -top-1 md:-top-2 right-0 w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="url(#star_grad_title)" />
                      <defs>
                        <linearGradient id="star_grad_title" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#fc4a90" />
                          <stop offset="1" stopColor="#9233ea" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Underline */}
                    <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-[105%] h-[12px] md:h-[14px]" viewBox="0 0 200 16" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 14 L 195 4" stroke="url(#paint0_linear_title)" strokeWidth="3" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="paint0_linear_title" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#fc4a90" />
                          <stop offset="1" stopColor="#9233ea" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                )}
              </h2>
              
              <div className="w-16 md:w-[70px] h-[3px] bg-gradient-to-r from-[#fc4a90] to-[#9233ea] rounded-full mb-8"></div>
              
              <p className="text-[#51586a] font-medium text-[15px] md:text-[16px] leading-[1.9] mb-10">
                {whyData.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-2">
                {whyData.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-center relative">
                    <CheckCircle2 size={20} className="text-[#9333ea] shrink-0" strokeWidth={2.5} />
                    <span className="ml-2.5 text-[#0a071f] font-bold text-[14px]">
                      {feature}
                    </span>
                    {/* Vertical separator for 3 columns layout */}
                    {idx % 3 !== 2 && idx !== whyData.features.length - 1 && (
                      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1.5px] h-6 bg-pink-100"></div>
                    )}
                    {/* Vertical separator for 2 columns layout */}
                    {idx % 2 !== 1 && idx !== whyData.features.length - 1 && (
                      <div className="hidden sm:block lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-[1.5px] h-6 bg-pink-100"></div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
