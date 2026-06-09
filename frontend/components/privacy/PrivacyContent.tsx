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
    id: 'introduction',
    title: '1. Introduction',
    content: [
      'RMRP Global Trade ("we," "our," "us") is committed to protecting the privacy of individuals who visit our website, use our services, or engage with us in the course of our international trade operations. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or interact with our business.',
      'We are a manufacturer, trader, and exporter of aluminum commodities, processed food products, and agro commodities, serving importers, distributors, and industrial buyers across 25+ countries. Our business operations are based in Ahilyanagar, Maharashtra, India.',
      'By accessing our website or submitting your information to us, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our practices, please do not use our website or provide us with your personal data.',
    ],
  },
  {
    id: 'information-we-collect',
    title: '2. Information We Collect',
    content: [
      'We collect information that you voluntarily provide to us when you use our website, submit an inquiry, request a quote, or communicate with our trade team. This may include:',
    ],
    list: [
      'Full name and job title',
      'Company name, business address, and company registration details',
      'Email address and phone number',
      'Country of import and destination port details',
      'Product interests, specifications, and volume requirements',
      'Communication preferences and inquiry history',
    ],
    listFooter: [
      'We also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed. This information helps us improve our website and understand user behavior patterns.',
    ],
  },
  {
    id: 'how-we-use-information',
    title: '3. How We Use Information',
    content: [
      'We use the information we collect for the following business purposes:',
    ],
    list: [
      'To respond to product inquiries, quote requests, and other communications',
      'To provide pricing, specifications, logistics options, and export documentation',
      'To process and fulfill orders, including shipping, customs clearance, and delivery',
      'To communicate with you about your account, transactions, and service updates',
      'To improve our website, products, and customer service through analytics',
      'To comply with legal obligations, export regulations, and customs requirements',
      'To detect, prevent, and address security issues, fraud, or unauthorized activities',
      'To send marketing communications, with your consent where required by applicable law',
    ],
  },
  {
    id: 'cookies',
    title: '4. Cookies & Tracking Technologies',
    content: [
      'Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors come from. Cookies are small text files stored on your device by your web browser.',
      'We use the following types of cookies:',
    ],
    list: [
      'Essential Cookies — Necessary for the basic functioning of our website. These cannot be disabled.',
      'Analytics Cookies — Help us understand how visitors interact with our website by collecting anonymized data on page visits, time spent, and navigation patterns.',
      'Preference Cookies — Remember your settings and preferences to improve your experience on subsequent visits.',
    ],
    listFooter: [
      'You can control cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.',
    ],
  },
  {
    id: 'data-security',
    title: '5. Data Security',
    content: [
      'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include secure socket layer (SSL) encryption, restricted access to personal data on a need-to-know basis, regular security assessments, and secure data storage practices.',
      'While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is completely secure. We cannot guarantee absolute security but will notify you of any data breach that may affect your personal information in accordance with applicable law.',
    ],
  },
  {
    id: 'third-party-services',
    title: '6. Third-Party Services',
    content: [
      'We may share your personal information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our clients. These include:',
    ],
    list: [
      'Logistics and shipping partners for order fulfillment and delivery tracking',
      'Payment processors for transaction processing and financial reconciliation',
      'Analytics providers for website performance monitoring and user behavior analysis',
      'Email and communication platforms for business correspondence',
      'Regulatory and customs authorities as required for export documentation and compliance',
    ],
    listFooter: [
      'We require all third-party service providers to maintain appropriate confidentiality and security measures. We do not sell, trade, or rent your personal information to third parties for their marketing purposes.',
    ],
  },
  {
    id: 'international-transfers',
    title: '7. International Data Transfers',
    content: [
      'As an international export company serving buyers in 25+ countries, your personal information may be transferred to and processed in countries outside your country of residence. These transfers are necessary for the performance of our services, including communication, order processing, logistics coordination, and regulatory compliance.',
      'When we transfer personal data across borders, we ensure appropriate safeguards are in place, including standard contractual clauses, data processing agreements, and compliance with applicable data protection laws.',
    ],
  },
  {
    id: 'user-rights',
    title: '8. User Rights',
    content: [
      'Depending on your jurisdiction, you may have the following rights regarding your personal information:',
    ],
    list: [
      'Right to Access — Request a copy of the personal information we hold about you',
      'Right to Rectification — Request correction of inaccurate or incomplete personal data',
      'Right to Erasure — Request deletion of your personal information, subject to legal retention obligations',
      'Right to Restriction — Request restriction of processing your personal data under certain circumstances',
      'Right to Data Portability — Request transfer of your personal data to another service provider',
      'Right to Object — Object to the processing of your personal data for direct marketing purposes',
      'Right to Withdraw Consent — Withdraw consent at any time where processing is based on consent',
    ],
    listFooter: [
      'To exercise any of these rights, please contact us using the information provided in Section 10. We will respond to your request within the timeframe required by applicable law.',
    ],
  },
  {
    id: 'data-retention',
    title: '9. Data Retention',
    content: [
      'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including for legal, accounting, reporting, and compliance obligations. Typically, we retain business correspondence and transaction records for the duration of our business relationship plus a period of up to seven years to comply with Indian statutory requirements and international trade record-keeping obligations.',
      'When personal data is no longer required, we securely delete or anonymize it. In some cases, we may retain anonymized data for analytical and business intelligence purposes.',
    ],
  },
  {
    id: 'contact-information',
    title: '10. Contact Information',
    content: [
      'If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact us:',
    ],
    contact: [
      { label: 'Company', value: 'RMRP Global Trade' },
      { label: 'Address', value: 'Ahilyanagar, Maharashtra, India' },
      { label: 'Email', value: 'info@rmrpglobaltrade.com' },
      { label: 'Phone', value: '+91-9922167039' },
    ],
  },
  {
    id: 'policy-updates',
    title: '11. Policy Updates',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or operational needs. When we update the policy, we will revise the "Last Updated" date at the top of this page and, where appropriate, notify you by email or through a notice on our website.',
      'We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your personal information. Your continued use of our website after any changes constitutes your acceptance of the updated policy.',
    ],
  },
];

const lastUpdated = '1 June 2026';

export default function PrivacyContent() {
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
              { label: 'Privacy Policy' },
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
            Privacy Policy
          </m.h1>
          <m.p variants={fadeUp} className="mt-5 text-lg sm:text-xl text-gray-300/80 leading-relaxed max-w-2xl">
            How RMRP Global Trade collects, uses, and protects your personal information in the course of our international trade operations.
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
                          <span className="font-semibold text-navy-900 w-20 shrink-0">{item.label}</span>
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
              <Link href="/contact" className="text-xs font-medium text-navy-900 hover:text-gold-600 transition-colors">
                Contact Us
              </Link>
              <Link href="/request-quote" className="text-xs font-medium text-navy-900 hover:text-gold-600 transition-colors">
                Request a Quote
              </Link>
            </div>
          </m.div>
        </div>
      </section>
    </>
  );
}
