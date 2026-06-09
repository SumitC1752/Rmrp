'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import DesktopNav from './DesktopNav';

const MobileNav = dynamic(() => import('./MobileNav'), { ssr: false });

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isScrolled } = useScrollPosition();

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="relative z-10">
        {/* Top bar */}
        <div
          className={`hidden lg:flex items-center justify-between px-6 h-10 text-xs transition-all duration-300 ${
            isScrolled
              ? 'text-gray-500 border-b border-gray-100'
              : 'text-white/70 border-b border-white/10'
          }`}
        >
          <div className="flex items-center gap-5">
            <a href="tel:+919922167039" className="hover:text-gold-400 transition-colors">
              +91-9922167039
            </a>
            <a href="mailto:info@rmrpglobaltrade.com" className="hover:text-gold-400 transition-colors">
              info@rmrpglobaltrade.com
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/downloads" className="hover:text-gold-400 transition-colors">
              Downloads
            </Link>
            <span className="text-white/20">|</span>
            <span className="text-gold-400 font-medium">EN</span>
          </div>
        </div>

        {/* Main header */}
        <div
          className={`flex items-center justify-between px-4 lg:px-5 h-16 lg:h-[72px] transition-all duration-300 ${
            isScrolled ? '' : ''
          }`}
        >
          <Link href="/" className="flex-shrink-0" aria-label="RMRP Global Trade — Home">
            <span
              className={`text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-navy-900' : 'text-white'
              }`}
            >
              RMRP
              <span className={`font-light transition-colors duration-300 ${
                isScrolled ? 'text-gray-400' : 'text-white/60'
              }`}>
                {' '}Global Trade
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <DesktopNav navLight={!isScrolled} />

          {/* Mobile hamburger + CTA */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/request-quote"
              className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'bg-gold-500 text-white hover:bg-gold-400'
                  : 'bg-gold-500/90 text-white hover:bg-gold-500'
              }`}
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className={`p-2 -mr-2 transition-colors ${
                isScrolled ? 'text-navy-900' : 'text-white'
              }`}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={closeMobile} />
    </header>
  );
}
