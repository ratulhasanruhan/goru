'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  nameBn: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const { language } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link 
            href="/" 
            className="hover:text-green-600 transition-colors"
            aria-label={language === 'bn' ? 'হোম' : 'Home'}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {item.href ? (
              <Link 
                href={item.href} 
                className="hover:text-green-600 transition-colors"
                aria-label={language === 'bn' ? item.nameBn : item.name}
              >
                <span className={language === 'bn' ? 'font-bengali' : ''}>
                  {language === 'bn' ? item.nameBn : item.name}
                </span>
              </Link>
            ) : (
              <span 
                className="text-gray-900 font-medium"
                aria-current="page"
              >
                <span className={language === 'bn' ? 'font-bengali' : ''}>
                  {language === 'bn' ? item.nameBn : item.name}
                </span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
