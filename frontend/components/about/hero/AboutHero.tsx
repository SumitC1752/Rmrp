'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import { aboutHeroContent } from './data';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function AboutHero() {
  const { breadcrumbs, heading, subheading } = aboutHeroContent;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 py-16 sm:py-20 lg:py-28">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(212,175,55,0.03)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,175,55,0.02)_0%,_transparent_50%)]" />

      {/* Geometric accents */}
      <m.div
        className="absolute top-16 right-[20%] w-24 h-24 border border-gold-500/10 rounded-full"
        animate={{ scale: [1, 1.06, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <m.div
        className="absolute bottom-12 left-[10%] w-12 h-12 border border-gold-500/10 rounded-lg rotate-12"
        animate={{ rotate: [12, 20, 12], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <m.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Breadcrumb */}
          <m.nav
            variants={fadeUp}
            className="flex items-center gap-2 text-sm text-gray-400 mb-8"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && (
                  <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gold-400 transition-colors duration-200">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold-400">{crumb.label}</span>
                )}
              </span>
            ))}
          </m.nav>

          {/* Heading */}
          <m.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
          >
            {heading}
          </m.h1>

          {/* Subheading */}
          <m.p
            variants={fadeUp}
            className="mt-5 text-lg sm:text-xl text-gray-300/80 leading-relaxed max-w-2xl"
          >
            {subheading}
          </m.p>
        </m.div>
      </div>
    </section>
  );
}
