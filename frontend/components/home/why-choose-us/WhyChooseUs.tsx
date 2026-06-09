'use client';

import Link from 'next/link';
import { m, type Variants } from 'framer-motion';
import { sectionBadge, sectionHeading, sectionSubheading, whyChooseUs, ctaLabel, ctaHref } from './data';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.25 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function WhyChooseUs() {
  return (
    <section className="bg-navy-900 py-20 sm:py-24 lg:py-32">
      {/* Top gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.03)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section header */}
        <m.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-18"
        >
          <m.span
            variants={fadeUp}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-400 mb-4"
          >
            {sectionBadge}
          </m.span>
          <m.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            {sectionHeading}
          </m.h2>
          <m.p
            variants={fadeUp}
            className="mt-4 text-base text-gray-400 leading-relaxed"
          >
            {sectionSubheading}
          </m.p>
        </m.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {whyChooseUs.map((item, i) => (
            <m.div
              key={item.title}
              custom={i}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:p-7 transition-all duration-300 hover:bg-white/[0.07] hover:border-gold-500/20 hover:-translate-y-0.5"
            >
              {/* Top accent line on hover */}
              <span className="absolute top-0 left-6 right-6 h-px bg-gold-500/0 group-hover:bg-gold-500/40 transition-all duration-300" />

              {/* Icon */}
              <span className="block mb-4 transition-transform duration-300 group-hover:scale-105">
                {item.icon}
              </span>

              {/* Title */}
              <h3 className="text-base font-semibold text-white group-hover:text-gold-400 transition-colors duration-200">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </m.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-14 text-center"
        >
          <Link
            href={ctaHref}
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase rounded-lg bg-gold-500 text-navy-900 hover:bg-gold-400 transition-all duration-200 shadow-gold-sm hover:shadow-gold-lg"
          >
            {ctaLabel}
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
      </div>
    </section>
  );
}
