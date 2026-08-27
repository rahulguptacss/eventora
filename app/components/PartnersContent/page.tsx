"use client";

import { motion } from "framer-motion";
import Breadcrumb from "../Breadcrumb/page";
import data from "../../data/data.json";
import { PartnerData } from '../../types';


export default function PartnersContent() {
  const pageData = data.categories.Event.sections.Pages.variants.OurPartnersPage;
  const partnersContent = data.categories.Event.sections.PartnersContent.variants.EventPartnersContent1;
  const { subtitle, titleStart, titleCursive, tiers } = partnersContent;

  return (
    <div className="w-full">
      <Breadcrumb title={pageData.breadcrumbTitle} />
      
      {/* Header Area */}
      <div className="pt-8 pb-12 md:pt-12 md:pb-16 bg-[#fdfcff] relative overflow-hidden">
        {/* Decorative background elements */}
        {/* Blurry glow effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-100/60 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Dotted squares */}
        <div className="absolute top-10 left-4 md:left-12 w-24 h-24 opacity-60 pointer-events-none" style={{ backgroundImage: "radial-gradient(#d3b9e3 2px, transparent 2px)", backgroundSize: "16px 16px" }}></div>
        <div className="absolute top-10 right-4 md:right-12 w-24 h-24 opacity-60 pointer-events-none" style={{ backgroundImage: "radial-gradient(#d3b9e3 2px, transparent 2px)", backgroundSize: "16px 16px" }}></div>
        
        {/* Concentric circles bottom left */}
        <div className="absolute -bottom-[20%] -left-[15%] md:-left-[5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full border-[1px] border-pink-200/60 bg-gradient-to-tr from-pink-50/40 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-[10%] -left-[10%] md:-left-[2%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full border-[1px] border-pink-200/80 bg-gradient-to-tr from-pink-100/50 to-transparent pointer-events-none"></div>
        
        {/* Large arc on the right */}
        <div className="absolute top-[-10%] -right-[40%] md:-right-[20%] w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] rounded-full border-[1px] border-pink-200/50 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
          {/* Header Section */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block mb-1 md:mb-2"
            >
              <h4 className="font-bold tracking-[0.2em] text-[16px] md:text-[18px] uppercase flex items-center justify-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-[#8b2bc5] to-[#f41368]">
                {subtitle}
              </h4>
              <div className="flex items-center justify-center mt-2">
                <div className="w-12 h-[1.5px] bg-[#f41368]"></div>
                <div className="w-2.5 h-2.5 rotate-45 border-[2px] border-[#f41368] mx-2 rounded-[1px]"></div>
                <div className="w-12 h-[1.5px] bg-[#f41368]"></div>
              </div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-[#111827] leading-[1.1] mb-2 md:mb-4 font-poppins"
            >
              {titleStart}<br />
              <div className="relative inline-block mt-0 md:-mt-2 -top-2 md:-top-3">
                <span className="font-dancing text-transparent bg-clip-text bg-gradient-to-r from-[#f41368] to-[#8b2bc5] font-medium text-[48px] md:text-[72px] lg:text-[84px] leading-[1.2] tracking-wide inline-block py-2 px-2 -mx-2">
                  {titleCursive}
                </span>
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "55%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-0.5 md:-bottom-1 left-[22%] h-[3px] md:h-[4px] bg-gradient-to-r from-[#f41368] to-[#8b2bc5] rounded-[50%]"
                  style={{ transform: "rotate(-1deg)" }}
                ></motion.div>
              </div>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#4b5563] font-medium text-[15px] md:text-[17px] max-w-2xl mx-auto leading-relaxed"
            >
              {pageData.metaDesc}
            </motion.p>
          </div>
        </div>
      </div>

      <section className="py-8 md:py-12 bg-[#faf8fc]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
          {/* Tiers Grid */}
          <div className="flex flex-col gap-8 md:gap-10">
            {tiers.map((tierData: { tier: string, columns: string, partners: PartnerData[] }, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="w-full flex flex-col items-center"
              >
                {/* Tier Title */}
                <div className="mb-4 md:mb-6 flex flex-col items-center">
                  <h3 className="font-bold tracking-[0.15em] text-[16px] md:text-[18px] uppercase text-[#8b2bc5]">
                    {tierData.tier}
                  </h3>
                  <div className="flex items-center justify-center mt-1 md:mt-2">
                    <div className="w-12 h-[1.5px] bg-[#f41368]"></div>
                    <div className="w-3 h-3 rotate-45 border-[3px] border-[#f41368] mx-2 rounded-[1px]"></div>
                    <div className="w-12 h-[1.5px] bg-[#f41368]"></div>
                  </div>
                </div>

                {/* Partners Grid */}
                <div className={`grid ${tierData.columns} gap-4 w-full`}>
                  {tierData.partners.map((partner: PartnerData, pIdx: number) => {
                    return (
                      <motion.div
                        key={pIdx}
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)" }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-[10px] border border-gray-100 flex items-center justify-center h-[100px] md:h-[120px] shadow-sm hover:border-purple-100 group px-4"
                      >
                        {/* Scale down logos slightly to ensure they fit nicely inside the box */}
                        <div className="scale-[0.8] md:scale-90 lg:scale-100 transition-transform group-hover:scale-[1.05] md:group-hover:scale-[1.05]">
                          {partner.html ? (
                            <div dangerouslySetInnerHTML={{ __html: partner.html }} />
                          ) : (
                            <span className="font-bold text-xl">{partner.name}</span>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
