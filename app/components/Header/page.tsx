"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Topbar from "../Topbar/page";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import data from "../../data/data.json";
import { MenuItem } from '../../types';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const headerData = data.categories.Event.sections.Header.variants.EventHeader1;
  const logoImage = headerData.logoImage;

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
        <Link href="/" className="flex items-center gap-2">
          {logoImage && logoImage !== "" ? (
            <div className="flex items-center gap-2">
              <img src={logoImage} alt={headerData.logo || "Logo"} className="h-[50px] md:h-[65px] w-auto object-contain" />
            </div>
          ) : (
            <span className="text-2xl font-extrabold text-[#140830] tracking-tight">{headerData.logo}</span>
          )}
        </Link>

        {/* Navigation Links - Desktop */}
        <ul className="hidden lg:flex items-center gap-7 text-[15px] font-[600] text-[#140830]">
          {headerData.menu.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <li key={index} className="relative group">
                <Link 
                  href={item.href} 
                  className={isActive ? "bg-gradient-to-r from-[#be29ab] to-[#5129ea] text-white px-7 py-3 rounded-full" : "hover:text-[#d1135c] transition-colors"}
                >
                  {item.label.toUpperCase()}
                </Link>
                {item.subItems && (
                  <div className="absolute left-0 top-full pt-4 w-48 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-50">
                    <ul className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl py-2">
                      {item.subItems.map((subItem: MenuItem, subIndex: number) => (
                        <li key={subIndex}>
                          <Link href={subItem.href} className="block px-5 py-2.5 hover:text-[#d1135c] hover:bg-gray-50 text-[#140830] transition-colors">
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          {/* Get A Quote Button - Desktop */}
          {headerData.buttons && headerData.buttons.length > 0 && (
            <Link href={headerData.buttons[0].href} className="hidden md:flex items-center gap-3 bg-gradient-to-r from-[#be29ab] via-[#be29ab] to-[#5129ea] text-white px-8 py-3 rounded-full font-bold text-[16px] hover:shadow-lg hover:shadow-pink-500/30 transition-all cursor-pointer">
              {headerData.buttons[0].label}
              <span className="w-7 h-7 rounded-full border-2 border-white/80 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>
          )}

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden p-2 focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="url(#close_gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="close_gradient" x1="6" y1="6" x2="18" y2="18" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6a11cb"/>
                    <stop offset="1" stopColor="#ff0f7b"/>
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="url(#menu_gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="menu_gradient" x1="4" y1="12" x2="20" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ff0f7b"/>
                    <stop offset="1" stopColor="#6a11cb"/>
                  </linearGradient>
                </defs>
              </svg>
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 z-40 bg-white pt-[140px] px-8 overflow-y-auto pb-8"
          >
            <ul className="flex flex-col text-[18px] font-[600] text-[#140830]">
            {headerData.menu.map((item, index) => {
              const isActive = pathname === item.href;
              const hasSubmenu = !!item.subItems;
              const isSubmenuOpen = openSubmenuIndex === index;
              
              return (
                <li key={index} className="flex flex-col py-4 border-b border-gray-50 last:border-0">
                  <div className="flex items-center justify-between w-full">
                    <Link 
                      href={item.href} 
                      onClick={() => !hasSubmenu && setIsMobileMenuOpen(false)} 
                      className={`${isActive ? "text-[#d1135c]" : "hover:text-[#d1135c]"} transition-colors uppercase`}
                    >
                      {item.label}
                    </Link>
                    {hasSubmenu && (
                      <button 
                        onClick={() => setOpenSubmenuIndex(isSubmenuOpen ? null : index)}
                        className="p-2 text-gray-500 hover:text-[#d1135c] transition-colors flex items-center justify-center"
                      >
                        {isSubmenuOpen ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                        )}
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {hasSubmenu && isSubmenuOpen && (
                      <motion.ul 
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex flex-col gap-4 pl-4 overflow-hidden"
                      >
                        {item.subItems.map((subItem: MenuItem, subIndex: number) => (
                          <li key={subIndex}>
                            <Link 
                              href={subItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={pathname === subItem.href ? "text-[#d1135c] text-[16px] font-[600]" : "text-[16px] font-[600] text-gray-600 hover:text-[#d1135c] transition-colors"}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
            
            {headerData.buttons && headerData.buttons.length > 0 && (
              <li className="pt-8">
                <Link href={headerData.buttons[0].href} onClick={() => setIsMobileMenuOpen(false)} className="w-full flex justify-center items-center gap-3 bg-gradient-to-r from-[#be29ab] via-[#be29ab] to-[#5129ea] text-white px-8 py-3.5 rounded-full font-bold text-[15px]">
                  {headerData.buttons[0].label}
                  <span className="w-6 h-6 rounded-full border-2 border-white/80 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </Link>
              </li>
            )}
          </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

