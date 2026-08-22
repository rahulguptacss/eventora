"use client";

import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import data from "../../data/data.json";

interface BlogItem {
  id: number;
  title: string;
  tag: string;
  date: string;
  image: string;
}

export default function Blog() {
  const blogData = data.categories.Event.sections.Blog.variants.EventBlog1;
  const blogs = blogData.blogsList;

  const subtitleWords = blogData.subtitle.split(' ');
  const subtitleLastWord = subtitleWords.pop() || '';
  const subtitleSecondToLastWord = subtitleWords.pop() || '';
  const subtitleFirstPart = subtitleWords.join(' ');

  return (
    <section id="blog" className="pt-8 pb-10 bg-[#fdf1f8]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center mb-2">
            <h4 className="text-purple-600 font-bold tracking-[0.2em] text-[16px] md:text-[18px] uppercase mb-1">
              {blogData.title}
            </h4>
            <div className="flex items-center gap-2">
              <span className="w-12 h-[2px] bg-pink-500 rounded-full"></span>
              <span className="text-purple-600 text-[16px]">✦</span>
              <span className="w-12 h-[2px] bg-purple-600 rounded-full"></span>
            </div>
          </div>
          <h2 className="text-[42px] md:text-[56px] font-bold text-[#0b0410] leading-tight mb-0">
            {subtitleFirstPart}
          </h2>
          <div className="mb-4 -mt-2 md:-mt-4">
            <h3 className="text-[80px] md:text-[100px] font-dancing font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 leading-none pb-2 px-2">
              {subtitleSecondToLastWord} <span className="relative inline-block">
                {subtitleLastWord}
                <svg className="absolute buttom-10  left-0 w-full h-[12px]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10 Q 100 2 196 10" stroke="url(#paint0_linear)" strokeWidth="2.5" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ec4899" />
                      <stop offset="1" stopColor="#9333ea" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h3>
          </div>
          <p className="text-[#191c49] font-medium text-[17px] max-w-[650px] mx-auto leading-relaxed">
            {blogData.desc}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {blogs.map((blog: BlogItem) => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 md:left-6 md:bottom-6">
                  <span className="bg-[#cd174a] text-white text-[13px] font-bold px-5 py-2 rounded uppercase tracking-widest">
                    {blog.tag}
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <h4 className="text-[20px] md:text-[22px] font-bold text-[#0b0410] mb-4 hover:text-pink-500 transition-colors cursor-pointer leading-snug">
                  {blog.title}
                </h4>
                <div className="flex items-center justify-between text-[14px] mt-auto">
                  <div className="flex items-center gap-2 text-[#cd174a] font-medium">
                    <Calendar size={16} className="text-[#cd174a]" />
                    <span>{blog.date}</span>
                  </div>
                  <a href="#" className="text-[#cd174a] font-medium hover:text-purple-600 transition-colors border-b border-[#cd174a] pb-[1px]">
                    {blogData.readMoreText || "Read More"}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="inline-flex items-center justify-between w-[240px] bg-gradient-to-r from-pink-500 to-purple-600 text-white pl-10 pr-2 py-2 rounded-full text-[16px] font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30 cursor-pointer">
            <span>{blogData.button?.label || "View All Blogs"}</span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full border border-white/90 shrink-0">
              <ArrowRight size={16} />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
