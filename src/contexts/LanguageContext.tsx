'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Company Name
    'company.name': 'GoruSheba',
    
    // SEO Metadata
    'seo.title': 'GoruSheba - Smart Cattle Management Platform | IoT & AI Farming',
    'seo.description': 'Transform your farm with GoruSheba - the leading IoT and AI-powered cattle management platform. Monitor livestock health, track farm operations, and optimize productivity with smart sensors and real-time analytics.',
    'seo.keywords': 'cattle management, IoT farming, AI agriculture, smart farming, livestock monitoring, farm management, agricultural technology, precision farming, cattle health monitoring, farm automation, agricultural IoT, smart agriculture, farm productivity, livestock tracking, agricultural analytics',
    
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.launch.web': 'Launch Web App',
    
    // Hero Section
    'hero.title': 'Revolutionary Cattle Management with AI & IoT',
    'hero.subtitle': 'Transform your farm with smart technology. Monitor, manage, and optimize your cattle operations with cutting-edge IoT devices and artificial intelligence.',
    'hero.cta.primary': 'Launch Web App',
    'hero.cta.secondary': 'Learn More',
    'hero.app.store': 'Get App',
    'hero.app.store.subtitle': 'Available on App Store & Google Play',
    
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
    'feature.veterinary.title': 'Veterinary Services',
    'feature.veterinary.description': 'Connect with veterinary experts and get professional health advice',
    
    // About Section
    'about.title': 'About GoruSheba',
    'about.subtitle': 'Empowering farmers with technology',
    'about.description': 'GoruSheba is a comprehensive cattle management platform that combines IoT technology with artificial intelligence to revolutionize farming practices. Our mission is to help farmers increase productivity while ensuring animal welfare.',
    
    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We\'re here to help you succeed',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.address': 'Address',
    'contact.info.address.value': 'Dhaka, Bangladesh',
    'contact.social.title': 'Follow Us',
    
    // CTA Section
    'cta.title': 'Ready to Transform Your Farm?',
    'cta.subtitle': 'Join thousands of farmers who trust GoruSheba',
    'cta.button': 'Get Started Today',
    
    // Footer
    'footer.copyright': '© 2025 Appibrium. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  bn: {
    // Company Name
    'company.name': 'গরুসেবা',
    
    // SEO Metadata
    'seo.title': 'গরুসেবা - স্মার্ট গবাদি পশু ব্যবস্থাপনা প্ল্যাটফর্ম | আইওটি ও কৃত্রিম বুদ্ধিমত্তা কৃষিকাজ',
    'seo.description': 'গরুসেবার সাথে আপনার খামার পরিবর্তন করুন - শীর্ষস্থানীয় আইওটি এবং কৃত্রিম বুদ্ধিমত্তা চালিত গবাদি পশু ব্যবস্থাপনা প্ল্যাটফর্ম। স্মার্ট সেন্সর এবং রিয়েল-টাইম বিশ্লেষণ দিয়ে গবাদি পশুর স্বাস্থ্য পর্যবেক্ষণ করুন, খামার পরিচালনা ট্র্যাক করুন এবং উৎপাদনশীলতা অপ্টিমাইজ করুন।',
    'seo.keywords': 'গবাদি পশু ব্যবস্থাপনা, আইওটি কৃষিকাজ, কৃত্রিম বুদ্ধিমত্তা কৃষিকাজ, স্মার্ট কৃষিকাজ, গবাদি পশু পর্যবেক্ষণ, খামার ব্যবস্থাপনা, কৃষি প্রযুক্তি, সুনির্দিষ্ট কৃষিকাজ, গবাদি পশু স্বাস্থ্য পর্যবেক্ষণ, খামার স্বয়ংক্রিয়করণ, কৃষি আইওটি, স্মার্ট কৃষিকাজ, খামার উৎপাদনশীলতা, গবাদি পশু ট্র্যাকিং, কৃষি বিশ্লেষণ',
    
    // Navigation
    'nav.home': 'হোম',
    'nav.features': 'বৈশিষ্ট্য',
    'nav.about': 'সম্পর্কে',
    'nav.contact': 'যোগাযোগ',
    'nav.launch.web': 'ওয়েব অ্যাপ চালু করুন',
    
    // Hero Section
    'hero.title': 'আইওটি ও কৃত্রিম বুদ্ধিমত্তা দিয়ে বিপ্লবী গবাদি পশু ব্যবস্থাপনা',
    'hero.subtitle': 'স্মার্ট প্রযুক্তি দিয়ে আপনার খামার পরিবর্তন করুন। কাটিং-এজ আইওটি ডিভাইস এবং কৃত্রিম বুদ্ধিমত্তা দিয়ে আপনার গবাদি পশু পরিচালনা পর্যবেক্ষণ, ব্যবস্থাপনা এবং অপ্টিমাইজ করুন।',
    'hero.cta.primary': 'ওয়েব অ্যাপ চালু করুন',
    'hero.cta.secondary': 'আরও জানুন',
    'hero.app.store': 'অ্যাপ ডাউনলোড করুন',
    'hero.app.store.subtitle': 'অ্যাপ স্টোর এবং গুগল প্লেতে উপলব্ধ',
    
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
    'feature.veterinary.title': 'পশুচিকিৎসা সেবা',
    'feature.veterinary.description': 'পশুচিকিৎসা বিশেষজ্ঞদের সাথে সংযুক্ত হন এবং পেশাদার স্বাস্থ্য পরামর্শ পান',
    
    // About Section
    'about.title': 'গরুসেবা সম্পর্কে',
    'about.subtitle': 'প্রযুক্তি দিয়ে কৃষকদের ক্ষমতায়ন',
    'about.description': 'গরুসেবা একটি ব্যাপক গবাদি পশু ব্যবস্থাপনা প্ল্যাটফর্ম যা কৃষিকাজের অনুশীলন বিপ্লব করার জন্য আইওটি প্রযুক্তি এবং কৃত্রিম বুদ্ধিমত্তাকে একত্রিত করে। আমাদের মিশন হল কৃষকদের প্রাণী কল্যাণ নিশ্চিত করার সময় উৎপাদনশীলতা বাড়াতে সাহায্য করা।',
    
    // Contact Section
    'contact.title': 'যোগাযোগ করুন',
    'contact.subtitle': 'আমরা আপনাকে সফল হতে সাহায্য করতে এখানে আছি',
    'contact.form.name': 'পূর্ণ নাম',
    'contact.form.email': 'ইমেইল ঠিকানা',
    'contact.form.phone': 'ফোন নম্বর',
    'contact.form.message': 'আপনার বার্তা',
    'contact.form.submit': 'বার্তা পাঠান',
    'contact.info.title': 'যোগাযোগের তথ্য',
    'contact.info.phone': 'ফোন',
    'contact.info.email': 'ইমেইল',
    'contact.info.address': 'ঠিকানা',
    'contact.info.address.value': 'ঢাকা, বাংলাদেশ',
    'contact.social.title': 'আমাদের অনুসরণ করুন',
    
    // CTA Section
    'cta.title': 'আপনার খামার পরিবর্তন করার জন্য প্রস্তুত?',
    'cta.subtitle': 'গরুসেবায় বিশ্বাসী হাজার হাজার কৃষকের সাথে যোগ দিন',
    'cta.button': 'আজই শুরু করুন',
    
    // Footer
    'footer.copyright': '© ২০২৫ অ্যাপিব্রিয়াম। সর্বস্বত্ব সংরক্ষিত।',
    'footer.privacy': 'গোপনীয়তা নীতি',
    'footer.terms': 'সেবার শর্তাবলী',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [language, setLanguageState] = useState<Language>('en');

  // Initialize language from URL parameter
  useEffect(() => {
    const langParam = searchParams.get('lang');
    if (langParam === 'bn' || langParam === 'en') {
      setLanguageState(langParam);
    }
  }, [searchParams]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    
    // Update URL with new language parameter
    const currentUrl = new URL(window.location.href);
    if (lang === 'en') {
      // Remove lang parameter for English (default)
      currentUrl.searchParams.delete('lang');
    } else {
      // Add lang parameter for Bengali
      currentUrl.searchParams.set('lang', lang);
    }
    
    // Update URL without page reload
    router.replace(currentUrl.pathname + currentUrl.search);
  };

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