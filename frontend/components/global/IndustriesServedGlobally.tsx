'use client';

import { m } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } } };
const cardReveal = { hidden: { opacity: 0, y: 24 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.25 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }) };

const industries = [
  {
    title: 'Importers & Wholesalers',
    description: 'Reliable supply of aluminum, sugar, wheat flour, and agro commodities for importers and wholesale distributors serving industrial and retail markets across their regions.',
    benefits: ['Consistent monthly volumes', 'Competitive pricing for bulk orders', 'Flexible payment terms', 'Documentation compliance'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
  {
    title: 'Distributors & Traders',
    description: 'Partnership-ready supply for regional distributors and commodity traders needing assured product quality, consistent specifications, and dependable delivery schedules.',
    benefits: ['Exclusive distribution options', 'Brand support & marketing materials', 'Sample & trial order programs', 'Priority allocation during peak demand'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Industrial Manufacturers',
    description: 'Direct supply of aluminum ingots and scrap for foundries, extruders, and secondary smelters. Consistent chemistry, precise dimensions, and just-in-time delivery capabilities.',
    benefits: ['Custom alloy specifications', 'Regular supply contracts available', 'Mill test certificates included', 'Bulk vessel & container options'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.646-5.647a1.5 1.5 0 010-2.121l2.122-2.121a1.5 1.5 0 012.121 0l5.646 5.647m-6.243 6.243l5.646-5.647m-5.646 5.647a1.5 1.5 0 01-2.121 0l-2.122-2.122a1.5 1.5 0 010-2.121l2.122-2.121a1.5 1.5 0 012.121 0l5.646 5.647m-5.646-5.647l5.646-5.647m1.06 5.647l-5.646 5.647M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Retail Chains & FMCG',
    description: 'Private-label ready processed food products and ingredients for supermarket chains, food service groups, and FMCG companies requiring consistent quality and food safety compliance.',
    benefits: ['Private labeling available', 'Third-party audited facilities', 'Custom packaging options', 'Global food safety certifications'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
];

export default function IndustriesServedGlobally() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Industries Served Globally</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Who We Supply Worldwide</m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed">
            From industrial manufacturers to retail chains, our products serve diverse buyers across global markets.
          </m.p>
        </m.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {industries.map((item, i) => (
            <m.div
              key={item.title}
              custom={i}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="group bg-gray-50 rounded-xl border border-gray-100 p-6 lg:p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/20 hover:shadow-gold-sm"
            >
              <span className="block mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-gold-50 text-gold-600 group-hover:bg-gold-100 transition-colors duration-200">{item.icon}</span>
              <h3 className="text-base font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.description}</p>
              <div className="mt-4 space-y-1 pt-4 border-t border-gray-200/50">
                {item.benefits.map((b) => (
                  <span key={b} className="flex items-center gap-1.5 text-xs text-gray-500">
                    <svg className="w-3 h-3 text-gold-500/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </span>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
