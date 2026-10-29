'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const tools = [
  ['ওজনের হিসাব', 'Weight Estimation', '/feature-gorumetrik.png'],
  ['মতি মিয়া সহকারী', 'Moti Mia Assistant', '/feature-moti-mia.png'],
  ['প্রাণীকেয়ার', 'PraniCare', '/feature-pranicare.png'],
  ['QR গরুর রেকর্ড', 'QR Cattle Records', '/feature-gorunibondhon.png'],
  ['প্রাণ প্রহরী', 'PranProhori', '/feature-pranprohori.png'],
  ['ফার্ম ফাইন্যান্স', 'Farm Finance', '/feature-farm-finance.png'],
];

export default function InteractiveSystem() {
  const { language } = useLanguage();
  const bn = language === 'bn';
  const [active, setActive] = useState(0);
  const [girth, setGirth] = useState(184);
  const [herd, setHerd] = useState(8);
  const [questionIndex, setQuestionIndex] = useState(0);
  const estimated = Math.round((girth - 100) * 3.45);
  const title = bn ? tools[active][0] : tools[active][1];
  const icon = tools[active][2];

  return (
    <main className="demo-page">
      <section className="demo-hero">
        <div className="shell">
          <p className="eyebrow">{bn ? 'গরুসেবা ইন্টার‍্যাক্টিভ সিস্টেম' : 'GORUSHEBA INTERACTIVE SYSTEM'}</p>
          <h1>{bn ? <>প্ল্যাটফর্ম ঘুরে দেখুন,<br /><span>একটি টুল করে।</span></> : <>Explore the platform,<br /><span>one useful tool at a time.</span></>}</h1>
          <p>{bn ? 'প্রতিটি টুল কাল্পনিক নমুনা ডেটা দিয়ে তৈরি। নিয়ন্ত্রণগুলো ব্যবহার করে দেখুন—কোনটি সিমুলেশন, আর কোনটি বাস্তব সেবার সঙ্গে যুক্ত হতে পারে, তা পরিষ্কারভাবে বুঝুন।' : 'Every experience below uses fictional sample data. Try the controls, see the result, and understand what is simulated versus connected to a real service.'}</p>
        </div>
      </section>
      <section className="section">
        <div className="shell system-layout">
          <aside className="system-nav" aria-label="ইন্টার‍্যাক্টিভ টুল">
            {tools.map((tool, index) => (
              <button key={tool[1]} onClick={() => setActive(index)} className={active === index ? 'active' : ''}>
                <Image src={tool[2]} alt="" width={44} height={44} />
                <span>{bn ? tool[0] : tool[1]}<small>{bn ? 'ইন্টার‍্যাক্টিভ ডেমো' : 'Interactive demo'}</small></span><b>→</b>
              </button>
            ))}
          </aside>
          <div className="system-panel">
            <div className="system-panel-head"><div><span className="demo-badge">{bn ? 'ইন্টার‍্যাক্টিভ ডেমো · নমুনা ডেটা' : 'INTERACTIVE DEMO · SAMPLE DATA'}</span><h2>{title}</h2></div><Image src={icon} alt="" width={84} height={84} /></div>
            {active === 0 && <div className="system-content"><p className="system-kicker">{bn ? 'গরুমেট্রিকের আনুমানিক হিসাব' : 'GoruMetrik estimate'}</p><div className="system-result">{estimated}<small>{bn ? 'কেজি আনুমানিক ওজন' : 'kg estimated weight'}</small></div><label>{bn ? 'বুকের পরিধি' : 'Chest girth'}<input type="range" min="140" max="220" value={girth} onChange={event => setGirth(Number(event.target.value))} /><strong>{girth} {bn ? 'সেমি' : 'cm'}</strong></label><p className="system-note">{bn ? 'নমুনা মাপ বদলালে ফলও বদলাবে। এটি কোনো বাস্তব AI মডেলের ফল নয়।' : 'This illustrative estimate changes with the sample measurement. It is not a live AI model prediction.'}</p></div>}
            {active === 1 && <div className="system-content chat-demo"><div className="chat-bubble">{[bn ? 'মতি মিয়া, গরুর খাবার নিয়ে পরামর্শ চাই।' : 'Moti Mia, I need advice about cattle feed.', bn ? 'মতি মিয়া, গরুর টিকা কখন দিতে হয়?' : 'Moti Mia, when should cattle be vaccinated?'][questionIndex]}</div><div className="chat-bubble reply">{questionIndex === 0 ? (bn ? 'অবশ্যই! খাবারের পরিমাণ ও গরুর ওজন জানালে একটি নমুনা পরিকল্পনা দেখাতে পারি। গুরুতর লক্ষণে পশুচিকিৎসকের পরামর্শ নিন।' : 'Of course! Share the animal’s weight for an illustrative plan. Contact a veterinarian for serious symptoms.') : (bn ? 'টিকার সময়সূচি গরুর বয়স ও এলাকার রোগঝুঁকির ওপর নির্ভর করে। স্থানীয় পশুচিকিৎসকের পরামর্শ নিন।' : 'Vaccination schedules depend on age and local disease risk. Please consult a qualified veterinarian.')}</div><button className="demo-chip" onClick={() => setQuestionIndex(index => (index + 1) % 2)}>{bn ? 'আরও একটি নমুনা প্রশ্ন দেখুন' : 'See another sample question'}</button></div>}
            {active === 2 && <div className="system-content"><div className="service-card"><strong>{bn ? 'পশুচিকিৎসা সহায়তা খুঁজুন' : 'Veterinary support discovery'}</strong><span>{bn ? 'নমুনা এলাকা · ঢাকা উত্তর' : 'Sample location · Dhaka North'}</span><b>{bn ? 'কাছাকাছি ৩টি নমুনা সেবা' : '3 sample services nearby'}</b></div><p className="system-note">{bn ? 'এই ডেমোতে সেবা পাওয়া বা বুকিংয়ের তথ্য সংযুক্ত নয়। জরুরি প্রয়োজনে একজন পশুচিকিৎসকের সঙ্গে যোগাযোগ করুন।' : 'Availability and booking are not connected in this demo. For an urgent concern, contact a qualified veterinarian.'}</p><button className="button">{bn ? 'নমুনা সেবাগুলো দেখুন' : 'View sample services'}</button></div>}
            {active === 3 && <div className="system-content"><div className="record-card"><div className="qr-box">▦</div><div><span>GoruNibondhon ID</span><strong>QR-GB-0248 · Shonar Bangla</strong><small>Sahiwal · 4 years · Sample record</small></div></div><div className="record-grid"><span>{bn ? 'সর্বশেষ ওজন' : 'Last weight'}<strong>382 kg</strong></span><span>{bn ? 'টিকা' : 'Vaccination'}<strong>{bn ? 'হালনাগাদ' : 'Up to date'}</strong></span><span>{bn ? 'স্বাস্থ্য নোট' : 'Health notes'}<strong>2 entries</strong></span></div><p className="system-note">{bn ? 'এই রেকর্ডটি কাল্পনিক। কোনো কৃষক বা প্রাণীর তথ্যভান্ডারের সঙ্গে এটি যুক্ত নয়।' : 'This record is fictional and not connected to a farmer or animal database.'}</p></div>}
            {active === 4 && <div className="system-content"><div className="sensor-grid"><div><Image src="/feature-gorucollar.png" alt="" width={58} height={58} /><strong>GoruCollar</strong><span>{bn ? 'নমুনা অবস্থান সংকেত' : 'Sample location signal'}</span><b>{bn ? 'চারণভূমিতে' : 'In pasture'}</b></div><div><Image src="/feature-farmeye.png" alt="" width={58} height={58} /><strong>FarmEye</strong><span>{bn ? 'নমুনা পরিবেশ তথ্য' : 'Sample environment'}</span><b>{bn ? 'স্বাভাবিক' : 'Comfortable'}</b></div><div><Image src="/feature-iot.png" alt="" width={58} height={58} /><strong>{bn ? 'স্মার্ট বেড়া' : 'Smart fencing'}</strong><span>{bn ? 'সংযুক্ত সুবিধা' : 'Integrated capability'}</span><b>{bn ? 'সিমুলেশন' : 'Simulation'}</b></div></div><p className="system-note">{bn ? 'এগুলো সিমুলেট করা তথ্য। এই পাবলিক ডেমোর সঙ্গে কোনো বাস্তব যন্ত্র যুক্ত নেই।' : 'These are simulated readings. No physical device is connected to this public demo.'}</p></div>}
            {active === 5 && <div className="system-content"><label className="finance-label">{bn ? 'গরুর সংখ্যা' : 'Herd size'}<input type="number" min="1" max="1000" value={herd} onChange={event => setHerd(Number(event.target.value) || 1)} /></label><div className="system-result">৳{(herd * 1850).toLocaleString()}<small>{bn ? 'মাসিক খাবারের আনুমানিক খরচ' : 'illustrative monthly feed cost'}</small></div><p className="system-note">{bn ? 'নমুনা হিসাব: প্রতি গরুর জন্য মাসে ১,৮৫০ টাকা। আপনার নিজের তথ্য দিয়ে পরিকল্পনা বদলে নিন।' : 'Sample assumption: ৳1,850 per animal/month. Replace this with your own planning inputs.'}</p></div>}
          </div>
        </div>
      </section>
    </main>
  );
}
