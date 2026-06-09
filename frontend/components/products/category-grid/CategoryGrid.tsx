'use client';

import Image from 'next/image';
import Link from 'next/link';
import { m } from 'framer-motion';
import { sectionHeading, sectionSubheading, categories, ctaLabel, ctaHref } from './data';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
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
    transition: { delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function CategoryGrid() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-18"
        >
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
            {sectionHeading}
          </m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed">
            {sectionSubheading}
          </m.p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <m.div
              key={cat.title}
              custom={i}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-sm"
            >
              <div className="relative w-full h-48 bg-navy-900 overflow-hidden">
                <Image src={cat.image} alt={cat.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <span className="absolute bottom-3 left-4 text-lg font-bold text-white/10">{categories.indexOf(cat) === 0 ? '01' : categories.indexOf(cat) === 1 ? '02' : '03'}</span>
              </div>
              <div className="p-6 lg:p-7">
                <span className="inline-block px-3 py-1 text-xs font-medium text-gold-600 bg-gold-50 rounded-full mb-3">
                  {cat.productCount}
                </span>
                <h3 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">
                  {cat.title}
                </h3>
                <p className="mt-2.5 text-sm text-gray-500 leading-relaxed">
                  {cat.description}
                </p>
                <Link
                  href={cat.href}
                  className="group/btn mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors duration-200"
                >
                  <span>View Products</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </m.div>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase rounded-lg bg-navy-900 text-white hover:bg-navy-800 transition-all duration-200"
          >
            {ctaLabel}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </m.div>
      </div>
    </section>
  );
}
