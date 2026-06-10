'use client';

import { useEffect, useCallback, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { m, AnimatePresence } from 'framer-motion';
import { socialLinks } from '@/constants';
import { ChevronDown } from 'lucide-react';
import type { NavItem } from './types';
import { navItems } from './DesktopNav';

interface MobileLink {
  label: string;
  href: string;
  children?: MobileLink[];
}

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

const productLinks: { heading: string; links: MobileLink[] }[] = [
  {
    heading: 'Aluminum Products',
    links: [
      { label: 'Aluminum Ingots', href: '/products/aluminum-ingots' },
      {
        label: 'Aluminum Scrap',
        href: '/products/aluminum-scrap',
        children: [
          { label: 'Imported 6063 Aluminum Scrap', href: '/products/aluminum-scrap/imported-6063' },
          { label: 'Soft Shiny Aluminum Wire Scrap', href: '/products/aluminum-scrap/soft-shiny-wire' },
          { label: 'Centring 6061 Aluminum Scrap', href: '/products/aluminum-scrap/centring-6061' },
          { label: 'Auto Parts Casting Scrap', href: '/products/aluminum-scrap/auto-parts-casting' },
          { label: 'Local Aluminum Sections Scrap', href: '/products/aluminum-scrap/local-sections' },
        ],
      },
    ],
  },
  {
    heading: 'Food & Agro Products',
    links: [
      { label: 'Jaggery', href: '/products/jaggery' },
      { label: 'Onion Powder', href: '/products/onion-powder' },
      { label: 'Onion Flakes', href: '/products/onion-flakes' },
      { label: 'Garlic Powder', href: '/products/garlic-powder' },
      { label: 'Garlic Flakes', href: '/products/garlic-flakes' },
      { label: 'Banana Powder', href: '/products/banana-powder' },
      { label: 'Tomato Flakes', href: '/products/tomato-flakes' },
      { label: 'Sugar', href: '/products/sugar' },
    ],
  },
  {
    heading: 'Grains & Flour',
    links: [
      { label: 'Millet (Bajra) Flour', href: '/products/millet-flour' },
      { label: 'Jowar Flour', href: '/products/jowar-flour' },
      { label: 'Wheat Flour', href: '/products/wheat-flour' },
      { label: 'Maize Flour', href: '/products/maize-flour' },
    ],
  },
];

function MobileNavLink({ link, pathname, onClose }: { link: MobileLink; pathname: string; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = link.children && link.children.length > 0;

  return (
    <li>
      <Link
        href={link.href}
        className={`flex items-center justify-between px-4 py-2 rounded-lg text-sm transition-colors duration-150 ${
          isActive(pathname, link.href)
            ? 'bg-gold-50/50 text-gold-600 font-medium'
            : 'text-gray-600 hover:text-gold-600 hover:bg-gray-50'
        }`}
        onClick={hasChildren ? (e) => { e.preventDefault(); setExpanded(!expanded); } : onClose}
      >
        {link.label}
        {hasChildren && (
          <ChevronDown
            className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
              expanded ? 'rotate-180' : ''
            }`}
          />
        )}
      </Link>
      {hasChildren && expanded && (
        <ul className="ml-4 mt-1 space-y-0.5 border-l-2 border-gold-200 pl-3">
          {link.children!.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className={`block px-3 py-1.5 rounded-lg text-sm transition-colors duration-150 ${
                  isActive(pathname, child.href)
                    ? 'bg-gold-50/50 text-gold-600 font-medium'
                    : 'text-gray-500 hover:text-gold-600 hover:bg-gray-50'
                }`}
                onClick={onClose}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [open, onClose]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-navy-900/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <m.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onKeyDown={handleKeyDown}
          >
            <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
              <span className="text-lg font-bold text-navy-900">RMRP Global Trade</span>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-gray-500 hover:text-gray-800 transition-colors"
                aria-label="Close navigation menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="px-5 py-6" aria-label="Mobile navigation">
              <ul className="space-y-1">
                {navItems.map((item: NavItem, i: number) => (
                  <m.li
                    key={item.href}
                    custom={i}
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-150 ${
                        isActive(pathname, item.href)
                          ? 'bg-gold-50 text-gold-700'
                          : 'text-gray-800 hover:bg-gray-50 hover:text-gold-600'
                      }`}
                    >
                      {item.label}
                    </Link>

                    {item.label === 'Products' && (
                      <div className="ml-4 mt-1 mb-2 space-y-3">
                        {productLinks.map((section) => (
                          <div key={section.heading}>
                            <h4 className="text-xs font-semibold tracking-wider uppercase text-gold-600 px-4 py-1.5">
                              {section.heading}
                            </h4>
                            <ul className="space-y-0.5">
                              {section.links.map((link) => (
                                <MobileNavLink
                                  key={link.href}
                                  link={link}
                                  pathname={pathname}
                                  onClose={onClose}
                                />
                              ))}
                            </ul>
                          </div>
                        ))}
                        <Link
                          href="/products"
                          className="block px-4 py-2 text-sm font-medium text-gold-600 hover:text-gold-700"
                        >
                          View All Products →
                        </Link>
                      </div>
                    )}
                  </m.li>
                ))}
              </ul>

              <m.div
                custom={navItems.length}
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
                className="mt-8 pt-6 border-t border-gray-100 space-y-4"
              >
                <Link
                  href="/request-quote"
                  className="block w-full text-center px-5 py-3 text-sm font-semibold tracking-wide uppercase text-white bg-gold-500 hover:bg-gold-400 rounded-lg transition-colors duration-200"
                >
                  Request a Quotation
                </Link>

                <div className="space-y-2 px-1">
                  <a
                    href="tel:+919922167039"
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-gold-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    +91-9922167039
                  </a>
                  <a
                    href="mailto:info@rmrpglobaltrade.com"
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-gold-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    info@rmrpglobaltrade.com
                  </a>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  {socialLinks.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 text-gray-500 hover:bg-gold-50 hover:text-gold-600 transition-all duration-200"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </m.div>
            </nav>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
