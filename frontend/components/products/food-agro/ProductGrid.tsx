'use client';

import Image from 'next/image';
import Link from 'next/link';
import { m, type Variants } from 'framer-motion';
import { pageContent } from './data';
import type { FoodAgroProduct } from './types';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } };
const cardReveal = { hidden: { opacity: 0, y: 20 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.25 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }) };

function ProductCard({ product, index }: { product: FoodAgroProduct; index: number }) {
  const isFood = product.category === 'Processed Food';
  return (
    <m.div custom={index} variants={cardReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      className="group bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-sm"
    >
      <div className="relative w-full h-52 bg-navy-900 overflow-hidden">
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
      </div>
      <div className="p-6 lg:p-7">
        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${isFood ? 'text-emerald-600 bg-emerald-50' : 'text-amber-600 bg-amber-50'}`}>
          {product.category}
        </span>
        <h3 className="mt-3 text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">{product.name}</h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">{product.description}</p>

        {/* Key attributes */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.keyAttributes.map((attr) => (
            <span key={attr} className="px-2.5 py-0.5 text-[11px] font-medium text-gray-500 bg-gray-100 rounded-full">{attr}</span>
          ))}
        </div>

        {/* Specs grid */}
        <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-3 gap-3 text-center text-xs">
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-gray-400 mb-0.5">Origin</span>
            <span className="font-medium text-gray-700">{product.origin}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-gray-400 mb-0.5">Shelf Life</span>
            <span className="font-medium text-gray-700">{product.shelfLife}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-gray-400 mb-0.5">Packaging</span>
            <span className="font-medium text-gray-700 truncate block" title={product.packaging}>{product.packaging}</span>
          </div>
        </div>

        <Link href="/contact?product=" className="group/btn mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors duration-200">
          <span>Request Quote</span>
          <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </m.div>
  );
}

export default function ProductGrid() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {pageContent.categories.map((section, si) => (
          <m.div key={section.badge} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className={si === 0 ? '' : 'mt-20 lg:mt-24'}>
            <m.div variants={container} className="text-center max-w-2xl mx-auto mb-12">
              <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: section.badge === 'Processed Food' ? '#059669' : '#d97706' }}
              >
                {section.badge}
              </m.span>
              <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">{section.heading}</m.h2>
              <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed">{section.subheading}</m.p>
            </m.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {section.products.map((product, i) => (
                <ProductCard key={product.name} product={product} index={i} />
              ))}
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}
