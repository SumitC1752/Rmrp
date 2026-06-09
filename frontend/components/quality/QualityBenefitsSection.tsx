'use client';

import { m, type Variants } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } };
const cardReveal = { hidden: { opacity: 0, y: 20 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }) };

const benefits = [
  {
    title: 'Reliable Supply',
    description: 'Consistent quality means consistent supply. Our quality systems ensure that every shipment meets your specifications — no surprises, no rejections, no supply chain disruptions.',
    stat: '99%',
    statLabel: 'On-time delivery rate',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Consistent Product Quality',
    description: 'Batch-to-batch consistency eliminates the need for re-testing and re-qualification. Every order matches the specifications of the last, saving you time, cost, and hassle.',
    stat: '100%',
    statLabel: 'Specification compliance',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Competitive Advantage',
    description: 'Quality products command premium pricing and build buyer loyalty. Our rigorous standards give you confidence to market our products under your brand, knowing they will perform as promised.',
    stat: '15+',
    statLabel: 'Years in export business',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    title: 'Reduced Business Risk',
    description: 'Third-party tested products with complete documentation eliminate the risk of customs holds, buyer rejections, or regulatory non-compliance. Every shipment is certified and insured.',
    stat: '0',
    statLabel: 'Quality-related disputes',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Trusted Trade Partnerships',
    description: 'Quality builds trust. Our commitment to consistent, certified products has earned us long-term relationships with importers, distributors, and manufacturers across 25+ countries.',
    stat: '25+',
    statLabel: 'Countries served',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function QualityBenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.03)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-400 mb-4">Why Quality Matters</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">Benefits of Our Quality Commitment</m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-400 leading-relaxed">
            When you partner with RMRP Global Trade, quality is not just a promise — it is a measurable advantage that flows through every aspect of your supply chain.
          </m.p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {benefits.map((item, i) => (
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
              <div className="flex items-start gap-4">
                <span className="shrink-0 text-gold-400 transition-transform duration-300 group-hover:scale-105">{item.icon}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-white group-hover:text-gold-400 transition-colors duration-200">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
                <span className="text-2xl font-bold text-gold-500 tabular-nums">{item.stat}</span>
                <span className="text-xs text-gray-500">{item.statLabel}</span>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
