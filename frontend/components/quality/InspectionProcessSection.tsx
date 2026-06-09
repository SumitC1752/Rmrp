'use client';

import { m } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } } };

const steps = [
  {
    number: '01',
    title: 'Raw Material Inspection',
    description: 'Every batch starts with rigorous raw material verification. We test incoming materials against approved supplier specifications — chemical composition for aluminum, purity and moisture for food products, and physical characteristics for agro commodities.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Production Monitoring',
    description: 'During production, our quality team monitors critical control points — temperature, processing time, granulation size, and other parameters. In-process checks ensure deviations are caught and corrected immediately.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Quality Testing',
    description: 'Finished products undergo comprehensive testing in our partner laboratories. Spectrometric analysis for aluminum grades, moisture content and microbiological testing for food products, and physical inspection for all commodities.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Packaging Verification',
    description: 'Before packing, we verify that packaging materials meet export-grade standards — moisture-proof liners, correct labeling, proper weight, and compliance with destination country marking requirements.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Final Dispatch Inspection',
    description: 'Before every shipment, a final inspection verifies product quantity, packaging integrity, labeling accuracy, and document completeness. Photographs are taken, samples are retained, and the shipment is approved for loading.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

function TimelineStep({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const isLeft = index % 2 === 0;
  return (
    <m.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      className={`group relative flex items-start gap-6 lg:gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      <div className={`hidden lg:block w-[calc(50%-28px)] ${isLeft ? 'text-right' : 'text-left'}`}>
        <div className={`inline-block p-6 rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/20 hover:shadow-gold-sm ${isLeft ? 'text-right' : 'text-left'}`}>
          <div className={`flex items-start gap-4 ${isLeft ? 'flex-row-reverse' : ''}`}>
            <span className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-navy-900 text-gold-500 group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-300">
              {step.icon}
            </span>
            <div className={isLeft ? 'text-right' : ''}>
              <span className="text-[10px] font-bold tracking-widest text-gold-600">{step.number}</span>
              <h3 className="text-base font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-200 mt-0.5">{step.title}</h3>
              <p className="mt-1.5 text-xs text-gray-500 leading-relaxed max-w-[320px]">{step.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex shrink-0 flex-col items-center">
        <m.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.3, ease: 'backOut' }}
          className="relative z-10 w-5 h-5 rounded-full border-4 border-navy-900 bg-white group-hover:border-gold-500 group-hover:bg-gold-50 transition-all duration-300"
        />
      </div>
      <div className="hidden lg:block w-[calc(50%-28px)]" />
      <div className="lg:hidden flex gap-4 w-full">
        <div className="flex shrink-0 flex-col items-center">
          <m.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.3, ease: 'backOut' }}
            className="relative z-10 w-4 h-4 rounded-full border-3 border-navy-900 bg-white group-hover:border-gold-500 transition-all duration-300"
          />
        </div>
        <div className="flex-1 p-5 rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/20 hover:shadow-gold-sm">
          <div className="flex items-center gap-3 mb-2">
            <span className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-navy-900 text-gold-500 group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-300">
              {step.icon}
            </span>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-gold-600">{step.number}</span>
              <h3 className="text-sm font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">{step.title}</h3>
            </div>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
        </div>
      </div>
    </m.div>
  );
}

export default function InspectionProcessSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-3xl mb-16 lg:mb-20">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Inspection Process</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
            Five-Stage Quality Inspection Process
          </m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed max-w-2xl">
            Every product passes through five distinct quality checkpoints — from raw material arrival to final dispatch approval.
          </m.p>
        </m.div>
        <div className="relative">
          <div className="hidden lg:block absolute top-[26px] bottom-[26px] left-1/2 -translate-x-1/2 w-0.5 bg-gray-300" />
          <div className="lg:hidden absolute top-[18px] bottom-[18px] left-[7px] w-0.5 bg-gray-300" />
          <div className="relative space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <TimelineStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
