"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RefreshCw, X } from "lucide-react";
import data from "../../data/data.json";
import { GalleryItem } from '../../types';

export default function Gallery() {
  const galleryData = data.categories.Event.sections.Gallery.variants.EventGallery1;
  const [photoTab, setPhotoTab] = useState("All Events");
  const [videoTab, setVideoTab] = useState("All Events");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredPhotos = photoTab === "All Events" 
    ? galleryData.photo.images 
    : galleryData.photo.images.filter((img: GalleryItem) => img.category === photoTab);

  const filteredVideos = videoTab === "All Events" 
    ? galleryData.video.videos 
    : galleryData.video.videos.filter((vid: GalleryItem) => vid.category === videoTab);

  return (
    <div className="font-sans">
      {/* Photo Gallery Section */}
      <section className="pt-8 pb-10 md:pt-10 md:pb-12 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-10 max-w-[1200px]">
          <div className="text-center mx-auto mb-10 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center mb-0">
              <h4 className="text-[#be29ab] font-extrabold tracking-[0.25em] text-[16px] sm:text-[18px] uppercase mb-0.5">
                {galleryData.photo.subtitle}
              </h4>
              <div className="flex items-center gap-1 mt-0">
                <span className="w-8 h-[2px] bg-gradient-to-r from-[#be29ab] to-[#5129ea] inline-block rounded-full"></span>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#be29ab]">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/>
                </svg>
              </div>
            </div>

            <h2 className="text-[42px] sm:text-[52px] lg:text-[64px] font-extrabold text-[#0b1021] mb-3 leading-[1.05] tracking-[-0.02em] flex flex-col justify-center items-center mt-1">
              <span>{galleryData.photo.titleStart}</span>
              <span className="relative inline-block mt-0">
                <span className="font-dancing text-[56px] sm:text-[68px] lg:text-[88px] text-transparent bg-clip-text bg-gradient-to-r from-[#be29ab] to-[#5129ea] px-3 pb-2 leading-none font-bold">
                  {galleryData.photo.titleCursive}
                </span>
                <svg className="absolute bottom-0 left-[31%] w-[38%] h-[12px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M2,13 Q50,22 98,6" fill="none" stroke="url(#grad_gallery_photo)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="grad_gallery_photo" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#be29ab" />
                      <stop offset="100%" stopColor="#5129ea" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
          </div>

          {/* Photo Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {galleryData.photo.tabs.map((tab: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setPhotoTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  photoTab === tab
                    ? "bg-[#6b21a8] text-white shadow-lg shadow-purple-500/30"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#6b21a8] hover:text-[#6b21a8]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredPhotos.map((photo: GalleryItem) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(photo.src || '')}
                  className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm"
                >
                  <Image
                    src={photo.src || ''}
                    alt={photo.category || ''}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold tracking-wider">{photo.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <div className="text-center mt-12">
             <button className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#6b21a8] text-[#6b21a8] text-sm font-bold rounded-full hover:bg-[#6b21a8] hover:text-white transition-all">
               {galleryData.photo.loadMoreBtn} <RefreshCw size={16} />
             </button>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="pt-8 pb-10 md:pt-10 md:pb-12 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-8 lg:px-10 max-w-[1200px]">
          <div className="text-center mx-auto mb-10 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center mb-0">
              <h4 className="text-[#be29ab] font-extrabold tracking-[0.25em] text-[16px] sm:text-[18px] uppercase mb-0.5">
                {galleryData.video.subtitle}
              </h4>
              <div className="flex items-center gap-1 mt-0">
                <span className="w-8 h-[2px] bg-gradient-to-r from-[#be29ab] to-[#5129ea] inline-block rounded-full"></span>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#be29ab]">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/>
                </svg>
              </div>
            </div>

            <h2 className="text-[42px] sm:text-[52px] lg:text-[64px] font-extrabold text-[#0b1021] mb-3 leading-[1.05] tracking-[-0.02em] flex flex-col justify-center items-center mt-1">
              <span>{galleryData.video.titleStart}</span>
              <span className="relative inline-block mt-0">
                <span className="font-dancing text-[56px] sm:text-[68px] lg:text-[88px] text-transparent bg-clip-text bg-gradient-to-r from-[#be29ab] to-[#5129ea] px-3 pb-2 leading-none font-bold">
                  {galleryData.video.titleCursive}
                </span>
                <svg className="absolute bottom-0 left-[31%] w-[38%] h-[12px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M2,13 Q50,22 98,6" fill="none" stroke="url(#grad_gallery_video)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="grad_gallery_video" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#be29ab" />
                      <stop offset="100%" stopColor="#5129ea" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
          </div>

          {/* Video Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {galleryData.video.tabs.map((tab: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setVideoTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  videoTab === tab
                    ? "bg-[#6b21a8] text-white shadow-lg shadow-purple-500/30"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#6b21a8] hover:text-[#6b21a8]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredVideos.map((video: GalleryItem) => (
                <motion.div
                  key={video.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedVideo(video.videoSrc || '')}
                  className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm"
                >
                  <Image
                    src={video.src || ''}
                    alt={video.category || ''}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center text-white backdrop-blur-sm bg-white/20 group-hover:bg-[#c20b92] group-hover:border-[#c20b92] group-hover:scale-110 transition-all duration-300">
                      <Play size={20} className="ml-1" fill="currentColor" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <div className="text-center mt-12">
             <button className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#6b21a8] text-[#6b21a8] text-sm font-bold rounded-full hover:bg-[#6b21a8] hover:text-white transition-all">
               {galleryData.video.loadMoreBtn} <RefreshCw size={16} />
             </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-[#c20b92] text-white rounded-full transition-colors backdrop-blur-md"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={20} />
              </button>
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh] outline-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl h-[85vh] bg-transparent rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-0 right-0 z-10 p-2 bg-black/50 hover:bg-[#c20b92] text-white rounded-full transition-colors backdrop-blur-md"
                onClick={() => setSelectedImage(null)}
              >
                <X size={20} />
              </button>
              <Image
                src={selectedImage}
                alt="Enlarged Gallery Image"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
