'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import { sectionBadge, sectionHeading, sectionSubheading, featuredProducts } from './data';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
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
    transition: { delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

const categoryColors: Record<string, string> = {
  'Aluminum Products': 'text-gold-600 bg-gold-50',
  'Processed Food': 'text-emerald-600 bg-emerald-50',
  'Agro Products': 'text-amber-600 bg-amber-50',
};

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-18"
        >
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">
            {sectionBadge}
          </m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
            {sectionHeading}
          </m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed">
            {sectionSubheading}
          </m.p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {featuredProducts.map((product, i) => (
            <m.div
              key={product.name}
              custom={i}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="group bg-gray-50 rounded-xl border border-gray-100 p-6 lg:p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/20 hover:shadow-gold-sm"
            >
              <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${categoryColors[product.category] || 'text-gray-600 bg-gray-100'}`}>
                {product.category}
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">
                {product.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {product.description}
              </p>
              <Link
                href={product.href}
                className="group/btn mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors duration-200"
              >
                <span>View Details</span>
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
