import type { Metadata } from 'next';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Work',
  description: 'Selected Lane & Company work examples and delivery categories.',
  path: '/work'
});

const projects = [
  {
    title: 'Enterprise Operations Platform',
    blurb: 'Unified fragmented workflows into one internal system that reduced manual processing time by 67%.'
  },
  {
    title: 'AI Support Automation',
    blurb: 'Implemented a support assistant that resolved repetitive customer questions instantly, 24/7.'
  },
  {
    title: 'Event Connectivity Deployment',
    blurb: 'Delivered high-reliability network infrastructure for multi-day events in low-coverage areas.'
  }
];

export default function WorkPage() {
  return (
    <section className="section-shell pt-32">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Work"
            title="Selected work is coming soon"
            description="Case studies are being prepared. In the meantime, here are anonymized project types we deliver regularly."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={0.08 * index}>
              <article className="glass-panel rounded-3xl p-6">
                <h2 className="font-heading text-2xl text-white">{project.title}</h2>
                <p className="mt-4 text-sm text-warm-gray">{project.blurb}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
