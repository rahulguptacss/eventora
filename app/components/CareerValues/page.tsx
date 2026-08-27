"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Lightbulb, Star, Heart } from "lucide-react";
import data from "../../data/data.json";
import { CoreValue } from '../../types';

const iconMap: Record<string, React.ElementType> = {
  Calendar,
  Users,
  Lightbulb,
  Star,
  Heart
};

export default function CareerValues() {
  const values = data.categories.Event.sections.CareerValues.variants.EventCareerValues1;

  return (
    <section className="py-8 lg:py-10 bg-[#fcfcfc]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 bg-white rounded-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden"
        >
          {values.map((val: CoreValue, idx: number) => {
            const Icon = val.icon ? iconMap[val.icon] : Star;
            return (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col items-center text-center py-8 px-3 lg:py-10 lg:px-5 cursor-pointer group relative ${
                  idx !== values.length - 1 ? 'border-b border-gray-200/60 lg:border-b-0 lg:after:absolute lg:after:right-0 lg:after:top-[15%] lg:after:bottom-[15%] lg:after:w-[1px] lg:after:bg-gray-200/80' : ''
                }`}
              >
                <div className="w-[90px] h-[90px] rounded-full bg-[#fdf2f7] flex items-center justify-center mb-8 text-[#e32879] group-hover:scale-110 transition-transform duration-300">
                  <Icon size={42} strokeWidth={2} />
                </div>
                <h3 className="text-[17px] lg:text-[18px] font-extrabold text-[#131336] mb-3">
                  {val.title}
                </h3>
                <p className="text-[#334155] text-[13px] lg:text-[14px] leading-[1.7] font-medium">
                  {val.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
