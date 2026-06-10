'use client';

import Link from 'next/link';
import { m, type Variants } from 'framer-motion';

export default function FoodAgroCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.04)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-gold-500/30 to-transparent" />
      <m.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="relative mx-auto max-w-3xl px-5 lg:px-8 text-center"
      >
        <h2 className="text-[clamp(1.5rem,5.5vw,2.25rem)] sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Source Your Food &amp; Agro Products
        </h2>
        <p className="mt-5 text-[15px] sm:text-lg text-gray-300/80 leading-relaxed max-w-xl mx-auto">
          Contact our trade desk for pricing, specifications, or to discuss your bulk supply requirements. Response within 24 hours.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded-lg bg-gold-500 text-navy-900 hover:bg-gold-400 transition-all duration-200 shadow-gold-sm hover:shadow-gold-lg w-full sm:w-auto">
            Request a Quote
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded-lg border border-white/20 text-white hover:bg-white/5 hover:border-white/30 transition-all duration-200 w-full sm:w-auto">
            Contact Our Team
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </m.div>
    </section>
  );
}
