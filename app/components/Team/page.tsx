"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, ArrowRight, Star } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import data from "../../data/data.json";

export default function Team() {
  const teamData = data.categories.Event.sections.Team.variants.EventTeam1;
  const teamMembers = teamData.teamList;

  const subtitleWords = teamData.subtitle.split(' ');
  const subtitleLastWord = subtitleWords.pop() || '';
  const subtitleFirstPart = subtitleWords.join(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="pt-8 pb-20 md:pt-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <motion.div 
          className="flex flex-col items-center text-center mb-10 md:mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center mb-2">
            <h4 className="text-[#8b5cf6] font-bold tracking-[0.2em] text-[16px] md:text-[18px] uppercase mb-1">
              {teamData.title}
            </h4>
            <div className="flex items-center gap-3">
              <span className="w-12 h-[2px] bg-pink-500 rounded-full"></span>
              <Star size={18} className="text-pink-500" />
              <span className="w-12 h-[2px] bg-purple-500 rounded-full"></span>
            </div>
          </div>
          
          <h2 className="text-[42px] md:text-[56px] font-bold text-[#0b0410] leading-tight mb-0">
            {subtitleFirstPart}
          </h2>
          <div className="relative inline-block mb-0 mt-0 md:mt-1">
            <h3 className="text-[80px] md:text-[100px] font-dancing font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 leading-none pb-2 px-2">
              {subtitleLastWord}
            </h3>
            <svg className="absolute bottom-2 left-0 w-full h-[16px]" viewBox="0 0 200 16" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 14 Q 100 10 195 4" stroke="url(#paint0_linear)" strokeWidth="3.5" strokeLinecap="round" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ec4899" />
                  <stop offset="1" stopColor="#9333ea" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 max-w-2xl mt-2 text-[18px] md:text-[20px] font-medium"
          >
            {teamData.desc}
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-[20px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-pink-50 hover:shadow-[0_8px_32px_rgba(236,72,153,0.08)] transition-shadow flex flex-col items-center text-center pb-8"
            >
              <div className="relative w-full h-[320px] mb-3">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              
              <h3 className="text-[26px] font-bold text-pink-500 mt-1">
                {member.name}
              </h3>
              
              <div className="w-10 h-[2px] bg-pink-500 my-2 rounded-full"></div>
              
              <p className="text-[#1e293b] font-bold text-[17px] mb-1">
                {member.role}
              </p>
              
              <p className="text-slate-600 text-[14px] px-6 mb-5 leading-relaxed">
                {member.description}
              </p>
              
              <div className="flex items-center gap-4">
                <Link href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors">
                  <FaLinkedin size={18} />
                </Link>
                <Link href={member.socials.instagram} className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors">
                  <FaInstagram size={18} />
                </Link>
                <Link href={member.socials.email} className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors">
                  <Mail size={18} strokeWidth={2} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="#" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
            View More Team Members <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
