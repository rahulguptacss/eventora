"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SitemapCategory, SitemapLink } from '../../types';
import { 
  Home, Info, Target, Eye, BookOpen, Trophy, Users, User, HelpCircle,
  Settings, Briefcase, Calendar, Image as ImageIcon, MessageSquare,
  Handshake, Phone, Edit, FileText, Newspaper, FileSearch, Shield,
  Cookie, ArrowLeftRight, AlertTriangle, AlertCircle 
} from "lucide-react";
import data from "../../data/data.json";
import Breadcrumb from "../Breadcrumb/page";

const iconMap: Record<string, React.ElementType> = {
  Home, Info, Target, Eye, BookOpen, Trophy, Users, User, HelpCircle,
  Settings, Briefcase, Calendar, ImageIcon, MessageSquare,
  Handshake, Phone, Edit, FileText, Newspaper, FileSearch, Shield,
  Cookie, ArrowLeftRight, AlertTriangle, AlertCircle
};

export default function SitemapContent() {
  const pageData = data.categories.Event.sections.Pages.variants.SitemapPage;
  const sectionData = data.categories.Event.sections.SitemapContent.variants.EventSitemapContent1;

  return (
    <div className="w-full">
      <Breadcrumb title={pageData.breadcrumbTitle} />

      <section className="py-4 bg-[#faf8fc]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
          {/* Header */}
          <div className="text-center mb-6">
            <h4 className="text-purple-600 font-bold tracking-[0.2em] text-[16px] md:text-[18px] uppercase mb-1">
              {sectionData.header.badge}
            </h4>
            <div className="flex items-center justify-center gap-2">
              <span className="w-12 h-[2px] bg-pink-500 rounded-full"></span>
              <span className="text-purple-600 text-[16px]">✦</span>
              <span className="w-12 h-[2px] bg-purple-600 rounded-full"></span>
            </div>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#0b0410] leading-[1] mb-1 uppercase">
              {sectionData.header.title}
            </h2>
            <p className="text-[#374151] font-medium text-[16px] max-w-2xl mx-auto">
              {pageData.metaDesc}
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {sectionData.sitemapData.map((section: SitemapCategory, idx: number) => {
              const numInnerCols = parseInt(section.innerCols.replace('lg:grid-cols-', ''));

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-full ${section.colSpan}`}
                >
                  {/* Category Header */}
                  <div className={`${section.color} text-white font-semibold py-3 px-5 rounded-t-[6px] flex items-center gap-3 border border-b-0 border-[#e5e7eb] border-opacity-20`}>
                    {section.category === "MAIN PAGES" && <Home size={18} strokeWidth={1.5} />}
                    {section.category === "BLOG & NEWS" && <Newspaper size={18} strokeWidth={1.5} />}
                    {section.category === "CAREERS" && <Briefcase size={18} strokeWidth={1.5} />}
                    {section.category === "POLICIES & LEGAL" && <Shield size={18} strokeWidth={1.5} />}
                    {section.category === "ADDITIONAL" && <span className="font-dancing text-2xl leading-none pt-2">☆</span>}
                    <span className="tracking-wider text-[13px]">{section.category}</span>
                  </div>

                  {/* Links Grid */}
                  <div className="bg-white border border-gray-200 rounded-b-[6px] relative overflow-hidden">
                    <div className={`grid grid-cols-1 md:grid-cols-2 ${section.innerCols} py-2 md:py-3`}>

                      {[...Array(numInnerCols)].map((_, colIdx) => {
                        const columnData = section.columns[colIdx];

                        if (columnData === "BANNER") {
                          return (
                            <div key={colIdx} className="px-4 md:px-5 flex items-center h-full border-gray-100">
                              <div className="border border-purple-300 border-dashed rounded-[6px] px-4 py-4 flex items-center gap-3 bg-white w-full h-full">
                                <span className="text-purple-600 text-xl">✦</span>
                                <span className="text-[13px] text-gray-700 font-medium leading-relaxed">
                                  {sectionData.banner.text1} <span className="text-purple-600 font-bold whitespace-nowrap">{sectionData.banner.text2}</span>
                                </span>
                              </div>
                            </div>
                          );
                        }

                        const links = Array.isArray(columnData) ? columnData : [];

                        return (
                          <div
                            key={colIdx}
                            className={`flex flex-col px-4 md:px-5 border-gray-100`}
                          >
                            {links.map((link: SitemapLink) => {
                              const IconComponent = link.icon ? iconMap[link.icon] : null;
                              return (
                                <Link
                                  href={link.href}
                                  key={link.id}
                                  className="flex items-center gap-2 group border-b border-gray-100 py-3 hover:border-purple-200 transition-colors last:border-b-0"
                                >
                                  <span className="text-purple-600 font-medium group-hover:text-purple-800 transition-colors text-[14px] leading-none mb-[2px]">
                                    ›
                                  </span>
                                  <span className="flex items-center justify-center shrink-0">
                                    {IconComponent && <IconComponent size={16} strokeWidth={1.5} className="text-purple-600 group-hover:text-purple-800 transition-colors" />}
                                  </span>
                                  <span className="text-[13px] font-medium text-gray-700 group-hover:text-purple-600 transition-colors flex items-center gap-1.5 ml-1">
                                    <span className="text-purple-600 font-semibold">{link.id}.</span> {link.label}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
