'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/g_goru.png"
                alt="GoruSheba"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className={`ml-3 text-xl font-bold ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                {t('company.name')}
              </span>
            </div>
            <p className={`text-gray-300 mb-6 max-w-md ${language === 'bn' ? 'font-bengali' : ''}`}>
              Revolutionizing cattle management with AI and IoT technology. Empowering farmers with smart solutions for better productivity and animal welfare.
            </p>
            
            {/* App Store Links */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              {/* App Store button commented out for now */}
              {/* <a 
                href="https://apps.apple.com/app/gorusheba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 text-sm"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a> */}
              
              <a 
                href="https://play.google.com/store/apps/details?id=com.appibrium.gorusheba" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Image 
                  src="/Gorusheba_Playstore.webp" 
                  alt="Get it on Google Play" 
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-10 w-auto hover:opacity-90 transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {language === 'bn' ? 'দ্রুত লিংক' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className={`text-gray-300 hover:text-white transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'হোম' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#features" className={`text-gray-300 hover:text-white transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'বৈশিষ্ট্য' : 'Features'}
                </a>
              </li>
              <li>
                <a href="#about" className={`text-gray-300 hover:text-white transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'সম্পর্কে' : 'About'}
                </a>
              </li>
              <li>
                <a href="#contact" className={`text-gray-300 hover:text-white transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'যোগাযোগ' : 'Contact'}
                </a>
              </li>
              <li>
                <a href="https://app.goru.help/" target="_blank" rel="noopener noreferrer" className={`text-gray-300 hover:text-white transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'ওয়েব অ্যাপ' : 'Web App'}
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${language === 'bn' ? 'font-bengali' : ''}`}>
              {language === 'bn' ? 'সহায়তা ও আইনি' : 'Support & Legal'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className={`text-gray-300 hover:text-white transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className={`text-gray-300 hover:text-white transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className={`text-gray-300 hover:text-white transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'অ্যাকাউন্ট মুছুন' : 'Delete Account'}
                </Link>
              </li>
              <li>
                <a href="mailto:hello@goru.help" className={`text-gray-300 hover:text-white transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'সহায়তা' : 'Support'}
                </a>
              </li>
              <li>
                <a href="tel:+8801789536985" className={`text-gray-300 hover:text-white transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}>
                  {language === 'bn' ? 'কল করুন' : 'Call Us'}
                </a>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className={`text-sm font-medium text-gray-400 mb-3 ${language === 'bn' ? 'font-bengali' : ''}`}>
                {language === 'bn' ? 'সামাজিক মাধ্যম' : 'Follow Us'}
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/gorusheba" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@appibrium" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/appibrium/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <p className={`text-gray-400 text-sm ${language === 'bn' ? 'font-bengali' : ''}`}>
                © 2025 <a href="https://appibrium.tech/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Appibrium</a>. {language === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <span className={`text-gray-400 text-sm ${language === 'bn' ? 'font-bengali' : ''}`}>
                {language === 'bn' ? 'ভার্সন' : 'Version'} 1.0.0
              </span>
                            <a
                href="https://app.goru.help/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-green-400 hover:text-green-300 text-sm transition-colors ${language === 'bn' ? 'font-bengali' : ''}`}
              >
                {language === 'bn' ? 'ওয়েব অ্যাপ চালু করুন' : 'Launch Web App'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 