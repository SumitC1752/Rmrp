'use client';

import { m } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } } };

const pillars = [
  {
    title: 'Customer-First Philosophy',
    description: 'Every quality standard we enforce exists to protect our customers. We deliver what we promise — consistent products that meet or exceed specification, every time.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Built-In Quality',
    description: 'We do not inspect quality in at the end — we build it through every stage. From raw material selection to final loading, quality is engineered into the process.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    title: 'Total Traceability',
    description: 'Every shipment is fully traceable from raw material lot to delivered container. Batch records, test results, and inspection reports are archived for every order.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Continuous Improvement',
    description: 'Every customer interaction feeds into our improvement cycle. We track feedback, identify root causes, and implement corrective actions to make every subsequent shipment better.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function QualityCommitment() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Our Commitment</m.span>
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
              Quality Is Not a Department — It Is Every Step
            </m.h2>
            <m.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-gray-600">
              At RMRP Global Trade, quality assurance is embedded into every stage of our operations — from supplier qualification and raw material inspection through production, packaging, and pre-loading verification. We do not inspect quality into a shipment; we build it in from the start.
            </m.p>
            <m.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-gray-600">
              Every product category — aluminum commodities, processed food ingredients, and agro commodities — follows a category-specific quality plan. Our commitment is simple: what we promise in the specification is what arrives at your port.
            </m.p>
          </m.div>
          <m.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <span className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gold-50 text-gold-600">{pillar.icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-navy-900">{pillar.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  );
}
