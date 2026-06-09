'use client';

import { m, type Variants } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } };

const standards = [
  {
    title: 'Hygiene & Food Safety',
    description: 'All food products are processed in HACCP-compliant facilities following strict GMP protocols. Dedicated production areas prevent cross-contamination.',
    items: [
      'HACCP-compliant production facilities with documented protocols',
      'Regular sanitation and pest control programs in place',
      'Personnel hygiene training and protective gear requirements',
      'Allergen control and segregation for sensitive products',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Processing Standards',
    description: 'Controlled drying, milling, and processing parameters preserve natural properties. Every batch is tested for microbiological and physical quality before release.',
    items: [
      'Low-temperature drying preserves natural flavor and nutrients',
      'Controlled granulation and particle size consistency',
      'Microbiological testing: TPC, Yeast, Mold, Coliforms, Salmonella, E. coli',
      'Aflatoxin and heavy metal screening for grain-based products',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.646-5.647a1.5 1.5 0 010-2.121l2.122-2.121a1.5 1.5 0 012.121 0l5.646 5.647m-6.243 6.243l5.646-5.647m-5.646 5.647a1.5 1.5 0 01-2.121 0l-2.122-2.122a1.5 1.5 0 010-2.121l2.122-2.121a1.5 1.5 0 012.121 0l5.646 5.647m-5.646-5.647l5.646-5.647m1.06 5.647l-5.646 5.647M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Export-Ready Packaging',
    description: 'Food-grade packaging with moisture barriers ensures product integrity during sea freight. Multi-layer protection and sealed liners for every shipment.',
    items: [
      'Food-grade multi-layer bags with inner PE liner',
      'Moisture-proof and oxygen-barrier packaging options',
      'Vacuum-sealed and nitrogen-flushed for sensitive products',
      'Metal detection and sieve analysis at packaging stage',
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
];

export default function FoodQuality() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Processed Food & Agro</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Food Product Quality Standards</m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed">
            Our processed food and agro commodities are produced under rigorous hygiene and quality programs that meet international food safety standards.
          </m.p>
        </m.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {standards.map((section, i) => (
            <m.div
              key={section.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="group bg-gray-50 rounded-xl border border-gray-100 p-6 lg:p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/20 hover:shadow-gold-sm"
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
