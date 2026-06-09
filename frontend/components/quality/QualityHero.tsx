'use client';

import Link from 'next/link';
import { m } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function QualityHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(212,175,55,0.03)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,175,55,0.02)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,1) 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
      <m.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-7xl px-5 lg:px-8"
      >
        <m.nav variants={fadeUp} className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
          {[
            { label: 'Home', href: '/' },
            { label: 'Quality Assurance' },
          ].map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i > 0 && <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-gold-400 transition-colors duration-200">{crumb.label}</Link>
              ) : (
                <span className="text-gold-400">{crumb.label}</span>
              )}
            </span>
          ))}
        </m.nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-400 mb-4">Quality Assurance</m.span>
            <m.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Quality Is Not an Option — It Is Our Standard
            </m.h1>
            <m.p variants={fadeUp} className="mt-5 text-lg sm:text-xl text-gray-300/80 leading-relaxed">
              Every shipment — whether aluminum, processed food, or agro commodity — undergoes rigorous quality checks at every stage. From raw material verification to final dispatch inspection, we leave nothing to chance.
            </m.p>
            <m.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase rounded-lg bg-gold-500 text-navy-900 hover:bg-gold-400 transition-all duration-200 shadow-gold-sm hover:shadow-gold-lg"
              >
                Request a Quote
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase rounded-lg border border-white/20 text-white hover:bg-white/5 hover:border-white/30 transition-all duration-200"
              >
                Contact Our Team
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </m.div>
          </div>

          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Products Tested', value: '50+' },
              { label: 'Inspection Stages', value: '5' },
              { label: 'Years of Excellence', value: '15+' },
              { label: 'Certifications Held', value: '8+' },
            ].map((stat) => (
              <div key={stat.label} className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:p-8 text-center">
                <span className="block text-3xl lg:text-4xl font-bold text-gold-500">{stat.value}</span>
                <span className="block mt-2 text-sm text-gray-400 font-medium">{stat.label}</span>
              </div>
            ))}
          </m.div>
        </div>
      </m.div>
    </section>
  );
}
