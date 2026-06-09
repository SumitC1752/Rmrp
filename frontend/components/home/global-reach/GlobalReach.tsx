'use client';

import Link from 'next/link';
import { m, type Variants } from 'framer-motion';
import { reachContent } from './data';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const statItem = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

function WorldMap() {
  return (
    <div className="relative w-full h-full min-h-[360px] lg:min-h-[500px]">
      <svg
        className="w-full h-full"
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Graticule grid */}
        <g opacity="0.06">
          <line x1="0" y1="100" x2="800" y2="100" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="200" x2="800" y2="200" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="300" x2="800" y2="300" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="400" x2="800" y2="400" stroke="white" strokeWidth="0.5" />
          <line x1="160" y1="0" x2="160" y2="500" stroke="white" strokeWidth="0.5" />
          <line x1="320" y1="0" x2="320" y2="500" stroke="white" strokeWidth="0.5" />
          <line x1="480" y1="0" x2="480" y2="500" stroke="white" strokeWidth="0.5" />
          <line x1="640" y1="0" x2="640" y2="500" stroke="white" strokeWidth="0.5" />
        </g>

        {/* Equator highlight */}
        <line x1="0" y1="250" x2="800" y2="250" stroke="#D4AF37" strokeWidth="0.5" opacity="0.1" strokeDasharray="4 4" />

        {/* Simplified continents */}
        <m.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {/* North America */}
          <path
            d="M80 60 Q120 30 180 50 Q200 70 190 110 Q200 150 170 180 Q140 190 110 170 Q90 150 70 120 Q60 90 80 60Z"
            fill="rgba(212,175,55,0.08)"
            stroke="rgba(212,175,55,0.2)"
            strokeWidth="0.8"
          />
          {/* South America */}
          <path
            d="M140 200 Q160 200 170 220 Q180 250 170 290 Q160 330 150 360 Q140 380 130 370 Q120 340 125 300 Q130 260 130 230 Q135 210 140 200Z"
            fill="rgba(212,175,55,0.08)"
            stroke="rgba(212,175,55,0.2)"
            strokeWidth="0.8"
          />
          {/* Europe */}
          <path
            d="M340 60 Q370 40 410 50 Q430 60 420 90 Q410 110 380 120 Q350 120 340 100 Q330 80 340 60Z"
            fill="rgba(212,175,55,0.08)"
            stroke="rgba(212,175,55,0.2)"
            strokeWidth="0.8"
          />
          {/* Africa */}
          <path
            d="M370 140 Q400 130 430 140 Q450 160 440 200 Q430 250 410 290 Q390 310 370 300 Q350 280 355 240 Q360 200 360 170 Q365 150 370 140Z"
            fill="rgba(212,175,55,0.08)"
            stroke="rgba(212,175,55,0.2)"
            strokeWidth="0.8"
          />
          {/* Asia */}
          <path
            d="M430 50 Q490 30 560 40 Q620 50 660 80 Q690 110 700 150 Q710 190 690 220 Q660 240 620 230 Q580 220 540 200 Q500 180 470 150 Q440 120 430 90 Q425 70 430 50Z"
            fill="rgba(212,175,55,0.08)"
            stroke="rgba(212,175,55,0.2)"
            strokeWidth="0.8"
          />
          {/* Australia */}
          <path
            d="M600 330 Q630 320 660 330 Q680 340 680 360 Q680 380 660 390 Q630 400 600 390 Q580 380 580 360 Q580 340 600 330Z"
            fill="rgba(212,175,55,0.08)"
            stroke="rgba(212,175,55,0.2)"
            strokeWidth="0.8"
          />
        </m.g>

        {/* Trade route arcs */}
        {/* Middle East → North America */}
        <m.path
          d="M420 180 Q300 100 150 140"
          stroke="url(#arc1)"
          strokeWidth="1"
          strokeDasharray="5 4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 1, ease: 'easeInOut' }}
        />
        {/* Middle East → Europe */}
        <m.path
          d="M420 180 Q400 80 380 80"
          stroke="url(#arc2)"
          strokeWidth="1"
          strokeDasharray="5 4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.4, ease: 'easeInOut' }}
        />
        {/* Asia → Europe */}
        <m.path
          d="M560 120 Q480 60 400 80"
          stroke="url(#arc2)"
          strokeWidth="1"
          strokeDasharray="5 4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 1.8, ease: 'easeInOut' }}
        />
        {/* Middle East → Asia */}
        <m.path
          d="M420 180 Q480 130 580 120"
          stroke="url(#arc1)"
          strokeWidth="0.8"
          strokeDasharray="4 5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 2.2, ease: 'easeInOut' }}
        />

        {/* Pulsing location dots */}
        {/* Middle East hub */}
        <circle cx="420" cy="175" r="5" fill="#D4AF37" opacity="0.9" />
        <m.circle
          cx="420" cy="175" r="12" fill="none" stroke="#D4AF37" strokeWidth="0.8"
          animate={{ r: [12, 20, 12], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
        />

        {/* USA */}
        <circle cx="130" cy="120" r="4" fill="#D4AF37" opacity="0.7" />
        <m.circle
          cx="130" cy="120" r="10" fill="none" stroke="#D4AF37" strokeWidth="0.6"
          animate={{ r: [10, 18, 10], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
        />

        {/* UK */}
        <circle cx="365" cy="70" r="3.5" fill="#D4AF37" opacity="0.6" />
        <m.circle
          cx="365" cy="70" r="9" fill="none" stroke="#D4AF37" strokeWidth="0.6"
          animate={{ r: [9, 16, 9], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeOut', delay: 1 }}
        />

        {/* Europe hub */}
        <circle cx="400" cy="90" r="4" fill="#D4AF37" opacity="0.7" />
        <m.circle
          cx="400" cy="90" r="10" fill="none" stroke="#D4AF37" strokeWidth="0.6"
          animate={{ r: [10, 18, 10], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
        />

        {/* Asia hub */}
        <circle cx="580" cy="120" r="3.5" fill="#D4AF37" opacity="0.6" />
        <m.circle
          cx="580" cy="120" r="9" fill="none" stroke="#D4AF37" strokeWidth="0.6"
          animate={{ r: [9, 16, 9], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeOut', delay: 1.2 }}
        />

        {/* Gradients for arcs */}
        <defs>
          <linearGradient id="arc1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="arc2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Country labels (absolutely positioned over map) */}
      <span className="absolute top-[22%] left-[16%] text-[10px] font-semibold text-gold-400/60 hidden lg:block">USA</span>
      <span className="absolute top-[13%] left-[45%] text-[10px] font-semibold text-gold-400/60 hidden lg:block">UK</span>
      <span className="absolute top-[30%] left-[51%] text-[10px] font-semibold text-gold-400/60 hidden lg:block">UAE</span>
      <span className="absolute top-[17%] left-[49%] text-[10px] font-semibold text-gold-400/60 hidden lg:block">EU</span>
    </div>
  );
}

export default function GlobalReach() {
  const { badge, heading, subheading, groups, stats, ctaLabel, ctaHref } = reachContent;

  return (
    <section className="bg-navy-900 py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <m.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <m.span
              variants={fadeUp}
              className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-400 mb-4"
            >
              {badge}
            </m.span>
            <m.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              {heading}
            </m.h2>
            <m.p
              variants={fadeUp}
              className="mt-4 text-base text-gray-400 leading-relaxed"
            >
              {subheading}
            </m.p>

            {/* Regional groups */}
            <div className="mt-10 space-y-6">
              {groups.map((group) => (
                <m.div key={group.region} variants={fadeUp}>
                  <h4 className="text-sm font-semibold text-gold-400 mb-2.5">
                    {group.region}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.countries.map((country) => (
                      <span
                        key={country}
                        className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </m.div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-x-12 gap-y-6">
              {stats.map((stat, i) => (
                <m.div
                  key={stat.label}
                  custom={i}
                  variants={statItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span className="block text-3xl font-bold text-gold-500">{stat.value}</span>
                  <span className="block text-xs text-gray-400/70 mt-1">{stat.label}</span>
                </m.div>
              ))}
            </div>

            {/* CTA */}
            <m.div variants={fadeUp} className="mt-10">
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide uppercase rounded-lg border border-white/20 text-white hover:bg-white/5 hover:border-white/30 transition-all duration-200"
              >
                {ctaLabel}
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

          {/* Right — World map */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <WorldMap />
          </m.div>
        </div>
      </div>
    </section>
  );
}
