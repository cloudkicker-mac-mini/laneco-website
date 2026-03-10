import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Insights',
  description: 'Practical insights on software delivery, AI integration, and technology strategy.',
  path: '/insights'
});

const upcomingPosts = [
  'How to prioritize software projects by operational ROI',
  'Where AI automation creates real value in service businesses',
  'Fractional CTO playbook: scaling with less technology risk'
];

export default function InsightsPage() {
  return (
    <section className="section-shell pt-32">
      <div className="container-wide max-w-4xl">
        <Reveal>
          <SectionHeader
            eyebrow="Insights"
            title="Practical technology guidance, coming soon"
            description="We are publishing implementation-focused articles for teams making high-stakes technology decisions."
          />
        </Reveal>

        <div className="mt-12 space-y-4">
          {upcomingPosts.map((title, index) => (
            <Reveal key={title} delay={0.08 * index}>
              <article className="glass-panel rounded-2xl p-5">
                <h2 className="font-heading text-2xl text-white">{title}</h2>
                <p className="mt-2 text-sm text-warm-gray">Drafting now. Full article will be published shortly.</p>
                <Link href="/contact" className="mt-4 inline-flex text-sm font-semibold text-gold hover:text-copper">
                  Request this topic now &rarr;
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
