'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import Analytics from '@/components/Analytics';

export default function Home() {
  return (
    <>
      <SEO />
      <PerformanceOptimizer />
      <Analytics />
      <main className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Features />
        <About />
        <Products />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
