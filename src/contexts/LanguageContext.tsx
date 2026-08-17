'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isHydrated: boolean;
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
    'nav.products': 'Products',
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
    'feature.gorumetrik.title': 'GoruMetrik',
    'feature.gorumetrik.description': 'AI-based cattle weight estimation from a phone camera photo. No scale needed. Results in under 10 seconds with 92% accuracy.',
    'feature.televet.title': 'TeleVet',
    'feature.televet.description': 'Remote veterinary consultation booking. Farmers connect with licensed vets directly through the app without travel.',
    'feature.voice_assistant.title': 'AI Voice Assistant',
    'feature.voice_assistant.description': 'Farmers speak health, disease, and feeding questions in Bangla and receive instant AI-powered guidance.',
    'feature.qr_management.title': 'QR Farm Management',
    'feature.qr_management.description': 'Every animal gets a digital identity via QR code. Full health history, vaccination records, and weight logs stored and accessible on scan.',
    'feature.gorucollar.title': 'GoruCollar',
    'feature.gorucollar.description': 'IoT smart cattle collar tracking GPS location, body temperature, and movement activity in real time with automatic health alerts.',
    'feature.virtual_fencing.title': 'Virtual Farm Fencing',
    'feature.virtual_fencing.description': 'Farmers draw a geofence boundary on a map. Instant push notification when cattle crosses the boundary.',

    // Playground Section
    'playground.title': 'Experience GoruSheba in Action',
    'playground.subtitle': 'Interact with our core features in real-time. Select a tab below to try our technology simulators.',
    'playground.tab.gorumetrik': 'Weight Estimation',
    'playground.tab.televet': 'Vet Consult',
    'playground.tab.voice_assistant': 'AI Voice',
    'playground.tab.qr_management': 'QR Passport',
    'playground.tab.gorucollar': 'IoT Collar & Fencing',
    
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
    'contact.info.address.value': '23/A Shukrabad, Dhaka 1207',
    'contact.social.title': 'Follow Us',
    
    // Products Section
    'products.title': 'Our Products',
    'products.subtitle': 'Choose the perfect solution for your farm',
    'product.basic.title': 'Basic Package',
    'product.basic.price': '৳5,000',
    'product.basic.description': 'Essential cattle management tools for small farms',
    'product.basic.features': 'Basic monitoring, Health tracking, Mobile app access',
    'product.premium.title': 'Premium Package',
    'product.premium.price': '৳15,000',
    'product.premium.description': 'Complete farm management solution with advanced features',
    'product.premium.features': 'Advanced analytics, IoT integration, Veterinary support, 24/7 monitoring',
    'order.form.title': 'Place Your Order',
    'order.form.subtitle': 'Fill in your details to order our products',
    'order.form.name': 'Full Name',
    'order.form.phone': 'Phone Number',
    'order.form.address': 'Delivery Address',
    'order.form.product': 'Select Product',
    'order.form.submit': 'Place Order',
    'order.success': 'Order submitted successfully! We will contact you soon.',
    'order.error': 'Something went wrong. Please try again.',
    
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
    'nav.products': 'পণ্য',
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
    'feature.gorumetrik.title': 'গোরুমেট্রিক',
    'feature.gorumetrik.description': 'ক্যামেরা ফটো থেকে কৃত্রিম বুদ্ধিমত্তা চালিত গরুর ওজন পরিমাপ। কোনো স্কেলের প্রয়োজন নেই। ৯২% সঠিকতাসহ ১০ সেকেন্ডের কম সময়ে ফলাফল।',
    'feature.televet.title': 'টেলিভেট',
    'feature.televet.description': 'ঘরে বসেই লাইসেন্সধারী পশুচিকিৎসকদের সাথে সরাসরি ভিডিও কনসালটেশন বুকিং এবং যোগাযোগ।',
    'feature.voice_assistant.title': 'এআই ভয়েস অ্যাসিস্ট্যান্ট',
    'feature.voice_assistant.description': 'বাংলা ভাষায় মুখে বলে গরুর রোগ, স্বাস্থ্য বা খাদ্য সংক্রান্ত যেকোনো প্রশ্ন করুন এবং এআই থেকে তাৎক্ষণিক সমাধান পান।',
    'feature.qr_management.title': 'কিউআর খামার ব্যবস্থাপনা',
    'feature.qr_management.description': 'প্রতিটি পশুর জন্য কিউআর কোডের মাধ্যমে ডিজিটাল প্রোফাইল। কিউআর স্ক্যান করলেই স্বাস্থ্য ইতিহাস, টিকা ও ওজনের তথ্য মিলবে।',
    'feature.gorucollar.title': 'গোরুকলার',
    'feature.gorucollar.description': 'ইন্টারনেট অফ থিংস (IoT) চালিত স্মার্ট কলার যা রিয়েল-টাইমে গরুর জিপিএস লোকেশন, শরীরের তাপমাত্রা এবং শারীরিক কার্যকলাপ ট্র্যাক করে স্বয়ংক্রিয় স্বাস্থ্য অ্যালার্ট দেয়।',
    'feature.virtual_fencing.title': 'ভার্চুয়াল খামার সীমানা',
    'feature.virtual_fencing.description': 'খামারিরা ম্যাপের উপর একটি সীমানা আঁকতে পারেন। কোনো গরু সেই সীমানা অতিক্রম করলেই মোবাইলে তাৎক্ষণিক নোটিফিকেশন পাবেন।',

    // Playground Section
    'playground.title': 'গরুসেবার কার্যকারিতা নিজে পরখ করুন',
    'playground.subtitle': 'আমাদের মূল ফিচারগুলো রিয়েল-টাইমে ব্যবহার করে দেখুন। নিচের ট্যাবগুলো থেকে যেকোনো একটি সিমুলেটর সিলেক্ট করুন।',
    'playground.tab.gorumetrik': 'ওজন পরিমাপ',
    'playground.tab.televet': 'টেলিভেট সেবা',
    'playground.tab.voice_assistant': 'এআই ভয়েস',
    'playground.tab.qr_management': 'কিউআর পাসপোর্ট',
    'playground.tab.gorucollar': 'আইওটি কলার ও সীমানা',
    
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
    'contact.info.address.value': '২৩/এ শুক্রাবাদ, ঢাকা ১২০৭',
    'contact.social.title': 'আমাদের অনুসরণ করুন',
    
    // Products Section
    'products.title': 'আমাদের পণ্য',
    'products.subtitle': 'আপনার খামারের জন্য নিখুঁত সমাধান বেছে নিন',
    'product.basic.title': 'বেসিক প্যাকেজ',
    'product.basic.price': '৳৫,০০০',
    'product.basic.description': 'ছোট খামারের জন্য প্রয়োজনীয় গবাদি পশু ব্যবস্থাপনা সরঞ্জাম',
    'product.basic.features': 'বেসিক পর্যবেক্ষণ, স্বাস্থ্য ট্র্যাকিং, মোবাইল অ্যাপ অ্যাক্সেস',
    'product.premium.title': 'প্রিমিয়াম প্যাকেজ',
    'product.premium.price': '৳১৫,০০০',
    'product.premium.description': 'উন্নত বৈশিষ্ট্যসহ সম্পূর্ণ খামার ব্যবস্থাপনা সমাধান',
    'product.premium.features': 'উন্নত বিশ্লেষণ, আইওটি ইন্টিগ্রেশন, পশুচিকিৎসা সহায়তা, ২৪/৭ পর্যবেক্ষণ',
    'order.form.title': 'আপনার অর্ডার করুন',
    'order.form.subtitle': 'আমাদের পণ্য অর্ডার করতে আপনার বিবরণ পূরণ করুন',
    'order.form.name': 'পূর্ণ নাম',
    'order.form.phone': 'ফোন নম্বর',
    'order.form.address': 'ডেলিভারি ঠিকানা',
    'order.form.product': 'পণ্য নির্বাচন করুন',
    'order.form.submit': 'অর্ডার করুন',
    'order.success': 'অর্ডার সফলভাবে জমা হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।',
    'order.error': 'কিছু ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
    
    // Footer
    'footer.copyright': '© ২০২৫ অ্যাপিব্রিয়াম। সর্বস্বত্ব সংরক্ষিত।',
    'footer.privacy': 'গোপনীয়তা নীতি',
    'footer.terms': 'সেবার শর্তাবলী',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [language, setLanguageState] = useState<Language>('en');
  const [isHydrated, setIsHydrated] = useState(false);

  // Read ?lang= straight from the URL instead of useSearchParams(). That hook
  // opts the whole tree out of server rendering, so crawlers received only the
  // loading fallback — no headings, copy, or JSON-LD. The value was already
  // only consumed after hydration, so reading window.location costs nothing.
  const syncLanguageFromUrl = useCallback(() => {
    const langParam = new URLSearchParams(window.location.search).get('lang');
    if (langParam === 'bn' || langParam === 'en') {
      setLanguageState(langParam);
    }
  }, []);

  useEffect(() => {
    setIsHydrated(true);
    syncLanguageFromUrl();

    // Keep language in step with browser back/forward navigation.
    window.addEventListener('popstate', syncLanguageFromUrl);
    return () => window.removeEventListener('popstate', syncLanguageFromUrl);
  }, [syncLanguageFromUrl]);

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
    <LanguageContext.Provider value={{ language, setLanguage, t, isHydrated }}>
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