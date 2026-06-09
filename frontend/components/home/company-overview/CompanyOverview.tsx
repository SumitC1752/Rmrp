'use client';

import Image from 'next/image';
import Link from 'next/link';
import { m } from 'framer-motion';
import { IMAGES } from '@/constants';
import { companyContent } from './data';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

function VisualPanel() {
  return (
    <div className="relative w-full h-full min-h-[360px] lg:min-h-[520px] bg-navy-900 rounded-2xl overflow-hidden">
      <Image src={IMAGES.hero} alt="RMRP Global Trade — Manufacturing & Export" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
    </div>
  );
}

export default function CompanyOverview() {
  const { badge, heading, paragraphs, strengths, cta } = companyContent;

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Visual panel */}
          <m.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <VisualPanel />
          </m.div>

          {/* Right — Content */}
          <m.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Badge */}
            <m.div variants={fadeUp}>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">
                {badge}
              </span>
            </m.div>

            {/* Heading */}
            <m.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight"
            >
              {heading}
            </m.h2>

            {/* Paragraphs */}
            {paragraphs.map((p, i) => (
              <m.p
                key={i}
                variants={fadeUp}
                className="mt-5 text-base leading-relaxed text-gray-600"
              >
                {p}
              </m.p>
            ))}

            {/* Strengths grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
              {strengths.map((s, i) => (
                <m.div
                  key={s.title}
                  custom={i}
                  variants={cardFade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group p-5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gold-500/20 hover:shadow-gold-sm transition-all duration-300"
                >
                  <span className="block text-sm font-semibold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">
                    {s.title}
                  </span>
                  <span className="block text-sm text-gray-500 mt-1.5 leading-relaxed">
                    {s.description}
                  </span>
                </m.div>
              ))}
            </div>

            {/* CTA */}
            <m.div variants={fadeUp} className="mt-10">
              <Link
                href={cta.href}
                className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide uppercase rounded-lg bg-navy-900 text-white hover:bg-navy-800 transition-all duration-200"
              >
                {cta.label}
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
