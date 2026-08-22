"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Globe, ChevronRight } from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaPinterest, FaTwitter } from "react-icons/fa";
import data from "../../data/data.json";

export default function Footer() {
  const footerData = data.common.Footer;
  const socialLinks = data.categories.Event.sections.Topbar.variants.EventTopbar1.socialLinks;

  const getSocialIcon = (label: string) => {
    switch(label.toLowerCase()) {
      case 'facebook': return <FaFacebook size={16} />;
      case 'instagram': return <FaInstagram size={16} />;
      case 'linkedin': return <FaLinkedin size={16} />;
      case 'youtube': return <FaYoutube size={16} />;
      case 'pinterest': return <FaPinterest size={16} />;
      case 'twitter': return <FaTwitter size={16} />;
      default: return null;
    }
  };

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
              {footerData.logoImage ? (
                <img src={footerData.logoImage} alt={footerData.logoImageTitle} className="h-[60px] md:h-[80px] w-auto object-contain" />
              ) : (
                <span className="text-2xl font-extrabold text-white tracking-tight ml-3">{footerData.logoImageTitle}</span>
              )}
            </Link>
            <p className="text-[14px] mb-4 text-[#9ca3af] leading-relaxed pr-4">
              {footerData.desc}
            </p>
            <div className="w-8 h-[2px] bg-pink-600 mb-5"></div>

            <div className="space-y-3 text-[15px] text-[#9ca3af]">
              {footerData.footerContact.location && (
                <div className="flex items-start gap-3 hover:text-pink-500 transition-colors cursor-pointer">
                  <MapPin size={18} className="text-pink-500 shrink-0 mt-0.5" />
                  <span className="leading-snug whitespace-pre-line">{footerData.footerContact.location}</span>
                </div>
              )}
              {footerData.footerContact.phone && (
                <div className="flex items-center gap-3 hover:text-pink-500 transition-colors cursor-pointer">
                  <Phone size={18} className="text-pink-500 shrink-0" />
                  <span>{footerData.footerContact.phone}</span>
                </div>
              )}
              {footerData.footerContact.email && (
                <div className="flex items-center gap-3 hover:text-pink-500 transition-colors cursor-pointer">
                  <Mail size={18} className="text-pink-500 shrink-0" />
                  <span>{footerData.footerContact.email}</span>
                </div>
              )}
              {footerData.footerContact.website && (
                <div className="flex items-center gap-3 hover:text-pink-500 transition-colors cursor-pointer">
                  <Globe size={18} className="text-pink-500 shrink-0" />
                  <span>{footerData.footerContact.website}</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Column 1 */}
          {footerData.footerColumns && footerData.footerColumns.length > 0 && (
            <motion.div
              className="lg:border-l lg:border-white/10 lg:pl-8"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <h4 className="text-white font-semibold text-[18px] md:text-[20px] tracking-wide uppercase mb-4 whitespace-nowrap">
                {footerData.footerColumns[0].title}
              </h4>
              <div className="w-12 h-[2px] bg-pink-600 mb-6"></div>

              <ul className="space-y-4 text-[15px] text-gray-300 font-normal">
                {footerData.footerColumns[0].links.map((link, idx) => (
                  <li key={idx}><Link href={link.href} className="hover:text-white transition-colors flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> {link.label}</Link></li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Column 2 */}
          {footerData.footerColumns && footerData.footerColumns.length > 1 && (
            <motion.div
              className="lg:border-l lg:border-white/10 lg:pl-8"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <h4 className="text-white font-semibold text-[18px] md:text-[20px] tracking-wide uppercase mb-4 whitespace-nowrap">
                {footerData.footerColumns[1].title}
              </h4>
              <div className="w-12 h-[2px] bg-pink-600 mb-6"></div>

              <ul className="space-y-4 text-[15px] text-gray-300 font-normal">
                {footerData.footerColumns[1].links.map((link, idx) => (
                  <li key={idx}><Link href={link.href} className="hover:text-white transition-colors flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> {link.label}</Link></li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Newsletter & Socials */}
          <motion.div
            className="lg:border-l lg:border-white/10 lg:pl-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <h4 className="text-white font-semibold text-[18px] md:text-[20px] tracking-wide uppercase mb-4">
              {footerData.newsletter?.title || "Newsletter"}
            </h4>
            <div className="w-12 h-[2px] bg-pink-600 mb-6"></div>

            <p className="text-[13px] text-gray-300 font-normal mb-6 leading-relaxed">
              {footerData.newsletter?.desc || "Subscribe to our newsletter and get the latest updates, tips & offers."}
            </p>
            <div className="flex gap-3 mb-10">
              <input
                type="email"
                placeholder={footerData.newsletter?.placeholder || "Enter your email"}
                className="bg-transparent border border-[#332b40] rounded text-white px-4 py-3 w-full focus:outline-none focus:border-pink-500 transition-colors text-[14px]"
              />
              <button className="bg-gradient-to-br from-pink-500 to-purple-600 rounded text-white px-4 py-3 hover:opacity-90 transition-opacity shrink-0 flex items-center justify-center">
                <Send size={18} className="transform rotate-45 -ml-1 -mb-1" />
              </button>
            </div>

            <h4 className="text-white font-semibold text-[18px] md:text-[20px] tracking-wide uppercase mb-4">
              {footerData.followUsTitle || "Follow Us"}
            </h4>
            <div className="w-12 h-[2px] bg-pink-600 mb-6"></div>

            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.href} className="w-10 h-10 rounded-full border border-[#332b40] flex items-center justify-center text-white hover:bg-pink-600 hover:border-pink-600 transition-all">
                  {getSocialIcon(social.label)}
                </a>
              ))}
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
              {footerData.copyrightText}
            </div>
            <div className="flex items-center flex-wrap justify-center">
              {footerData.footerLegalLinks.map((link, idx) => (
                <React.Fragment key={idx}>
                  <Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                  {idx < footerData.footerLegalLinks.length - 1 && <span className="text-pink-500 mx-3">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
