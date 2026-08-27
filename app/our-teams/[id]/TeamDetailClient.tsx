"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, Calendar, MapPin, Star } from "lucide-react";
import { FaLinkedin, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import Link from "next/link";
import data from "../../data/data.json";
import { TeamMember } from '../../types';

export default function TeamDetail({ id }: { id: string }) {
  const teamList = data.categories.Event.sections.Team.variants.EventTeam1.teamList;
  const member = teamList.find((m: TeamMember) => m.id.toString() === id) || teamList[0];
  const teamData = data.categories.Event.sections.TeamDetail.variants.EventTeamDetail1;

  const subtitleWords = teamData.subtitle.split(' ');
  const subtitleLastWord = subtitleWords.pop() || '';
  const subtitleFirstPart = subtitleWords.join(' ');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'calendar': return <Calendar size={18} className="text-pink-500" />;
      case 'mail': return <Mail size={18} className="text-pink-500" />;
      case 'phone': return <Phone size={18} className="text-pink-500" />;
      case 'map': return <MapPin size={18} className="text-pink-500" />;
      default: return <Star size={18} className="text-pink-500" />;
    }
  };

  return (
    <section className="pt-8 pb-12 md:pt-10 bg-[#fdf7fb] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-10 max-w-[1200px]">
        
        {/* Header Section */}
        <motion.div 
          className="flex flex-col items-center text-center mb-8 md:mb-10 max-w-4xl mx-auto"
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
            className="text-[#191c49] font-medium text-[17px] max-w-2xl mt-2 leading-relaxed"
          >
            {teamData.desc}
          </motion.p>
        </motion.div>

        {/* Profile Card */}
        <motion.div 
          className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-pink-50/50 mb-8 flex flex-col md:flex-row p-4 md:p-6 lg:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Left Image */}
          <div className="w-full md:w-[40%] shrink-0 flex">
            <div className="relative w-full min-h-[350px] rounded-[20px] overflow-hidden">
              <Image 
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          
          {/* Right Content */}
          <div className="w-full md:w-[60%] pt-6 md:pt-2 md:pl-8 lg:pl-12">
            <h3 className="text-[32px] md:text-[38px] font-bold text-[#0b0410] mb-0">
              {member.name}
            </h3>
            <p className="text-pink-500 font-bold text-[18px] md:text-[20px] mb-2">
              {member.role}
            </p>
            
            <div className="w-12 h-[3px] bg-pink-500 mb-4 rounded-full"></div>
            
            <p className="text-[#191c49] text-[15px] md:text-[16px] font-medium leading-[1.7] mb-6">
              {member.biography}
            </p>
            
            <div className="flex flex-col mb-6">
              {member.details.map((detail: { icon: string, label: string, value: string }, idx: number) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fef2f8] flex items-center justify-center shrink-0 my-1">
                    {getIcon(detail.icon)}
                  </div>
                  <div className={`flex flex-1 items-center justify-between py-3 ${idx !== member.details.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <span className="text-[#0b0410] font-bold text-[15px]">{detail.label}</span>
                    <span className="text-[#191c49] text-[15px] text-right font-medium">
                      {detail.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-2">
              <Link href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-[#fef2f8] flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors">
                <FaLinkedin size={18} />
              </Link>
              <Link href={member.socials.instagram} className="w-10 h-10 rounded-full bg-[#fef2f8] flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors">
                <FaInstagram size={18} />
              </Link>
              <Link href={`mailto:${member.socials.email}`} className="w-10 h-10 rounded-full bg-[#fef2f8] flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors">
                <FaRegEnvelope size={18} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Core Skills & Experience */}
        <div className="flex flex-col gap-8">
          
          {/* Core Skills */}
          <motion.div 
            className="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm border border-pink-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[24px] font-bold text-[#11133c] mb-2">
              Core Skills
            </h4>
            <div className="w-10 h-[3px] bg-pink-500 mb-6 rounded-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
              {member.coreSkills.map((skill: { name: string, percentage: number }, idx: number) => (
                <div key={idx}>
                  <div className="mb-2">
                    <span className="text-[#11133c] font-bold text-[15px]">{skill.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-[6px] bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                    <span className="text-[#11133c] font-bold text-[14px] shrink-0">{skill.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Journey */}
          <motion.div 
            className="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm border border-pink-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[24px] font-bold text-[#11133c] mb-2">
              Experience Journey
            </h4>
            <div className="w-10 h-[3px] bg-pink-500 mb-8 rounded-full"></div>
            
            <div className="relative pl-8 md:pl-10">
              <div className="flex flex-col">
                {member.experienceJourney.map((exp: { years: string, role: string, description: string }, idx: number) => (
                  <div key={idx} className={`relative flex flex-col md:flex-row md:items-start gap-1 md:gap-8 ${idx !== member.experienceJourney.length - 1 ? 'pb-6 md:pb-8' : ''}`}>
                    {/* Pink Dot */}
                    <div className="absolute -left-[33px] md:-left-[41px] top-[5px] w-[13px] h-[13px] rounded-full bg-pink-500 z-10"></div>
                    
                    {/* Connecting Line (Only for items before the last) */}
                    {idx !== member.experienceJourney.length - 1 && (
                      <div className="absolute -left-[27px] md:-left-[35px] top-[18px] bottom-[-5px] w-[1.5px] bg-[#c84bb0]"></div>
                    )}
                    
                    <div className="w-full md:w-[150px] shrink-0 pt-1 md:pt-0">
                      <span className="text-pink-500 font-bold text-[16px] md:text-[17px]">{exp.years}</span>
                    </div>
                    
                    <div className="flex-1">
                      <h5 className="text-[#0b0410] font-bold text-[17px] md:text-[19px] mb-1">{exp.role}</h5>
                      <p className="text-[#191c49] text-[16px] leading-[1.6] m-0">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
