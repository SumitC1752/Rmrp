import { QuoteHero, QuoteForm, WhyRequestQuote, QuoteCta } from '@/components/request-quote';
import { SchemaJsonLd } from '@/components/schema-jsonld';
import { webPageSchema } from '@/lib/schema';
import { createMetadata, pageSeo } from '@/lib/seo';

export const metadata = createMetadata(pageSeo.requestQuote);

export default function RequestQuotePage() {
  return (
    <>
      <SchemaJsonLd schema={webPageSchema('Request a Quote | RMRP Global Trade', 'Request a competitive quote from RMRP Global Trade for aluminum, processed food, and agro commodities. Response within 24 hours.', [
        { name: 'Home', url: '/' },
        { name: 'Request a Quote', url: '/request-quote' },
      ])} />
      <QuoteHero />
      <QuoteForm />
      <WhyRequestQuote />
      <QuoteCta />
    </>
  );
}
