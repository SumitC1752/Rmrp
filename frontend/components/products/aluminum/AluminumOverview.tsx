'use client';

import Image from 'next/image';
import { m } from 'framer-motion';
import { IMAGES } from '@/constants';
import { pageContent } from './data';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };

export default function AluminumOverview() {
  const { badge, heading, paragraphs, highlights } = pageContent.overview;
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <m.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] bg-navy-900 rounded-2xl overflow-hidden">
              <Image src={IMAGES.aluminumIngots} alt="Aluminum Ingots" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </m.div>
          <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">{badge}</m.span>
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">{heading}</m.h2>
            {paragraphs.map((p, i) => <m.p key={i} variants={fadeUp} className="mt-5 text-base leading-relaxed text-gray-600">{p}</m.p>)}
            <div className="mt-8 space-y-3">
              {highlights.map((h, i) => (
                <m.div key={i} custom={i} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.5 + i * 0.1 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-sm font-medium text-navy-900">{h}</span>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
