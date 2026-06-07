'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const ShowcaseVideo = () => {
  const { language } = useLanguage();

  return (
    <section id="showcase-video" className="py-24 bg-gradient-to-b from-white via-emerald-50/10 to-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-teal-100/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-100/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            🎬 {language === 'bn' ? 'বাস্তব ব্যবহার' : 'GoruSheba in Action'}
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight ${language === 'bn' ? 'font-bengali' : ''}`}>
            {language === 'bn' ? 'অ্যাপটির লাইভ ভিডিও প্রদর্শন' : 'Watch How it Works'}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
            {language === 'bn'
              ? 'আমাদের এআই প্রযুক্তির ব্যবহার ও গরুর খামার ব্যবস্থাপনার বাস্তব অভিজ্ঞতা সরাসরি শর্টস ভিডিওতে দেখে নিন।'
              : 'See our smart weights scanning and geofencing technology in action on real farms.'}
          </p>
        </div>

        {/* Video & Description Flex Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          
          {/* Left Block: Portrait Phone frame with YouTube shorts iframe */}
          <div className="relative flex-shrink-0">
            {/* Glowing neon ring backdrop */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-[38px] opacity-20 blur-xl pointer-events-none"></div>

            {/* Smartphone frame container */}
            <div className="relative mx-auto w-[290px] sm:w-[310px] aspect-[9/16] bg-slate-900 rounded-[38px] p-2.5 shadow-2xl border-[5px] border-slate-800 ring-4 ring-slate-700/50 overflow-hidden flex flex-col justify-between">
              
              {/* Camera notch */}
              <div className="absolute top-0 inset-x-0 h-5 flex justify-center z-20">
                <div className="w-24 h-3 bg-slate-900 rounded-b-lg flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                </div>
              </div>

              {/* YouTube Shorts Iframe Embed */}
              <div className="w-full h-full rounded-[28px] overflow-hidden bg-slate-950 relative">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/etQd0J9m2SE?rel=0&modestbranding=1&playsinline=1"
                  title="GoruSheba YouTube Shorts Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

            </div>
          </div>

          {/* Right Block: Dynamic Text description list */}
          <div className="flex-1 space-y-6 max-w-md text-center lg:text-left flex flex-col justify-center">
            
            {/* Playstore Badge at the very top */}
            <div className="flex justify-center lg:justify-start pt-1">
              <a 
                href="https://play.google.com/store/apps/details?id=com.appibrium.gorusheba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-105 active:scale-95 transition-all duration-305 inline-block shadow-md hover:shadow-lg rounded-xl overflow-hidden"
              >
                <Image 
                  src="/Gorusheba_Playstore.webp" 
                  alt="Get it on Google Play" 
                  width={180}
                  height={54}
                  className="h-14 w-auto"
                />
              </a>
            </div>

            <h3 className={`text-2xl font-black text-gray-900 mt-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {language === 'bn' ? 'কৃষকদের জন্য সহজ ডিজিটাল সমাধান' : 'Simplified Digital Farming'}
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-start text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold flex-shrink-0 border border-emerald-150">
                  📱
                </div>
                <div>
                  <h4 className={`text-sm font-bold text-gray-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'স্মার্টফোন দিয়ে সহজে ব্যবহারযোগ্য' : 'Easy Smartphone Control'}
                  </h4>
                  <p className={`text-xs text-gray-500 mt-0.5 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn'
                      ? 'অতিরিক্ত কোনো ট্রেইনিং ছাড়াই যেকোনো খামারি সহজে অ্যাপটি দিয়ে পুরো খামার পরিচালনা করতে পারবেন।'
                      : 'Any farmer can control weights scanning and cattle profiles without professional training.'}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start text-left">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 font-bold flex-shrink-0 border border-teal-150">
                  ⚡
                </div>
                <div>
                  <h4 className={`text-sm font-bold text-gray-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'তাৎক্ষণিক এআই ওজন ফলাফল' : 'Real-time AI Calculations'}
                  </h4>
                  <p className={`text-xs text-gray-555 mt-0.5 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn'
                      ? '১০ সেকেন্ডের কম সময়ে গরুর এআই ওজন ও স্বাস্থ্য রিপোর্ট মোবাইল স্ক্রিনে সরাসরি চলে আসে।'
                      : 'Cattle weight and diagnostic updates load directly onto your mobile dashboard in under 10 seconds.'}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start text-left">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-700 font-bold flex-shrink-0 border border-indigo-150">
                  🔔
                </div>
                <div>
                  <h4 className={`text-sm font-bold text-gray-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? '২৪/৭ নিরাপদ সীমানা নোটিফিকেশন' : '24/7 Security & Health Alerts'}
                  </h4>
                  <p className={`text-xs text-gray-555 mt-0.5 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn'
                      ? 'ভার্চুয়াল সীমানা অতিক্রম করলে মোবাইলে রিয়েল-টাইমে নোটিফিকেশন এলার্ট পাঠানো হয়।'
                      : 'Get push notification warnings the moment your cattle cross the virtual fencing coordinates.'}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ShowcaseVideo;
