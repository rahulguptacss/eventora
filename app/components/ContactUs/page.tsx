"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Clock, ArrowRight, User, Calendar as CalendarIcon, Users, FileText, Edit2, PhoneCall } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import data from "../../data/data.json";
import { SocialLink } from '../../types';

export default function ContactUs() {
  const contactData = data.common.Footer.footerContact;
  const sectionData = data.categories.Event.sections.ContactUs.variants.EventContact1;

  return (
    <section className="pt-6 pb-12 md:pt-10 md:pb-20 bg-gray-50/50 font-sans">
      <div className="container mx-auto px-4 md:px-8 lg:px-10 max-w-[1200px]">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 flex flex-col items-center"
        >
          <h4 className="bg-gradient-to-r from-[#c20b92] to-[#6b21a8] text-transparent bg-clip-text font-extrabold tracking-[0.2em] text-[13px] md:text-[15px] uppercase mb-2">
            {sectionData.header.subtitle}
          </h4>

          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-16 h-[1.5px] bg-[#c20b92]"></span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0 L24 12 L12 24 L0 12 Z" fill="#c20b92" />
            </svg>
            <span className="w-16 h-[1.5px] bg-[#c20b92]"></span>
          </div>

          <h2 className="text-[36px] md:text-[46px] lg:text-[54px] font-bold text-[#0a071f] leading-[1.2] tracking-tight mb-2">
            {sectionData.header.title}
          </h2>

          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-16 h-[1.5px] bg-[#c20b92]"></span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0 L24 12 L12 24 L0 12 Z" fill="#c20b92" />
            </svg>
            <span className="w-16 h-[1.5px] bg-[#c20b92]"></span>
          </div>

          <p className="text-[#262755] text-[16px] md:text-[18px] leading-[1.8] max-w-2xl mx-auto font-medium whitespace-pre-line">
            {sectionData.header.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
          >
            <div className="flex flex-col items-center mb-5">
              <h3 className="bg-gradient-to-r from-[#c20b92] to-[#6b21a8] text-transparent bg-clip-text font-extrabold uppercase tracking-[0.2em] text-[13px] mb-2">{sectionData.contactInfo?.title}</h3>
              <span className="w-12 h-[2px] bg-gradient-to-r from-[#c20b92] to-[#6b21a8]"></span>
            </div>

            <div className="flex flex-col divide-y divide-gray-100/80">
              {/* Location */}
              <div className="flex gap-4 py-3.5 first:pt-0">
                <div className="w-14 h-14 rounded-full bg-[#fdf2f8] flex items-center justify-center flex-shrink-0 text-[#c20b92]">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-[#0a071f] text-[15px] mb-1">{sectionData.contactInfo?.locationLabel}</h4>
                  <p className="text-gray-600 text-[14px] whitespace-pre-line leading-relaxed">{contactData.location}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 py-3.5">
                <div className="w-14 h-14 rounded-full bg-[#fdf2f8] flex items-center justify-center flex-shrink-0 text-[#c20b92]">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-[#0a071f] text-[15px] mb-1">{sectionData.contactInfo?.phoneLabel}</h4>
                  <p className="text-gray-600 text-[14px]">{contactData.phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 py-3.5">
                <div className="w-14 h-14 rounded-full bg-[#fdf2f8] flex items-center justify-center flex-shrink-0 text-[#c20b92]">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-[#0a071f] text-[15px] mb-1">{sectionData.contactInfo?.emailLabel}</h4>
                  <p className="text-gray-600 text-[14px]">{contactData.email}</p>
                </div>
              </div>

              {/* Website */}
              <div className="flex gap-4 py-3.5">
                <div className="w-14 h-14 rounded-full bg-[#fdf2f8] flex items-center justify-center flex-shrink-0 text-[#c20b92]">
                  <Globe size={24} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-[#0a071f] text-[15px] mb-1">{sectionData.contactInfo?.websiteLabel}</h4>
                  <p className="text-gray-600 text-[14px]">{contactData.website}</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-4 py-3.5">
                <div className="w-14 h-14 rounded-full bg-[#fdf2f8] flex items-center justify-center flex-shrink-0 text-[#c20b92]">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-[#0a071f] text-[15px] mb-1">{sectionData.contactInfo?.workingHoursLabel}</h4>
                  {contactData.workingHours?.map((hour: string, index: number) => (
                    <p key={index} className={`text-gray-600 text-[14px] leading-tight ${index > 0 ? 'mt-1' : ''}`}>{hour}</p>
                  ))}
                </div>
              </div>

              {/* Follow Us */}
              <div className="flex gap-4 py-3.5 pb-2 last:pb-0">
                <div className="w-14 h-14 rounded-full bg-[#fdf2f8] flex items-center justify-center flex-shrink-0 text-[#c20b92]">
                  <PhoneCall size={24} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-[#0a071f] text-[15px] mb-2">{sectionData.contactInfo?.followUsLabel}</h4>
                  <div className="flex gap-3">
                    {contactData.socialLinks?.map((social: SocialLink, index: number) => (
                      <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-[#fdf2f8] text-[#c20b92] flex items-center justify-center hover:bg-[#c20b92] hover:text-white transition-colors">
                        {social.platform === 'facebook' && <FaFacebook size={12} />}
                        {social.platform === 'instagram' && <FaInstagram size={12} />}
                        {social.platform === 'linkedin' && <FaLinkedin size={12} />}
                        {social.platform === 'twitter' && <FaTwitter size={12} />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
          >
            <div className="flex flex-col items-center mb-8">
              <h3 className="bg-gradient-to-r from-[#c20b92] to-[#6b21a8] text-transparent bg-clip-text font-extrabold uppercase tracking-[0.2em] text-[13px] mb-2">{contactData.contactForm.title}</h3>
              <span className="w-12 h-[2px] bg-gradient-to-r from-[#c20b92] to-[#6b21a8]"></span>
            </div>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <User size={18} />
                  </div>
                  <input type="text" placeholder={contactData.contactForm.namePlaceholder} className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#c20b92] focus:ring-1 focus:ring-[#c20b92] transition-all text-sm placeholder-gray-400" required />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input type="email" placeholder={contactData.contactForm.emailPlaceholder} className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#c20b92] focus:ring-1 focus:ring-[#c20b92] transition-all text-sm placeholder-gray-400" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Phone size={18} />
                  </div>
                  <input
                    type="tel"
                    placeholder={contactData.contactForm.phonePlaceholder}
                    className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#c20b92] focus:ring-1 focus:ring-[#c20b92] transition-all text-sm placeholder-gray-400"
                    required
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                    }}
                  />
                </div>
                <div className="relative">
                  <select defaultValue="" className="w-full pl-4 pr-10 py-3.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#c20b92] focus:ring-1 focus:ring-[#c20b92] transition-all text-sm text-gray-500 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[length:12px_12px] bg-[right_16px_center]">
                    <option value="" disabled>{contactData.contactForm.eventTypePlaceholder}</option>
                    {contactData.contactForm.eventOptions?.map((opt: { value: string, label: string }, index: number) => (
                      <option key={index} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <CalendarIcon size={18} />
                  </div>
                  <input type="date" placeholder={contactData.contactForm.datePlaceholder} className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#c20b92] focus:ring-1 focus:ring-[#c20b92] transition-all text-sm text-gray-500 placeholder-gray-400" required />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Users size={18} />
                  </div>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder={contactData.contactForm.guestPlaceholder}
                    className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#c20b92] focus:ring-1 focus:ring-[#c20b92] transition-all text-sm placeholder-gray-400"
                    required
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                    }}
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <FileText size={18} />
                </div>
                <input type="text" placeholder={contactData.contactForm.subjectPlaceholder} className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#c20b92] focus:ring-1 focus:ring-[#c20b92] transition-all text-sm placeholder-gray-400" />
              </div>

              <div className="relative">
                <div className="absolute top-4 left-0 pl-4 pointer-events-none text-gray-400">
                  <Edit2 size={18} />
                </div>
                <textarea rows={6} placeholder={contactData.contactForm.messagePlaceholder} className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#c20b92] focus:ring-1 focus:ring-[#c20b92] transition-all text-sm placeholder-gray-400 resize-none"></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-[#c20b92] to-[#5129ea] text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 hover:shadow-lg shadow-pink-500/25 cursor-pointer"
              >
                {contactData.contactForm.buttonText} <ArrowRight size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full h-[400px] rounded-2xl overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
        >
          {/* Static map iframe */}
          <div className="absolute inset-0 bg-gray-200">
            <iframe src={sectionData.map.src} className="w-full h-full border-0" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 bg-white p-8 rounded-2xl shadow-xl max-w-[320px] z-10 hidden md:block border border-gray-50">
            <h4 className="text-[#c20b92] font-bold text-[17px] mb-2">{sectionData.map.title}</h4>
            <span className="block w-10 h-[2px] bg-gradient-to-r from-[#c20b92] to-[#6b21a8] mb-6"></span>
            <p className="text-[15px] text-[#0a071f] font-medium leading-relaxed mb-6 whitespace-pre-line">{contactData.location}</p>
            <a href={sectionData.map.linkUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[14px] text-[#9333ea] font-bold hover:gap-3 transition-all">
              {sectionData.map.linkText} <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
