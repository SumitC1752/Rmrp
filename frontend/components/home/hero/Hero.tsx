'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
} from 'react-simple-maps';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const INDIA: [number, number] = [78.9629, 20.5937];

const DESTINATIONS: { name: string; coords: [number, number] }[] = [
  { name: 'USA', coords: [-95.7129, 37.0902] },
  { name: 'EU', coords: [15.2551, 54.5260] },
  { name: 'UAE', coords: [53.8478, 23.4241] },
  { name: 'AFR', coords: [17.8739, 3.3792] },
  { name: 'SA', coords: [-58.6000, -20.0000] },
  { name: 'APAC', coords: [134.4927, -25.2744] },
];

const STATS = [
  { value: '25+', label: 'Countries' },
  { value: '4', label: 'Categories' },
  { value: '100%', label: 'Quality' },
];

const CERTS = ['ISO Certified', 'APEDA Registered', 'FIEO Member'];

const PRODUCTS = [
  { label: 'Aluminum Ingots', style: { top: '10%', left: '2%' }, delay: 1.8, dur: 4.2 },
  { label: 'Processed Food', style: { top: '40%', right: '0%' }, delay: 2.1, dur: 3.6 },
  { label: 'Agro Commodities', style: { bottom: '22%', left: '8%' }, delay: 2.4, dur: 5.0 },
];

function TradeArc({ from, to, delay }: { from: [number, number]; to: [number, number]; delay: number }) {
  return (
    <m.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay, duration: 0.6 }}>
      <Line from={from} to={to} stroke="#D4AF37" strokeWidth={0.8}
        strokeOpacity={0.5} strokeDasharray="4 6" strokeLinecap="round" />
    </m.g>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      className="relative min-h-[100dvh] lg:min-h-screen overflow-hidden bg-[#07172B] flex flex-col"
      aria-label="Hero"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_65%_45%,#0d2542,#07172B_72%)]" />
        <div className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.055),transparent_60%)]" />
        <div className="absolute -bottom-32 right-0   w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.035),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.016]"
          style={{ backgroundImage: 'radial-gradient(rgba(212,175,55,1) 1px,transparent 1px)', backgroundSize: '38px 38px' }} />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      </div>

      {/* ── Content wrapper — fills height, navbar offset via pt ── */}
      <div className="relative z-10 flex-1 flex flex-col mx-auto w-full max-w-7xl px-5 lg:px-10 pt-2 sm:pt-4 lg:pt-[72px] pb-2 lg:pb-3 overflow-hidden">

        {/* ── Main grid — takes all remaining space ── */}
        <div className="flex-1 grid lg:grid-cols-[1fr_1.15fr] items-center gap-0 min-h-0 pt-0 lg:pt-3 pb-1 lg:pb-2">

          {/* ══ LEFT ══ */}
          <div className="flex flex-col gap-2 lg:gap-4 lg:pr-8 xl:pr-12">

            {/* Badge */}
            <m.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }} className="w-fit">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.06] px-3.5 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AF37] opacity-75" />
                  <span className="relative rounded-full h-1.5 w-1.5 bg-[#D4AF37]" />
                </span>
                <span className="text-[10px] font-semibold tracking-[0.18em] text-[#D4AF37] uppercase">
                  Trusted Global Export Partner
                </span>
              </div>
            </m.div>

            {/* Headline */}
            <div>
              {[
                { text: 'Exporting Quality.', gold: false, delay: 0.18 },
                { text: 'Building Trust.', gold: true, delay: 0.30 },
              ].map(({ text, gold, delay }) => (
                <m.h1 key={text}
                  initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay, ease }}
                  className={`block font-black leading-[1.08] tracking-tight
                    text-[clamp(1.6rem,7.5vw,2rem)] sm:text-[clamp(2rem,5vw,2.5rem)] lg:text-[2.9rem] xl:text-[3.3rem]
                    ${gold ? 'text-[#D4AF37]' : 'text-white'}`}
                >
                  {text}
                </m.h1>
              ))}
            </div>

            {/* Body */}
            <m.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="text-[13px] sm:text-[14px] text-white/38 leading-[1.7] max-w-md lg:max-w-[380px]">
              RMRP Global Trade supplies Aluminum Ingots, Aluminum Scrap, Processed Food
              Products and Agro Commodities to importers and industrial buyers across 25+ countries.
            </m.p>

            {/* CTA */}
            <m.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              <Link href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3 sm:py-2.5 text-[12px] font-bold uppercase tracking-[0.1em] text-[#07172B] transition-all duration-200 shadow-[0_4px_20px_rgba(212,175,55,0.32)] hover:bg-[#e2c24a] hover:shadow-[0_6px_28px_rgba(212,175,55,0.48)]">
                Request Quote
                <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/products"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/14 px-6 py-3 sm:py-2.5 text-[12px] font-medium uppercase tracking-[0.1em] text-white/50 transition-all duration-200 hover:border-white/30 hover:text-white/80 hover:bg-white/[0.04]">
                Our Products
                <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </m.div>

            {/* Stats */}
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="grid grid-cols-3 sm:grid-cols-4 gap-1.5 sm:gap-3 pt-2 sm:pt-3 border-t border-white/[0.07]">
              {STATS.map(({ value, label }, i) => (
                <m.div key={label}
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.95 + i * 0.07, duration: 0.4 }}
                  className="flex flex-col gap-0.5">
                  <span className="text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] font-black text-[#D4AF37] leading-none tabular-nums">
                    {value}
                  </span>
                  <span className="text-[7px] sm:text-[8.5px] text-white/28 uppercase tracking-[0.1em] font-medium leading-tight">
                    {label}
                  </span>
                </m.div>
              ))}
            </m.div>

            {/* Trust bar — inside left column, no gap */}
            <m.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-2xl border border-white/[0.065] bg-white/[0.018] backdrop-blur-xl px-3 sm:px-4 py-1.5 sm:py-2">
                <span className="text-[7px] sm:text-[8px] text-white/20 uppercase tracking-[0.2em] font-semibold">Certified</span>
                <span className="w-px h-3 bg-white/10" />
                {CERTS.map((item) => (
                  <span key={item} className="inline-flex items-center gap-1 rounded-lg bg-white/[0.035] border border-white/[0.05] px-2 sm:px-2.5 py-0.5 sm:py-1">
                    <svg className="w-1.5 h-1.5 sm:w-2 sm:h-2 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[7px] sm:text-[8.5px] font-semibold text-white/38 uppercase tracking-wider whitespace-nowrap">{item}</span>
                  </span>
                ))}
              </div>
            </m.div>

          </div>

          {/* ══ RIGHT — Map ══ */}
          <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease }}
            className="relative hidden lg:flex items-stretch justify-center h-full min-h-0">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_70%_55%_at_52%_48%,rgba(212,175,55,0.04),transparent_72%)]" />

            {mounted && (
              <div className="relative w-full">
                <ComposableMap
                  projection="geoNaturalEarth1"
                  projectionConfig={{ scale: 150, center: [20, 8] }}
                  width={580} height={390}
                  style={{ width: '100%', height: 'auto' }}
                >
                  <Geographies geography={GEO_URL}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo}
                          fill="#D4AF37" fillOpacity={0.07}
                          stroke="#D4AF37" strokeOpacity={0.24} strokeWidth={0.4}
                          style={{
                            default: { outline: 'none' },
                            hover: { outline: 'none', fillOpacity: 0.14 },
                            pressed: { outline: 'none' },
                          }}
                        />
                      ))
                    }
                  </Geographies>

                  {DESTINATIONS.map(({ name, coords }, i) => (
                    <TradeArc key={name} from={INDIA} to={coords} delay={1.0 + i * 0.12} />
                  ))}

                  {DESTINATIONS.map(({ name, coords }, i) => (
                    <Marker key={name} coordinates={coords}>
                      <m.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 + i * 0.12, duration: 0.4 }}>
                        <m.circle r={7} fill="#D4AF37" fillOpacity={0.08}
                          animate={{ r: [5, 13, 5], opacity: [0.1, 0.0, 0.1] }}
                          transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.3 }} />
                        <circle r={2.8} fill="#D4AF37" fillOpacity={0.9} />
                        <text y={-7} textAnchor="middle" fill="#D4AF37" fontSize={5.5}
                          fontWeight={700} opacity={0.6} fontFamily="system-ui,sans-serif"
                          letterSpacing="0.06em">{name}</text>
                      </m.g>
                    </Marker>
                  ))}

                  <Marker coordinates={INDIA}>
                    <m.circle r={22} fill="#D4AF37" fillOpacity={0.05}
                      animate={{ r: [18, 34, 18], opacity: [0.1, 0.01, 0.1] }}
                      transition={{ duration: 4, repeat: Infinity }} />
                    <m.circle r={12} fill="#D4AF37" fillOpacity={0.09}
                      animate={{ r: [10, 22, 10], opacity: [0.14, 0.02, 0.14] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 0.55 }} />
                    <circle r={5.5} fill="#D4AF37" />
                    <circle r={2.8} fill="#fff" opacity={0.95} />
                    <text y={15} textAnchor="middle" fill="#D4AF37" fontSize={6.5}
                      fontWeight={800} opacity={0.82} fontFamily="system-ui,sans-serif"
                      letterSpacing="0.14em">INDIA</text>
                  </Marker>
                </ComposableMap>

                {PRODUCTS.map(({ label, style, delay, dur }) => (
                  <m.div key={label} className="absolute pointer-events-none" style={style}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
                    transition={{
                      opacity: { delay, duration: 0.45 },
                      scale: { delay, duration: 0.4 },
                      y: { delay: delay + 0.4, duration: dur, repeat: Infinity, ease: 'easeInOut' },
                    }}>
                    <div className="inline-flex items-center gap-2 rounded-2xl border border-[#D4AF37]/18 bg-[#07172B]/85 backdrop-blur-xl px-3.5 py-2 shadow-[0_8px_28px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.85)]" />
                      <span className="text-[11px] font-semibold text-[#D4AF37]/88 tracking-wide whitespace-nowrap">
                        {label}
                      </span>
                    </div>
                  </m.div>
                ))}
              </div>
            )}
          </m.div>

        </div>



      </div>

      {/* Scroll cue */}
      <m.div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }} animate={{ opacity: [0, 0.3, 0] }}
        transition={{ delay: 3.5, duration: 3, repeat: Infinity }}>
        <span className="text-[7px] text-white/15 uppercase tracking-[0.3em]">Scroll</span>
        <m.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
          <svg className="w-3 h-3 text-white/15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </m.div>
      </m.div>

    </section>
  );
}