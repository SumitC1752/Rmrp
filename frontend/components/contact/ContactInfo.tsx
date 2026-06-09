'use client';

import { m } from 'framer-motion';
import { socialLinks } from '@/constants';

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } } };

const channels = [
  {
    label: 'Email',
    value: 'info@rmrpglobaltrade.com',
    href: 'mailto:info@rmrpglobaltrade.com',
    description: 'Send us your inquiry — we respond within 24 hours.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91-9922167039',
    href: 'tel:+919922167039',
    description: 'Speak directly with our trade team during business hours.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: 'Chat with our team',
    href: 'https://wa.me/919922167039',
    description: 'Quick messages and instant responses via WhatsApp.',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Office',
    value: 'Ahilyanagar, Maharashtra',
    href: '#',
    description: 'Visit our office — appointments recommended for meetings.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Contact Information</m.span>
          <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">How to Reach Us</m.h2>
          <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed">
            Multiple channels available. Choose the one most convenient for you.
          </m.p>
        </m.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {channels.map((channel, i) => (
            <m.div
              key={channel.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href={channel.href}
                target={channel.href.startsWith('http') && !channel.href.startsWith('#') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group block bg-gray-50 rounded-xl border border-gray-100 p-6 lg:p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/20 hover:shadow-gold-sm h-full"
              >
                <span className="block mb-3 text-navy-900/40 group-hover:text-gold-600 transition-colors duration-200">{channel.icon}</span>
                <span className="block text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">{channel.label}</span>
                <span className="block text-sm font-medium text-navy-900 group-hover:text-gold-600 transition-colors duration-200">{channel.value}</span>
                <span className="block mt-2 text-xs text-gray-400 leading-relaxed">{channel.description}</span>
              </a>
            </m.div>
          ))}
        </div>

        {/* Social media cards */}
        <m.div variants={container} className="max-w-2xl mx-auto mt-14 lg:mt-18 text-center">
          <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Follow Us</m.span>
          <m.h3 variants={fadeUp} className="text-2xl sm:text-3xl font-bold text-navy-900 leading-tight">Connect on Social Media</m.h3>
          <m.p variants={fadeUp} className="mt-3 text-sm text-gray-500 leading-relaxed">Stay updated with our latest shipments, products, and global trade insights.</m.p>
        </m.div>
        <div className="mt-8 flex justify-center gap-4">
          {socialLinks.map((s, i) => {
            const Icon = s.icon;
            return (
              <m.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col items-center gap-2 px-8 py-6 bg-gray-50 rounded-xl border border-gray-100 hover:bg-navy-900 hover:border-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg min-w-[120px]"
              >
                <Icon className="w-6 h-6 text-navy-900/40 group-hover:text-gold-400 transition-colors duration-200" />
                <span className="text-sm font-semibold text-gray-600 group-hover:text-white transition-colors duration-200">{s.label}</span>
              </m.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
