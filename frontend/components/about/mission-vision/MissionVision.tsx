'use client';

import { m } from 'framer-motion';
import { missionVisionContent } from './data';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.35 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function MissionVision() {
  const { badge, heading, mission, vision } = missionVisionContent;

  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-32">
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
            {badge}
          </m.span>
          <m.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight"
          >
            {heading}
          </m.h2>
        </m.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {[mission, vision].map((card, i) => (
            <m.div
              key={card.title}
              custom={i}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group bg-white rounded-2xl border border-gray-100 p-8 lg:p-10 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/20 hover:shadow-gold-sm"
            >
              {/* Accent line */}
              <span className="block w-12 h-0.5 bg-gold-500 mb-6 transition-all duration-300 group-hover:w-16" />

              {/* Icon */}
              <span className="block mb-5 text-navy-900/40 group-hover:text-gold-600 transition-colors duration-200">
                {i === 0 ? (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-navy-900 mb-3">{card.title}</h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">{card.description}</p>

              {/* Items */}
              <ul className="mt-6 space-y-3">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
