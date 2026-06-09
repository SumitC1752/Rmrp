'use client';

import { m } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } } };

const standards = [
  {
    title: 'Material Consistency',
    description: 'Every batch of aluminum products is produced under controlled conditions to deliver consistent chemical composition, physical properties, and dimensional tolerances.',
    items: [
      'Controlled casting and processing parameters for ingots',
      'Consistent chemical composition verified per batch',
      'Dimensional tolerance within ASTM and ISO standards',
      'Low gas content and reduced oxide inclusion guaranteed',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Grade Verification',
    description: 'Aluminum grades are verified through spectrometric analysis before shipment. Certification documents confirm composition per international grading standards.',
    items: [
      'Spectrometric analysis for every production batch',
      'Grade classification per ASTM B179 / ISO 115 (ingots)',
      'ISRI specification compliance for all scrap grades',
      'Certificate of Analysis issued with every shipment',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Industrial Quality Checks',
    description: 'Physical inspection, surface quality verification, and packaging integrity checks are performed before every aluminum shipment is released.',
    items: [
      'Surface quality inspection for oxidation and defects',
      'Weight verification and dimensional check before loading',
      'Moisture content analysis for scrap grade net weight',
      'Third-party inspection (SGS, Bureau Veritas) available on request',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      </svg>
    ),
  },
];

export default function AluminumQuality() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Aluminum Commodities</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Aluminum Product Quality Standards</m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed">
            Our aluminum products — ingots and scrap — are tested and certified to meet international industrial standards for chemical composition and physical quality.
          </m.p>
        </m.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {standards.map((section, i) => (
            <m.div
              key={section.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-xl border border-gray-100 p-6 lg:p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/20 hover:shadow-gold-sm"
            >
              <span className="block mb-4 w-11 h-11 flex items-center justify-center rounded-lg bg-gold-50 text-gold-600 group-hover:bg-gold-100 transition-colors duration-200">{section.icon}</span>
              <h3 className="text-base font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">{section.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{section.description}</p>
              <div className="mt-4 space-y-2">
                {section.items.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs text-gray-600">
                    <span className="w-1 h-1 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
