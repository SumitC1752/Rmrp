import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for does not exist or has been moved. Return to RMRP Global Trade homepage.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block text-[180px] font-bold leading-none text-navy-900/10 select-none">
          404
        </span>
        <h1 className="mt-[-60px] text-4xl md:text-5xl font-bold text-navy-900">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
          The page you are looking for does not exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 font-semibold px-8 py-3 rounded-lg hover:bg-gold-400 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-navy-900 text-navy-900 font-semibold px-8 py-3 rounded-lg hover:bg-navy-900 hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <Link href="/products" className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-600 hover:text-navy-900">
            Our Products
          </Link>
          <Link href="/services" className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-600 hover:text-navy-900">
            Export Services
          </Link>
          <Link href="/global-markets" className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-600 hover:text-navy-900">
            Global Markets
          </Link>
          <Link href="/about" className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-600 hover:text-navy-900">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
