'use client';

import Image from 'next/image';
import { m } from 'framer-motion';
import { IMAGES } from '@/constants';
import { founderContent } from './data';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const metricReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const valueIcons: Record<string, React.ReactNode> = {
  Integrity: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  'Quality Excellence': (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  'Global Reach': (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  'Customer Commitment': (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
};

export default function FounderSection() {
  const { badge, heading, founderName, designation, introduction, additionalContent, quoteTagline, message, values, quote, quoteAttribution, metrics } = founderContent;

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* ─── Image + Content Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14 lg:mb-18">
          {/* Left — Founder Image */}
          <m.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-72 h-[360px] sm:w-80 sm:h-[400px] lg:w-96 lg:h-[480px] shrink-0">
              {/* Floating decorative shapes */}
              <div className="absolute -top-5 -right-5 w-64 h-64 border border-gold-500/10 rounded-full" />
              <div className="absolute -bottom-5 -left-5 w-40 h-40 border border-gold-500/8 rounded-lg -rotate-12" />
              <div className="absolute top-1/2 -left-8 w-16 h-16 border border-gold-500/6 rounded-full" />

              {/* Image frame */}
              <div className="relative w-full h-full rounded-2xl border-2 border-gold-400/30 overflow-hidden bg-navy-900 shadow-xl">
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(212, 175, 55, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 1) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />

                {/* Gold corner accents */}
                <div className="absolute top-3 left-3 w-8 h-0.5 bg-gold-500/60" />
                <div className="absolute top-3 left-3 w-0.5 h-8 bg-gold-500/60" />
                <div className="absolute top-3 right-3 w-8 h-0.5 bg-gold-500/60" />
                <div className="absolute top-3 right-3 w-0.5 h-8 bg-gold-500/60" />
                <div className="absolute bottom-3 left-3 w-8 h-0.5 bg-gold-500/60" />
                <div className="absolute bottom-3 left-3 w-0.5 h-8 bg-gold-500/60" />
                <div className="absolute bottom-3 right-3 w-8 h-0.5 bg-gold-500/60" />
                <div className="absolute bottom-3 right-3 w-0.5 h-8 bg-gold-500/60" />

                {/* Radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.06)_0%,_transparent_60%)]" />

                <Image
                  src={IMAGES.founder}
                  alt={`${founderName} — ${designation}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  priority
                />
              </div>
            </div>
          </m.div>

          {/* Right — Content */}
          <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">
              {badge}
            </m.span>
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
              {heading}
            </m.h2>
            <m.p variants={fadeUp} className="mt-5 text-base text-gray-600 leading-relaxed">
              {introduction}
            </m.p>
            <m.p variants={fadeUp} className="mt-4 text-base text-gray-600 leading-relaxed">
              {additionalContent}
            </m.p>

            {/* Premium quote tagline */}
            <m.div
              variants={fadeUp}
              className="mt-6 relative pl-5 border-l-2 border-gold-500"
            >
              <p className="text-lg font-medium text-navy-900 italic leading-snug">
                {quoteTagline}
              </p>
            </m.div>

            {/* Founder info */}
            <m.div variants={fadeUp} className="mt-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <span className="block text-sm font-bold text-navy-900">{founderName}</span>
                <span className="block text-xs text-gray-500">{designation}</span>
              </div>
            </m.div>

            {/* Values row */}
            <m.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              {values.map((v) => (
                <span key={v.title} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold-50 rounded-full text-xs font-semibold text-gold-700">
                  {valueIcons[v.title]}
                  {v.title}
                </span>
              ))}
            </m.div>
          </m.div>
        </div>

        {/* ─── Trust Metrics ─── */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 rounded-2xl px-8 py-10 lg:px-14 lg:py-12 overflow-hidden"
        >
          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(212, 175, 55, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-gold-500/10 via-transparent to-gold-500/10" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {metrics.map((metric, i) => (
              <m.div
                key={metric.label}
                custom={i}
                variants={metricReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="block text-3xl lg:text-4xl font-bold text-gold-500 leading-none">{metric.value}</span>
                <span className="block mt-2 text-xs font-semibold tracking-widest uppercase text-white/60">{metric.label}</span>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
