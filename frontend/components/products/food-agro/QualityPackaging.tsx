'use client';

import { m } from 'framer-motion';
import { pageContent } from './data';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };

export default function QualityPackaging() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {[pageContent.quality, pageContent.packaging].map((section) => (
            <m.div key={section.badge} variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-50 rounded-2xl border border-gray-100 p-8 lg:p-10 h-full"
            >
              <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">{section.badge}</m.span>
              <m.h3 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">{section.heading}</m.h3>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <m.div key={item} variants={fadeUp} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-gold-50 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </m.div>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
