"use client";

import { motion, Variants } from "framer-motion";
import { CalendarDays, Users, Gem, Star, ArrowRight, ChevronRight } from "lucide-react";
import data from "../../data/data.json";

export default function Hero() {
  const bannerData = data.categories.Event.sections.Banner.variants.EventBanner1;
  const titleWords = bannerData.title.split(' ');
  const firstLine = titleWords.length > 3 ? titleWords.slice(0, titleWords.length - 2).join(' ') : titleWords[0] || '';
  const middleWord = titleWords.length > 3 ? titleWords[titleWords.length - 2] : titleWords[1] || '';
  const lastLine = titleWords.length > 3 ? titleWords[titleWords.length - 1] : titleWords.slice(2).join(' ') || '';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "CalendarDays": return CalendarDays;
      case "Users": return Users;
      case "Gem": return Gem;
      case "Star": return Star;
      default: return CalendarDays;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative flex items-center pt-12 pb-10 lg:pt-20 lg:pb-16 min-h-[40vh] lg:min-h-[50vh] bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bannerData.backgroundImage}')` }}
      >
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0514]/90 via-[#0a0514]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top Tagline */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 text-[10px] md:text-xs font-medium tracking-[0.2em] text-gray-300 mb-4 uppercase">
            <span>
              {bannerData.pretitle.split('✦').map((text: string, i: number, arr: string[]) => (
                <span key={i}>
                  {text}
                  {i < arr.length - 1 && <span className="text-pink-500">✦</span>}
                </span>
              ))}
            </span>
          </motion.div>

          {/* Main Headings */}
          <motion.div variants={itemVariants} className="flex flex-col mb-6">
            <h1 className="text-xl md:text-2xl lg:text-[2.5rem] font-bold uppercase leading-none tracking-wider">
              {firstLine}
            </h1>
            <div className="relative inline-block mt-1 mb-2 w-fit">
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-dancing text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-400 to-purple-500 leading-none py-2 drop-shadow-lg pr-4">
                {middleWord}
              </h2>
              {/* Decorative underline */}
              <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 md:h-6 text-pink-500" viewBox="0 0 400 20" preserveAspectRatio="none">
                <path d="M0,10 Q200,20 400,0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[3.5rem] font-bold uppercase leading-none tracking-wider">
              {lastLine}
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-gray-300 mb-8 max-w-xl text-sm md:text-base font-light leading-relaxed whitespace-pre-line">
              {bannerData.desc}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-6">
            {bannerData.buttons && bannerData.buttons.length > 0 && (
              <a href={bannerData.buttons[0].href} className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#be29ab] via-[#be29ab] to-[#5129ea] text-white px-7 py-[10px] rounded-full font-medium text-base hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">{bannerData.buttons[0].label}</span>
                <div className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full border border-white/50 group-hover:bg-white group-hover:text-pink-600 transition-colors">
                  <ArrowRight size={14} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#5129ea] via-[#be29ab] to-[#be29ab] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            )}
            
            {bannerData.buttons && bannerData.buttons.length > 1 && (
              <a href={bannerData.buttons[1].href} className="flex items-center justify-center px-7 py-[10px] rounded-full border border-white/30 text-white font-medium text-base hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
                {bannerData.buttons[1].label}
              </a>
            )}
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
}
