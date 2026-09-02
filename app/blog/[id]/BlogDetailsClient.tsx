"use client";

import { motion } from "framer-motion";
import { Calendar, User, Clock, Gift, Music, Cake, Star, Sparkles, MoveRight, Layers, Presentation, Tent } from "lucide-react";
import Link from "next/link";
import data from "../../data/data.json";
import { BlogData, BlogSection } from '../../types';

const iconMap: Record<string, React.ElementType> = {
  Gift, Presentation, Cake, Music, Layers, Sparkles, Star, Tent
};

export default function BlogDetailsClient({ id }: { id: string }) {
  const blogs = data.categories.Event.sections.BlogGrid.variants.BlogGrid1.blogs;
  const blogData = blogs.find((b: BlogData) => b.id?.toString() === id) || blogs[0];
  const sidebarData = data.categories.Event.sections.BlogDetails.variants.EventBlogDetail1.sidebar;

  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-12 xl:px-16 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          
          {/* Main Content Area (Left) */}
          <div className="w-full lg:w-[68%]">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category Badge */}
              <div className="mb-5">
                <span className="inline-block border border-[#ff3377] text-[#ff3377] text-[11px] font-bold px-3 py-1 rounded-[4px] uppercase tracking-[0.1em]">
                  {blogData.tag}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-[32px] md:text-[38px] font-black text-[#0b0410] leading-[1.2] mb-4 tracking-tight">
                {blogData.title}
              </h1>
              
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 text-[#4b4e73] text-[13px] font-semibold mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#ff3377]" strokeWidth={2} />
                  <span>{blogData.date}</span>
                </div>
                <span className="text-gray-300 font-medium">|</span>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-[#ff3377]" strokeWidth={2} />
                  <span>{blogData.author}</span>
                </div>
                <span className="text-gray-300 font-medium">|</span>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#ff3377]" strokeWidth={2} />
                  <span>{blogData.readTime}</span>
                </div>
              </div>
              
              {/* Hero Image */}
              <div className="rounded-[20px] overflow-hidden mb-8">
                <img src={blogData.image} alt={blogData.title} className="w-full h-[300px] md:h-[400px] object-cover object-top" />
              </div>
              
              {/* Content Intro */}
              <div className="text-[#374151] mb-12 text-[16px] leading-[1.7] font-medium">
                <p>{blogData.contentIntro}</p>
              </div>

              {/* Sections */}
              <div className="space-y-8">
                {blogData.sections.map((section: BlogSection, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col md:flex-row gap-8 items-start"
                  >
                    <div className="w-full md:w-[55%] pt-2">
                      <h3 className="text-[24px] font-bold text-[#131336] mb-4">{section.title}</h3>
                      <p className="text-[#374151] leading-[1.7] font-medium text-[16px]">
                        {section.desc}
                      </p>
                    </div>
                    <div className="w-full md:w-[45%] rounded-2xl overflow-hidden shadow-sm">
                      <img src={section.image} alt={section.title} className="w-full h-[200px] object-cover" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar (Right) */}
          <div className="w-full lg:w-[32%] space-y-8 lg:sticky lg:top-32 h-fit">
            
            {/* Categories Widget removed as per request */}

            {/* Popular Posts Widget */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100"
            >
              <h3 className="text-[22px] font-bold text-[#131336] mb-3">{sidebarData.popularPostsTitle}</h3>
              <div className="flex items-center mb-5 justify-start w-full">
                <span className="w-10 h-[1px] bg-[#fbcfe8]"></span>
                <span className="text-[#e32879] text-[10px] mx-1">★</span>
                <span className="w-10 h-[1px] bg-[#fbcfe8]"></span>
              </div>
              
              <div className="space-y-5 mb-5">
                {sidebarData.popularPosts.map((post: BlogData, idx: number) => (
                  <Link href={`/blog/${post.id || 1}`} key={idx} className="flex gap-4 group items-center">
                    <div className="w-[75px] h-[75px] shrink-0 rounded-[14px] overflow-hidden shadow-sm">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#131336] text-[15px] leading-snug mb-1.5 group-hover:text-[#e32879] transition-colors line-clamp-2 pr-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[13px] text-[#374151] font-medium">
                        <Calendar size={14} className="text-[#e32879]" />
                        {post.date}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <Link href="#" className="inline-flex items-center gap-2 text-[#e32879] text-[15px] font-bold hover:text-[#131336] transition-colors group mt-2">
                {sidebarData.viewAllPostsText} <MoveRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
