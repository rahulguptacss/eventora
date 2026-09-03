"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { JobData } from '../../types';
import { 
  ChevronDown, RotateCcw, CalendarDays, Users, Headphones,
  LayoutGrid, User, PenTool, Briefcase, MapPin, Clock, MoveRight
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import data from "../../data/data.json";

const IconMap: Record<string, any> = {
  CalendarDays,
  Users,
  Headphones,
  LayoutGrid,
  User,
  PenTool
};

export default function CareerJobs() {
  const router = useRouter();
  const jobsData = data.categories.Event.sections.CareerJobs.variants.EventCareerJobs1;

  const [currentPage, setCurrentPage] = useState(1);
  const [department, setDepartment] = useState(jobsData.filters.departments[0] || "All Departments");
  const [location, setLocation] = useState(jobsData.filters.locations[0] || "All Locations");
  const [employmentType, setEmploymentType] = useState(jobsData.filters.employmentTypes[0] || "All Employment Types");

  const ITEMS_PER_PAGE = 4;

  const filteredJobs = jobsData.list.filter((job: JobData) => {
    const matchDept = department.startsWith("All") || job.department === department;
    const matchLoc = location.startsWith("All") || job.location === location;
    const matchType = employmentType.startsWith("All") || job.type === employmentType;
    return matchDept && matchLoc && matchType;
  });

  const totalItems = filteredJobs.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const clearFilters = () => {
    setDepartment(jobsData.filters.departments[0] || "All Departments");
    setLocation(jobsData.filters.locations[0] || "All Locations");
    setEmploymentType(jobsData.filters.employmentTypes[0] || "All Employment Types");
    setCurrentPage(1);
  };

  return (
    <section className="pt-2 pb-10 lg:pt-4 lg:pb-12 bg-[#fbfbfb]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex flex-col items-center mb-3">
            <span className="text-[#9333ea] font-extrabold tracking-[0.15em] text-[15px] md:text-[16px] uppercase mb-1">
              {jobsData.subheader}
            </span>
            <div className="flex items-center gap-2">
              <span className="w-16 h-[1px] bg-pink-500"></span>
              <span className="text-pink-500 text-[10px] leading-none flex items-center">◆</span>
              <span className="w-16 h-[1px] bg-pink-500"></span>
            </div>
          </div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-extrabold text-[#131336] leading-[1.2] tracking-tight">
            {jobsData.title}
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-12">
          <div className="relative">
            <select 
              value={department}
              onChange={(e) => { setDepartment(e.target.value); setCurrentPage(1); }}
              className="appearance-none bg-white border border-gray-200/80 rounded-[10px] py-3.5 pl-6 pr-14 text-[15px] md:text-[16px] font-semibold text-[#131336] outline-none focus:border-pink-300 cursor-pointer min-w-[220px] shadow-sm"
            >
              {jobsData.filters.departments.map((dept: string, i: number) => (
                <option key={i} value={dept}>{dept}</option>
              ))}
            </select>
            <ChevronDown size={20} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#131336] pointer-events-none" />
          </div>

          <div className="relative">
            <select 
              value={location}
              onChange={(e) => { setLocation(e.target.value); setCurrentPage(1); }}
              className="appearance-none bg-white border border-gray-200/80 rounded-[10px] py-3.5 pl-6 pr-14 text-[15px] md:text-[16px] font-semibold text-[#131336] outline-none focus:border-pink-300 cursor-pointer min-w-[220px] shadow-sm"
            >
              {jobsData.filters.locations.map((loc: string, i: number) => (
                <option key={i} value={loc}>{loc}</option>
              ))}
            </select>
            <ChevronDown size={20} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#131336] pointer-events-none" />
          </div>

          <div className="relative">
            <select 
              value={employmentType}
              onChange={(e) => { setEmploymentType(e.target.value); setCurrentPage(1); }}
              className="appearance-none bg-white border border-gray-200/80 rounded-[10px] py-3.5 pl-6 pr-14 text-[15px] md:text-[16px] font-semibold text-[#131336] outline-none focus:border-pink-300 cursor-pointer min-w-[220px] shadow-sm"
            >
              {jobsData.filters.employmentTypes.map((type: string, i: number) => (
                <option key={i} value={type}>{type}</option>
              ))}
            </select>
            <ChevronDown size={20} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#131336] pointer-events-none" />
          </div>

          <button onClick={clearFilters} className="flex items-center gap-2 text-[#e32879] text-[16px] font-bold hover:text-[#131336] transition-colors ml-4 cursor-pointer">
            {jobsData.filters.clearText} <RotateCcw size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {currentJobs.map((job: JobData, idx: number) => {
            const Icon = job.icon ? IconMap[job.icon] : CalendarDays;

            return (
              <motion.div
                key={job.id}
                onClick={() => router.push(`/career/${job.id}`)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[20px] p-5 lg:p-6 border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow group flex flex-col sm:flex-row gap-4 cursor-pointer"
              >
                <div className={`w-[72px] h-[72px] rounded-[18px] flex items-center justify-center shrink-0 ${job.bgClass} ${job.textClass}`}>
                  <Icon size={32} strokeWidth={2.2} />
                </div>

                <div className="flex-1">
                  <h3 className="text-[20px] lg:text-[22px] font-semibold text-[#131336] mb-2 group-hover:text-[#e32879] transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-3 text-[13px] lg:text-[14px] font-medium text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <Briefcase size={16} strokeWidth={1.5} className="text-gray-500" />
                      {job.department}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} strokeWidth={1.5} className="text-gray-500" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} strokeWidth={1.5} className="text-gray-500" />
                      {job.type}
                    </div>
                  </div>

                  <p className="text-[#131336] text-[14px] lg:text-[15px] leading-[1.5] mb-4 font-medium line-clamp-2">
                    {job.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <Link href={`/career/${job.id}`} className="inline-flex items-center gap-2 text-[#e32879] text-[15px] font-semibold group/link">
                      {jobsData.viewDetailsText} <MoveRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>

                    {job.isNew && (
                      <span className="bg-[#fdf2f7] text-[#e32879] text-[14px] font-semibold px-4 py-1.5 rounded-full">
                        {jobsData.newBadgeText}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2.5">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer text-[15px] disabled:opacity-50 disabled:cursor-not-allowed">
              <span className="sr-only">{jobsData.pagination.prevText || 'Previous'}</span>
              &larr;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page: number) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-11 h-11 flex items-center justify-center rounded-lg font-bold transition-colors cursor-pointer text-[15px] ${page === currentPage
                    ? "bg-[#9333ea] text-white shadow-md shadow-purple-500/30"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
              >
                {page}
              </button>
            ))}

            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer text-[15px] disabled:opacity-50 disabled:cursor-not-allowed">
              <span className="sr-only">{jobsData.pagination.nextText || 'Next'}</span>
              &rarr;
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
