'use client';

import Link from 'next/link';
import { m } from 'framer-motion';

export default function GlobalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.04)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-gold-500/30 to-transparent" />
      <m.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="relative mx-auto max-w-3xl px-5 lg:px-8 text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Partner with RMRP Global Trade
        </h2>
        <p className="mt-5 text-lg text-gray-300/80 leading-relaxed max-w-xl mx-auto">
          Whether you are looking for a reliable supply source or interested in becoming a distribution partner in your region, we are ready to explore opportunities together.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded-lg bg-gold-500 text-navy-900 hover:bg-gold-400 transition-all duration-200 shadow-gold-sm hover:shadow-gold-lg"
          >
            Request a Quote
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded-lg border border-white/20 text-white hover:bg-white/5 hover:border-white/30 transition-all duration-200"
          >
            Become a Distribution Partner
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </m.div>
    </section>
  );
}
