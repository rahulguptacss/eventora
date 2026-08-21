"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Topbar() {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="w-full h-10 md:h-[50px] relative z-50 text-white text-xs md:text-[14px] overflow-hidden"
      style={{
        background: "linear-gradient(to right, #1d0943 0%, #3e0b4a 40%, #7d0d52 65%, #d1135c 100%)"
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-center md:justify-between items-center h-full">
        {/* Contact Info (Left) */}
        <div className="flex items-center gap-4 md:gap-6 z-10">
          <motion.div variants={itemVariants} className="hidden md:flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer group">
            <MapPin size={15} className="text-white" />
            <span className="font-medium">1356 Broadway, New York</span>
          </motion.div>
          
          <span className="hidden md:inline text-white/40">|</span>
          
          <motion.div variants={itemVariants} className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer group">
            <Phone size={15} className="text-white" />
            <span className="font-medium">(10) 1234567890</span>
          </motion.div>
          
          <span className="hidden md:inline text-white/40">|</span>
          
          <motion.div variants={itemVariants} className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer group">
            <Mail size={15} className="text-white" />
            <span className="font-medium">info@example.com</span>
          </motion.div>
        </div>

        {/* Right Socials */}
        <div className="hidden md:flex gap-5 z-10 pr-2">
          <motion.a variants={itemVariants} href="#" className="text-white hover:scale-125 transition-transform"><FaFacebookF size={15} /></motion.a>
          <motion.a variants={itemVariants} href="#" className="text-white hover:scale-125 transition-transform"><FaInstagram size={15} /></motion.a>
          <motion.a variants={itemVariants} href="#" className="text-white hover:scale-125 transition-transform"><FaLinkedinIn size={15} /></motion.a>
          <motion.a variants={itemVariants} href="#" className="text-white hover:scale-125 transition-transform"><FaTwitter size={15} /></motion.a>
          <motion.a variants={itemVariants} href="#" className="text-white hover:scale-125 transition-transform"><FaWhatsapp size={15} /></motion.a>
        </div>
      </div>
    </motion.div>
  );
}
