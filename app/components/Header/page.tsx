"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Topbar from "../Topbar/page";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Topbar />

      {/* Main Navbar */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white py-4 px-4 md:px-8 flex justify-between items-center shadow-sm sticky top-0 z-50 w-full transition-all duration-300"
      >
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Eventora Logo" width={300} height={80} className="h-[50px] md:h-[65px] w-auto object-contain" />
        </Link>

        {/* Navigation Links - Desktop */}
        <ul className="hidden lg:flex items-center gap-7 text-[15px] font-bold text-[#140830]">
          <li><Link href="/" className="bg-gradient-to-r from-[#be29ab] to-[#5129ea] text-white px-7 py-3 rounded-full">HOME</Link></li>
          <li><Link href="#about" className="hover:text-[#d1135c] transition-colors">ABOUT</Link></li>
          <li><Link href="#services" className="hover:text-[#d1135c] transition-colors">SERVICES</Link></li>
          <li><Link href="#events" className="hover:text-[#d1135c] transition-colors">EVENTS</Link></li>
          <li><Link href="#gallery" className="hover:text-[#d1135c] transition-colors">GALLERY</Link></li>
          <li><Link href="#faq" className="hover:text-[#d1135c] transition-colors">FAQ</Link></li>
          <li><Link href="#blog" className="hover:text-[#d1135c] transition-colors">BLOG</Link></li>
          <li><Link href="#contact" className="hover:text-[#d1135c] transition-colors">CONTACT</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Get A Quote Button - Desktop */}
          <button className="hidden md:flex items-center gap-3 bg-gradient-to-r from-[#be29ab] via-[#be29ab] to-[#5129ea] text-white px-8 py-3 rounded-full font-bold text-[16px] hover:shadow-lg hover:shadow-pink-500/30 transition-all cursor-pointer">
            Get A Quote
            <span className="w-7 h-7 rounded-full border-2 border-white/80 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden text-[#140830] p-2 focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white pt-[120px] px-6 overflow-y-auto pb-8">
          <ul className="flex flex-col gap-6 text-[18px] font-bold text-[#140830]">
            <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[#d1135c]">HOME</Link></li>
            <li><Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link></li>
            <li><Link href="#services" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</Link></li>
            <li><Link href="#events" onClick={() => setIsMobileMenuOpen(false)}>EVENTS</Link></li>
            <li><Link href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>GALLERY</Link></li>
            <li><Link href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link></li>
            <li><Link href="#blog" onClick={() => setIsMobileMenuOpen(false)}>BLOG</Link></li>
            <li><Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link></li>
            <li className="pt-4">
              <button className="w-full flex justify-center items-center gap-3 bg-gradient-to-r from-[#be29ab] via-[#be29ab] to-[#5129ea] text-white px-8 py-4 rounded-full font-bold text-[16px]">
                Get A Quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
