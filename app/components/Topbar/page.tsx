"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import data from "../../data/data.json";

export default function Topbar() {
  const topbarData = data.categories.Event.sections.Topbar.variants.EventTopbar1;

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

  const getIcon = (label: string) => {
    switch(label.toLowerCase()) {
      case 'facebook': return <FaFacebookF size={15} />;
      case 'instagram': return <FaInstagram size={15} />;
      case 'linkedin': return <FaLinkedinIn size={15} />;
      case 'twitter': return <FaTwitter size={15} />;
      case 'whatsapp': return <FaWhatsapp size={15} />;
      default: return null;
    }
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
          {topbarData.location && (
            <motion.div variants={itemVariants} className="hidden md:flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer group">
              <MapPin size={15} className="text-white" />
              <span className="font-medium">{topbarData.location}</span>
            </motion.div>
          )}
          
          {topbarData.location && topbarData.phone && <span className="hidden md:inline text-white/40">|</span>}
          
          {topbarData.phone && (
            <motion.div variants={itemVariants} className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer group">
              <Phone size={15} className="text-white" />
              <span className="font-medium">{topbarData.phone}</span>
            </motion.div>
          )}
          
          {topbarData.phone && topbarData.email && <span className="hidden md:inline text-white/40">|</span>}
          
          {topbarData.email && (
            <motion.div variants={itemVariants} className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer group">
              <Mail size={15} className="text-white" />
              <span className="font-medium">{topbarData.email}</span>
            </motion.div>
          )}
        </div>

        {/* Right Socials */}
        <div className="hidden md:flex gap-5 z-10 pr-2">
          {topbarData.socialLinks.map((social, index) => (
            <motion.a 
              key={index}
              variants={itemVariants} 
              href={social.href} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-125 transition-transform"
            >
              {getIcon(social.label)}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
