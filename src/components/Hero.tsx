'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight ${language === 'bn' ? 'font-bengali' : ''}`}>
                {language === 'bn' ? 'গরুসেবা: গবাদি পশু ব্যবস্থাপনার ভবিষ্যত' : 'GoruSheba: The Future of Cattle Management'}
              </h1>
              <p className={`text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl ${language === 'bn' ? 'font-bengali' : ''}`}>
                {language === 'bn' ? 'আইওটি এবং কৃত্রিম বুদ্ধিমত্তা দিয়ে আপনার খামারকে ডিজিটাল করুন। স্মার্ট সেন্সর, রিয়েল-টাইম ডেটা এবং AI বিশ্লেষণ দিয়ে আপনার গবাদি পশু পরিচালনা করুন।' : 'Digitize your farm with IoT and artificial intelligence. Manage your cattle with smart sensors, real-time data, and AI analytics.'}
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="space-y-4">
              <p className={`text-sm text-gray-600 font-medium ${language === 'bn' ? 'font-bengali' : ''}`}>
                {t('hero.app.store.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://apps.apple.com/app/gorusheba" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                
                <a 
                  href="https://play.google.com/store/apps/details?id=com.gorusheba.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-left">
                <div className="text-3xl font-bold text-green-600">1000+</div>
                <div className={`text-sm text-gray-600 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'সক্রিয় খামার' : 'Active Farms'}
                </div>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-green-600">50K+</div>
                <div className={`text-sm text-gray-600 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'গবাদি পশু পর্যবেক্ষণ' : 'Cattle Monitored'}
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main App Preview */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className={`text-xl font-bold text-gray-900 mb-2 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' ? 'স্মার্ট কৃষিকাজ' : 'Smart Farming'}
                    </h3>
                    <p className={`text-gray-600 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' ? 'আইওটি + কৃত্রিম বুদ্ধিমত্তা প্রযুক্তি' : 'IoT + AI Technology'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {/* IoT Device */}
                <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-xl p-4 text-center">
                  <div className="w-10 h-10 bg-green-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className={`font-semibold text-gray-800 text-sm ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'আইওটি সেন্সর' : 'IoT Sensors'}
                  </h3>
                  <p className={`text-xs text-gray-600 mt-1 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'রিয়েল-টাইম ডেটা' : 'Real-time Data'}
                  </p>
                </div>

                {/* AI Analytics */}
                <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl p-4 text-center">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className={`font-semibold text-gray-800 text-sm ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'কৃত্রিম বুদ্ধিমত্তা বিশ্লেষণ' : 'AI Analytics'}
                  </h3>
                  <p className={`text-xs text-gray-600 mt-1 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'স্মার্ট অন্তর্দৃষ্টি' : 'Smart Insights'}
                  </p>
                </div>

                {/* Health Monitoring */}
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-4 text-center">
                  <div className="w-10 h-10 bg-yellow-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className={`font-semibold text-gray-800 text-sm ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'স্বাস্থ্য পর্যবেক্ষণ' : 'Health Monitor'}
                  </h3>
                  <p className={`text-xs text-gray-600 mt-1 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? '২৪/৭ ট্র্যাকিং' : '24/7 Tracking'}
                  </p>
                </div>

                {/* Veterinary */}
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-4 text-center">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className={`font-semibold text-gray-800 text-sm ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'পশুচিকিৎসা' : 'Veterinary'}
                  </h3>
                  <p className={`text-xs text-gray-600 mt-1 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'বিশেষজ্ঞ যত্ন' : 'Expert Care'}
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-teal-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 