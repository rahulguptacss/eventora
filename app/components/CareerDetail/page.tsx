"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { JobData, CareerBenefit } from '../../types';
import { 
  Briefcase, MapPin, Clock, CircleDollarSign, CalendarDays, Calendar, Contact, CalendarClock,
  Send, Star, TrendingUp, Users, BookOpen, Gift, FileText, CheckCircle2, Check, ChevronDown,
  User, Award, FilePlus
} from "lucide-react";
import data from "../../data/data.json";

const iconMap: Record<string, any> = {
  Star,
  TrendingUp,
  Users,
  BookOpen,
  Gift,
  FileText,
  User,
  Award,
  Briefcase
};

function CareerDetailContent({ id }: { id: string }) {
  const [showAllResp, setShowAllResp] = useState(false);
  const [showAllReqs, setShowAllReqs] = useState(false);
  const jobs = data.categories.Event.sections.CareerJobs.variants.EventCareerJobs1.list;
  const detailData = data.categories.Event.sections.CareerDetail.variants.EventCareerDetail1;

  // Find the job or default to the first one
  const job = jobs.find((j: JobData) => j.id === Number(id)) || jobs[0];

  if (!detailData || !job) return null;

  return (
    <section className="pb-8 lg:pb-12 bg-[#fbfbfb]">
      {/* Top Header Section */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-8">
                <div className="w-[64px] h-[64px] lg:w-[100px] lg:h-[100px] rounded-[16px] lg:rounded-[24px] bg-[#fdf2f7] flex items-center justify-center text-[#e32879] shrink-0">
                  <div className="relative">
                    <Calendar className="w-8 h-8 lg:w-12 lg:h-12" strokeWidth={2.5} />
                    <Star className="w-3 h-3 lg:w-[18px] lg:h-[18px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-0.5 lg:mt-1" strokeWidth={3} />
                  </div>
                </div>
                <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-extrabold text-[#131336] leading-tight tracking-tight">
                  {job.title}
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 lg:gap-x-8 lg:gap-y-4 mb-6 lg:mb-8 text-[13px] sm:text-[15px] lg:text-[18px] font-medium text-[#131336]">
                <div className="flex items-center gap-1.5 lg:gap-2.5">
                  <Briefcase className="w-4 h-4 lg:w-[22px] lg:h-[22px] text-[#131336]" strokeWidth={1.5} />
                  {job.department}
                </div>
                <div className="flex items-center gap-1.5 lg:gap-2.5">
                  <MapPin className="w-4 h-4 lg:w-[22px] lg:h-[22px] text-[#131336]" strokeWidth={1.5} />
                  {job.location}
                </div>
                <div className="flex items-center gap-1.5 lg:gap-2.5">
                  <Clock className="w-4 h-4 lg:w-[22px] lg:h-[22px] text-[#131336]" strokeWidth={1.5} />
                  {job.type}
                </div>
              </div>

              <p className="text-[#131336] text-[15px] lg:text-[20px] leading-[1.6] lg:leading-[1.8] font-medium mb-8 lg:mb-10 max-w-[600px]">
                {job.desc}
              </p>


            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-1/2 relative"
            >
              {/* Dot Pattern Background */}
              <div className="absolute -top-6 -right-6 w-32 h-32 z-0 opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                  <pattern id="dots2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" fill="#e32879" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#dots2)" />
                </svg>
              </div>
              <div className="relative z-10 rounded-[30px] overflow-hidden shadow-xl border-4 border-white h-[400px] lg:h-[450px]">
                <img
                  src={job.image || "/images/blog/blog1.png"}
                  alt={job.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Cards Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 mb-8"
      >
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 py-4 lg:py-10 px-2 lg:px-8 flex flex-wrap lg:flex-nowrap justify-between items-center">

          <div className="flex flex-col items-center w-1/2 lg:w-auto lg:flex-1 text-center px-2 py-6 lg:py-0 relative border-r border-b lg:border-b-0 border-gray-100 lg:border-gray-200 group hover:-translate-y-1 transition-transform duration-300 cursor-default">
            <div className="w-[72px] h-[72px] rounded-full bg-[#fdf2f7] flex items-center justify-center text-[#e32879] mb-4 group-hover:bg-gradient-to-r group-hover:from-[#e32879] group-hover:to-[#9333ea] group-hover:text-white transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
              <Contact size={32} strokeWidth={2} />
            </div>
            <h4 className="text-[18px] lg:text-[19px] font-bold text-[#131336] mb-1.5 group-hover:text-[#e32879] transition-colors duration-300">{detailData.statsLabels.department}</h4>
            <p className="text-[15px] lg:text-[16px] font-medium text-gray-600">{job.department}</p>
          </div>

          <div className="flex flex-col items-center w-1/2 lg:w-auto lg:flex-1 text-center px-2 py-6 lg:py-0 relative border-b lg:border-b-0 lg:border-r border-gray-100 lg:border-gray-200 group hover:-translate-y-1 transition-transform duration-300 cursor-default">
            <div className="w-[72px] h-[72px] rounded-full bg-[#fdf2f7] flex items-center justify-center text-[#e32879] mb-4 group-hover:bg-gradient-to-r group-hover:from-[#e32879] group-hover:to-[#9333ea] group-hover:text-white transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
              <MapPin size={32} strokeWidth={2} />
            </div>
            <h4 className="text-[18px] lg:text-[19px] font-bold text-[#131336] mb-1.5 group-hover:text-[#e32879] transition-colors duration-300">{detailData.statsLabels.location}</h4>
            <p className="text-[15px] lg:text-[16px] font-medium text-gray-600">{job.location}</p>
          </div>

          <div className="flex flex-col items-center w-1/2 lg:w-auto lg:flex-1 text-center px-2 py-6 lg:py-0 relative border-r border-b lg:border-b-0 border-gray-100 lg:border-gray-200 group hover:-translate-y-1 transition-transform duration-300 cursor-default">
            <div className="w-[72px] h-[72px] rounded-full bg-[#fdf2f7] flex items-center justify-center text-[#e32879] mb-4 group-hover:bg-gradient-to-r group-hover:from-[#e32879] group-hover:to-[#9333ea] group-hover:text-white transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
              <Clock size={32} strokeWidth={2} />
            </div>
            <h4 className="text-[18px] lg:text-[19px] font-bold text-[#131336] mb-1.5 group-hover:text-[#e32879] transition-colors duration-300">{detailData.statsLabels.type}</h4>
            <p className="text-[15px] lg:text-[16px] font-medium text-gray-600">{job.type}</p>
          </div>

          <div className="flex flex-col items-center w-1/2 lg:w-auto lg:flex-1 text-center px-2 py-6 lg:py-0 relative border-b lg:border-b-0 lg:border-r border-gray-100 lg:border-gray-200 group hover:-translate-y-1 transition-transform duration-300 cursor-default">
            <div className="w-[72px] h-[72px] rounded-full bg-[#fdf2f7] flex items-center justify-center text-[#e32879] mb-4 group-hover:bg-gradient-to-r group-hover:from-[#e32879] group-hover:to-[#9333ea] group-hover:text-white transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
              <CircleDollarSign size={32} strokeWidth={2} />
            </div>
            <h4 className="text-[18px] lg:text-[19px] font-bold text-[#131336] mb-1.5 group-hover:text-[#e32879] transition-colors duration-300">{detailData.statsLabels.experience}</h4>
            <p className="text-[15px] lg:text-[16px] font-medium text-gray-600">{job.experience || "Not Specified"}</p>
          </div>

          <div className="flex flex-col items-center w-full lg:w-auto lg:flex-1 text-center px-2 py-6 lg:py-0 relative border-none group hover:-translate-y-1 transition-transform duration-300 cursor-default">
            <div className="w-[72px] h-[72px] rounded-full bg-[#fdf2f7] flex items-center justify-center text-[#e32879] mb-4 group-hover:bg-gradient-to-r group-hover:from-[#e32879] group-hover:to-[#9333ea] group-hover:text-white transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
              <CalendarClock size={32} strokeWidth={2} />
            </div>
            <h4 className="text-[18px] lg:text-[19px] font-bold text-[#131336] mb-1.5 group-hover:text-[#e32879] transition-colors duration-300">{detailData.statsLabels.postedOn}</h4>
            <p className="text-[15px] lg:text-[16px] font-medium text-gray-600">{job.postedOn || "Recently"}</p>
          </div>

        </div>
      </motion.div>

      {/* Main Content Split */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-2/3"
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8">

              <h3 className="text-[22px] font-bold text-[#131336] mb-4">{detailData.titles.about}</h3>
              <p className="text-[15px] leading-[1.8] text-[#131336] font-medium mb-10">
                {job.aboutRole}
              </p>

              <h3 className="text-[22px] font-bold text-[#131336] mb-4">{detailData.titles.responsibilities}</h3>
              <div className="relative mb-10">
                <ul className="space-y-3">
                  {(showAllResp ? job.responsibilities : job.responsibilities?.slice(0, 3))?.map((item: string, i: number) => (
                    <li key={i} className={`flex items-start gap-3 ${!showAllResp && i === 2 ? 'opacity-40' : ''}`}>
                      <div className="w-5 h-5 rounded-full bg-[#fdf2f7] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} className="text-[#e32879]" />
                      </div>
                      <span className="text-[15px] leading-[1.6] text-[#131336] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                {!showAllResp && job.responsibilities && job.responsibilities.length > 3 && (
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                )}

                {job.responsibilities && job.responsibilities.length > 3 && (
                  <button
                    onClick={() => setShowAllResp(!showAllResp)}
                    className="mt-4 flex items-center gap-1.5 text-[#e32879] font-bold text-[14px] hover:text-[#c01f63] transition-colors"
                  >
                    {showAllResp ? "View Less" : "View More"}
                    <motion.div animate={{ rotate: showAllResp ? 180 : 0 }}>
                      <ChevronDown size={16} strokeWidth={2.5} />
                    </motion.div>
                  </button>
                )}
              </div>

              <h3 className="text-[22px] font-bold text-[#131336] mb-4">{detailData.titles.requirements}</h3>
              <div className="relative mb-10">
                <ul className="space-y-3">
                  {(showAllReqs ? job.requirements : job.requirements?.slice(0, 3))?.map((item: string, i: number) => (
                    <li key={i} className={`flex items-start gap-3 ${!showAllReqs && i === 2 ? 'opacity-40' : ''}`}>
                      <div className="w-5 h-5 rounded-full bg-[#fdf2f7] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} className="text-[#e32879]" />
                      </div>
                      <span className="text-[15px] leading-[1.6] text-[#131336] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                {!showAllReqs && job.requirements && job.requirements.length > 3 && (
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                )}

                {job.requirements && job.requirements.length > 3 && (
                  <button
                    onClick={() => setShowAllReqs(!showAllReqs)}
                    className="mt-4 flex items-center gap-1.5 text-[#e32879] font-bold text-[14px] hover:text-[#c01f63] transition-colors"
                  >
                    {showAllReqs ? "View Less" : "View More"}
                    <motion.div animate={{ rotate: showAllReqs ? 180 : 0 }}>
                      <ChevronDown size={16} strokeWidth={2.5} />
                    </motion.div>
                  </button>
                )}
              </div>

              <h3 className="text-[22px] font-bold text-[#131336] mb-4">{detailData.titles.niceToHave}</h3>
              <ul className="space-y-3">
                {job.niceToHave?.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#fdf2f7] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} className="text-[#e32879]" />
                    </div>
                    <span className="text-[15px] leading-[1.6] text-[#131336] font-medium">{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          </motion.div>

          {/* Right Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/3"
          >

            {/* Why Join Eventora */}
            <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 mb-6">
              <h3 className="text-[18px] lg:text-[20px] font-bold text-[#131336] mb-5">{detailData.whyJoin.title}</h3>
              <ul className="space-y-3 lg:space-y-4">
                {detailData.whyJoin.benefits.map((benefit: CareerBenefit, i: number) => {
                  const Icon = iconMap[benefit.icon] || Star;
                  return (
                    <li key={i} className="flex items-center gap-3 lg:gap-4">
                      <div className="w-[38px] h-[38px] lg:w-[42px] lg:h-[42px] rounded-[10px] lg:rounded-[12px] bg-[#fdf2f7] flex items-center justify-center text-[#e32879] shrink-0">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <span className="text-[13px] lg:text-[14px] font-normal text-[#131336] leading-snug">{benefit.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Apply Form */}
            <div className="bg-[#fef6f9] rounded-[24px] p-6 pb-5 lg:p-8 lg:pb-6">
              <h3 className="text-[20px] lg:text-[22px] font-bold text-[#131336] mb-6">{detailData.applyForm.title}</h3>
              <form className="space-y-4">

                <div>
                  <label className="block text-[14px] font-bold text-[#131336] mb-1.5">
                    {detailData.applyForm.nameLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={detailData.applyForm.namePlaceholder}
                    className="w-full bg-white border border-[#eaeaea] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#e32879] transition-colors placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-[#131336] mb-1.5">
                    {detailData.applyForm.emailLabel}
                  </label>
                  <input
                    type="email"
                    placeholder={detailData.applyForm.emailPlaceholder}
                    className="w-full bg-white border border-[#eaeaea] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#e32879] transition-colors placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-[#131336] mb-1.5">
                    {detailData.applyForm.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    placeholder={detailData.applyForm.phonePlaceholder}
                    className="w-full bg-white border border-[#eaeaea] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#e32879] transition-colors placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-[#131336] mb-1.5">
                    {detailData.applyForm.uploadLabel}
                  </label>
                  <div className="flex items-center justify-between w-full bg-white border border-[#eaeaea] rounded-xl p-1.5">
                    <label className="bg-[#f6f6f6] hover:bg-[#eeeeee] rounded-lg px-4 py-2.5 text-[14px] font-semibold text-[#131336] cursor-pointer transition-colors flex items-center gap-2.5">
                      <FilePlus size={16} className="text-[#131336]" />
                      {detailData.applyForm.uploadBtn}
                      <input type="file" className="hidden" />
                    </label>
                    <span className="text-[14px] text-gray-400 mr-4">{detailData.applyForm.uploadPlaceholder}</span>
                  </div>
                </div>

                <button type="button" className="w-full bg-gradient-to-r from-[#e32879] to-[#9333ea] hover:opacity-90 text-white font-semibold py-4 rounded-xl transition-opacity flex items-center justify-center gap-2 text-[16px] mt-4 cursor-pointer">
                  {detailData.applyForm.btnText} <Send size={18} />
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default function CareerDetail({ id }: { id: string }) {
  return <CareerDetailContent id={id} />;
}
