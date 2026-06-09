import { GlobalHero, ExportNetwork, RegionsServed, LogisticsNetwork, IndustriesServedGlobally, WhyBuyersChooseUs, GlobalCta } from '@/components/global';
import { SchemaJsonLd } from '@/components/schema-jsonld';
import { webPageSchema } from '@/lib/schema';
import { createMetadata, pageSeo } from '@/lib/seo';

export const metadata = createMetadata(pageSeo.globalMarkets);

export default function GlobalMarketsPage() {
  return (
    <>
      <SchemaJsonLd schema={webPageSchema('Global Markets | RMRP Global Trade', pageSeo.globalMarkets.description, [
        { name: 'Home', url: '/' },
        { name: 'Global Markets', url: '/global-markets' },
      ])} />
      <GlobalHero />
      <ExportNetwork />
      <RegionsServed />
      <LogisticsNetwork />
      <IndustriesServedGlobally />
      <WhyBuyersChooseUs />
      <GlobalCta />
    </>
  );
}
