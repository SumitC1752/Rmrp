'use client';

import { m } from 'framer-motion';
import { pageContent } from './data';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };
const cardReveal = { hidden: { opacity: 0, y: 20 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.25 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] } }) };

export default function Applications() {
  const { badge, heading, items } = pageContent.applications;
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">{badge}</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">{heading}</m.h2>
        </m.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {items.map((item, i) => (
            <m.div key={item.title} custom={i} variants={cardReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
              className="group bg-white rounded-xl border border-gray-100 p-6 lg:p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/20 hover:shadow-gold-sm"
            >
              <h3 className="text-base font-semibold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
