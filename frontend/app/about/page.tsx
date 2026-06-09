import { AboutHero } from '@/components/about/hero';
import { FounderSection } from '@/components/about/founder';
import { CompanyStory } from '@/components/about/story';
import { MissionVision } from '@/components/about/mission-vision';
import { CoreValues } from '@/components/about/core-values';
import { WhyRmrp } from '@/components/about/why-rmrp';
import { AboutCta } from '@/components/about/cta';
import { SchemaJsonLd } from '@/components/schema-jsonld';
import { webPageSchema } from '@/lib/schema';
import { createMetadata, pageSeo } from '@/lib/seo';

export const metadata = createMetadata(pageSeo.about);

export default function AboutPage() {
  return (
    <>
      <SchemaJsonLd schema={webPageSchema('About Us | RMRP Global Trade', pageSeo.about.description, [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
      ])} />
      <AboutHero />
      <FounderSection />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <WhyRmrp />
      <AboutCta />
    </>
  );
}
