'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const links = [
  ['প্ল্যাটফর্ম', 'Platform', '/platform'],
  ['পণ্যসমূহ', 'Products', '/products'],
  ['ইন্টার‍্যাক্টিভ ডেমো', 'Interactive Demo', '/demo'],
  ['ভবিষ্যৎ ভাবনা', 'Future Vision', '/future'],
  ['আমাদের কথা', 'About', '/about'],
];

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image src="/gorusheba-logo-new.png" alt="GoruSheba" width={170} height={52} className="brand-logo" />
        </Link>
        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {links.map(([bn, en, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{language === 'bn' ? bn : en}</Link>)}
          <Link href="/contact" className="nav-contact" onClick={() => setOpen(false)}>{language === 'bn' ? 'যোগাযোগ' : 'Contact Us'}</Link>
        </nav>
        <div className="header-actions">
          <button className="language-toggle" onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')} aria-label="Switch language">
            <span className={language === 'bn' ? 'language-active' : ''}>বাংলা</span><span className={language === 'en' ? 'language-active' : ''}>EN</span>
          </button>
          <a className="button button-small" href="https://app.goru.help/" target="_blank" rel="noreferrer">{language === 'bn' ? 'অ্যাপ নিন' : 'Get the App'}</a>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">☰</button>
        </div>
      </div>
    </header>
  );
}
