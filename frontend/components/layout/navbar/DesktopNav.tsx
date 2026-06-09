'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { m, AnimatePresence } from 'framer-motion';
import type { NavItem, MegaMenuSection } from './types';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Export Services', href: '/export-services' },
  { label: 'Quality Assurance', href: '/quality' },
  { label: 'Global Markets', href: '/global-markets' },
  { label: 'Contact Us', href: '/contact' },
];

const megaMenuSections: MegaMenuSection[] = [
  {
    heading: 'Aluminum Products',
    items: [
      { title: 'Aluminum Ingots', href: '/products/aluminum-ingots', description: '99.5% & 99.7% purity, 6-8 kg bars' },
      { title: 'Aluminum Scrap', href: '/products/aluminum-scrap', description: 'All ISRI grades — Tense, Zorba, Taint/Tabor' },
    ],
  },
  {
    heading: 'Food & Agro Products',
    items: [
      { title: 'Jaggery', href: '/products/jaggery', description: 'Solid, powder & cubes — organic options' },
      { title: 'Onion Powder', href: '/products/onion-powder', description: 'Dehydrated, food-grade, fine mesh' },
      { title: 'Onion Flakes', href: '/products/onion-flakes', description: 'Kibbled, minced & flaked forms' },
      { title: 'Garlic Powder', href: '/products/garlic-powder', description: 'Dehydrated, food-grade, premium quality' },
      { title: 'Garlic Flakes', href: '/products/garlic-flakes', description: 'Dehydrated flakes & granules' },
      { title: 'Banana Powder', href: '/products/banana-powder', description: 'Natural, spray-dried, food-grade' },
      { title: 'Tomato Flakes', href: '/products/tomato-flakes', description: 'Dehydrated, industrial grade' },
      { title: 'Sugar', href: '/products/sugar', description: 'ICUMSA 45, S-30, M-30 — export-grade' },
    ],
  },
  {
    heading: 'Grains & Flour',
    items: [
      { title: 'Millet (Bajra) Flour', href: '/products/millet-flour', description: 'Gluten-free, high protein' },
      { title: 'Jowar Flour', href: '/products/jowar-flour', description: 'Sorghum flour, gluten-free' },
      { title: 'Wheat Flour', href: '/products/wheat-flour', description: 'Atta, Maida, Sooji/Rawa' },
      { title: 'Maize Flour', href: '/products/maize-flour', description: 'Corn flour, fine grind, bulk' },
    ],
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -6, transition: { duration: 0.2 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
};

const megaMenuVariants = {
  hidden: { opacity: 0, y: -8, transition: { duration: 0.2 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut', staggerChildren: 0.05 } },
};

const megaMenuItemVariants = {
  hidden: { opacity: 0, y: -4 },
  visible: { opacity: 1, y: 0 },
};

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

function SimpleDropdown({ item, pathname, navLight }: { item: NavItem; pathname: string; navLight?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const children = item.label === 'About Us'
    ? [
        { label: 'Company Overview', href: '/about' },
        { label: 'Infrastructure', href: '/about/infrastructure' },
        { label: 'Leadership', href: '/about/leadership' },
        { label: 'Certifications', href: '/about/certifications' },
      ]
    : item.label === 'Export Services'
    ? [
        { label: 'Export Process', href: '/export-services#export-process' },
        { label: 'Logistics', href: '/export-services#logistics' },
        { label: 'Documentation', href: '/export-services#documentation' },
        { label: 'Incoterms', href: '/export-services#incoterms' },
        { label: 'Payment Terms', href: '/export-services#payment-terms' },
      ]
    : item.label === 'Quality Assurance'
    ? [
        { label: 'Quality Policy', href: '/quality' },
        { label: 'Why Quality Matters', href: '/quality#why-quality-matters' },
        { label: 'Our Certifications', href: '/quality' },
      ]
    : item.label === 'Global Markets'
    ? [
        { label: 'Regions We Serve', href: '/global-markets#regions' },
        { label: 'Logistics Network', href: '/global-markets#logistics' },
        { label: 'Become a Partner', href: '/global-markets' },
      ]
    : [];

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive(pathname, item.href)
            ? 'text-gold-500'
            : navLight
              ? 'text-white/90 hover:text-gold-400'
              : 'text-gray-700 hover:text-gold-600'
        }`}
        aria-expanded={open}
        aria-haspopup={children.length > 0}
      >
        {item.label}
        {children.length > 0 && (
          <svg className="inline-block w-3 h-3 ml-1 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </Link>
      <AnimatePresence>
        {open && children.length > 0 && (
          <m.ul
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute left-0 top-full mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
            role="menu"
          >
            {children.map((child) => (
              <li key={`${child.href}-${child.label}`} role="none">
                <Link
                  href={child.href}
                  className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                    isActive(pathname, child.href)
                      ? 'text-gold-600 bg-gold-50/50 font-medium'
                      : 'text-gray-700 hover:text-gold-600 hover:bg-gray-50'
                  }`}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

function MegaMenu({ pathname, navLight }: { pathname: string; navLight?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive(pathname, '/products')
            ? 'text-gold-500'
            : navLight
              ? 'text-white/90 hover:text-gold-400'
              : 'text-gray-700 hover:text-gold-600'
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        Products
        <svg className="inline-block w-3 h-3 ml-1 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <m.div
            variants={megaMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[860px] bg-white rounded-xl shadow-xl border border-gray-100 p-5 z-50"
            role="menu"
          >
            <div className="grid grid-cols-3 gap-5">
              {megaMenuSections.map((section) => (
                <m.div key={section.heading} variants={megaMenuItemVariants}>
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-gold-600 mb-2.5">
                    {section.heading}
                  </h3>
                  <ul className="space-y-1.5">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`group block p-2 -mx-2 rounded-lg transition-colors duration-150 ${
                            isActive(pathname, item.href)
                              ? 'bg-gold-50/80'
                              : 'hover:bg-gray-50'
                          }`}
                          onClick={() => setOpen(false)}
                        >
                          <span className="block text-sm font-medium text-gray-900 group-hover:text-gold-700 transition-colors duration-150">
                            {item.title}
                          </span>
                          <span className="block text-xs text-gray-500 mt-0.5 leading-snug">
                            {item.description}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </m.div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-center">
              <Link
                href="/products"
                className="text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors duration-150"
                onClick={() => setOpen(false)}
              >
                View All Products →
              </Link>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function DesktopNav({ navLight }: { navLight?: boolean }) {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
      <ul className="flex items-center gap-5">
        {navItems.slice(0, 2).map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive(pathname, item.href)
                  ? 'text-gold-500'
                  : navLight
                    ? 'text-white/90 hover:text-gold-400'
                    : 'text-gray-700 hover:text-gold-600'
              }`}
            >
              {item.label}
              {isActive(pathname, item.href) && (
                <m.span
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gold-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </li>
        ))}

        <MegaMenu pathname={pathname} navLight={navLight} />

        {navItems.slice(3).map((item) => {
          if (item.label === 'Contact Us') {
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(pathname, item.href)
                      ? 'text-gold-500'
                      : navLight
                        ? 'text-white/90 hover:text-gold-400'
                        : 'text-gray-700 hover:text-gold-600'
                  }`}
                >
                  {item.label}
                  {isActive(pathname, item.href) && (
                    <m.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gold-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          }
          return <SimpleDropdown key={item.href} item={item} pathname={pathname} navLight={navLight} />;
        })}
      </ul>

      <Link
        href="/request-quote"
        className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-gold-500 hover:bg-gold-400 active:bg-gold-600 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
      >
        Get Quote
      </Link>
    </nav>
  );
}

export { navItems };
