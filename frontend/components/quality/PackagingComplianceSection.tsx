'use client';

import { m } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } } };
const cardReveal = { hidden: { opacity: 0, y: 20 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }) };

const standards = [
  {
    title: 'Export Packaging Standards',
    description: 'All packaging meets international export standards — ISPM 15-compliant wooden pallets, food-grade liners, robust cartons, and secure steel strapping. Packaging is designed to withstand ocean transit and multiple handling points.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: 'Product Protection',
    description: 'Multi-layer protection for each product type — jumbo bags with inner liners for bulk commodities, moisture-proof vacuum packaging for dehydrated products, and protective dunnage for aluminum to prevent transit damage.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: 'International Shipping Readiness',
    description: 'Packaging certified for ocean freight — stack-tested for container loading, humidity-resistant for sea transit, and labeled with handling instructions, marks, and destination codes compliant with international shipping standards.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: 'Container Loading Standards',
    description: 'Supervised container loading with optimized weight distribution, proper dunnage and bracing, and container seal documentation. Photographic records of loading for every container shipped.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    title: 'Documentation Compliance',
    description: 'Complete documentation pack including packing list with weight and seal numbers, container loading report, certificate of origin, phytosanitary certificates, and any destination-specific compliance documents.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

export default function PackagingComplianceSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-3xl mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Packaging Compliance</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Export Packaging & Compliance</m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed">
            Your products arrive in the same condition they left — protected by export-grade packaging, compliant with international shipping standards, and fully documented for customs clearance.
          </m.p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-5">
            <p className="text-base text-gray-600 leading-relaxed">
              Packaging is the last line of defence between your product and the rigours of international shipping. At RMRP Global Trade, we invest in quality packaging materials and follow proven packing procedures for every product category.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Our packaging team understands the specific requirements of different commodities — moisture-sensitive food products need airtight liners, heavy aluminum ingots need reinforced pallets, and powdered products need dust-proof sealed bags. Every package is designed for its specific product and destination.
            </p>
            <div className="mt-6 p-5 bg-emerald-50 rounded-xl border border-emerald-100">
              <span className="text-xs font-semibold tracking-widest uppercase text-emerald-700 mb-3 block">Packaging Types by Product</span>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { product: 'Aluminum Ingots', pack: 'Bundled & palletized' },
                  { product: 'Aluminum Scrap', pack: 'Jumbo bags / loose in container' },
                  { product: 'Jaggery / Sugar', pack: 'Food-grade bags + liners' },
                  { product: 'Powders & Flakes', pack: 'Moisture-proof vacuum packs' },
                  { product: 'Flours / Grains', pack: 'PP bags + inner liner' },
                  { product: 'Bulk Commodities', pack: 'Jumbo bags / container liner' },
                ].map((item) => (
                  <div key={item.product} className="text-xs">
                    <span className="font-medium text-navy-900">{item.product}</span>
                    <span className="block text-gray-500">{item.pack}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {standards.map((item, i) => (
              <m.div key={item.title} custom={i} variants={cardReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group bg-emerald-50/50 rounded-xl border border-emerald-100/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/60 hover:shadow-gold-sm">
                <span className="block mb-3 w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200 transition-colors duration-200">{item.icon}</span>
                <h3 className="text-sm font-bold text-navy-900 group-hover:text-emerald-700 transition-colors duration-200">{item.title}</h3>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
