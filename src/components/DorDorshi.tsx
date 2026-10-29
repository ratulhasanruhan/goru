'use client';

import Link from 'next/link';
import { useState } from 'react';

type Profile = { name: string; breed: string; weight: number; source: string; condition: string };

const profiles: Profile[] = [
  { name: 'লাল মিয়া', breed: 'শাহিওয়াল ষাঁড়', weight: 420, source: 'GoruMetrik demo profile', condition: 'ভালো' },
  { name: 'সুন্দরী', breed: 'হোলস্টেইন ফ্রিজিয়ান গাভী', weight: 380, source: 'GoruMetrik demo profile', condition: 'ভালো' },
  { name: 'নিজের প্রোফাইল', breed: 'তথ্য দিন', weight: 0, source: 'User-entered profile', condition: 'নির্বাচন করুন' },
];

export default function DorDorshi() {
  const [profileIndex, setProfileIndex] = useState(0);
  const [location, setLocation] = useState('ঢাকা');
  const [purpose, setPurpose] = useState('কোরবানির বিক্রি');
  const [showReport, setShowReport] = useState(false);
  const profile = profiles[profileIndex];
  const isDemo = profileIndex < 2;

  return (
    <main className="dordorshi-page">
      <section className="dordorshi-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="dordorshi-back">← GoruSheba</Link>
          <div className="max-w-3xl mt-16">
            <p className="eyebrow">MARKET INTELLIGENCE · DEMO MODE</p>
            <h1 className="dordorshi-title font-bengali">দরদর্শী AI</h1>
            <p className="dordorshi-lede">Your Cattle. Its Value. Your Next Move.</p>
            <p className="dordorshi-bn font-bengali">দর বুঝুন। দূরদর্শী সিদ্ধান্ত নিন।</p>
            <p className="max-w-xl mt-6 text-white/75 leading-relaxed">A transparent valuation workspace built around your cattle profile. Sample figures are clearly marked until verified market observations are connected.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="dordorshi-grid">
          <div className="dordorshi-form-panel">
            <div className="flex items-start justify-between gap-4 mb-8">
              <div><p className="eyebrow">PROFILE INPUT</p><h2 className="text-2xl font-bold text-[var(--forest)] font-bengali">রিপোর্ট শুরু করুন</h2></div>
              <span className="demo-badge">DEMO DATA</span>
            </div>
            <label className="form-label" htmlFor="profile">Cattle profile</label>
            <select id="profile" value={profileIndex} onChange={(event) => { setProfileIndex(Number(event.target.value)); setShowReport(false); }} className="form-control">
              {profiles.map((item, index) => <option key={item.name} value={index}>{item.name} · {item.breed}</option>)}
            </select>
            <div className="profile-readout">
              <div><span>Name</span><strong>{profile.name}</strong></div>
              <div><span>Breed</span><strong>{profile.breed}</strong></div>
              <div><span>Weight</span><strong>{profile.weight ? `${profile.weight} kg` : 'Missing'}</strong></div>
              <div><span>Weight source</span><strong>{profile.source}</strong></div>
              <div><span>Condition</span><strong>{profile.condition}</strong></div>
              <div><span>Measurement date</span><strong>{isDemo ? 'Demo date unavailable' : 'Enter date'}</strong></div>
            </div>
            <label className="form-label" htmlFor="location">Market location</label>
            <input id="location" value={location} onChange={(event) => setLocation(event.target.value)} className="form-control" placeholder="e.g. Dhaka" />
            <label className="form-label" htmlFor="purpose">Selling purpose</label>
            <select id="purpose" value={purpose} onChange={(event) => setPurpose(event.target.value)} className="form-control"><option>কোরবানির বিক্রি</option><option>দুধের খামার</option><option>এখন বিক্রি নয়, ধরে রাখব</option></select>
            <button type="button" onClick={() => setShowReport(true)} disabled={!profile.weight} className="primary-action">Generate transparent report</button>
            {!profile.weight && <p className="form-hint">Add a verified weight in your cattle profile before generating a valuation.</p>}
          </div>

          <div className="dordorshi-report-panel">
            {!showReport ? <div className="empty-report"><span className="text-5xl">৳</span><h2 className="font-bengali">আপনার রিপোর্ট এখানে দেখা যাবে</h2><p>Select a demo profile to preview the report. No live price or forecast is claimed.</p></div> : <Report profile={profile} location={location} purpose={purpose} />}
          </div>
        </div>
      </section>
    </main>
  );
}

function Report({ profile, location, purpose }: { profile: Profile; location: string; purpose: string }) {
  return <div>
    <div className="flex items-start justify-between gap-4 mb-7"><div><p className="eyebrow">VALUATION SUMMARY</p><h2 className="text-3xl font-bold text-[var(--forest)]">{profile.name}</h2><p className="text-slate-500">{profile.breed} · {location} · {purpose}</p></div><span className="demo-badge">SAMPLE FIGURES</span></div>
    <div className="valuation-box"><span>Estimated range · illustrative only</span><strong>৳ ১,৮০,০০০ – ২,২৫,০০০</strong><p>Derived from the demo weight profile only. A live cattle market feed and verified comparable observations are not connected.</p></div>
    <div className="report-section"><h3>Inputs used</h3><div className="report-table"><div><span>Weight</span><strong>{profile.weight} kg · GoruMetrik demo estimate</strong></div><div><span>Animal condition</span><strong>{profile.condition} · profile record</strong></div><div><span>Market location</span><strong>{location} · user-entered</strong></div></div></div>
    <div className="report-section"><h3>Comparable prices</h3><div className="unavailable-state"><strong>Unavailable in demo mode</strong><p>No genuine market observations are connected, so no comparison or price-history chart is shown.</p></div></div>
    <div className="report-section"><h3>Sell now vs keep longer</h3><div className="scenario-grid"><div><span>Sell now</span><strong>Uses current profile</strong><small>No forecast claimed</small></div><div><span>Keep longer</span><strong>Needs feed cost + weight change</strong><small>Scenario unavailable without verified inputs</small></div></div></div>
    <button type="button" onClick={() => window.print()} className="secondary-action">Print / save summary</button>
  </div>;
}