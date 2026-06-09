'use client';

import { useState, type FormEvent } from 'react';
import { m } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
}

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } } };

export default function InquiryForm() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', company: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="bg-gray-50 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-5 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-gold-50 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">Thank You</h2>
          <p className="mt-4 text-base text-gray-500 leading-relaxed">Your inquiry has been received. Our trade team will respond within 24 hours.</p>
          <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', product: '', message: '' }); }}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide uppercase rounded-lg bg-navy-900 text-white hover:bg-navy-800 transition-all"
          >
            Submit Another Inquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="lg:col-span-2">
            <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Send Inquiry</m.span>
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Tell Us What You Need</m.h2>
            <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed">
              Fill in the form and our trade team will get back to you with a tailored solution within 24 hours.
            </m.p>
            <m.div variants={fadeUp} className="mt-8 space-y-4">
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="w-5 h-5 rounded-full bg-gold-50 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-2.5 h-2.5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>All inquiries receive a response within 24 hours</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="w-5 h-5 rounded-full bg-gold-50 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-2.5 h-2.5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Pricing, specifications, and logistics included in response</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <span className="w-5 h-5 rounded-full bg-gold-50 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-2.5 h-2.5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>No obligation — exploratory inquiries welcome</span>
              </div>
            </m.div>
          </m.div>
          <m.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-8 lg:p-10 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">Full Name *</label>
                <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all" placeholder="Your full name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">Email Address *</label>
                <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">Phone Number</label>
                <input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">Company Name</label>
                <input id="company" type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all" placeholder="Your company" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="product" className="block text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">Product Interest</label>
                <select id="product" value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all appearance-none"
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' strokeWidth=\'1.5\' stroke=\'%236b7280\'%3E%3Cpath strokeLinecap=\'round\' strokeLinejoin=\'round\' d=\'M19.5 8.25l-7.5 7.5-7.5-7.5\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                >
                  <option value="">Select a product category</option>
                  <option value="Aluminum Ingots">Aluminum Ingots</option>
                  <option value="Aluminum Scrap">Aluminum Scrap</option>
                  <option value="Processed Food">Processed Food (Jaggery, Spices, etc.)</option>
                  <option value="Agro Commodities">Agro Commodities (Sugar, Flour, etc.)</option>
                  <option value="Other">Other / General Inquiry</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">Message *</label>
                <textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all resize-y"
                  placeholder="Tell us about your requirements — product, quantity, destination, and any specific quality parameters."
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400">* Required fields</p>
              <button type="submit"
                className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide uppercase rounded-lg bg-navy-900 text-white hover:bg-navy-800 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                Send Inquiry
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </m.form>
        </div>
      </div>
    </section>
  );
}
