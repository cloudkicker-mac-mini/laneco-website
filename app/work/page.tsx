import type { Metadata } from 'next';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Work',
  description:
    'Selected Lane & Company work and outcomes. Full case studies are coming soon.',
  path: '/work'
});

const highlights = [
  'Reduced manual processing by 67% through workflow automation',
  '24/7 automated customer support with escalation pathways',
  'Real-time operations dashboard used by 200+ team members'
];

export default function WorkPage() {
  return (
    <section className="bg-black py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.14em] text-gold">Work</p>
          <h1 className="mt-4 max-w-4xl font-heading text-5xl leading-tight tracking-tight text-white lg:text-7xl">
            Selected work is coming soon.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-warmGray lg:text-lg">
            We&apos;re preparing full case studies that show problem context, build approach, and measurable business impact.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <ScrollReveal>
            <div className="glass-panel rounded-3xl border border-white/10 p-8">
              <h2 className="font-heading text-3xl tracking-tight text-white">Outcome highlights</h2>
              <div className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <p className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/85" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-panel rounded-3xl border border-white/10 p-8">
              <p className="text-xs uppercase tracking-[0.14em] text-gold">Case Study Format</p>
              <p className="mt-4 text-sm leading-relaxed text-warmGray">
                Each study will cover the business challenge, technical architecture, delivery timeline, and result metrics.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
