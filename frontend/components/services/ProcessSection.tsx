'use client';

import Link from 'next/link';
import { m, type Variants } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } };

const steps = [
  {
    number: '01',
    title: 'Inquiry Received',
    description:
      'You submit your product requirements through our contact form, email, or direct call. Our trade desk acknowledges your inquiry within 2 hours and assigns a dedicated account manager.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Requirement Analysis',
    description:
      'Our team reviews your specifications — product type, grade, quantity, packaging format, destination port, and desired timeline. We clarify any gaps and align on exact parameters.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Quotation & Pricing',
    description:
      'You receive a detailed commercial offer with product pricing, applicable incoterms, payment terms, delivery timeline, and a complete cost breakdown. We include all logistics and documentation charges.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125V9M7.5 12h.008v.008H7.5V12zm3 0h.008v.008H10.5V12zm3 0h.008v.008H13.5V12z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Production / Sourcing',
    description:
      'Once the order is confirmed, our operations team begins production at partner facilities or sources from approved suppliers. Raw materials are verified before processing begins.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.646-5.647a1.5 1.5 0 010-2.121l2.122-2.121a1.5 1.5 0 012.121 0l5.646 5.647m-6.243 6.243l5.646-5.647m-5.646 5.647a1.5 1.5 0 01-2.121 0l-2.122-2.122a1.5 1.5 0 010-2.121l2.122-2.121a1.5 1.5 0 012.121 0l5.646 5.647m-5.646-5.647l5.646-5.647m1.06 5.647l-5.646 5.647M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Quality Inspection',
    description:
      'Every batch undergoes rigorous testing — spectrometric analysis for aluminum, moisture and purity tests for food products, and physical inspection for agro commodities. Reports are shared for your approval.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Packaging',
    description:
      'Products are packed per your specifications — jumbo bags, standard export cartons, moisture-proof liners, or custom retail-ready packaging. Each package is labeled, weighed, and recorded for the manifest.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    number: '07',
    title: 'Shipping',
    description:
      'Containers are loaded at the port under supervision, container seals are applied, and the vessel departs. You receive real-time tracking access and ETA updates throughout transit.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    number: '08',
    title: 'Delivery',
    description:
      'Cargo arrives at the destination port and clears customs. All original documents are couriered, duties guidance is provided, and the shipment is successfully delivered to your指定的 location.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
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
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
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

export default function ProcessSection() {
  return (
    <section id="export-process" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-3xl mb-16 lg:mb-20">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Export Process</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
            Our Export Process
          </m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed max-w-2xl">
            From your first inquiry to final delivery — an 8-step journey built on transparency, quality control, and reliable logistics at every stage.
          </m.p>
        </m.div>
        <div className="relative">
          <div className="hidden lg:block absolute top-[26px] bottom-[26px] left-1/2 -translate-x-1/2 w-0.5 bg-gray-200" />
          <div className="lg:hidden absolute top-[18px] bottom-[18px] left-[7px] w-0.5 bg-gray-200" />
          <div className="relative space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <TimelineStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mt-16 lg:mt-20 text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded-lg bg-gold-500 text-navy-900 hover:bg-gold-400 transition-all duration-200 shadow-gold-sm hover:shadow-gold-lg"
          >
            Start Your Export Journey
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </m.div>
      </div>
    </section>
  );
}
