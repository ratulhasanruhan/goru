'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MotiGuide from '@/components/MotiGuide';
import ShowcaseVideo from '@/components/ShowcaseVideo';
import { useLanguage } from '@/contexts/LanguageContext';

const features = [
  ['DorDorshi AI', 'Valuation and market intelligence built from transparent inputs.', 'Market', '/feature-dordorshi.png'],
  ['GoruMetrik', 'Measurement-based cattle weight estimation, with uncertainty made visible.', 'Estimate', '/feature-gorumetrik.png'],
  ['Moti Mia', 'A friendly Bangla assistant for everyday cattle-care questions.', 'Assistant', '/feature-moti-mia.png'],
  ['PraniCare', 'Find the right veterinary support when a question needs a professional.', 'Care', '/feature-pranicare.png'],
  ['PranProhori', 'A connected ecosystem for cattle safety, farm conditions and future sensing.', 'IoT', '/feature-pranprohori.png'],
  ['GoruNibondhon', 'QR identity and digital cattle records that stay useful over time.', 'Records', '/feature-gorunibondhon.png'],
  ['Farm Finance', 'Feed planning, expense tracking and illustrative profitability scenarios.', 'Planning', '/feature-farm-finance.png'],
  ['PranProhori Bolus', 'Research-stage internal cattle-health sensing for a healthier tomorrow.', 'Research', '/feature-pranbolus.png'],
];

export default function RedesignHome() {
  const { language } = useLanguage();
  const bn = language === 'bn';
  return <><Header /><main>
    <section className="hero-modern"><div className="shell hero-grid">
      <div className="hero-copy"><p className="eyebrow">{bn ? 'বাংলাদেশের জন্য AI + IoT' : 'AI + IoT FOR BANGLADESH'}</p><h1>{bn ? <>স্মার্ট গরুর যত্ন।<br /><em>শক্তিশালী খামার।</em></> : <>Smarter Cattle Care.<br /><em>Stronger Farms.</em></>}</h1>
        <p className="hero-lede">{bn ? 'কৃত্রিম বুদ্ধিমত্তার গরুর তথ্য থেকে সংযুক্ত খামার পর্যবেক্ষণ—গরুসেবা আপনাকে আরও ভালো সিদ্ধান্ত নিতে সাহায্য করে।' : 'From AI-powered cattle insights to connected farm monitoring, GoruSheba helps Bangladeshi farmers make better-informed livestock decisions.'}</p>
        <div className="hero-actions"><Link href="/platform" className="button">{bn ? 'প্ল্যাটফর্ম দেখুন' : 'Explore the Platform'} <span>→</span></Link><Link href="/demo" className="button button-quiet">{bn ? 'ইন্টার‍্যাক্টিভ ডেমো দেখুন' : 'Try the Interactive Demo'}</Link></div>
        <a className="play-store-cta" href="https://play.google.com/store/apps/details?id=com.appibrium.gorusheba" target="_blank" rel="noreferrer" aria-label={bn ? 'Google Play থেকে গরুসেবা অ্যাপ ডাউনলোড করুন' : 'Download GoruSheba from Google Play'}>
          <Image src="/Gorusheba_Playstore.webp" alt="" width={210} height={62} />
          <span>{bn ? 'খামার ব্যবস্থাপনা অ্যাপ ডাউনলোড করুন' : 'Download the farm management app'}</span>
        </a>
        <div className="trust-row"><span>● {bn ? 'নমুনা ডেটা স্পষ্টভাবে চিহ্নিত' : 'Sample-led product design'}</span><span>● {bn ? 'খামারের বাস্তব সিদ্ধান্তের জন্য' : 'Built for real farm decisions'}</span></div>
      </div>
      <div className="hero-visual hero-moti-visual"><div className="hero-glow" /><div className="moti-hero-ring" /><div className="hero-spark spark-one" /><div className="hero-spark spark-two" /><Image className="hero-moti" src="/moti-mia-guide.png" alt="গরুর তথ্য হাতে মতি মিয়া" width={500} height={650} priority /><div className="hero-data-card"><span>● ডেমো প্রোফাইল</span><strong>শোনার বাংলা</strong><small>আজকের আনুমানিক ওজন · ৩৮২ কেজি</small><Link href="/demo">ডেমো দেখুন →</Link></div><div className="hero-badge"><span>✦</span><div><strong>মতি মিয়া</strong><small>আপনার পাশে আছি</small></div></div></div>
    </div></section>
    <section className="section section-soft"><div className="shell split-intro"><div><p className="eyebrow">{bn ? 'একটি ব্যবহারিক প্ল্যাটফর্ম' : 'A PRACTICAL PLATFORM'}</p><h2>{bn ? <>খামারের প্রতিটি সিদ্ধান্ত,<br /><span>একসাথে।</span></> : <>Every farm decision,<br /><span>connected.</span></>}</h2></div><p>{bn ? 'কৃষকের শুধু একটি ড্যাশবোর্ড নয়—প্রাণী বোঝা, চিকিৎসা খোঁজা, খরচ পরিকল্পনা এবং খামার নিরাপদ রাখার সহজ উপায় দরকার।' : 'Farmers need more than a dashboard. They need a clearer way to understand an animal, find care, plan costs, and keep the farm safe.'}</p></div></section>
    <section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">{bn ? 'প্ল্যাটফর্মের সুবিধা' : 'THE PLATFORM'}</p><h2>{bn ? <>খামারে সত্যিই কাজে লাগে<br />এমন টুল।</> : <>Tools that earn their place<br />on the farm.</>}</h2></div><Link href="/platform" className="text-link">{bn ? 'প্ল্যাটফর্ম দেখুন →' : 'View the platform →'}</Link></div><div className="feature-grid">{features.map(([name, text, tag, icon], i) => <Link href={i === 0 ? '/dordorshi' : '/demo'} className={`feature-card feature-${i}`} key={name}><span className="feature-tag">{tag}</span><div className="feature-icon"><Image src={icon} alt="" width={76} height={76} /></div><h3>{bn ? ['দরদর্শী AI', 'গরুমেট্রিক', 'মতি মিয়া', 'প্রাণীকেয়ার', 'প্রাণ প্রহরী', 'গরু নিবন্ধন', 'ফার্ম ফাইন্যান্স', 'প্রাণবোলাস'][i] : name}</h3><p>{bn ? ['স্বচ্ছ তথ্যের ভিত্তিতে গরুর মূল্য ও বাজার বিশ্লেষণ।', 'মাপের ভিত্তিতে গরুর ওজনের আনুমানিক হিসাব।', 'প্রতিদিনের গরুর যত্নের জন্য বন্ধুসুলভ বাংলা সহকারী।', 'প্রয়োজনে পশুচিকিৎসকের সহায়তা খুঁজে নিন।', 'গরু, খামার ও নিরাপত্তার সংযুক্ত ইকোসিস্টেম।', 'QR পরিচয় ও ডিজিটাল গরুর রেকর্ড।', 'খাবার, খরচ ও খামারের পরিকল্পনা।', 'গরুর ভেতরের স্বাস্থ্য সেন্সিংয়ের গবেষণা ধারণা।'][i] : text}</p><span className="card-arrow">↗</span></Link>)}</div></div></section>
    <section className="section ecosystem-section"><div className="shell ecosystem-grid"><div><p className="eyebrow">{bn ? 'সংযুক্ত গবাদিপশু ব্যবস্থাপনা' : 'CONNECTED LIVESTOCK'}</p><h2>{bn ? <>পরিচিত হোন <span>প্রাণ প্রহরীর সঙ্গে।</span></> : <>Meet <span>PranProhori.</span></>}</h2><p className="body-copy">{bn ? 'গরু, খামারের পরিবেশ ও নিরাপত্তা—সবকিছুকে একটি পরিষ্কার কাঠামোর মধ্যে আনে প্রাণ প্রহরী। প্রতিটি অংশের বর্তমান অবস্থা স্পষ্টভাবে জানানো হয়।' : 'The umbrella for connected livestock monitoring and farm safety. One clear system, with honest readiness labels for every component.'}</p><div className="ecosystem-list"><div><b>০১</b><span><strong>GoruCollar</strong>{bn ? ' গরুর অবস্থান ও পরিধানযোগ্য সেন্সরের তথ্য।' : ' Animal-level location and supported wearable sensors.'}</span></div><div><b>০২</b><span><strong>FarmEye</strong>{bn ? ' খামারের পরিবেশ পর্যবেক্ষণ।' : ' Farm environment monitoring with supported sensors.'}</span></div><div><b>০৩</b><span><strong>{bn ? 'স্মার্ট বেড়া' : 'Smart fencing'}</strong>{bn ? ' সীমানা পর্যবেক্ষণের সংযুক্ত সুবিধা—আলাদা কোনো যন্ত্র নয়।' : ' An integrated boundary-monitoring capability—not a standalone device.'}</span></div></div><Link href="/products" className="button button-dark">{bn ? 'ইকোসিস্টেমটি দেখুন' : 'Explore the ecosystem'}</Link></div><div className="ecosystem-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="device device-collar"><Image src="/gorucollar-device.png" alt="GoruCollar device" width={90} height={90} /><small>GoruCollar</small></div><div className="device device-eye"><Image src="/farmeye-device.png" alt="FarmEye monitoring device" width={92} height={72} /><small>FarmEye</small></div><div className="center-node">⌁<small>PranProhori</small></div></div></div></section>
    <DemoPreview />
    <MotiGuide />
    <ShowcaseVideo />
    <section className="section future-strip"><div className="shell future-grid"><div><p className="eyebrow">{bn ? 'আগামীর ভাবনা' : 'WHAT COMES NEXT'}</p><h2>{bn ? <>আজকের জন্য উপকারী।<br /><span>আগামীর জন্য প্রস্তুত।</span></> : <>Useful now.<br /><span>Ready for tomorrow.</span></>}</h2></div><div className="future-cards"><div><span className="status-pill">Research · গবেষণা</span><h3>PranProhori Bolus</h3><p>{bn ? 'গরুর ভেতরের স্বাস্থ্য তথ্যের জন্য গবেষণাধীন সেন্সর ধারণা।' : 'A research-stage concept for internal cattle-health sensing.'}</p><Image src="/pranbolus-logo.png" alt="PranBolus" width={180} height={90} className="bolus-logo" /></div><div><span className="status-pill">Proposed partnership</span><h3>{bn ? 'গবাদি পশুর বিমা' : 'Livestock insurance'}</h3><p>{bn ? 'অংশীদার বিমা প্রতিষ্ঠানের জন্য ভবিষ্যৎ অংশীদারিত্বের ধারণা।' : 'A future partnership concept using animal records and finance data.'}</p></div></div></div></section>
    <section className="section cta-section"><div className="shell cta-card"><div><p className="eyebrow">START EXPLORING</p><h2>Better information.<br />Better farm decisions.</h2></div><div className="hero-actions"><Link href="/demo" className="button">Explore the demo →</Link><Link href="/contact" className="button button-light">Talk to the team</Link></div></div></section>
  </main><Footer /></>;
}

function DemoPreview() {
  const [tab, setTab] = useState('Weight Estimation');
  const [herd, setHerd] = useState(8);
  const tabs = ['Weight Estimation', 'Moti Mia', 'Farm Finance'];
  return <section className="section demo-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">EXPLORE IN ACTION</p><h2>Small demos.<br />Useful answers.</h2></div><Link href="/demo" className="text-link">Open full demo →</Link></div><div className="demo-window"><div className="demo-tabs">{tabs.map(t => <button key={t} className={tab === t ? 'active' : ''} onClick={() => setTab(t)}>{t}</button>)}</div><div className="demo-content">{tab === 'Weight Estimation' && <><div className="demo-number">382 <small>kg estimated weight</small></div><p>Illustrative result from sample measurements. This is not a live model prediction.</p><div className="range"><span>Chest girth</span><input type="range" min="140" max="220" defaultValue="184" /><b>184 cm</b></div></>}{tab === 'Moti Mia' && <><div className="chat-bubble">মতি মিয়া, গরুর খাবার নিয়ে পরামর্শ চাই।</div><div className="chat-bubble reply">অবশ্যই! খাবারের পরিমাণ ও গরুর ওজন জানালে একটি নমুনা পরিকল্পনা দেখাতে পারি। গুরুতর লক্ষণে পশুচিকিৎসকের পরামর্শ নিন।</div></>}{tab === 'Farm Finance' && <><label className="finance-label">Herd size <input type="number" min="1" max="1000" value={herd} onChange={e => setHerd(Number(e.target.value) || 1)} /></label><div className="demo-number">৳{(herd * 1850).toLocaleString()} <small>illustrative monthly feed cost</small></div><p>Sample assumption: ৳1,850 per animal/month. Edit this in the full demo.</p></>}</div><div className="demo-disclaimer">INTERACTIVE DEMO · SAMPLE DATA · Not a live reading or professional advice</div></div></div></section>;
}
