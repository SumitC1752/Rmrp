'use client';

import Link from 'next/link';
import { m, type Variants } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } };
const cardReveal = { hidden: { opacity: 0, y: 20 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }) };

const methods = [
  {
    title: 'T/T — Telegraphic Transfer',
    description: 'Direct bank-to-bank wire transfer. Typically structured as a partial advance payment (30–50%) with the balance paid against shipping documents or upon vessel departure.',
    process: 'Buyer wires advance → We produce/ship → Balance paid against documents → Original docs released',
    suitable: 'Established relationships, repeat buyers, medium-value orders',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 11M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: 'L/C — Letter of Credit',
    description: 'A bank-guaranteed payment method where the buyer\'s bank commits to pay the seller upon presentation of compliant shipping documents. The most secure method for both parties.',
    process: 'Buyer opens LC with bank → Bank issues LC to us → We ship & present docs → Bank releases payment',
    suitable: 'New trade relationships, high-value orders, markets with currency controls',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125V9M7.5 12h.008v.008H7.5V12zm3 0h.008v.008H10.5V12zm3 0h.008v.008H13.5V12z" />
      </svg>
    ),
  },
  {
    title: 'Advance Payment',
    description: 'Full payment is made before production begins. The simplest and most secure method for the seller, offering buyers priority processing and often volume-based pricing benefits.',
    process: 'Buyer pays 100% in advance → We produce & ship → Documents released immediately',
    suitable: 'Small trial orders, custom/specialized products, fast-track orders',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'D/P — Documents Against Payment',
    description: 'Shipping documents are released to the buyer only after payment is made at the bank. A balance between LC and open account — less costly than LC, more secure than open credit.',
    process: 'We ship & send docs to buyer\'s bank → Buyer pays at bank → Bank releases docs → Goods cleared',
    suitable: 'Moderate-value orders, semi-established relationships, LC cost-sensitive markets',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Flexible Payment Solutions',
    description: 'Custom payment structures built around your needs — split payments (partial TT + LC), milestone-based releases, deferred payment terms for trusted partners, and multi-currency options.',
    process: 'Custom structure agreed → Payments aligned with milestones → Terms evolve with relationship',
    suitable: 'High-volume contracts, long-term partnerships, complex multi-product orders',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
];

export default function PaymentTermsSection() {
  return (
    <section id="payment-terms" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-3xl mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Payment Terms</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Secure Payment Solutions</m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed max-w-2xl">
            Flexible, secure payment structures designed to protect both buyer and seller while keeping your supply chain moving.
          </m.p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-18 lg:mb-24">
          <div className="space-y-5">
            <p className="text-base text-gray-600 leading-relaxed">
              Payment terms are a critical component of any international trade agreement. The right structure balances the buyer\'s need for cash flow flexibility with the seller\'s need for payment security. We offer a full range of payment options and will recommend the structure that best fits your order value, trading history, and market risk profile.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Every trade relationship is different. A first-time buyer may prefer the security of an L/C, while a long-term partner may benefit from the efficiency of T/T or a custom flexible structure. Our trade finance team will guide you through the options and find terms that work for both sides.
            </p>
            <div className="mt-6 p-5 bg-gold-50 rounded-xl border border-gold-100">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-700">Security vs. Flexibility Spectrum</span>
              <div className="mt-4 flex items-center gap-2">
                {[
                  { label: 'Advance', color: 'bg-navy-900', width: 'w-1/5' },
                  { label: 'L/C', color: 'bg-navy-700', width: 'w-1/5' },
                  { label: 'D/P', color: 'bg-navy-500', width: 'w-1/5' },
                  { label: 'T/T', color: 'bg-navy-400', width: 'w-1/5' },
                  { label: 'Flexible', color: 'bg-gold-500', width: 'w-1/5' },
                ].map((m) => (
                  <div key={m.label} className="flex-1 text-center">
                    <div className={`h-2 rounded-full ${m.color} ${m.label === 'Flexible' ? '' : 'opacity-60'}`} />
                    <span className="block mt-1 text-[10px] text-gray-500 font-medium">{m.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-1 text-[9px] text-gray-400">
                <span>More Security</span>
                <span>More Flexibility</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {methods.map((item, i) => (
              <m.div key={item.title} custom={i} variants={cardReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group relative bg-gray-50 rounded-xl border border-gray-100 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/20 hover:shadow-gold-sm">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gold-50 text-gold-600 group-hover:bg-gold-100 transition-colors duration-200">{item.icon}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">{item.title}</h3>
                    <p className="mt-1 text-xs text-gray-500 leading-relaxed">{item.description}</p>
                    <div className="mt-2 flex flex-col gap-0.5">
                      <span className="text-[11px] text-gray-400 font-mono">{item.process}</span>
                      <span className="text-[11px] text-gray-400 italic">Suitable: {item.suitable}</span>
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>

        <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase rounded-lg bg-gold-500 text-navy-900 hover:bg-gold-400 transition-all duration-200 shadow-gold-sm hover:shadow-gold-lg">
            Discuss Payment Options
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </m.div>
      </div>
    </section>
  );
}
