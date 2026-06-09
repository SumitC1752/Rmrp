import { ServicesHero, ProcessSection, LogisticsSection, DocumentationSection, IncotermsSection, PaymentTermsSection, ServicesCta } from '@/components/services';
import { SchemaJsonLd } from '@/components/schema-jsonld';
import { webPageSchema } from '@/lib/schema';
import { createMetadata, pageSeo } from '@/lib/seo';

export const metadata = createMetadata(pageSeo.exportServices);

export default function ExportServicesPage() {
  return (
    <>
      <SchemaJsonLd schema={webPageSchema('Export Services | RMRP Global Trade', pageSeo.exportServices.description, [
        { name: 'Home', url: '/' },
        { name: 'Export Services', url: '/export-services' },
      ])} />
      <ServicesHero />
      <ProcessSection />
      <LogisticsSection />
      <DocumentationSection />
      <IncotermsSection />
      <PaymentTermsSection />
      <ServicesCta />
    </>
  );
}
