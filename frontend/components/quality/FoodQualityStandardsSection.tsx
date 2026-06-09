'use client';

import { m } from 'framer-motion';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } } };
const cardReveal = { hidden: { opacity: 0, y: 20 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }) };

const standards = [
  {
    title: 'Hygienic Processing',
    description: 'All food products are processed in GMP-certified facilities with strict hygiene protocols. Workers follow HACCP-based sanitation procedures, and production areas are regularly inspected for contamination control.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Food Safety Standards',
    description: 'We adhere to international food safety standards including HACCP, GMP, and ISO 22000. Regular third-party audits verify compliance with importing country regulations for all processed food products.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: 'Quality Verification',
    description: 'Every batch is tested for moisture content, purity, particle size, microbiological parameters, and foreign matter. Certificates of Analysis accompany every food product shipment for buyer verification.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Export Packaging',
    description: 'Food-grade packaging materials selected for product integrity during transit. Moisture-proof liners, food-safe containers, and tamper-evident seals ensure products arrive in the same condition they left.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: 'Product Consistency',
    description: 'We maintain strict specification sheets for every food product. Colour, texture, aroma, granulation, and taste profiles are documented and verified against reference standards batch after batch.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
];

const productCategories = [
  {
    category: 'Sweeteners & Sugars',
    items: ['Jaggery — Solid, powder & cubes (organic options)', 'Sugar — ICUMSA 45, S-30, M-30'],
  },
  {
    category: 'Dehydrated Vegetables',
    items: ['Onion Powder — 80–100 mesh, food-grade', 'Onion Flakes — Kibbled, minced & chopped', 'Garlic Powder — Fine grind, premium quality', 'Garlic Flakes — Dehydrated, uniform size'],
  },
  {
    category: 'Fruit & Vegetable Powders',
    items: ['Banana Powder — Natural, spray-dried', 'Tomato Flakes — Dehydrated, industrial-grade'],
  },
  {
    category: 'Flour & Grain Products',
    items: ['Wheat Flour — Atta, Maida, Sooji/Rawa', 'Millet (Bajra) Flour — Gluten-free', 'Jowar Flour — Sorghum, fine grind', 'Maize Flour — Corn flour, bulk supply'],
  },
];

export default function FoodQualityStandardsSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-3xl mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Food Quality Standards</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Food Product Quality Standards</m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed">
            Every processed food and agro commodity we export meets stringent food safety and quality standards. From jaggery and sugar to dehydrated vegetables and flours, our products are tested, certified, and export-ready.
          </m.p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-18 lg:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {standards.map((item, i) => (
              <m.div key={item.title} custom={i} variants={cardReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group bg-amber-50/50 rounded-xl border border-amber-100/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300/60 hover:shadow-gold-sm">
                <span className="block mb-3 w-10 h-10 flex items-center justify-center rounded-lg bg-amber-100 text-amber-700 group-hover:bg-amber-200 transition-colors duration-200">{item.icon}</span>
                <h3 className="text-sm font-bold text-navy-900 group-hover:text-amber-700 transition-colors duration-200">{item.title}</h3>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </m.div>
            ))}
          </div>

          <div className="space-y-5">
            <p className="text-base text-gray-600 leading-relaxed">
              Our food products are processed in facilities that follow international food safety management systems. We maintain detailed specifications for every product — from the colour and granulation of jaggery to the mesh size of onion powder and the moisture content of flours.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Each shipment includes a Certificate of Analysis documenting key quality parameters, ensuring full transparency and compliance with importing country regulations.
            </p>
            <div className="mt-6 p-5 bg-amber-50 rounded-xl border border-amber-100">
              <span className="text-xs font-semibold tracking-widest uppercase text-amber-700 mb-4 block">Products Covered</span>
              <div className="space-y-4">
                {productCategories.map((cat) => (
                  <div key={cat.category}>
                    <h4 className="text-xs font-bold text-navy-900 mb-1.5">{cat.category}</h4>
                    <ul className="space-y-0.5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-1.5 text-xs text-gray-500">
                          <svg className="w-2.5 h-2.5 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
