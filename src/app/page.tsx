'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import InteractivePlayground from '@/components/InteractivePlayground';
import About from '@/components/About';
import Products from '@/components/Products';
import ShowcaseVideo from '@/components/ShowcaseVideo';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import Analytics from '@/components/Analytics';
import Link from 'next/link';
import MotiMiya from '@/components/MotiMiya';

export default function Home() {
  return (
    <>
      <SEO />
      <PerformanceOptimizer />
      <NavbarSpaceFixer />
      <Analytics />
      <main className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Features />
        <section className="product-feature-band" id="dordorshi">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 product-feature-inner">
            <div><p className="eyebrow">NEW · MARKET INTELLIGENCE</p><h2 className="font-bengali">দরদর্শী AI</h2><p className="product-feature-lede">Your Cattle. Its Value. Your Next Move.</p><p className="font-bengali text-white/75 mt-2">দর বুঝুন। দূরদর্শী সিদ্ধান্ত নিন।</p><p className="text-white/70 mt-5 max-w-xl">Build a transparent valuation from your cattle profile, recorded GoruMetrik weight, selling purpose, and market location. Demo figures stay visibly separate from real observations.</p><Link href="/dordorshi" className="inline-flex mt-7 primary-action-light">Explore DorDorshi AI →</Link></div>
            <div className="product-feature-note"><span>01</span><strong>Measured inputs first</strong><p>Recorded, estimated, missing, and user-entered values are labeled in the report.</p><span>02</span><strong>Market data with receipts</strong><p>Comparables and history appear only when genuine observations are available.</p></div>
          </div>
        </section>
        <InteractivePlayground />
        <section className="moti-feature-band" id="moti-miya">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 moti-feature-inner"><div><p className="eyebrow">YOUR FARM GUIDE</p><h2 className="font-bengali">মতি মিয়া AI</h2><p className="text-xl text-[var(--forest)] font-semibold font-bengali">সহজ ভাষায়, সাবধানে, আপনার পাশে।</p><p className="mt-4 text-slate-600 max-w-xl leading-relaxed">Moti Miya helps you organize questions about care, weight, feed cost, market value, and farm tasks. He explains uncertainty and routes concerning symptoms to PraniCare or a qualified veterinarian.</p></div><MotiMiya embedded /></div>
        </section>
        <About />
        <Products />
        <ShowcaseVideo />
        <Contact />
        <Footer />
        <MotiMiya />
      </main>
    </>
  );
}

// Temporary layout helper component to ensure there's no overlapping header
const NavbarSpaceFixer = () => {
  return null;
};

