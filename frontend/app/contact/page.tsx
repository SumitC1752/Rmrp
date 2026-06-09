import { ContactHero, ContactInfo, InquiryForm, WhatsAppCta, MapSection, BusinessInfo } from '@/components/contact';
import { SchemaJsonLd } from '@/components/schema-jsonld';
import { webPageSchema } from '@/lib/schema';
import { createMetadata, pageSeo } from '@/lib/seo';

export const metadata = createMetadata(pageSeo.contact);

export default function ContactPage() {
  return (
    <>
      <SchemaJsonLd schema={webPageSchema('Contact Us | RMRP Global Trade', pageSeo.contact.description, [
        { name: 'Home', url: '/' },
        { name: 'Contact Us', url: '/contact' },
      ])} />
      <ContactHero />
      <ContactInfo />
      <InquiryForm />
      <WhatsAppCta />
      <MapSection />
      <BusinessInfo />
    </>
  );
}
