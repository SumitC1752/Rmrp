'use client';

import { m, type Variants } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } };
const cardReveal = { hidden: { opacity: 0, y: 20 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }) };

const regions = [
  {
    name: 'Middle East',
    flag: '🌍',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain'],
    description: 'Our largest and most established export region. Strong demand for aluminum, sugar, and wheat flour driven by construction, manufacturing, and FMCG sectors across the Gulf Cooperation Council.',
    highlights: ['UAE — Dubai & Abu Dhabi trade hubs', 'Saudi Arabia — Infrastructure & industrial growth', 'Qatar — Food security initiatives'],
    stat: '6 Countries',
    color: 'from-amber-400/10 to-amber-500/5',
    borderColor: 'border-amber-200/40',
    textColor: 'text-amber-700',
    labelColor: 'bg-amber-50 text-amber-600',
  },
  {
    name: 'North America',
    flag: '🌎',
    countries: ['USA', 'Canada'],
    description: 'Growing market for aluminum scrap serving recycling facilities and secondary smelters. Rising demand for dehydrated food products and specialty flours for industrial food processing.',
    highlights: ['USA — Industrial & food ingredient demand', 'Canada — Strict quality standards met', 'Multi-modal routing via East & West Coast ports'],
    stat: '2 Countries',
    color: 'from-blue-400/10 to-blue-500/5',
    borderColor: 'border-blue-200/40',
    textColor: 'text-blue-700',
    labelColor: 'bg-blue-50 text-blue-600',
  },
  {
    name: 'Europe',
    flag: '🌍',
    countries: ['United Kingdom', 'Germany', 'Netherlands', 'France'],
    description: 'Premium market with rigorous quality standards. Our certified products meet EU import requirements across all categories. Strong demand for aluminum ingots and organic food ingredients.',
    highlights: ['Rotterdam — Europe\'s largest port gateway', 'UK & Germany — High-quality aluminum demand', 'Netherlands — Food processing hub'],
    stat: '4 Countries',
    color: 'from-indigo-400/10 to-indigo-500/5',
    borderColor: 'border-indigo-200/40',
    textColor: 'text-indigo-700',
    labelColor: 'bg-indigo-50 text-indigo-600',
  },
  {
    name: 'Asia',
    flag: '🌏',
    countries: ['Singapore', 'Malaysia', 'Thailand'],
    description: 'Rapidly expanding market for agro commodities and processed food ingredients. Proximity enables competitive freight rates and shorter transit times versus Western markets.',
    highlights: ['Singapore — Premium trade & finance hub', 'Malaysia & Thailand — Agro commodity demand', 'Short transit times from Indian ports'],
    stat: '3 Countries',
    color: 'from-emerald-400/10 to-emerald-500/5',
    borderColor: 'border-emerald-200/40',
    textColor: 'text-emerald-700',
    labelColor: 'bg-emerald-50 text-emerald-600',
  },
];

export default function RegionsServed() {
  return (
    <section id="regions" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Regions We Serve</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Export Destinations</m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed">
            Strategic market coverage across 15 countries in four continents with local market expertise and established trade relationships.
          </m.p>
        </m.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {regions.map((region, i) => (
            <m.div
              key={region.name}
              custom={i}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className={`group relative overflow-hidden rounded-xl border ${region.borderColor} bg-gradient-to-br ${region.color} p-6 lg:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold-sm`}
            >
              <div className="flex items-start gap-4">
                <span className="shrink-0 text-3xl">{region.flag}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">{region.name}</h3>
                    <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${region.labelColor}`}>{region.stat}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {region.countries.map((c) => (
                      <span key={c} className="text-xs text-gray-400 font-medium">{c}{region.countries.indexOf(c) < region.countries.length - 1 ? ',' : ''}</span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">{region.description}</p>
                  <div className="mt-4 space-y-1">
                    {region.highlights.map((h) => (
                      <span key={h} className="flex items-center gap-1.5 text-xs text-gray-500">
                        <svg className="w-3 h-3 text-gold-500/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
