'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const Hero = () => {
  const { language } = useLanguage();

  return (
    <section id="home" className="relative pt-28 pb-20 md:py-32 overflow-hidden bg-gradient-to-br from-green-50/60 via-white to-emerald-50/40">
      {/* Decorative background grid and glowing circles */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-60"></div>
      <div className="absolute top-1/4 -left-48 w-[40rem] h-[40rem] bg-emerald-200/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -top-20 -right-48 w-[35rem] h-[35rem] bg-teal-200/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-semibold tracking-wide animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              {language === 'bn' ? 'আইওটি ও এআই প্রযুক্তি' : 'IoT & AI Smart Agriculture'}
            </div>
            
            <div className="space-y-6">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                {language === 'bn' ? (
                  <>
                    গরুসেবা: গবাদি পশু <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">ব্যবস্থাপনার ভবিষ্যত</span>
                  </>
                ) : (
                  <>
                    GoruSheba: The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Future of Cattle</span> Management
                  </>
                )}
              </h1>
              
              <p className={`text-lg sm:text-xl text-gray-650 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${language === 'bn' ? 'font-bengali' : ''}`}>
                {language === 'bn' 
                  ? 'আইওটি এবং কৃত্রিম বুদ্ধিমত্তা দিয়ে আপনার খামারকে ডিজিটাল করুন। স্মার্ট সেন্সর, রিয়েল-টাইম ডেটা এবং এআই বিশ্লেষণ দিয়ে আপনার গবাদি পশু সহজে পর্যবেক্ষণ করুন।' 
                  : 'Digitize your farm with IoT and artificial intelligence. Manage, track, and optimize your cattle operations with smart sensors, real-time analytics, and automatic alerts.'}
              </p>
            </div>

            {/* CTA & Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="https://play.google.com/store/apps/details?id=com.appibrium.gorusheba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex justify-center hover:scale-[1.06] active:scale-95 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.35)] border-2 border-emerald-500/50 rounded-2xl overflow-hidden hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] ring-4 ring-emerald-500/20"
              >
                <Image 
                  src="/Gorusheba_Playstore.webp" 
                  alt="Get it on Google Play" 
                  width={180}
                  height={54}
                  className="h-14 w-auto"
                  priority
                />
              </a>

              <a 
                href="#sandbox" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-[13.5px] bg-white hover:bg-gray-50 border border-gray-250 text-gray-700 font-bold rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 text-center cursor-pointer gap-2 text-sm"
              >
                🚜 {language === 'bn' ? 'সিমুলেশন পরখ করুন' : 'Try Live Simulator'}
              </a>
            </div>

            {/* Trust Indicator / Simple Stats Row */}
            <div className="pt-6 border-t border-gray-100 flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-100/70 flex items-center justify-center text-emerald-700 font-bold text-xl">
                  🚜
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 leading-none">QR</div>
                  <div className={`text-xs text-gray-500 font-medium ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'ডিজিটাল প্রোফাইল' : 'Digital Profiles'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-teal-100/70 flex items-center justify-center text-teal-700 font-bold text-xl">
                  🐄
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 leading-none">AI</div>
                  <div className={`text-xs text-gray-500 font-medium ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'সহায়ক টুল' : 'Farm tools'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-100/70 flex items-center justify-center text-indigo-700 font-bold text-xl">
                  ⚡
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 leading-none">DEMO</div>
                  <div className={`text-xs text-gray-500 font-medium ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'নমুনা মোড' : 'Sample mode'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Smartphone App Preview Mockup */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0 flex justify-center">
            
            {/* Background glowing rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              <div className="w-80 h-80 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Main Smartphone Shell Container */}
            <div className="relative mx-auto w-[290px] h-[580px] bg-slate-900 rounded-[48px] p-3 shadow-2xl border-[6px] border-slate-800 ring-4 ring-slate-700/50 flex flex-col overflow-hidden">
              
              {/* Camera Notch notch */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-30">
                <div className="w-32 h-4 bg-slate-900 rounded-b-xl flex items-center justify-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                  <div className="w-8 h-1 bg-slate-800 rounded-full"></div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="h-6 flex justify-between items-center px-6 text-[10px] text-slate-400 font-medium pt-1 z-20 bg-slate-950/80">
                <span>09:41</span>
                <div className="flex items-center gap-1">
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* App Main Body Viewport */}
              <div className="flex-1 bg-slate-50 flex flex-col justify-between overflow-y-auto text-slate-850 p-3.5 space-y-3 pt-4">
                
                {/* App Brand Header */}
                <div className="flex justify-between items-center bg-white border border-gray-100 rounded-xl p-2.5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🐄</span>
                    <div>
                      <h4 className="text-[11px] font-black text-slate-900 leading-tight">GoruSheba App</h4>
                      <p className="text-[8px] text-emerald-600 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> Live Tracker
                      </p>
                    </div>
                  </div>
                  <span className="text-xs bg-slate-100 px-1.5 py-0.5 rounded-md text-slate-500">⚙️</span>
                </div>

                {/* AI Camera Estimation Simulator Component Widget */}
                <div className="bg-white border border-gray-100 rounded-2xl p-3 shadow-sm space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">GoruMetrik Weight</span>
                    <span className="text-[8px] bg-emerald-500/10 text-emerald-700 px-1.5 py-0.5 rounded-full font-bold">Demo</span>
                  </div>
                  
                  {/* Photo preview scanner mockup */}
                  <div className="relative h-24 rounded-xl bg-gradient-to-br from-emerald-800 to-teal-900 overflow-hidden flex items-center justify-center">
                    <span className="text-4xl filter drop-shadow-md">🐂</span>
                    
                    {/* Scanner line animation overlay */}
                    <div className="absolute inset-x-0 h-0.5 bg-emerald-400 shadow-[0_0_8px_#34d399] animate-bounce top-1/4"></div>
                    <div className="absolute top-1 left-1 text-[7px] font-mono text-emerald-300">SCANNING...</div>
                  </div>

                  <div className="flex justify-between items-center text-center">
                    <div>
                      <span className="text-[8px] text-gray-400 block font-medium">Estimated weight</span>
                      <span className="text-sm font-black text-slate-900">420 kg</span>
                    </div>
                    <div className="w-px h-6 bg-gray-100"></div>
                    <div>
                      <span className="text-[8px] text-gray-400 block font-medium">Cattle Breed</span>
                      <span className="text-xs font-bold text-slate-900">Sahiwal Bull</span>
                    </div>
                  </div>
                </div>

                {/* IoT Collar telemetry dials */}
                <div className="grid grid-cols-2 gap-2">
                  
                  <div className="bg-white border border-gray-100 rounded-2xl p-2.5 shadow-sm text-center">
                    <span className="text-lg block">🌡️</span>
                    <span className="text-[8px] text-gray-400 block">Temperature</span>
                    <span className="text-xs font-bold text-slate-900">38.6°C</span>
                    <span className="text-[7px] text-emerald-600 font-semibold block mt-0.5">Healthy</span>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-2xl p-2.5 shadow-sm text-center">
                    <span className="text-lg block">🏃</span>
                    <span className="text-[8px] text-gray-400 block">Activity Log</span>
                    <span className="text-xs font-bold text-slate-900">Grazing</span>
                    <span className="text-[7px] text-slate-500 font-semibold block mt-0.5">140 min today</span>
                  </div>

                    <div className="h-16 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden relative flex items-center justify-center">
                    {/* Simulated circular fence line */}
                    <div className="w-12 h-12 rounded-full border border-dashed border-emerald-500/50 bg-emerald-500/5 absolute"></div>
                    {/* Target dot */}
                    <div className="w-2.5 h-2.5 bg-emerald-600 rounded-full border border-white absolute shadow-md animate-ping"></div>
                    <div className="w-2.5 h-2.5 bg-emerald-600 rounded-full border border-white absolute shadow-md"></div>
                    <span className="absolute bottom-1 right-2 text-[7px] text-slate-400">GPS Signal L1</span>
                  </div>
                </div>

              </div>

              {/* Home Indicator */}
              <div className="h-4 flex items-center justify-center bg-slate-950 z-20">
                <div className="w-24 h-1 bg-slate-800 rounded-full"></div>
              </div>
            </div>

            {/* Floating Glassmorphic Stat cards (Profit & Cost metrics) */}
            <div className="absolute -top-6 -left-6 md:-left-12 bg-white/85 backdrop-blur-md border border-white/40 p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-350 w-40 hover:-translate-y-1 animate-bounce [animation-duration:6s] pointer-events-none">
              <span className="text-2xl block mb-1">📈</span>
              <h5 className={`text-[10px] text-gray-400 font-bold uppercase tracking-wider ${language === 'bn' ? 'font-bengali' : ''}`}>
                {language === 'bn' ? 'খামারের মুনাফা' : 'Farm Profit'}
              </h5>
              <div className="text-base font-bold text-slate-900 mt-0.5">+22.5%</div>
              <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 mt-1 inline-block">
                {language === 'bn' ? 'স্মার্ট ব্যবস্থাপনায়' : 'With AI & IoT'}
              </span>
            </div>

            <div className="absolute bottom-12 -right-6 md:-right-12 bg-white/85 backdrop-blur-md border border-white/40 p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-350 w-44 hover:-translate-y-1 animate-bounce [animation-duration:8s] [animation-delay:1.5s] pointer-events-none">
              <span className="text-2xl block mb-1">📉</span>
              <h5 className={`text-[10px] text-red-500 font-extrabold uppercase tracking-wider ${language === 'bn' ? 'font-bengali' : ''}`}>
                {language === 'bn' ? 'চিকিৎসা খরচ' : 'Treatment Cost'}
              </h5>
              <div className="text-base font-bold text-slate-900 mt-0.5">-35%</div>
              <span className="text-[8px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded border border-red-100 mt-1 inline-block">
                {language === 'bn' ? 'প্রাণীকেয়ার সেবায়' : 'Via PraniCare'}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;