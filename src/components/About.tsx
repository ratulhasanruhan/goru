'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                {t('about.title')}
              </h2>
              <p className={`text-xl text-green-600 font-semibold ${language === 'bn' ? 'font-bengali' : ''}`}>
                {t('about.subtitle')}
              </p>
              <p className={`text-lg text-gray-600 leading-relaxed ${language === 'bn' ? 'font-bengali' : ''}`}>
                {t('about.description')}
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className={`font-semibold text-gray-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'স্মার্ট প্রযুক্তি ইন্টিগ্রেশন' : 'Smart Technology Integration'}
                  </h3>
                  <p className={`text-gray-600 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'উন্নত আইওটি সেন্সর এবং কৃত্রিম বুদ্ধিমত্তা অ্যালগরিদম একসাথে কাজ করে ব্যাপক অন্তর্দৃষ্টি প্রদান করে।' : 'Advanced IoT sensors and AI algorithms work together to provide comprehensive insights.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className={`font-semibold text-gray-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'কৃষক-কেন্দ্রিক ডিজাইন' : 'Farmer-Centric Design'}
                  </h3>
                  <p className={`text-gray-600 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'কৃষকদের কথা মাথায় রেখে নির্মিত, সহজ ব্যবহার এবং ব্যবহারিক কার্যকারিতা নিশ্চিত করে।' : 'Built with farmers in mind, ensuring ease of use and practical functionality.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className={`font-semibold text-gray-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'টেকসই কৃষিকাজ' : 'Sustainable Agriculture'}
                  </h3>
                  <p className={`text-gray-600 ${language === 'bn' ? 'font-bengali' : ''}`}>
                    {language === 'bn' ? 'উৎপাদনশীলতা এবং প্রাণী কল্যাণ উন্নত করার সময় টেকসই কৃষিকাজের অনুশীলন প্রচার করা।' : 'Promoting sustainable farming practices while improving productivity and animal welfare.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className={`text-sm text-gray-600 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'পর্যবেক্ষণ' : 'Monitoring'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className={`text-sm text-gray-600 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'সঠিকতা' : 'Accuracy'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">50+</div>
                <div className={`text-sm text-gray-600 ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'বৈশিষ্ট্য' : 'Features'}
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  {/* Mission Statement */}
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6">
                    <h3 className={`text-xl font-bold text-gray-900 mb-3 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' ? 'আমাদের মিশন' : 'Our Mission'}
                    </h3>
                    <p className={`text-gray-700 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' ? 'উদ্ভাবনী প্রযুক্তির মাধ্যমে গবাদি পশু ব্যবস্থাপনায় বিপ্লব ঘটানো, বিশ্বব্যাপী কৃষকদের জন্য কৃষিকাজকে আরও দক্ষ, টেকসই এবং লাভজনক করা।' : 'To revolutionize cattle management through innovative technology, making farming more efficient, sustainable, and profitable for farmers worldwide.'}
                    </p>
                  </div>

                  {/* Technology Stack */}
                  <div className="space-y-4">
                    <h3 className={`text-lg font-semibold text-gray-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' ? 'প্রযুক্তি স্ট্যাক' : 'Technology Stack'}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className={`text-sm font-medium text-gray-700 ${language === 'bn' ? 'font-bengali' : ''}`}>
                          {language === 'bn' ? 'আইওটি সেন্সর' : 'IoT Sensors'}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className={`text-sm font-medium text-gray-700 ${language === 'bn' ? 'font-bengali' : ''}`}>
                          {language === 'bn' ? 'কৃত্রিম বুদ্ধিমত্তা/মেশিন লার্নিং' : 'AI/ML'}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className={`text-sm font-medium text-gray-700 ${language === 'bn' ? 'font-bengali' : ''}`}>
                          {language === 'bn' ? 'ক্লাউড প্ল্যাটফর্ম' : 'Cloud Platform'}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <div className={`text-sm font-medium text-gray-700 ${language === 'bn' ? 'font-bengali' : ''}`}>
                          {language === 'bn' ? 'মোবাইল অ্যাপ' : 'Mobile App'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Values */}
                  <div className="space-y-3">
                    <h3 className={`text-lg font-semibold text-gray-900 ${language === 'bn' ? 'font-bengali' : ''}`}>
                      {language === 'bn' ? 'মূল্যবোধ' : 'Core Values'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium ${language === 'bn' ? 'font-bengali' : ''}`}>
                        {language === 'bn' ? 'উদ্ভাবন' : 'Innovation'}
                      </span>
                      <span className={`px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium ${language === 'bn' ? 'font-bengali' : ''}`}>
                        {language === 'bn' ? 'টেকসইতা' : 'Sustainability'}
                      </span>
                      <span className={`px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium ${language === 'bn' ? 'font-bengali' : ''}`}>
                        {language === 'bn' ? 'নির্ভরযোগ্যতা' : 'Reliability'}
                      </span>
                      <span className={`px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium ${language === 'bn' ? 'font-bengali' : ''}`}>
                        {language === 'bn' ? 'উৎকর্ষতা' : 'Excellence'}
                      </span>
                    </div>
                  </div>
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

export default About; 