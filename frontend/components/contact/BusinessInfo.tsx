'use client';

import { m } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } } };

const details = [
  { label: 'Registered Name', value: 'RMRP Global Trade' },
  { label: 'Business Type', value: 'Manufacturer, Trader & Exporter' },
  { label: 'Office Address', value: 'Ahilyanagar, Maharashtra' },
  { label: 'Email', value: 'info@rmrpglobaltrade.com' },
  { label: 'Phone', value: '+91-9922167039' },
  { label: 'Business Hours', value: 'Monday – Saturday, 9:00 AM – 6:00 PM IST' },
];

export default function BusinessInfo() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Business Information</m.span>
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Company Details</m.h2>
            <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed">
              RMRP Global Trade is an Indian-based manufacturer, trader, and exporter of premium aluminum commodities, processed food products, and agro commodities. We serve 25+ countries with consistent quality and reliable supply.
            </m.p>
            <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed">
              For trade references, bank details, or company registration documents, please contact our trade desk directly.
            </m.p>
          </m.div>
          <m.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gray-50 rounded-2xl border border-gray-100 p-8 lg:p-10"
          >
            <div className="space-y-5">
              {details.map((detail) => (
                <div key={detail.label} className="flex items-start justify-between gap-4 pb-5 border-b border-gray-200/60 last:border-b-0 last:pb-0">
                  <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 shrink-0 w-36">{detail.label}</span>
                  <span className="text-sm font-medium text-navy-900 text-right">{detail.value}</span>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
