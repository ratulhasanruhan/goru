'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const guidance = [
  {
    bnTitle: 'গরু সম্পর্কে জানুন',
    bnText: 'গরু নিবন্ধনে তথ্য রাখুন, তারপর গরুমেট্রিকের সাহায্যে ওজনের একটি আনুমানিক হিসাব দেখুন।',
    enTitle: 'Understand my cattle',
    enText: 'Start with GoruNibondhon records, then use GoruMetrik for an illustrative weight estimate.',
  },
  {
    bnTitle: 'খামারের পরিকল্পনা করুন',
    bnText: 'ফার্ম ফাইন্যান্সে খাবারের খরচ ও গরুর সংখ্যা অনুযায়ী বিভিন্ন পরিকল্পনা মিলিয়ে দেখুন।',
    enTitle: 'Plan the farm',
    enText: 'Explore feed costs and herd scenarios with your own assumptions.',
  },
  {
    bnTitle: 'চিকিৎসার সহায়তা নিন',
    bnText: 'আমি আপনার প্রশ্ন গুছিয়ে দিতে পারি। অসুস্থতার লক্ষণ থাকলে প্রাণীকেয়ার বা একজন পশুচিকিৎসকের পরামর্শ নিন।',
    enTitle: 'Get health support',
    enText: 'I can help organize questions, but concerning symptoms should go to a qualified veterinarian.',
  },
];

export default function MotiGuide() {
  const { language } = useLanguage();
  const bn = language === 'bn';
  const [selected, setSelected] = useState(0);

  return (
    <section className="moti-guide-section">
      <div className="shell moti-guide-grid">
        <div className="moti-guide-art">
          <div className="moti-guide-halo" />
          <Image src="/moti-mia-guide.png" alt="ডিজিটাল গরুর তথ্য হাতে মতি মিয়া" width={470} height={610} priority className="moti-guide-image" />
          <div className="moti-speech">আসসালামু আলাইকুম!<br /><strong>আমি মতি মিয়া।</strong></div>
        </div>
        <div className="moti-guide-copy">
          <p className="eyebrow">{bn ? 'আপনার খামারের সঙ্গী' : 'YOUR GUIDED FARM COMPANION'}</p>
          <h2>{bn ? <>মতি মিয়ার সঙ্গে<br /><span>পরের ধাপটি ঠিক করুন।</span></> : <>Meet Moti Mia.<br /><span>Your next step starts here.</span></>}</h2>
          <p className="body-copy">{bn ? 'মতি মিয়া আপনাকে গরুসেবার সঠিক টুলটি খুঁজে নিতে, নমুনা তথ্য বুঝতে এবং গরুর যত্ন নিয়ে সহজ বাংলায় প্রশ্ন করতে সাহায্য করবে।' : 'Moti Mia helps visitors find the right GoruSheba tool, understand sample information, and ask better cattle-care questions—in friendly Bangla.'}</p>
          <div className="moti-guide-options">
            {guidance.map((item, index) => (
              <button key={item.bnTitle} className={selected === index ? 'selected' : ''} onClick={() => setSelected(index)}>
                <span>0{index + 1}</span>
                <strong>{bn ? item.bnTitle : item.enTitle}</strong>
                <b>→</b>
                {selected === index && <small>{bn ? item.bnText : item.enText}</small>}
              </button>
            ))}
          </div>
          <p className="moti-guide-note">{bn ? 'ডেমো গাইড · নমুনা উত্তর · পশুরোগ নির্ণয়ের বিকল্প নয়' : 'Demo guide · Sample answers only · Not a veterinary diagnosis'}</p>
        </div>
      </div>
    </section>
  );
}
