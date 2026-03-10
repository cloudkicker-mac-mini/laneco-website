import type { Metadata } from 'next';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Insights',
  description:
    'Practical technology and operations insights from Lane & Company. Editorial content launching soon.',
  path: '/insights'
});

const placeholders = [
  'How to spot process automation opportunities before buying tools',
  'What executive teams should ask before launching AI initiatives',
  'The hidden cost of disconnected reporting systems'
];

export default function InsightsPage() {
  return (
    <section className="bg-black py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.14em] text-gold">Insights</p>
          <h1 className="mt-4 max-w-4xl font-heading text-5xl leading-tight tracking-tight text-white lg:text-7xl">
            Editorial insights are coming soon.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-warmGray lg:text-lg">
            We&apos;re building a practical library for leaders navigating software modernization, AI adoption, and technical operations.
          </p>
        </ScrollReveal>

        <div className="mt-12 space-y-4">
          {placeholders.map((title, index) => (
            <ScrollReveal delay={index * 0.1} key={title}>
              <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:p-8">
                <p className="text-xs uppercase tracking-[0.12em] text-gold">Draft Topic 0{index + 1}</p>
                <h2 className="mt-3 font-heading text-3xl tracking-tight text-white">{title}</h2>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
