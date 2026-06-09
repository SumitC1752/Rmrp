'use client';

import { m } from 'framer-motion';
import { sectionBadge, sectionHeading, sectionSubheading, processSteps } from './data';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ExportProcess() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section header */}
        <m.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-18"
        >
          <m.span
            variants={fadeUp}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4"
          >
            {sectionBadge}
          </m.span>
          <m.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight"
          >
            {sectionHeading}
          </m.h2>
          <m.p
            variants={fadeUp}
            className="mt-4 text-base text-gray-500 leading-relaxed"
          >
            {sectionSubheading}
          </m.p>
        </m.div>

        {/* Process grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 lg:gap-y-16 relative">
          {/* Horizontal connector lines (desktop only) */}
          <div className="hidden lg:block absolute top-[62px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-gradient-to-r from-gold-500/0 via-gold-500/20 to-gold-500/0 pointer-events-none" />

          {processSteps.map((step, i) => (
            <m.div
              key={step.step}
              custom={i}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="group relative text-center"
            >
              {/* Step number + icon */}
              <div className="relative inline-flex items-center justify-center w-14 h-14 mx-auto mb-5 rounded-full bg-navy-900 border-2 border-navy-900 transition-all duration-300 group-hover:border-gold-500 group-hover:shadow-gold-sm">
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gold-500 text-[10px] font-bold text-navy-900 flex items-center justify-center">
                  {step.step}
                </span>
                <span className="transition-transform duration-300 group-hover:scale-105">
                  {step.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-[260px] mx-auto">
                {step.description}
              </p>

              {/* Desktop horizontal connector arrow */}
              {i < 7 && (
                <div className="hidden lg:block absolute top-[22px] -right-[14px] text-gold-500/20 select-none" aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
