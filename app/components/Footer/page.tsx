"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Globe, ChevronRight, Star } from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#01081a] text-gray-300 pt-20 pb-5">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_2.5fr_3.25fr_3.25fr] gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >

          {/* Company Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <Link href="/" className="inline-block mb-3 -ml-3 -mt-8">
              <img src="/images/footerlogo.png" alt="Eventora Logo" className="h-[60px] md:h-[80px] w-auto object-contain" />
            </Link>
            <p className="text-[14px] mb-4 text-[#9ca3af] leading-relaxed pr-4">
              Eventora crafts extraordinary events that create lasting memories. From concept to celebration, we bring your vision to life with creativity and precision.
            </p>
            <div className="w-8 h-[2px] bg-pink-600 mb-5"></div>

            <div className="space-y-3 text-[15px] text-[#9ca3af]">
              <div className="flex items-start gap-3 hover:text-pink-500 transition-colors cursor-pointer">
                <MapPin size={18} className="text-pink-500 shrink-0 mt-0.5" />
                <span className="leading-snug">123, Celebration Street,<br />Jaipur, Rajasthan 302001, India</span>
              </div>
              <div className="flex items-center gap-3 hover:text-pink-500 transition-colors cursor-pointer">
                <Phone size={18} className="text-pink-500 shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 hover:text-pink-500 transition-colors cursor-pointer">
                <Mail size={18} className="text-pink-500 shrink-0" />
                <span>hello@eventora.in</span>
              </div>
              <div className="flex items-center gap-3 hover:text-pink-500 transition-colors cursor-pointer">
                <Globe size={18} className="text-pink-500 shrink-0" />
                <span>www.eventora.in</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="lg:border-l lg:border-white/10 lg:pl-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <h4 className="text-white font-semibold text-[18px] md:text-[20px] tracking-wide uppercase mb-4 whitespace-nowrap">
              Quick Links
            </h4>
            <div className="w-12 h-[2px] bg-pink-600 mb-6"></div>

            <ul className="space-y-4 text-[15px] text-gray-300 font-normal">
              <li><Link href="/" className="hover:text-white transition-colors flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> About Us</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> Services</Link></li>
              <li><Link href="#gallery" className="hover:text-white transition-colors flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> Our Work</Link></li>
              <li><Link href="#blog" className="hover:text-white transition-colors flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> Blog</Link></li>
              <li><Link href="#testimonials" className="hover:text-white transition-colors flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> Testimonials</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="lg:border-l lg:border-white/10 lg:pl-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <h4 className="text-white font-semibold text-[18px] md:text-[20px] tracking-wide uppercase mb-4 whitespace-nowrap">
              Our Services
            </h4>
            <div className="w-12 h-[2px] bg-pink-600 mb-6"></div>

            <ul className="space-y-4 text-[15px] text-gray-300 font-normal">
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> Wedding Events</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> Corporate Events</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> Birthday Parties</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> Social Events</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> Exhibitions & Trade Shows</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> Conference & Seminars</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> Event Planning & Management</Link></li>
            </ul>
          </motion.div>

          {/* Newsletter & Socials */}
          <motion.div
            className="lg:border-l lg:border-white/10 lg:pl-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <h4 className="text-white font-semibold text-[18px] md:text-[20px] tracking-wide uppercase mb-4">
              Newsletter
            </h4>
            <div className="w-12 h-[2px] bg-pink-600 mb-6"></div>

            <p className="text-[13px] text-gray-300 font-normal mb-6 leading-relaxed">
              Subscribe to our newsletter and get the latest updates, tips & offers.
            </p>
            <div className="flex gap-3 mb-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-[#332b40] rounded text-white px-4 py-3 w-full focus:outline-none focus:border-pink-500 transition-colors text-[14px]"
              />
              <button className="bg-gradient-to-br from-pink-500 to-purple-600 rounded text-white px-4 py-3 hover:opacity-90 transition-opacity shrink-0 flex items-center justify-center">
                <Send size={18} className="transform rotate-45 -ml-1 -mb-1" />
              </button>
            </div>

            <h4 className="text-white font-semibold text-[18px] md:text-[20px] tracking-wide uppercase mb-4">
              Follow Us
            </h4>
            <div className="w-12 h-[2px] bg-pink-600 mb-6"></div>

            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-[#332b40] flex items-center justify-center text-white hover:bg-pink-600 hover:border-pink-600 transition-all"><FaFacebook size={16} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#332b40] flex items-center justify-center text-white hover:bg-pink-600 hover:border-pink-600 transition-all"><FaInstagram size={16} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#332b40] flex items-center justify-center text-white hover:bg-pink-600 hover:border-pink-600 transition-all"><FaLinkedin size={16} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#332b40] flex items-center justify-center text-white hover:bg-pink-600 hover:border-pink-600 transition-all"><FaYoutube size={16} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#332b40] flex items-center justify-center text-white hover:bg-pink-600 hover:border-pink-600 transition-all"><FaPinterest size={16} /></a>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 relative w-full">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-pink-500 to-purple-600"></div>
        <div className="container mx-auto px-4 md:px-8 pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[16px] text-gray-300">
            <div>
              &copy; 2024 <span className="text-pink-500">Eventora</span>. All Rights Reserved.
            </div>
            <div className="flex items-center flex-wrap justify-center">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-pink-500 mx-3">|</span>
              <Link href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
              <span className="text-pink-500 mx-3">|</span>
              <Link href="#" className="hover:text-white transition-colors">Refund Policy</Link>
              <span className="text-pink-500 mx-3">|</span>
              <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
