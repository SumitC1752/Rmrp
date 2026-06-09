'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import {
  sectionBadge,
  sectionHeading,
  sectionSubheading,
  categories,
  ctaLabel,
  ctaHref,
} from './data';

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
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

function AluminumGraphic() {
  return (
    <div className="relative w-full h-36 bg-gradient-to-br from-navy-800 to-navy-900 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 144" fill="none" aria-hidden="true">
        {/* Hexagon lattice */}
        <polygon points="150,20 180,35 180,65 150,80 120,65 120,35" stroke="#D4AF37" strokeWidth="0.6" fill="none" opacity="0.25" />
        <polygon points="110,50 140,65 140,95 110,110 80,95 80,65" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.15" />
        <polygon points="190,50 220,65 220,95 190,110 160,95 160,65" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.15" />
        <polygon points="150,80 180,95 180,125 150,140 120,125 120,95" stroke="#D4AF37" strokeWidth="0.6" fill="none" opacity="0.2" />
        {/* Shimmer line */}
        <line x1="0" y1="72" x2="300" y2="72" stroke="url(#shimmer)" strokeWidth="0.5" opacity="0.3" />
        <defs>
          <linearGradient id="shimmer" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute bottom-4 left-4 text-4xl font-bold text-white/5 select-none">01</span>
    </div>
  );
}

function FoodGraphic() {
  return (
    <div className="relative w-full h-36 bg-gradient-to-br from-navy-800 to-navy-900 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 144" fill="none" aria-hidden="true">
        {/* Concentric circles */}
        <circle cx="150" cy="72" r="45" stroke="#D4AF37" strokeWidth="0.6" fill="none" opacity="0.2" />
        <circle cx="150" cy="72" r="35" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.15" />
        <circle cx="150" cy="72" r="25" stroke="#D4AF37" strokeWidth="0.4" fill="none" opacity="0.1" />
        {/* Small dots around the ring */}
        <circle cx="195" cy="72" r="2" fill="#D4AF37" opacity="0.25" />
        <circle cx="150" cy="117" r="2" fill="#D4AF37" opacity="0.25" />
        <circle cx="105" cy="72" r="2" fill="#D4AF37" opacity="0.25" />
        <circle cx="150" cy="27" r="2" fill="#D4AF37" opacity="0.25" />
        {/* Particle dots */}
        <circle cx="80" cy="40" r="1.5" fill="#D4AF37" opacity="0.15" />
        <circle cx="220" cy="100" r="1.5" fill="#D4AF37" opacity="0.15" />
        <circle cx="60" cy="100" r="1" fill="#D4AF37" opacity="0.1" />
        <circle cx="240" cy="50" r="1" fill="#D4AF37" opacity="0.1" />
      </svg>
      <span className="absolute bottom-4 left-4 text-4xl font-bold text-white/5 select-none">02</span>
    </div>
  );
}

function AgroGraphic() {
  return (
    <div className="relative w-full h-36 bg-gradient-to-br from-navy-800 to-navy-900 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 144" fill="none" aria-hidden="true">
        {/* Stalk/leaf lines */}
        <path d="M140 100 Q150 60 160 40" stroke="#D4AF37" strokeWidth="0.8" fill="none" opacity="0.25" />
        <path d="M120 100 Q135 55 140 35" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.15" />
        <path d="M170 100 Q160 60 155 38" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.15" />
        {/* Leaf shapes */}
        <ellipse cx="160" cy="40" rx="12" ry="4" transform="rotate(-30 160 40)" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.2" />
        <ellipse cx="140" cy="35" rx="10" ry="3" transform="rotate(20 140 35)" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.15" />
        {/* Grain dots */}
        <circle cx="150" cy="110" r="3" fill="#D4AF37" opacity="0.15" />
        <circle cx="140" cy="115" r="2" fill="#D4AF37" opacity="0.12" />
        <circle cx="160" cy="115" r="2" fill="#D4AF37" opacity="0.12" />
        <circle cx="150" cy="120" r="2" fill="#D4AF37" opacity="0.1" />
      </svg>
      <span className="absolute bottom-4 left-4 text-4xl font-bold text-white/5 select-none">03</span>
    </div>
  );
}

const graphics = [AluminumGraphic, FoodGraphic, AgroGraphic];

export default function ProductCategories() {
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

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, i) => {
            const Graphic = graphics[i];
            return (
              <m.div
                key={cat.title}
                custom={i}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-sm"
              >
                {/* Visual area */}
                <Graphic />

                {/* Content */}
                <div className="p-6 lg:p-7">
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">
                    {cat.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-gray-500 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Product count badge */}
                  <span className="inline-block mt-4 px-3 py-1 text-xs font-medium text-gold-600 bg-gold-50 rounded-full">
                    {cat.productCount}
                  </span>

                  {/* Key products */}
                  <ul className="mt-4 space-y-1.5">
                    {cat.keyProducts.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1 h-1 rounded-full bg-gold-500 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={cat.href}
                    className="group/btn mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors duration-200"
                  >
                    <span>Explore Range</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </m.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase rounded-lg border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-200"
          >
            {ctaLabel}
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </m.div>
      </div>
    </section>
  );
}
