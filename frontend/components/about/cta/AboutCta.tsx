'use client';

import Link from 'next/link';
import { m, type Variants } from 'framer-motion';
import { aboutCtaContent } from './data';

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function AboutCta() {
  const { headline, description, primaryCta, secondaryCta } = aboutCtaContent;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.04)_0%,_transparent_60%)]" />

      {/* Top gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gold-500/30 to-transparent" />

      {/* Floating accents */}
      <m.div
        className="absolute top-16 right-[18%] w-14 h-14 border border-gold-500/10 rounded-full"
        animate={{ y: [-5, 5, -5], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <m.div
        className="absolute bottom-16 left-[12%] w-12 h-12 border border-gold-500/10 rounded-lg -rotate-12"
        animate={{ rotate: [-12, 5, -12], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-5 lg:px-8 text-center">
        <m.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <m.h2
            variants={fadeUp}
            className="text-[clamp(1.5rem,5.5vw,2.25rem)] sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            {headline}
          </m.h2>

          <m.p
            variants={fadeUp}
            className="mt-5 text-lg text-gray-300/80 leading-relaxed max-w-xl mx-auto"
          >
            {description}
          </m.p>

          <m.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={primaryCta.href}
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded-lg bg-gold-500 text-navy-900 hover:bg-gold-400 transition-all duration-200 shadow-gold-sm hover:shadow-gold-lg w-full sm:w-auto"
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
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded-lg border border-white/20 text-white hover:bg-white/5 hover:border-white/30 transition-all duration-200 w-full sm:w-auto"
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
        </m.div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-gold-500/30 to-transparent" />
    </section>
  );
}