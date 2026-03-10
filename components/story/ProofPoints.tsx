import { CountUp } from '@/components/ui/CountUp';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const outcomes = [
  {
    value: 67,
    suffix: '%',
    title: 'Reduced manual processing',
    detail:
      'Operational teams stopped spending mornings reconciling reports and shifted time toward higher-value work.'
  },
  {
    value: 24,
    suffix: '/7',
    title: 'Automated customer support',
    detail:
      'AI-assisted intake and routing delivered immediate response coverage outside standard business hours.'
  },
  {
    value: 200,
    suffix: '+',
    title: 'Team members on live dashboards',
    detail:
      'Real-time operations visibility replaced fragmented status updates and delayed spreadsheet rollups.'
  }
];

export function ProofPoints() {
  return (
    <section className="bg-black py-24 lg:py-32" id="proof">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.14em] text-gold">The Proof Point</p>
          <h2 className="mt-4 max-w-4xl font-heading text-4xl leading-tight tracking-tight text-white lg:text-6xl">
            We don&apos;t just talk. We build.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal>
            <article className="glass-panel rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:min-h-[340px] lg:p-10">
              <p className="text-xs uppercase tracking-[0.14em] text-gold">Outcome Snapshot</p>
              <CountUp
                className="mt-4 block font-heading text-7xl leading-none tracking-tight text-white lg:text-8xl"
                suffix={outcomes[0].suffix}
                value={outcomes[0].value}
              />
              <h3 className="mt-4 font-heading text-3xl tracking-tight text-white">{outcomes[0].title}</h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-warmGray">{outcomes[0].detail}</p>
            </article>
          </ScrollReveal>

          <div className="space-y-6">
            {outcomes.slice(1).map((outcome, index) => (
              <ScrollReveal delay={(index + 1) * 0.1} key={outcome.title}>
                <article className="glass-panel rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                  <CountUp
                    className="block font-heading text-5xl leading-none tracking-tight text-white"
                    suffix={outcome.suffix}
                    value={outcome.value}
                  />
                  <h3 className="mt-3 font-heading text-2xl tracking-tight text-white">{outcome.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-warmGray">{outcome.detail}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
