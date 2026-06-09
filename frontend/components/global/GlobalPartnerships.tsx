'use client';

import { m } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } } };
const cardReveal = { hidden: { opacity: 0, y: 24 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.25 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }) };

const reasons = [
  {
    title: 'Reliability',
    description: 'Consistent monthly supply capacity backed by multiple processing facilities and volume commitments with partner manufacturers. We deliver what we promise, every time.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Consistent Quality',
    description: 'Products tested and certified to international standards. Every shipment includes inspection reports, certificates of analysis, and full traceability documentation for buyer confidence.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Competitive Pricing',
    description: 'Direct sourcing from producers and processors eliminates intermediary margins. Volume-based pricing with flexible payment terms including LC, TT, and DA structures.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Timely Delivery',
    description: 'Dispatched within agreed timelines from Indian ports. Real-time shipment tracking, proactive communication, and contingency planning ensure your supply chain stays uninterrupted.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhyBuyersChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.03)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-400 mb-4">Why Global Buyers Choose Us</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">Trusted by International Buyers</m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-400 leading-relaxed">
            Four pillars that have earned us the trust of importers, distributors, and manufacturers across 25+ countries.
          </m.p>
        </m.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {reasons.map((item, i) => (
            <m.div
              key={item.title}
              custom={i}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:p-7 transition-all duration-300 hover:bg-white/[0.07] hover:border-gold-500/20 hover:-translate-y-0.5"
            >
              <span className="absolute top-0 left-6 right-6 h-px bg-gold-500/0 group-hover:bg-gold-500/40 transition-all duration-300" />
              <span className="block mb-4 text-gold-400 transition-transform duration-300 group-hover:scale-105">{item.icon}</span>
              <h3 className="text-base font-semibold text-white group-hover:text-gold-400 transition-colors duration-200">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
