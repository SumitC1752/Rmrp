'use client';

import Link from 'next/link';
import { m, type Variants } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } };
const cardReveal = { hidden: { opacity: 0, y: 20 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }) };

const terms = [
  {
    title: 'EXW — Ex Works',
    description: 'The seller makes goods available at their premises. The buyer is responsible for all transportation costs, insurance, export/import clearance, and risk from pickup to final destination.',
    seller: 'Goods ready at factory',
    buyer: 'All transport, customs, insurance',
    risk: 'Transfers at seller\'s premises',
    best: 'Buyers with own logistics network',
  },
  {
    title: 'FOB — Free on Board',
    description: 'The seller delivers goods on board the vessel at the origin port. The buyer assumes risk and cost once goods are loaded. Buyer arranges ocean freight and insurance.',
    seller: 'Delivery to port, loading',
    buyer: 'Ocean freight, insurance, destination',
    risk: 'Transfers when on board vessel',
    best: 'Experienced importers with freight contracts',
  },
  {
    title: 'CIF — Cost, Insurance & Freight',
    description: 'The seller covers cost, insurance, and freight to the destination port. Risk transfers when goods are on board, but seller pays for transport and insurance.',
    seller: 'Product, freight, insurance to destination port',
    buyer: 'Import clearance, destination charges',
    risk: 'Transfers when on board at origin',
    best: 'First-time buyers, full-service preference',
  },
  {
    title: 'CFR — Cost & Freight',
    description: 'The seller covers cost and freight to the destination port. The buyer arranges their own insurance. Risk transfers when goods are on board the vessel at origin.',
    seller: 'Product, freight to destination port',
    buyer: 'Insurance, import clearance',
    risk: 'Transfers when on board at origin',
    best: 'Buyers who self-insure at lower rates',
  },
  {
    title: 'DAP — Delivered at Place',
    description: 'The seller delivers goods to a named destination (warehouse, terminal). The seller bears all risks and costs including import clearance, but not duties and taxes.',
    seller: 'All transport, customs clearance at destination',
    buyer: 'Import duties, taxes, unloading',
    risk: 'Transfers at named destination',
    best: 'Buyers wanting delivered door-to-door',
  },
  {
    title: 'DDP — Delivered Duty Paid',
    description: 'The seller delivers goods to the buyer\'s location with all costs covered — including transportation, insurance, export/import clearance, and duties/taxes. Maximum seller responsibility.',
    seller: 'Everything including duties & taxes',
    buyer: 'Receives goods at doorstep',
    risk: 'Transfers at buyer\'s location',
    best: 'Buyers wanting zero logistics involvement',
  },
];

const comparisonHeaders = ['Incoterm', 'Seller Responsibility', 'Buyer Responsibility', 'Risk Transfer', 'Best For'];
const comparisonRows = [
  { term: 'EXW', seller: 'Goods ready only', buyer: 'Everything from pickup', risk: 'At seller\'s door' },
  { term: 'FOB', seller: 'To vessel loading', buyer: 'Ocean freight onward', risk: 'On board at origin' },
  { term: 'CFR', seller: 'To destination port', buyer: 'Insurance + clearance', risk: 'On board at origin' },
  { term: 'CIF', seller: 'To destination port + insurance', buyer: 'Import clearance', risk: 'On board at origin' },
  { term: 'DAP', seller: 'To named destination', buyer: 'Duties + taxes', risk: 'At destination' },
  { term: 'DDP', seller: 'Everything delivered', buyer: 'Receives goods', risk: 'At buyer\'s location' },
];

export default function IncotermsSection() {
  return (
    <section id="incoterms" className="bg-gray-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-3xl mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Incoterms</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Flexible Incoterms</m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed max-w-2xl">
            Choose the right trade terms for every shipment — from Ex Works to Delivered Duty Paid. We explain every option and recommend the best fit for your order.
          </m.p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-18 lg:mb-24">
          <div className="space-y-5">
            <p className="text-base text-gray-600 leading-relaxed">
              Incoterms define who pays for what and when risk transfers from seller to buyer. Choosing the right incoterm affects your pricing, cash flow, logistics responsibility, and risk exposure. We do not push a single incoterm — we present the options, explain the implications, and let you choose.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Our team has executed every major incoterm across thousands of shipments to the Middle East, Europe, North America, and Asia. Whatever terms you prefer, trust us to deliver flawlessly.
            </p>
            <div className="mt-6 p-5 bg-emerald-50 rounded-xl border border-emerald-100">
              <span className="text-xs font-semibold tracking-widest uppercase text-emerald-700">Responsibility Spectrum</span>
              <div className="mt-4 space-y-3">
                {[
                  { label: 'Buyer Responsibility', pct: '100%', color: 'bg-emerald-500' },
                  { label: 'Seller Responsibility', pct: '0%', color: 'bg-navy-900' },
                ].map((r) => (
                  <div key={r.label} className="flex items-center gap-3">
                    <span className="text-xs text-gray-600 w-28 shrink-0">{r.label}</span>
                    <div className="flex-1 h-2.5 rounded-full bg-gray-200 overflow-hidden">
                      <div className={`h-full rounded-full ${r.color}`} style={{ width: r.pct }} />
                    </div>
                  </div>
                ))}
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>EXW</span>
                  <span>FOB</span>
                  <span>CFR</span>
                  <span>CIF</span>
                  <span>DAP</span>
                  <span>DDP</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {terms.map((item, i) => (
              <m.div key={item.title} custom={i} variants={cardReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group bg-white rounded-xl border border-gray-100 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/20 hover:shadow-gold-sm">
                <div className="flex items-start gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">{item.title}</h3>
                    <p className="mt-1 text-xs text-gray-500 leading-relaxed">{item.description}</p>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-400">
                      <span><span className="font-medium text-gray-600">Risk:</span> {item.risk}</span>
                      <span><span className="font-medium text-gray-600">Best:</span> {item.best}</span>
                    </div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8">Incoterm Comparison</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-navy-900">
                  {comparisonHeaders.map((h) => (
                    <th key={h} className="px-5 py-4 text-xs font-semibold tracking-wider uppercase text-white first:rounded-tl-xl last:rounded-tr-xl">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.term} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gold-50/50 transition-colors duration-200`}>
                    <td className="px-5 py-4 font-bold text-navy-900">{row.term}</td>
                    <td className="px-5 py-4 text-gray-600">{row.seller}</td>
                    <td className="px-5 py-4 text-gray-600">{row.buyer}</td>
                    <td className="px-5 py-4 text-gray-600">{row.risk}</td>
                    <td className="px-5 py-4">
                      <span className="inline-block px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-emerald-50 text-emerald-700">
                        {i === 0 ? 'Self-managed' : i === 5 ? 'Zero touch' : 'Balanced'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </m.div>

        <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 text-center">
          <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase rounded-lg bg-gold-500 text-navy-900 hover:bg-gold-400 transition-all duration-200 shadow-gold-sm hover:shadow-gold-lg">
            Discuss Your Terms
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </m.div>
      </div>
    </section>
  );
}
