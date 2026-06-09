'use client';

import { m } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } } };
const cardReveal = { hidden: { opacity: 0, y: 20 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }) };

const pillars = [
  {
    title: 'Our Commitment to Quality',
    description: 'Quality is embedded in every process at RMRP Global Trade. From supplier selection and raw material verification to production monitoring and final inspection, we maintain strict quality controls at every stage of the export journey.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Consistent Product Standards',
    description: 'Every shipment matches the same specifications as the last — same grade, same purity, same granulation, same packaging. Our quality management system ensures repeatability that buyers can rely on.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    title: 'Customer Satisfaction Focus',
    description: 'We measure our success by buyer satisfaction. Every order includes complete documentation, test reports, and traceability records. Our team works proactively to address any quality concerns immediately.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Long-Term Reliability',
    description: 'Built on years of export experience, our quality systems are designed for the long haul. We invest in continuous improvement, supplier partnerships, and testing infrastructure to deliver consistent quality over time.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function QualityCommitmentSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-3xl mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Our Quality Commitment</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Built on a Foundation of Quality</m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed">
            Our quality philosophy is simple: every product we export must meet the standards we would expect as a buyer. We achieve this through rigorous processes, skilled teams, and a culture of continuous improvement.
          </m.p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-5">
            <p className="text-base text-gray-600 leading-relaxed">
              Quality is not a department at RMRP Global Trade — it is a mindset that runs through every function, from sourcing and production to documentation and logistics. Every team member understands that our reputation depends on the quality of every shipment we deliver.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              We work only with ISO-certified manufacturers and audited suppliers. Our quality team conducts regular facility inspections, maintains detailed spec sheets for every product, and keeps batch-level traceability records for complete accountability.
            </p>
            <div className="mt-6 p-5 bg-gold-50 rounded-xl border border-gold-100">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-700">Quality by the Numbers</span>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'QC Checkpoints', value: '12+' },
                  { label: 'Retention Samples', value: 'Per batch' },
                  { label: 'Supplier Audits', value: 'Annual' },
                  { label: 'Traceability', value: 'Batch-level' },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="block text-lg font-bold text-navy-900">{item.value}</span>
                    <span className="text-xs text-gray-500">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {pillars.map((pillar, i) => (
              <m.div
                key={pillar.title}
                custom={i}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 transition-all duration-300 hover:border-gold-500/20 hover:shadow-gold-sm"
              >
                <span className="shrink-0 w-11 h-11 flex items-center justify-center rounded-lg bg-gold-50 text-gold-600 group-hover:bg-gold-100 transition-colors duration-200">{pillar.icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">{pillar.title}</h3>
                  <p className="mt-1 text-xs text-gray-500 leading-relaxed">{pillar.description}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
