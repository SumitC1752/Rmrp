'use client';

import { useState, type FormEvent } from 'react';
import { m } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  product: string;
  quantity: string;
  unit: string;
  destination: string;
  timeline: string;
  specifications: string;
  message: string;
}

const defaultForm: FormData = {
  name: '', email: '', phone: '', company: '', country: '',
  product: '', quantity: '', unit: 'metric-tonnes', destination: '',
  timeline: 'asap', specifications: '', message: '',
};

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } } };

const products = [
  { value: 'aluminum-ingots', label: 'Aluminum Ingots' },
  { value: 'aluminum-scrap', label: 'Aluminum Scrap' },
  { value: 'jaggery', label: 'Jaggery & Jaggery Powder' },
  { value: 'onion', label: 'Onion Powder & Flakes' },
  { value: 'garlic', label: 'Garlic Powder & Flakes' },
  { value: 'banana-powder', label: 'Banana Powder' },
  { value: 'tomato-flakes', label: 'Tomato Flakes' },
  { value: 'sugar', label: 'Sugar (ICUMSA 45)' },
  { value: 'millet-flour', label: 'Millet (Bajra) Flour' },
  { value: 'jowar-flour', label: 'Jowar (Sorghum) Flour' },
  { value: 'wheat-flour', label: 'Wheat Flour' },
  { value: 'maize-flour', label: 'Maize (Corn) Flour' },
  { value: 'other', label: 'Other / General Inquiry' },
];

const units = [
  { value: 'metric-tonnes', label: 'Metric Tonnes (MT)' },
  { value: 'kilograms', label: 'Kilograms (kg)' },
  { value: 'containers', label: '20-ft Containers' },
  { value: 'pounds', label: 'Pounds (lbs)' },
  { value: 'not-sure', label: "Not Sure / Need Advice" },
];

const timelines = [
  { value: 'asap', label: 'ASAP — Urgent' },
  { value: '1-2-weeks', label: 'Within 1–2 Weeks' },
  { value: '1-month', label: 'Within 1 Month' },
  { value: '2-3-months', label: 'Within 2–3 Months' },
  { value: 'planning', label: 'Just Planning / Exploring' },
];

const inputClass = 'w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-lg text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all';
const labelClass = 'block text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2';

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>(defaultForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) => setForm({ ...form, [field]: value });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-5 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-gold-50 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">Quote Request Received</h2>
          <p className="mt-4 text-base text-gray-500 leading-relaxed">
            Thank you for your inquiry. Our trade team will review your requirements and respond within 24 hours with a detailed quote including pricing, specifications, and logistics options.
          </p>
          <button onClick={() => { setSubmitted(false); setForm(defaultForm); }}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide uppercase rounded-lg bg-navy-900 text-white hover:bg-navy-800 transition-all"
          >
            Submit Another Request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="request-quote-form" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <m.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="lg:col-span-2">
            <m.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-600 mb-4">Get Your Quote</m.span>
            <m.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">Tell Us Your Requirements</m.h2>
            <m.p variants={fadeUp} className="mt-4 text-base text-gray-500 leading-relaxed">
              Fill in the details below and our trade team will prepare a comprehensive quote tailored to your specific needs.
            </m.p>
            <m.div variants={fadeUp} className="mt-8 space-y-4">
              {[
                'Competitive pricing based on volume and destination',
                'Product specifications and quality documentation',
                'Logistics options with estimated freight costs',
                'Payment terms and incoterms recommendations',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-gold-50 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </div>
              ))}
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
                <label htmlFor="name" className={labelClass}>Full Name *</label>
                <input id="name" type="text" required value={form.name} onChange={(e) => update('name', e.target.value)}
                  className={inputClass} placeholder="Your full name" />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email Address *</label>
                <input id="email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)}
                  className={inputClass} placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                <input id="phone" type="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)}
                  className={inputClass} placeholder="+91 98765 43210" />
              </div>
              <div>
                <label htmlFor="company" className={labelClass}>Company Name</label>
                <input id="company" type="text" value={form.company} onChange={(e) => update('company', e.target.value)}
                  className={inputClass} placeholder="Your company name" />
              </div>
              <div>
                <label htmlFor="country" className={labelClass}>Country *</label>
                <input id="country" type="text" required value={form.country} onChange={(e) => update('country', e.target.value)}
                  className={inputClass} placeholder="Country of import" />
              </div>
              <div>
                <label htmlFor="product" className={labelClass}>Product of Interest *</label>
                <select id="product" required value={form.product} onChange={(e) => update('product', e.target.value)}
                  className={inputClass + ' appearance-none'}
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' strokeWidth=\'1.5\' stroke=\'%236b7280\'%3E%3Cpath strokeLinecap=\'round\' strokeLinejoin=\'round\' d=\'M19.5 8.25l-7.5 7.5-7.5-7.5\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                >
                  <option value="">Select a product</option>
                  {products.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="quantity" className={labelClass}>Estimated Quantity *</label>
                <input id="quantity" type="text" required value={form.quantity} onChange={(e) => update('quantity', e.target.value)}
                  className={inputClass} placeholder="e.g. 500, 10000, 2" />
              </div>
              <div>
                <label htmlFor="unit" className={labelClass}>Unit</label>
                <select id="unit" value={form.unit} onChange={(e) => update('unit', e.target.value)}
                  className={inputClass + ' appearance-none'}
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' strokeWidth=\'1.5\' stroke=\'%236b7280\'%3E%3Cpath strokeLinecap=\'round\' strokeLinejoin=\'round\' d=\'M19.5 8.25l-7.5 7.5-7.5-7.5\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                >
                  {units.map((u) => <option key={u.value} value={u.value}>{u.label}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="destination" className={labelClass}>Destination Port / Country *</label>
                <input id="destination" type="text" required value={form.destination} onChange={(e) => update('destination', e.target.value)}
                  className={inputClass} placeholder="e.g. Rotterdam, Netherlands" />
              </div>
              <div>
                <label htmlFor="timeline" className={labelClass}>Timeline</label>
                <select id="timeline" value={form.timeline} onChange={(e) => update('timeline', e.target.value)}
                  className={inputClass + ' appearance-none'}
                  style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' strokeWidth=\'1.5\' stroke=\'%236b7280\'%3E%3Cpath strokeLinecap=\'round\' strokeLinejoin=\'round\' d=\'M19.5 8.25l-7.5 7.5-7.5-7.5\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                >
                  {timelines.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="specifications" className={labelClass}>Specific Requirements</label>
                <textarea id="specifications" rows={3} value={form.specifications} onChange={(e) => update('specifications', e.target.value)}
                  className={inputClass + ' resize-y'}
                  placeholder="Purity / grade requirements, packaging preference, certification needs, or any special instructions."
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelClass}>Additional Information</label>
                <textarea id="message" rows={3} value={form.message} onChange={(e) => update('message', e.target.value)}
                  className={inputClass + ' resize-y'}
                  placeholder="Any other details that may help us prepare an accurate quote."
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400">* Required fields</p>
              <button type="submit"
                className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-wide uppercase rounded-lg bg-navy-900 text-white hover:bg-navy-800 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                Request Quote
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
