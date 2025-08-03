'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/g_goru.png"
              alt="GoruSheba"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className={`ml-3 text-xl font-bold text-gray-900 ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
              {t('company.name')}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`text-gray-700 hover:text-green-600 transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
              {t('nav.home')}
            </a>
            <a href="#features" className={`text-gray-700 hover:text-green-600 transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
              {t('nav.features')}
            </a>
            <a href="#about" className={`text-gray-700 hover:text-green-600 transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
              {t('nav.about')}
            </a>
            <a href="#contact" className={`text-gray-700 hover:text-green-600 transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
              {t('nav.contact')}
            </a>
          </nav>

          {/* Language Toggle and Launch Web Button */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              {language === 'en' ? 'বাং' : 'EN'}
            </button>

            {/* Launch Web Button */}
            <a
              href="https://app.goru.help/"
              target="_blank"
              rel="noopener noreferrer"
                             className={`hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}
            >
              {t('nav.launch.web')}
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
                             <a href="#home" className={`block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                 {t('nav.home')}
               </a>
                               <a href="#features" className={`block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                  {t('nav.features')}
                </a>
               <a href="#about" className={`block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                 {t('nav.about')}
               </a>
               <a href="#contact" className={`block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors ${language === 'bn' ? 'font-bengali' : 'font-english'}`}>
                 {t('nav.contact')}
               </a>
              <a
                href="https://app.goru.help/"
                target="_blank"
                rel="noopener noreferrer"
                                 className={`block w-full mt-4 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors text-center ${language === 'bn' ? 'font-bengali' : 'font-english'}`}
              >
                {t('nav.launch.web')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 