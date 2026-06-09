'use client';

import { m } from 'framer-motion';
import { socialLinks } from '@/constants';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 1.2 },
  },
};

const itemReveal = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function FloatingSocialBar() {
  return (
    <m.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-2"
    >
      {socialLinks.map((s) => {
        const Icon = s.icon;
        return (
          <m.div key={s.label} variants={itemReveal}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="group relative flex items-center justify-center w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm hover:bg-navy-900 hover:border-navy-900 transition-all duration-200"
            >
              <Icon className="w-4 h-4 text-navy-900 group-hover:text-gold-400 transition-colors duration-200" />
              <span className="absolute right-full mr-3 px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase whitespace-nowrap bg-navy-900 text-gold-400 rounded-md opacity-0 translate-x-[4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
                {s.label}
              </span>
            </a>
          </m.div>
        );
      })}
    </m.div>
  );
}
