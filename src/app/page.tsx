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
        <InteractivePlayground />
        <About />
        <Products />
        <ShowcaseVideo />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

// Temporary layout helper component to ensure there's no overlapping header
const NavbarSpaceFixer = () => {
  return null;
};

