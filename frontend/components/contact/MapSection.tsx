'use client';

import { m, type Variants } from 'framer-motion';

export default function MapSection() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-18"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Our Location</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Find Us</h2>
          <p className="mt-4 text-base text-gray-500 leading-relaxed">
            Our office is located in Ahilyanagar, Maharashtra. Appointments are recommended for in-person meetings.
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="relative w-full h-[400px] lg:h-[480px] bg-navy-900 rounded-2xl overflow-hidden"
        >
          {/* Map placeholder with grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.06)_0%,_transparent_60%)]" />

          {/* Decorative map elements */}
          <div className="absolute top-[15%] left-[10%] w-20 h-px bg-gold-500/15 rotate-45" />
          <div className="absolute top-[25%] right-[20%] w-32 h-px bg-gold-500/10 -rotate-12" />
          <div className="absolute bottom-[30%] left-[15%] w-16 h-16 border border-gold-500/8 rounded-full" />
          <div className="absolute bottom-[20%] right-[10%] w-24 h-24 border border-gold-500/8 rounded-lg rotate-12" />
          <div className="absolute top-[10%] left-[45%] w-px h-24 bg-gradient-to-b from-gold-500/0 via-gold-500/10 to-gold-500/0" />

          {/* Location marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="relative flex items-center justify-center mb-2">
              <div className="w-5 h-5 rounded-full bg-gold-500 animate-ping absolute opacity-40" />
              <svg className="w-8 h-8 text-gold-500 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-white">RMRP Global Trade</p>
            <p className="text-xs text-gray-400 mt-1">Ahilyanagar, Maharashtra</p>
          </div>

          {/* Road lines */}
          <div className="absolute top-[30%] left-0 right-0 h-px bg-gold-500/6" />
          <div className="absolute top-[60%] left-0 right-0 h-px bg-gold-500/6" />
          <div className="absolute top-0 bottom-0 left-[30%] w-px bg-gold-500/6" />
          <div className="absolute top-0 bottom-0 right-[40%] w-px bg-gold-500/6" />
        </m.div>
      </div>
    </section>
  );
}
