'use client';

import { m } from 'framer-motion';
import type { ProductData } from '@/lib/products-data';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } } };

export default function ProductSpecs({ product }: { product: ProductData }) {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Specifications</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Technical Specifications</m.h2>
        </m.div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {product.specs.map((spec, i) => (
            <m.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-between px-5 py-4 bg-white rounded-xl border border-gray-100"
            >
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{spec.label}</span>
              <span className="text-sm font-semibold text-navy-900 text-right ml-4">{spec.value}</span>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
