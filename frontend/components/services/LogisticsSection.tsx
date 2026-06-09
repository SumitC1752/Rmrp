'use client';

import Link from 'next/link';
import { m } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } } };
const cardReveal = { hidden: { opacity: 0, y: 20 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }) };

const services = [
  {
    title: 'Sea Freight',
    description: 'Full container load (FCL) and less-than-container load (LCL) shipping via major Indian ports. We handle all booking, documentation, and coordination with global carriers.',
    features: ['FCL — 20-ft & 40-ft HC containers', 'LCL — Shared container consolidation', 'Break-bulk vessel options for bulk orders'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: 'Air Freight',
    description: 'Express air freight for time-sensitive shipments. Ideal for urgent orders, perishable goods, and high-value, low-volume products requiring fast transit.',
    features: ['Direct & consolidated air options', 'Express cargo for urgent deadlines', 'Priority handling & fast-track customs'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    title: 'Door-to-Door Delivery',
    description: 'End-to-end logistics from your supplier\'s warehouse in India to your doorstep. We manage pickup, export clearance, ocean/air freight, import clearance, and final delivery.',
    features: ['Single point of contact', 'Full container & LCL options', 'Warehouse pickup & last-mile delivery'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'Global Shipping Partners',
    description: 'Long-standing partnerships with MSC, Maersk, CMA CGM, and Hapag-Lloyd ensure preferential freight rates, priority space allocation, and reliable scheduling year-round.',
    features: ['Preferred carrier agreements', 'Priority container allocation', 'Competitive contract rates'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Shipment Tracking',
    description: 'Real-time tracking dashboard for every shipment. Receive milestone alerts, ETA updates, and proactive notifications. Your logistics coordinator is always available.',
    features: ['Real-time container tracking', 'ETA & milestone notifications', 'Dedicated logistics coordinator'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Logistics Support',
    description: 'End-to-end support including container stuffing supervision, cargo insurance, customs clearance at origin, and destination-country customs guidance for smooth imports.',
    features: ['Stuffing supervision & sealing', 'Cargo insurance coverage', 'Origin & destination clearance support'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function LogisticsSection() {
  return (
    <section id="logistics" className="bg-gray-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-3xl mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Logistics</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Global Logistics Network</m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed max-w-2xl">
            Comprehensive shipping solutions connecting Indian ports to destinations worldwide — sea freight, air freight, and door-to-door delivery with full tracking and support.
          </m.p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-18 lg:mb-24">
          <div className="space-y-5">
            <p className="text-base text-gray-600 leading-relaxed">
              Logistics is the backbone of international trade. At RMRP Global Trade, we manage the entire shipping chain — from container booking at origin to cargo release at destination. Our logistics team has deep experience routing shipments through India&apos;s major ports to destinations across the Middle East, North America, Europe, and Asia.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              We maintain long-standing partnerships with leading global carriers including MSC, Maersk, CMA CGM, and Hapag-Lloyd, ensuring preferential rates, priority space allocation, and reliable scheduling even during peak shipping seasons.
            </p>
            <div className="mt-6 p-5 bg-blue-50 rounded-xl border border-blue-100">
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-700">Major Indian Ports</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Mundra', 'Nhava Sheva (JNPT)', 'Kandla', 'Chennai', 'Cochin', 'Mumbai'].map((p) => (
                  <span key={p} className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">{p}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((item, i) => (
              <m.div key={item.title} custom={i} variants={cardReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group bg-white rounded-xl border border-gray-100 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/20 hover:shadow-gold-sm">
                <span className="block mb-3 w-10 h-10 flex items-center justify-center rounded-lg bg-gold-50 text-gold-600 group-hover:bg-gold-100 transition-colors duration-200">{item.icon}</span>
                <h3 className="text-sm font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">{item.title}</h3>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                  {item.features.map((f) => (
                    <span key={f} className="flex items-center gap-1 text-[11px] text-gray-500">
                      <svg className="w-2.5 h-2.5 text-gold-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </span>
                  ))}
                </div>
              </m.div>
            ))}
          </div>
        </div>

        <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase rounded-lg bg-gold-500 text-navy-900 hover:bg-gold-400 transition-all duration-200 shadow-gold-sm hover:shadow-gold-lg">
            Plan Your Shipment
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </m.div>
      </div>
    </section>
  );
}
