'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import {
  companyDescription,
  quickLinks,
  productCategories,
  exportServices,
  contactInfo,
  socialSection,
} from './data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="inline-block text-sm text-gray-400 hover:text-gold-400 transition-colors duration-200 py-0.5"
      >
        {label}
      </Link>
    </li>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <m.div variants={itemVariants}>
      <h3 className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4">
        {title}
      </h3>
      {children}
    </m.div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white" role="contentinfo">
      <m.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Company description */}
          <m.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="RMRP Global Trade — Home">
              <span className="text-xl font-bold tracking-tight text-white">
                RMRP
                <span className="font-light text-white/50"> Global Trade</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              {companyDescription}
            </p>
          </m.div>

          {/* Quick Links */}
          <FooterColumn title={quickLinks.title}>
            <ul className="space-y-1">
              {quickLinks.links.map((link) => (
                <FooterLink key={link.href} {...link} />
              ))}
            </ul>
          </FooterColumn>

          {/* Products */}
          <FooterColumn title={productCategories.title}>
            <ul className="space-y-1">
              {productCategories.links.map((link) => (
                <FooterLink key={link.href} {...link} />
              ))}
            </ul>
          </FooterColumn>

          {/* Export Services */}
          <FooterColumn title={exportServices.title}>
            <ul className="space-y-1">
              {exportServices.links.map((link) => (
                <FooterLink key={link.href} {...link} />
              ))}
            </ul>
          </FooterColumn>

          {/* Follow Us */}
          <FooterColumn title={socialSection.title}>
            <div className="flex flex-wrap gap-3">
              {socialSection.links.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-gold-500 hover:border-gold-500 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
                  </a>
                );
              })}
            </div>
          </FooterColumn>

          {/* Contact */}
          <FooterColumn title="Contact">
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-gold-400 transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-gold-400 transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="leading-snug">{contactInfo.address}</li>
              <li className="text-xs text-gray-500">{contactInfo.hours}</li>
              <li className="pt-2">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-lg bg-green-600 hover:bg-green-500 text-white transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </FooterColumn>
        </div>
      </m.div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>&copy; {year} RMRP Global Trade. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gold-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <span className="text-white/10">|</span>
            <Link href="/terms" className="hover:text-gold-400 transition-colors duration-200">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
