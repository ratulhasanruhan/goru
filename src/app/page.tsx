'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
