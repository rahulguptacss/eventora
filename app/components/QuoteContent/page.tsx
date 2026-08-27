"use client";

import { motion } from "framer-motion";
import { Calendar, Users, ShieldCheck, User, Mail, Phone, MapPin, PenLine, Send, List, Sparkles, ClipboardEdit } from "lucide-react";
import data from "../../../app/data/data.json";
import { FormFieldData } from '../../types';

export default function QuoteContent() {
  const pageData = data.categories.Event.sections.QuoteContent.variants.EventQuoteContent1;
  
  // Icon mapping
  const iconMap: { [key: string]: React.ReactNode } = {
    "Calendar": <Calendar className="w-5 h-5" />,
    "Users": <Users className="w-5 h-5" />,
    "ShieldCheck": <ShieldCheck className="w-5 h-5" />,
    "User": <User className="w-5 h-5 text-gray-400" />,
    "Mail": <Mail className="w-5 h-5 text-gray-400" />,
    "Phone": <Phone className="w-5 h-5 text-gray-400" />,
    "List": <List className="w-5 h-5 text-gray-400" />,
    "MapPin": <MapPin className="w-5 h-5 text-gray-400" />,
    "PenLine": <PenLine className="w-5 h-5 text-gray-400" />
  };

  const featureIconMap: { [key: string]: React.ReactNode } = {
    "Calendar": <Calendar className="w-6 h-6" />,
    "Users": <Users className="w-6 h-6" />,
    "ShieldCheck": <ShieldCheck className="w-6 h-6" />,
  }

  return (
    <section className="relative py-10 lg:py-12 overflow-hidden bg-[#fdfafb]">
      {/* Background Image Layer */}
      {pageData.backgroundImage && (
        <div 
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${pageData.backgroundImage})` }}
        />
      )}
      {/* Subtle Background Pattern/Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Left Column: Text & Image */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-3"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#be29ab] to-[#5129ea] font-[700] tracking-[0.2em] text-[13px] uppercase">
                {pageData.subtitle}
              </span>
              <div className="flex items-center">
                <div className="h-[1.5px] w-10 bg-gradient-to-r from-[#be29ab] to-[#be29ab]" />
                <svg className="w-4 h-4 text-[#be29ab] -ml-[2px]" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" />
                </svg>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[32px] md:text-[38px] lg:text-[42px] font-[700] text-[#0a1128] leading-[1.1] font-poppins tracking-tight mb-1"
            >
              {pageData.titlePart1}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative inline-block self-start mb-6"
            >
              <span 
                className="text-[48px] md:text-[58px] lg:text-[68px] text-transparent bg-clip-text bg-gradient-to-r from-[#ff0f7b] to-[#6a11cb] block font-[700] leading-none pb-3 pr-4 -mt-2"
                style={{ fontFamily: 'var(--font-dancing)' }}
              >
                {pageData.titlePart2}
              </span>
              <div className="absolute bottom-0 left-6 right-8 h-[2.5px] bg-gradient-to-r from-[#ff0f7b] to-[#6a11cb] rounded-full transform -rotate-[2deg] origin-left" />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 font-medium text-[16px] leading-[1.7] max-w-[420px] mb-10"
            >
              {pageData.description}
            </motion.p>

            {/* Features List */}
            <div className="flex flex-col gap-8 mb-0 lg:mb-12">
              {pageData.features.map((feature: { icon: string, title: string, description: string }, index: number) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="flex gap-5 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500 shadow-sm border border-pink-100">
                    {featureIconMap[feature.icon]}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-[#0a1128] font-bold text-base mb-1">{feature.title}</h3>
                    <p className="text-gray-500 text-sm max-w-[280px] leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: Form Card */}
          <div className="w-full lg:w-[50%] relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_20px_50px_rgba(20,8,48,0.06)] border border-pink-50 relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-bl-full blur-2xl" />
              
              <div className="text-center mb-8 relative z-10">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <div className="w-14 h-14 bg-purple-100/70 rounded-full flex items-center justify-center flex-shrink-0">
                      <ClipboardEdit className="w-7 h-7 text-purple-600" />
                    </div>
                    <h3 className="text-[26px] md:text-[30px] font-bold text-[#0a1128]">{pageData.form.title}</h3>
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="h-[1px] w-16 bg-purple-200" />
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    <div className="h-[1px] w-16 bg-purple-200" />
                  </div>
                  <p className="text-gray-500 text-[15px] font-medium">{pageData.form.description}</p>
                </div>
              </div>

              <form className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pageData.form.fields.map((field: FormFieldData, idx: number) => {
                    const isFullWidth = field.type === 'textarea' || field.name === 'eventDate';
                    return (
                      <div key={idx} className={`${isFullWidth ? 'md:col-span-2' : ''}`}>
                        <label className="block text-[#0a1128] text-[13px] font-[700] mb-1.5 ml-1">
                          {field.label} <span className="text-red-500">*</span>
                        </label>
                        <div className="relative group">
                          {field.type !== 'textarea' && (
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors">
                              {iconMap[field.icon as keyof typeof iconMap]}
                            </div>
                          )}
                          
                          {field.type === 'select' ? (
                            <select className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-[10px] text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all appearance-none cursor-pointer">
                              <option value="" disabled selected>{field.placeholder}</option>
                              {field.options?.map((opt: string, i: number) => (
                                <option key={i} value={opt}>{opt}</option>
                              ))}
                            </select>
                          ) : field.type === 'textarea' ? (
                            <textarea 
                              placeholder={field.placeholder}
                              rows={3}
                              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-[10px] text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all resize-none"
                            ></textarea>
                          ) : (
                            <input 
                              type={field.type}
                              placeholder={field.placeholder}
                              className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-[10px] text-[14px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                            />
                          )}
                        </div>
                        {/* Textarea Bottom Right Pen */}
                        {field.type === 'textarea' && (
                          <div className="absolute bottom-4 right-4 pointer-events-none">
                            <PenLine className="w-4 h-4 text-gray-300" />
                          </div>
                        )}
                      </div>
                  );
                })}

                <div className="md:col-span-2 mt-2">
                  <button type="submit" className="w-full bg-gradient-to-r from-[#be29ab] via-[#be29ab] to-[#5129ea] text-white font-bold py-4 rounded-xl shadow-[0_10px_30px_rgba(168,85,247,0.3)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                    {pageData.form.submitText}
                    <span className="w-7 h-7 rounded-full border-2 border-white/80 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                  </button>
                </div>
                </div>
              </form>

              <div className="mt-3 flex items-center justify-center gap-2 text-gray-500 text-[13px] font-medium">
                <ShieldCheck className="w-4 h-4 text-gray-400" />
                <p>{pageData.form.footerText}</p>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
