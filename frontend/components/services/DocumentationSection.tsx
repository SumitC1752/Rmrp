'use client';

import Link from 'next/link';
import { m } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } } };
const cardReveal = { hidden: { opacity: 0, y: 20 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }) };

const documents = [
  {
    title: 'Commercial Invoice',
    description: 'Detailed invoice listing product description, quantity, unit price, total value, incoterms, and payment terms. Required by customs in all destination countries for valuation and duty assessment.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Packing List',
    description: 'Comprehensive list of each package in the shipment — weight, dimensions, contents, and markings. Used by customs, freight forwarders, and receiving warehouses for verification.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: 'Bill of Lading',
    description: 'Official shipping document issued by the carrier that serves as the contract of carriage, receipt of goods, and document of title. Required for the buyer to take possession of cargo.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    title: 'Certificate of Origin',
    description: 'Official document certifying the country of origin of the goods. Used by customs in the destination country to determine tariff rates, trade agreement eligibility, and import duties.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Export Documentation',
    description: 'Complete export document pack including customs shipping bill, export declaration, ARE-1 form, and country-specific filings. Managed end-to-end by our experienced trade team.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Customs Support',
    description: 'Destination-country customs guidance, translated certificates where necessary, and direct coordination with your customs broker to ensure smooth clearance and release of cargo.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
  },
];

export default function DocumentationSection() {
  return (
    <section id="documentation" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-3xl mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Documentation</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Complete Export Documentation</m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed max-w-2xl">
            Every document required for compliant, hassle-free customs clearance — prepared by experienced trade professionals and tailored to your destination market.
          </m.p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-18 lg:mb-24">
          <div className="space-y-5">
            <p className="text-base text-gray-600 leading-relaxed">
              Export documentation is the single most common cause of shipment delays and customs penalties. At RMRP Global Trade, we treat documentation with the same rigor as product quality — every field verified, every certificate obtained, every deadline met.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Our documentation team has deep experience with export procedures for the Middle East, Europe, North America, and Asia. We manage everything from commercial invoices and certificates of origin to destination-specific regulatory filings.
            </p>
            <div className="mt-6 p-5 bg-indigo-50 rounded-xl border border-indigo-100">
              <span className="text-xs font-semibold tracking-widest uppercase text-indigo-700">Document Pack Includes</span>
              <div className="mt-3 space-y-1.5">
                {[
                  'Commercial Invoice (3 copies)',
                  'Packing List (3 copies)',
                  'Bill of Lading (original + 3 copies)',
                  'Certificate of Origin (COO)',
                  'Health / Phytosanitary Certificate',
                  'Certificate of Analysis (COA)',
                  'Fumigation Certificate',
                  'Insurance Certificate',
                  'Shipping Bill / Export Declaration',
                ].map((d) => (
                  <div key={d} className="flex items-center gap-2 text-xs text-gray-600">
                    <svg className="w-2.5 h-2.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {documents.map((item, i) => (
              <m.div key={item.title} custom={i} variants={cardReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group bg-gray-50 rounded-xl border border-gray-100 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/20 hover:shadow-gold-sm">
                <span className="block mb-3 w-10 h-10 flex items-center justify-center rounded-lg bg-gold-50 text-gold-600 group-hover:bg-gold-100 transition-colors duration-200">{item.icon}</span>
                <h3 className="text-sm font-bold text-navy-900 group-hover:text-gold-600 transition-colors duration-200">{item.title}</h3>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </m.div>
            ))}
          </div>
        </div>

        <m.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase rounded-lg bg-gold-500 text-navy-900 hover:bg-gold-400 transition-all duration-200 shadow-gold-sm hover:shadow-gold-lg">
            Ensure Compliance
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </m.div>
      </div>
    </section>
  );
}
