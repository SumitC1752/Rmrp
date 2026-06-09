'use client';

import { m, type Variants } from 'framer-motion';

export default function QuoteCta() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 px-8 py-12 lg:px-14 lg:py-16"
        >
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <circle cx="10" cy="10" r="1" fill="white" />
              <circle cx="30" cy="20" r="1" fill="white" />
              <circle cx="50" cy="10" r="1" fill="white" />
              <circle cx="70" cy="30" r="1" fill="white" />
              <circle cx="90" cy="15" r="1" fill="white" />
              <circle cx="20" cy="50" r="1" fill="white" />
              <circle cx="40" cy="60" r="1" fill="white" />
              <circle cx="80" cy="55" r="1" fill="white" />
              <circle cx="15" cy="80" r="1" fill="white" />
              <circle cx="60" cy="85" r="1" fill="white" />
              <circle cx="85" cy="75" r="1" fill="white" />
            </svg>
          </div>
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">Ready to Start Sourcing?</h3>
              <p className="mt-2 text-gray-300/80 text-base leading-relaxed max-w-xl">
                Submit your requirements above and receive a detailed quote within 24 hours. No obligation — just a clear path to your first shipment.
              </p>
            </div>
            <a
              href="#request-quote-form"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded-lg bg-gold-500 text-navy-900 hover:bg-gold-400 transition-all duration-200 shadow-lg shrink-0"
            >
              Fill the Form
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
}
