"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import data from "../../data/data.json";

interface BreadcrumbProps {
  title: string;
  backgroundImage?: string;
  parentTitle?: string;
  parentHref?: string;
  currentTitle?: string;
}

export default function Breadcrumb({ 
  title, 
  backgroundImage,
  parentTitle,
  parentHref,
  currentTitle
}: BreadcrumbProps) {
  const breadcrumbData = data.categories.Event.sections.Breadcrumb.variants.EventBreadcrumb1;
  const pageData = data.categories.Event.sections.Pages.variants.AboutPage;
  
  const bgImage = backgroundImage || pageData.breadcrumbBg;

  return (
    <section className="relative h-[250px] md:h-[300px] flex items-center justify-start overflow-hidden pt-10">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="absolute inset-0 bg-[#2b0235]/40 backdrop-blur-[1px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left ml-4 md:ml-8"
        >
          <h1 className="text-[44px] md:text-[56px] font-bold text-white mb-3 tracking-tight">
            {title}
          </h1>
          
          <div className="flex items-center gap-3 text-[14px] md:text-[16px] font-bold text-white">
            <Link href="/" className="hover:text-[#d1135c] transition-colors">{breadcrumbData.homeLabel}</Link>
            <FaPlay size={10} className="text-[#d1135c]" />
            {parentTitle && parentHref && (
              <>
                <Link href={parentHref} className="hover:text-[#d1135c] transition-colors">{parentTitle}</Link>
                <FaPlay size={10} className="text-[#d1135c]" />
              </>
            )}
            <span className="text-[#d1135c]">{currentTitle || title}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
