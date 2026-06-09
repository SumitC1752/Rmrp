'use client';

import Link from 'next/link';
import { m } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: [
      'By accessing the RMRP Global Trade website, requesting a quotation, placing an order, or engaging with us in any business capacity, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not accept these terms, you must not use our website or services.',
      'These Terms & Conditions apply to all transactions between RMRP Global Trade and its clients, including importers, distributors, industrial buyers, and any other business entities. We reserve the right to update these terms at any time without prior notice. It is your responsibility to review them periodically.',
    ],
  },
  {
    id: 'company-information',
    title: '2. Company Information',
    content: [
      'RMRP Global Trade is a manufacturer, trader, and exporter of aluminum commodities, processed food products, and agro commodities, operating from Ahilyanagar, Maharashtra, India. Our trade operations serve buyers across 25+ countries worldwide.',
    ],
    contact: [
      { label: 'Company', value: 'RMRP Global Trade' },
      { label: 'Business Type', value: 'Manufacturer, Trader & Exporter' },
      { label: 'Registered Office', value: 'Ahilyanagar, Maharashtra, India' },
      { label: 'Email', value: 'info@rmrpglobaltrade.com' },
      { label: 'Phone', value: '+91-9922167039' },
    ],
  },
  {
    id: 'product-information',
    title: '3. Product Information',
    content: [
      'We strive to ensure that all product descriptions, specifications, and representations on our website are accurate and up to date. However, product specifications may vary slightly between shipments due to manufacturing tolerances, raw material variations, and processing conditions.',
      'Product images and descriptions are for illustrative purposes and may not exactly represent the final product. Buyers are encouraged to request current specifications, certificates of analysis, and samples prior to placing firm orders.',
      'We reserve the right to discontinue or modify any product at any time without prior notice. All products are offered subject to availability and confirmation of order acceptance.',
    ],
  },
  {
    id: 'quotations-pricing',
    title: '4. Quotations & Pricing',
    content: [
      'All quotations provided by RMRP Global Trade are valid for the period specified in the quotation, typically 15 days from the date of issue, unless otherwise stated. Quotations are based on the information provided by the buyer regarding quantity, specifications, destination, and delivery timeline.',
      'Pricing is subject to change based on fluctuations in raw material costs, freight rates, currency exchange rates, and other market conditions. We reserve the right to revise pricing if there is a significant change in these factors between quotation and order confirmation.',
      'All prices are quoted in United States Dollars (USD) unless otherwise agreed in writing. Prices are exclusive of applicable taxes, duties, customs fees, and other charges that may be imposed by the buyer\'s country of import.',
    ],
  },
  {
    id: 'orders-payments',
    title: '5. Orders & Payments',
    content: [
      'All orders are subject to written acceptance by RMRP Global Trade. An order is considered confirmed only when we issue a formal order confirmation or proforma invoice. We reserve the right to decline any order at our discretion.',
      'Payment terms are negotiated on a per-order basis and documented in the proforma invoice or sales contract. Common payment methods include:',
    ],
    list: [
      'Letter of Credit (LC) — Irrevocable, confirmed LC at sight or usance, as agreed',
      'Telegraphic Transfer (TT) — Wire transfer with agreed advance payment and balance against shipping documents',
      'Documents against Payment (DP) — Under specific arrangements for established buyers',
    ],
    listFooter: [
      'Title to the goods transfers to the buyer only upon full payment clearance. Until full payment is received, RMRP Global Trade retains ownership of the goods and has the right to redirect or recall shipments.',
    ],
  },
  {
    id: 'shipping-delivery',
    title: '6. Shipping & Delivery',
    content: [
      'Delivery timelines provided in quotations and order confirmations are estimates based on current production schedules, shipping availability, and port conditions. We make every effort to meet these timelines but cannot be held liable for delays caused by:',
    ],
    list: [
      'Force majeure events including natural disasters, pandemics, wars, civil unrest, or government actions',
      'Port congestion, shipping line schedule changes, or container availability issues',
      'Customs clearance delays in the origin or destination country',
      'Weather conditions affecting loading, transit, or discharge operations',
      'Manufacturing or supply chain disruptions beyond our reasonable control',
    ],
    listFooter: [
      'Incoterms (International Commercial Terms) for each shipment are specified in the order confirmation. The buyer is responsible for all import customs clearance, duties, taxes, and local charges at the destination unless otherwise agreed under the applicable incoterm.',
      'Risk of loss or damage to the goods passes to the buyer in accordance with the agreed incoterm. We recommend that buyers arrange appropriate marine cargo insurance for their shipments.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '7. Intellectual Property',
    content: [
      'All content on the RMRP Global Trade website, including text, graphics, logos, images, product descriptions, data, and software, is the property of RMRP Global Trade or its content suppliers and is protected by applicable intellectual property laws.',
      'You may not reproduce, distribute, modify, display, or create derivative works from our website content without our prior written consent. Any unauthorized use of our intellectual property may result in legal action.',
    ],
  },
  {
    id: 'limitation-liability',
    title: '8. Limitation of Liability',
    content: [
      'To the maximum extent permitted by applicable law, RMRP Global Trade shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to the use of our products, services, or website.',
      'Our total liability for any claim arising from a transaction shall not exceed the purchase price paid by the buyer for the specific products giving rise to the claim.',
      'We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components. You use our website at your own risk.',
    ],
  },
  {
    id: 'third-party-links',
    title: '9. Third-Party Links',
    content: [
      'Our website may contain links to third-party websites or services that are not owned or controlled by RMRP Global Trade. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.',
      'The inclusion of any link does not imply endorsement by RMRP Global Trade. You access third-party websites at your own risk and should review their terms and policies independently.',
    ],
  },
  {
    id: 'governing-law',
    title: '10. Governing Law',
    content: [
      'These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these terms, our products, or our services shall be subject to the exclusive jurisdiction of the courts in Ahilyanagar, Maharashtra, India.',
      'The United Nations Convention on Contracts for the International Sale of Goods (CISG) shall not apply to any transactions conducted under these terms unless expressly agreed in writing.',
    ],
  },
  {
    id: 'termination',
    title: '11. Termination',
    content: [
      'We reserve the right to terminate or suspend our business relationship with any buyer, without prior notice or liability, for any reason including but not limited to: breach of these Terms & Conditions, failure to make payment within agreed terms, providing false or misleading information, or engaging in activities that may harm our reputation or business interests.',
      'Upon termination, all outstanding payments for goods delivered or in transit shall become immediately due and payable. Provisions relating to intellectual property, limitation of liability, and governing law shall survive any termination.',
    ],
  },
  {
    id: 'contact',
    title: '12. Contact Information',
    content: [
      'If you have any questions about these Terms & Conditions, please contact us:',
    ],
    contact: [
      { label: 'Company', value: 'RMRP Global Trade' },
      { label: 'Address', value: 'Ahilyanagar, Maharashtra, India' },
      { label: 'Email', value: 'info@rmrpglobaltrade.com' },
      { label: 'Phone', value: '+91-9922167039' },
    ],
  },
];

const lastUpdated = '1 June 2026';

export default function TermsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(212,175,55,0.03)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,175,55,0.02)_0%,_transparent_50%)]" />
        <m.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative mx-auto max-w-7xl px-5 lg:px-8"
        >
          <m.nav variants={fadeUp} className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
            {[
              { label: 'Home', href: '/' },
              { label: 'Terms & Conditions' },
            ].map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gold-400 transition-colors duration-200">{crumb.label}</Link>
                ) : (
                  <span className="text-gold-400">{crumb.label}</span>
                )}
              </span>
            ))}
          </m.nav>
          <m.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            Terms &amp; Conditions
          </m.h1>
          <m.p variants={fadeUp} className="mt-5 text-lg sm:text-xl text-gray-300/80 leading-relaxed max-w-2xl">
            Governing terms for all transactions, quotations, orders, and business relationships between RMRP Global Trade and its clients worldwide.
          </m.p>
          <m.p variants={fadeUp} className="mt-3 text-sm text-gray-500">
            Last Updated: {lastUpdated}
          </m.p>
        </m.div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="space-y-12 lg:space-y-14">
            {sections.map((section) => (
              <m.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-4 lg:mb-5">
                  {section.title}
                </h2>

                {section.content.map((p, i) => (
                  <p key={i} className="text-base text-gray-600 leading-relaxed mb-4 last:mb-0">
                    {p}
                  </p>
                ))}

                {'list' in section && section.list && (
                  <ul className="mt-4 space-y-2.5">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-base text-gray-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {'listFooter' in section && section.listFooter && (
                  <div className="mt-4">
                    {section.listFooter.map((p, i) => (
                      <p key={i} className="text-base text-gray-600 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                )}

                {'contact' in section && section.contact && (
                  <div className="mt-6 bg-gray-50 rounded-xl border border-gray-100 p-6 lg:p-8">
                    <div className="space-y-3">
                      {section.contact.map((item) => (
                        <div key={item.label} className="flex items-start gap-3 text-sm">
                          <span className="font-semibold text-navy-900 w-28 shrink-0">{item.label}</span>
                          <span className="text-gray-600">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </m.div>
            ))}
          </div>

          {/* Bottom navigation */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-xs text-gray-400">
              RMRP Global Trade — {lastUpdated}
            </p>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-xs font-medium text-navy-900 hover:text-gold-600 transition-colors">
                Home
              </Link>
              <Link href="/privacy" className="text-xs font-medium text-navy-900 hover:text-gold-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-xs font-medium text-navy-900 hover:text-gold-600 transition-colors">
                Contact Us
              </Link>
            </div>
          </m.div>
        </div>
      </section>
    </>
  );
}
