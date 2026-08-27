"use client";

import { Lightbulb, Users, Calendar, Award, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import data from "../../data/data.json";
import { AboutFeature } from '../../types';

export default function AboutUs() {
  const aboutData = data.categories.Event.sections.About.variants.EventAbout1;

  let subtitleLine1 = '';
  let line2FirstPart = '';
  let subtitleLastWord = '';
  let hasLineBreak = false;

  if (aboutData.subtitle.includes('\n')) {
    hasLineBreak = true;
    const parts = aboutData.subtitle.split('\n');
    subtitleLine1 = parts[0];
    const line2Words = (parts[1] || '').split(' ');
    line2FirstPart = line2Words.slice(0, -1).join(' ');
    subtitleLastWord = line2Words[line2Words.length - 1] || '';
  } else {
    const subtitleWords = aboutData.subtitle.split(' ');
    subtitleLine1 = subtitleWords.slice(0, -1).join(' ');
    subtitleLastWord = subtitleWords[subtitleWords.length - 1] || '';
  }

  const firstStat = aboutData.stats[0];
  const firstStatLabelWords = firstStat ? firstStat.label.split(' ') : ['Years', 'Experience'];
  const firstStatLabelLine1 = firstStatLabelWords[0] || 'Years';
  const firstStatLabelLine2 = firstStatLabelWords.slice(1).join(' ') || 'Experience';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Lightbulb": return Lightbulb;
      case "Users": return Users;
      case "Calendar": return Calendar;
      case "Award": return Award;
      default: return Lightbulb;
    }
  };

  const features = aboutData.features ? aboutData.features.map((f: AboutFeature) => ({
    ...f,
    icon: getIcon(f.icon)
  })) : [];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideRightVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideLeftVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-12 lg:py-16 overflow-hidden bg-[#ede9fa]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="flex-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h4 variants={slideRightVariants} className="text-[#be29ab] font-extrabold tracking-[0.15em] text-[11px] sm:text-[13px] mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 uppercase">
              {aboutData.title} <span className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-[#be29ab] to-[#5129ea] inline-block"></span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#5129ea] -ml-1 sm:-ml-1.5 w-[10px] h-[10px] sm:w-[14px] sm:h-[14px]">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/>
              </svg>
            </motion.h4>
            <motion.h2 variants={fadeUpVariants} className="text-[28px] sm:text-[38px] lg:text-[48px] font-black text-[#111827] mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.1] tracking-tight">
              {subtitleLine1} {hasLineBreak && <br />}
              {line2FirstPart} 
              <span className="relative inline-block ml-0.5 sm:ml-2 align-bottom">
                <span className="font-dancing text-[40px] sm:text-[52px] lg:text-[70px] text-transparent bg-clip-text bg-gradient-to-r from-[#be29ab] to-[#5129ea] pr-1 sm:pr-2 pb-0 sm:pb-1 leading-none">
                  {subtitleLastWord}
                </span>
                {/* Curved underline SVG */}
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-[100%] h-[12px] sm:h-[16px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M5,15 Q40,25 95,5" fill="none" stroke="url(#grad)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#be29ab" />
                      <stop offset="100%" stopColor="#5129ea" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h2>
            
            <motion.div variants={fadeUpVariants} className="w-[40px] sm:w-[60px] h-[2px] sm:h-[3px] bg-gradient-to-r from-[#be29ab] to-[#5129ea] mb-5 sm:mb-8"></motion.div>
            
            <motion.p variants={fadeUpVariants} className="text-[#374151] mb-6 sm:mb-10 max-w-[480px] leading-relaxed text-[15px] sm:text-[16px] font-medium">
              {aboutData.desc}
            </motion.p>
            
            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-2 sm:gap-6 mb-2 sm:mb-10">
              {features.map((feature, idx) => (
                <motion.div key={idx} variants={fadeUpVariants} className="flex items-center gap-2 sm:gap-5 p-3 sm:p-6 rounded-[16px] sm:rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.04)] bg-white hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)] transition-all duration-300 border border-white">
                  <div className="w-[36px] h-[36px] sm:w-[68px] sm:h-[68px] rounded-full bg-gradient-to-br from-[#be29ab] to-[#5129ea] flex items-center justify-center text-white shrink-0 shadow-[0_8px_20px_rgba(228,36,135,0.3)]">
                    <feature.icon className="w-[18px] h-[18px] sm:w-6 sm:h-6" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h5 className="font-bold text-[#0f172a] text-[10px] sm:text-[16px] leading-[1.3] whitespace-pre-line mb-1.5 sm:mb-3">{feature.title}</h5>
                    <div className="w-5 sm:w-8 h-[2px] sm:h-[3px] bg-gradient-to-r from-[#be29ab] to-[#5129ea] rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Desktop Button */}
            <div className="hidden lg:flex sm:justify-start justify-center mt-2">
              <Link href={aboutData.button?.href || "/about"}>
                <motion.div variants={fadeUpVariants} className="group cursor-pointer bg-gradient-to-r from-[#be29ab] to-[#5129ea] text-white pl-8 pr-2.5 py-2.5 rounded-full font-bold hover:shadow-[0_10px_30px_rgba(81,41,234,0.5)] transition-all flex items-center gap-5 shadow-[0_8px_25px_rgba(81,41,234,0.35)]">
                  <span className="text-[15px] tracking-wide">{aboutData.button?.label || "Explore More About Us"}</span>
                  <span className="w-9 h-9 rounded-full border border-white/30 group-hover:border-white/60 flex items-center justify-center shrink-0 transition-colors">
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </span>
                </motion.div>
              </Link>
            </div>
          </motion.div>
          
          {/* Right Images */}
          <motion.div 
            className="flex-1 relative w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideLeftVariants}
          >
            <div className="grid grid-cols-2 gap-3 relative">
              {aboutData.images && aboutData.images.map((img: string, idx: number) => (
                <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img src={img} alt={`About us image ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
              
              {/* Floating Badge */}
              {firstStat && (
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] md:w-[150px] md:h-[150px] rounded-full border-[8px] border-white shadow-xl flex flex-col items-center justify-center text-white z-10"
                  style={{ background: 'linear-gradient(135deg, #be29ab 0%, #5129ea 100%)' }}
                >
                  <div className="absolute top-4 right-8 text-white/50 text-[10px]">✦</div>
                  <div className="absolute bottom-4 left-6 text-white/50 text-[10px]">✦</div>
                  <span className="text-4xl md:text-5xl font-bold mb-1">{firstStat.value}</span>
                  <span className="text-[11px] md:text-[13px] font-medium text-center leading-tight">{firstStatLabelLine1}<br/>{firstStatLabelLine2}</span>
                </motion.div>
              )}
            </div>
          </motion.div>
          
          {/* Mobile Button (below images) */}
          <div className="flex lg:hidden justify-center mt-4 sm:mt-6 w-full">
            <Link href={aboutData.button?.href || "/about"}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group cursor-pointer bg-gradient-to-r from-[#be29ab] to-[#5129ea] text-white pl-8 pr-2.5 py-2.5 rounded-full font-bold hover:shadow-[0_10px_30px_rgba(81,41,234,0.5)] transition-all flex items-center gap-5 shadow-[0_8px_25px_rgba(81,41,234,0.35)]"
              >
                <span className="text-[15px] tracking-wide">{aboutData.button?.label || "Explore More About Us"}</span>
                <span className="w-9 h-9 rounded-full border border-white/30 group-hover:border-white/60 flex items-center justify-center shrink-0 transition-colors">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </span>
              </motion.div>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}

