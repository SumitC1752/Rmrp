'use client';

import { m, type Variants } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } };
const cardReveal = { hidden: { opacity: 0, y: 24 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.25 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }) };

const benefits = [
  {
    title: 'Supplier Confidence',
    description: 'Rigorous quality control means you receive exactly what you ordered — every time. No grade deviations, contamination surprises, or specification disputes.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Risk Reduction',
    description: 'Every quality check reduces the risk of rejected shipments, delayed customs clearance, or product claims. Our process protects your supply chain.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Regulatory Peace of Mind',
    description: 'Our documentation meets international standards. You can clear customs with confidence knowing every certificate, analysis, and declaration is accurate and complete.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Long-Term Partnership',
    description: 'Consistent quality builds trust. Our repeat buyers know that every shipment from RMRP will meet the same high standards as the first one they received.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

export default function WhyQualityMatters() {
  return (
    <section id="why-quality-matters" className="relative overflow-hidden bg-navy-900 py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.03)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-400 mb-4">Why Quality Matters</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">Trust Built Through Consistency</m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-400 leading-relaxed">
            For international buyers, quality is not a preference — it is a requirement. Our quality standards exist to protect your business, your reputation, and your supply chain.
          </m.p>
        </m.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
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
              <span className="block mb-4 text-gold-400 transition-transform duration-300 group-hover:scale-105">{item.icon}</span>
              <h3 className="text-base font-semibold text-white group-hover:text-gold-400 transition-colors duration-200">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
