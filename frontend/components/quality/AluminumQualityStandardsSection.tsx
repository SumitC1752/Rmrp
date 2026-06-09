'use client';

import { m } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } } };
const cardReveal = { hidden: { opacity: 0, y: 20 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }) };

const standards = [
  {
    title: 'Grade Verification',
    description: 'Every aluminum shipment is tested using optical emission spectrometry (OES) to verify chemical composition. We certify purity levels — 99.5% and 99.7% for ingots — and ISRI grade classifications for scrap.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: 'Material Consistency',
    description: 'Ingot dimensions (6–8 kg per bar), surface quality, and weight tolerance are verified. Scrap is sorted, cleaned, and graded per ISRI specifications to ensure consistent melting performance for buyers.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    title: 'Industrial Quality Checks',
    description: 'Comprehensive testing including chemical composition analysis, impurity detection, density measurement, and physical inspection. Mill Test Certificates accompany every shipment providing full traceability.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.646-5.647a1.5 1.5 0 010-2.121l2.122-2.121a1.5 1.5 0 012.121 0l5.646 5.647m-6.243 6.243l5.646-5.647m-5.646 5.647a1.5 1.5 0 01-2.121 0l-2.122-2.122a1.5 1.5 0 010-2.121l2.122-2.121a1.5 1.5 0 012.121 0l5.646 5.647m-5.646-5.647l5.646-5.647m1.06 5.647l-5.646 5.647M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Manufacturing Standards',
    description: 'Production facilities follow strict quality control protocols. For ingots, casting parameters are monitored. For scrap, sorting and processing procedures ensure removal of contaminants and non-metallic materials.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: 'Export Readiness',
    description: 'Pre-shipment inspection verifies weight, packaging, labeling, and documentation compliance with destination country requirements. Third-party inspection by SGS, Bureau Veritas, or Intertek available on request.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const products = [
  { name: 'Aluminum Ingots', grades: '99.5% / 99.7% purity, 6–8 kg bars' },
  { name: 'Aluminum Scrap', grades: 'Tense, Zorba, Taint/Tabor — per ISRI grades' },
];

export default function AluminumQualityStandardsSection() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-3xl mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Aluminum Quality Standards</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Aluminum Product Quality Standards</m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed">
            Our aluminum products — ingots and scrap — are tested, graded, and certified to meet international industrial standards for foundries, extruders, and secondary smelters worldwide.
          </m.p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-18 lg:mb-24">
          <div className="space-y-5">
            <p className="text-base text-gray-600 leading-relaxed">
              Aluminum quality is non-negotiable for industrial buyers. A deviation in chemical composition or impurity levels can disrupt downstream processes and affect final product quality. That is why we test every batch and provide full certification with every shipment.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Our aluminum ingots are produced in ISO-certified facilities with strict casting controls. Our scrap is carefully sorted, processed, and stored to prevent contamination and maintain grade integrity.
            </p>
            <div className="mt-6 p-5 bg-blue-50 rounded-xl border border-blue-100">
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-700 mb-3 block">Our Aluminum Products</span>
              <div className="space-y-3">
                {products.map((p) => (
                  <div key={p.name} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-navy-900">{p.name}</span>
                      <span className="block text-xs text-gray-500">{p.grades}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {standards.map((item, i) => (
              <m.div key={item.title} custom={i} variants={cardReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group bg-white rounded-xl border border-gray-100 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/20 hover:shadow-gold-sm">
                <span className="block mb-3 w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors duration-200">{item.icon}</span>
                <h3 className="text-sm font-bold text-navy-900 group-hover:text-blue-700 transition-colors duration-200">{item.title}</h3>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
