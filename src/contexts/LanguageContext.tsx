'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Revolutionary Cattle Management with AI & IoT',
    'hero.subtitle': 'Transform your farm with smart technology. Monitor, manage, and optimize your cattle operations with cutting-edge IoT devices and artificial intelligence.',
    'hero.cta.primary': 'Launch Web App',
    'hero.cta.secondary': 'Learn More',
    
    // Features Section
    'features.title': 'Smart Features for Modern Farming',
    'features.subtitle': 'Everything you need to manage your cattle efficiently',
    'feature.iot.title': 'IoT Device Integration',
    'feature.iot.description': 'Real-time monitoring with smart sensors and connected devices',
    'feature.ai.title': 'AI-Powered Analytics',
    'feature.ai.description': 'Intelligent insights and predictive analytics for better decision making',
    'feature.management.title': 'Comprehensive Management',
    'feature.management.description': 'Complete cattle lifecycle management from birth to market',
    'feature.health.title': 'Health Monitoring',
    'feature.health.description': 'Proactive health tracking and disease prevention',
    
    // About Section
    'about.title': 'About GoruSheba',
    'about.subtitle': 'Empowering farmers with technology',
    'about.description': 'GoruSheba is a comprehensive cattle management platform that combines IoT technology with artificial intelligence to revolutionize farming practices. Our mission is to help farmers increase productivity while ensuring animal welfare.',
    
    // CTA Section
    'cta.title': 'Ready to Transform Your Farm?',
    'cta.subtitle': 'Join thousands of farmers who trust GoruSheba',
    'cta.button': 'Get Started Today',
    
    // Footer
    'footer.copyright': '© 2024 GoruSheba. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  bn: {
    // Navigation
    'nav.home': 'হোম',
    'nav.features': 'বৈশিষ্ট্য',
    'nav.about': 'সম্পর্কে',
    'nav.contact': 'যোগাযোগ',
    
    // Hero Section
    'hero.title': 'আইওটি ও কৃত্রিম বুদ্ধিমত্তা দিয়ে বিপ্লবী গবাদি পশু ব্যবস্থাপনা',
    'hero.subtitle': 'স্মার্ট প্রযুক্তি দিয়ে আপনার খামার পরিবর্তন করুন। কাটিং-এজ আইওটি ডিভাইস এবং কৃত্রিম বুদ্ধিমত্তা দিয়ে আপনার গবাদি পশু পরিচালনা পর্যবেক্ষণ, ব্যবস্থাপনা এবং অপ্টিমাইজ করুন।',
    'hero.cta.primary': 'ওয়েব অ্যাপ চালু করুন',
    'hero.cta.secondary': 'আরও জানুন',
    
    // Features Section
    'features.title': 'আধুনিক কৃষিকাজের জন্য স্মার্ট বৈশিষ্ট্য',
    'features.subtitle': 'আপনার গবাদি পশু দক্ষতার সাথে পরিচালনা করার জন্য যা কিছু প্রয়োজন',
    'feature.iot.title': 'আইওটি ডিভাইস ইন্টিগ্রেশন',
    'feature.iot.description': 'স্মার্ট সেন্সর এবং সংযুক্ত ডিভাইস দিয়ে রিয়েল-টাইম পর্যবেক্ষণ',
    'feature.ai.title': 'কৃত্রিম বুদ্ধিমত্তা চালিত বিশ্লেষণ',
    'feature.ai.description': 'ভাল সিদ্ধান্ত নেওয়ার জন্য বুদ্ধিমান অন্তর্দৃষ্টি এবং ভবিষ্যদ্বাণীমূলক বিশ্লেষণ',
    'feature.management.title': 'ব্যাপক ব্যবস্থাপনা',
    'feature.management.description': 'জন্ম থেকে বাজার পর্যন্ত সম্পূর্ণ গবাদি পশু জীবনচক্র ব্যবস্থাপনা',
    'feature.health.title': 'স্বাস্থ্য পর্যবেক্ষণ',
    'feature.health.description': 'প্রোঅ্যাক্টিভ স্বাস্থ্য ট্র্যাকিং এবং রোগ প্রতিরোধ',
    
    // About Section
    'about.title': 'গরুশেবা সম্পর্কে',
    'about.subtitle': 'প্রযুক্তি দিয়ে কৃষকদের ক্ষমতায়ন',
    'about.description': 'গরুশেবা একটি ব্যাপক গবাদি পশু ব্যবস্থাপনা প্ল্যাটফর্ম যা কৃষিকাজের অনুশীলন বিপ্লব করার জন্য আইওটি প্রযুক্তি এবং কৃত্রিম বুদ্ধিমত্তাকে একত্রিত করে। আমাদের মিশন হল কৃষকদের প্রাণী কল্যাণ নিশ্চিত করার সময় উৎপাদনশীলতা বাড়াতে সাহায্য করা।',
    
    // CTA Section
    'cta.title': 'আপনার খামার পরিবর্তন করার জন্য প্রস্তুত?',
    'cta.subtitle': 'গরুশেবায় বিশ্বাসী হাজার হাজার কৃষকের সাথে যোগ দিন',
    'cta.button': 'আজই শুরু করুন',
    
    // Footer
    'footer.copyright': '© ২০২৪ গরুশেবা। সর্বস্বত্ব সংরক্ষিত।',
    'footer.privacy': 'গোপনীয়তা নীতি',
    'footer.terms': 'সেবার শর্তাবলী',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 