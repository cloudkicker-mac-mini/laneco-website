import type { Metadata } from 'next';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'About Lane & Company',
  description:
    'Learn why Lane & Company exists, how Anthony Lane leads engagements, and how our specialist network supports high-impact delivery.',
  path: '/about'
});

const values = [
  'Build what the business actually needs.',
  'Own outcomes, not just deliverables.',
  'Design for clarity, speed, and trust.'
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-black pb-12 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.14em] text-gold">About</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl leading-tight tracking-tight text-white lg:text-7xl">
              Why Lane &amp; Company exists
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-warmGray lg:text-lg">
              Lane &amp; Company was created for leaders who know technology should create leverage, not operational drag. We build and guide systems that make businesses measurably stronger.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black to-charcoal py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <ScrollReveal>
            <div className="glass-panel rounded-3xl p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.14em] text-gold">Anthony Lane</p>
              <p className="mt-4 text-base leading-relaxed text-white/90">
                Anthony leads Lane &amp; Company engagements directly, combining product thinking, systems architecture, and operational pragmatism.
              </p>
              <p className="mt-4 text-base leading-relaxed text-warmGray">
                Instead of handing work off through layers, clients work with senior leadership throughout strategy and execution. That keeps decisions faster, clearer, and tied to outcomes.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-panel rounded-3xl p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.14em] text-gold">Our Network</p>
              <h2 className="mt-4 font-heading text-3xl tracking-tight text-white">Specialists, directed under LC leadership</h2>
              <p className="mt-4 text-base leading-relaxed text-warmGray">
                When projects need additional depth, we engage trusted specialists across UX, infrastructure, security, and domain operations. Lane &amp; Company remains accountable for direction, quality, and delivery.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-charcoal py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.14em] text-gold">Values</p>
          </ScrollReveal>

          <div className="mt-8 space-y-6">
            {values.map((value, index) => (
              <ScrollReveal delay={index * 0.1} key={value}>
                <p className="font-heading text-4xl leading-tight tracking-tight text-white lg:text-6xl">{value}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
