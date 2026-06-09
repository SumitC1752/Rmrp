'use client';

import { m, type Variants } from 'framer-motion';
import { useMemo } from 'react';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } };

const stats = [
  { label: 'Countries Served', value: 25 },
  { label: 'Active Ports', value: 30 },
  { label: 'Products Exported', value: 50 },
  { label: 'Successful Shipments', value: 500 },
];

function AnimatedCounter({ target, suffix = '+' }: { target: number; suffix?: string }) {
  const display = useMemo(() => `${target}${suffix}`, [target, suffix]);
  return (
    <span className="text-3xl lg:text-4xl font-bold text-gold-600 tabular-nums">
      {display}
    </span>
  );
}

export default function ExportNetwork() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Global Presence</m.span>
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
              Export Network Spanning Four Continents
            </m.h2>
            <m.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-gray-600">
              From the Gulf region of the Middle East to the industrial corridors of Europe and North America, RMRP Global Trade has built a robust export network connecting Indian manufacturing strength with global demand.
            </m.p>
            <m.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-gray-600">
              Our presence spans 25+ countries with strong concentration in the Middle East (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain), North America (USA, Canada), Europe (UK, Germany, Netherlands, France), and key Asian markets (Singapore, Malaysia, Thailand).
            </m.p>
          </m.div>
          <m.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-gray-50 rounded-xl border border-gray-100 p-6 lg:p-8 text-center">
                <AnimatedCounter target={stat.value} />
                <span className="block mt-2 text-sm text-gray-500 font-medium">{stat.label}</span>
              </div>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  );
}
