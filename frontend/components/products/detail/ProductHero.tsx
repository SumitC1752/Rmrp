'use client';

import Link from 'next/link';
import { m, type Variants } from 'framer-motion';
import type { ProductData } from '@/lib/products-data';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function ProductHero({ product }: { product: ProductData }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 py-12 sm:py-16 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.03)_0%,_transparent_60%)]" />
      <m.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-7xl px-5 lg:px-8"
      >
        <m.nav variants={fadeUp} className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
          {[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: product.category, href: product.categoryHref },
            { label: product.name },
          ].map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i > 0 && <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-gold-400 transition-colors duration-200">{crumb.label}</Link>
              ) : (
                <span className="text-gold-400">{crumb.label}</span>
              )}
            </span>
          ))}
        </m.nav>
        <m.h1 variants={fadeUp} className="text-[clamp(1.75rem,6vw,2.5rem)] sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">{product.name}</m.h1>
        <m.p variants={fadeUp} className="mt-5 text-[15px] sm:text-lg lg:text-xl text-gray-300/80 leading-relaxed max-w-2xl">{product.heroSubheading}</m.p>
      </m.div>
    </section>
  );
}
