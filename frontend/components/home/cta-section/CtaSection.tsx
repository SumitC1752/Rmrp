'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import { ctaContent } from './data';

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

export default function CtaSection() {
  const { headline, description, primaryCta, secondaryCta } = ctaContent;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-20 sm:py-24 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.04)_0%,_transparent_60%)]" />

      {/* Decorative gold line top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-gold-500/40 to-transparent" />

      {/* Floating geometric accent */}
      <m.div
        className="absolute top-12 left-[15%] w-16 h-16 border border-gold-500/10 rounded-full"
        animate={{ y: [-6, 6, -6], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <m.div
        className="absolute bottom-16 right-[12%] w-10 h-10 border border-gold-500/10 rounded-lg rotate-45"
        animate={{ y: [4, -4, 4], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <m.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Headline */}
          <m.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            {headline}
          </m.h2>

          {/* Description */}
          <m.p
            variants={fadeUp}
            className="mt-5 text-lg text-gray-300/80 leading-relaxed max-w-xl mx-auto"
          >
            {description}
          </m.p>

          {/* Buttons */}
          <m.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={primaryCta.href}
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded-lg bg-gold-500 text-navy-900 hover:bg-gold-400 transition-all duration-200 shadow-gold-sm hover:shadow-gold-lg"
            >
              {primaryCta.label}
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={secondaryCta.href}
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded-lg border border-white/20 text-white hover:bg-white/5 hover:border-white/30 transition-all duration-200"
            >
              {secondaryCta.label}
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </m.div>

          {/* Subtle bottom trust note */}
          <m.p
            variants={fadeUp}
            className="mt-8 text-xs text-gray-500/60"
          >
            No obligation. Free consultation. Response within 24 hours.
          </m.p>
        </m.div>
      </div>

      {/* Decorative gold line bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-t from-gold-500/40 to-transparent" />
    </section>
  );
}
