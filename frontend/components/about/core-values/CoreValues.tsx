'use client';

import { m } from 'framer-motion';
import { sectionBadge, sectionHeading, coreValues } from './data';

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
    transition: { delay: 0.25 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function CoreValues() {
  return (
    <section className="bg-navy-900 py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.03)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <m.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-18"
        >
          <m.span
            variants={fadeUp}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-400 mb-4"
          >
            {sectionBadge}
          </m.span>
          <m.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            {sectionHeading}
          </m.h2>
        </m.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {coreValues.map((value, i) => (
            <m.div
              key={value.title}
              custom={i}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:p-7 transition-all duration-300 hover:bg-white/[0.07] hover:border-gold-500/20 hover:-translate-y-0.5"
            >
              <span className="block mb-3 text-gold-400/80 group-hover:text-gold-400 transition-colors duration-200">
                {value.icon}
              </span>
              <h3 className="text-base font-semibold text-white group-hover:text-gold-400 transition-colors duration-200">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
