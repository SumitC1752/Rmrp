'use client';

import { m, type Variants } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } };

const steps = [
  {
    step: '01',
    title: 'Raw Material Verification',
    description: 'Every incoming raw material batch is inspected, sampled, and tested against defined specifications before acceptance. Only approved materials enter production.',
    checks: [
      'Supplier documentation review and batch traceability',
      'Visual inspection for physical defects and contamination',
      'Chemical composition or purity analysis per grade',
      'Moisture content verification for food and agro materials',
    ],
  },
  {
    step: '02',
    title: 'Processing Standards',
    description: 'Production follows documented standard operating procedures with predefined quality control points. Parameters are monitored continuously throughout processing.',
    checks: [
      'Temperature, pressure, and time controls for food processing',
      'Alloy composition monitoring for aluminum production',
      'In-process sampling at defined intervals',
      'Non-conforming material isolation protocols',
    ],
  },
  {
    step: '03',
    title: 'Quality Inspection',
    description: 'Finished product undergoes comprehensive testing before release. Certificate of Analysis is issued documenting all quality parameters measured.',
    checks: [
      'Full specification compliance verification',
      'Microbiological testing for food products (TPC, Yeast, Mold, Salmonella)',
      'Spectrometric analysis for aluminum composition',
      'Sieve analysis and particle size verification for powders',
    ],
  },
  {
    step: '04',
    title: 'Packaging Inspection',
    description: 'Packaging integrity, labeling accuracy, and seal verification are performed before finished goods move to storage or loading.',
    checks: [
      'Packaging material quality and moisture barrier check',
      'Label accuracy verification (product, grade, net weight, batch)',
      'Seal integrity inspection for food-grade packages',
      'Pallet stability and strapping inspection',
    ],
  },
  {
    step: '05',
    title: 'Final Dispatch Check',
    description: 'Before loading, every shipment undergoes a final verification — product condition, packaging, documentation, and container fitness are confirmed.',
    checks: [
      'Container condition inspection (clean, dry, odor-free)',
      'Product-to-documentation cross-verification',
      'Photographic record of loading process',
      'Seal application and container number documentation',
    ],
  },
];

export default function InspectionProcess() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Inspection Process</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Five-Stage Quality Control</m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed">
            Every shipment passes through five defined quality stages — from raw material verification through to final dispatch check.
          </m.p>
        </m.div>

        {/* Vertical timeline on desktop */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/0 via-gold-500/20 to-gold-500/0" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, i) => (
              <m.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className={`relative flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-6 lg:gap-10`}
              >
                {/* Content card */}
                <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right lg:items-end' : ''}`}>
                  <div className="bg-white rounded-xl border border-gray-100 p-6 lg:p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/20 hover:shadow-gold-sm">
                    <div className="flex items-start gap-4 lg:gap-5">
                      <span className={`shrink-0 w-10 h-10 rounded-full bg-navy-900 text-white text-sm font-bold flex items-center justify-center ${i % 2 === 0 ? 'lg:order-2' : ''}`}>{step.step}</span>
                      <div className={`min-w-0 flex-1 ${i % 2 === 0 ? 'lg:text-right' : ''}`}>
                        <h3 className="text-base font-bold text-navy-900">{step.title}</h3>
                        <p className="mt-1 text-sm text-gray-500 leading-relaxed">{step.description}</p>
                        <div className={`mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 ${i % 2 === 0 ? 'lg:justify-items-end' : ''}`}>
                          {step.checks.map((check) => (
                            <span key={check} className={`flex items-center gap-1.5 text-xs text-gray-600 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                              <svg className="w-3 h-3 text-gold-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              {check}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-500 border-2 border-white shadow" />

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
