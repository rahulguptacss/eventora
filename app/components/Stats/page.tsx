"use client";

import { Calendar, HeartHandshake, Users, Award } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import data from "../../data/data.json";

function Counter({ from, to }: { from: number; to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(from);
  
  const springCount = useSpring(count, {
    damping: 40,
    stiffness: 100,
    mass: 1,
  });

  useEffect(() => {
    if (inView) {
      count.set(to);
    }
  }, [inView, count, to]);

  const rounded = useTransform(springCount, (latest) => Math.round(latest));

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  const statsData = data.categories.Event.sections.Stats.variants.EventStats1;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Calendar": return Calendar;
      case "HeartHandshake": return HeartHandshake;
      case "Users": return Users;
      case "Award": return Award;
      default: return Calendar;
    }
  };

  const stats = statsData.statsList.map((stat: { icon: string; value: number; suffix: string; label: string }) => ({
    ...stat,
    icon: getIcon(stat.icon)
  }));

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative py-20 bg-[#150a21] overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/stats/stats-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0410]/95 via-[#1a0a2e]/80 to-[#0b0410]/95 z-0"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {stats.map((stat: { icon: any, value: number, suffix: string, label: string }, idx: number) => (
            <motion.div 
              key={idx} 
              className="bg-[#0b0410]/60 border border-white/20 rounded-[12px] py-4 px-3 sm:py-12 sm:px-6 flex items-center justify-center gap-2 sm:gap-4 xl:gap-6 backdrop-blur-md"
              variants={itemVariants}
            >
              <div className="text-white shrink-0">
                <stat.icon className="w-8 h-8 sm:w-16 sm:h-16" strokeWidth={1.5} />
              </div>
              
              <div className="w-[1px] h-[50px] sm:h-[100px] bg-white/20 shrink-0"></div>

              <div className="flex flex-col">
                <h4 className="text-[20px] sm:text-[32px] xl:text-[40px] font-bold text-white leading-none mb-1 sm:mb-2 flex items-center">
                  <Counter from={0} to={stat.value} />
                  <span>{stat.suffix}</span>
                </h4>
                <p className="text-gray-300 text-[10px] sm:text-[14px] xl:text-[16px] font-medium whitespace-nowrap">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
