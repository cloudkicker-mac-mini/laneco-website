import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';

const steps = [
  {
    title: 'Discovery',
    description: 'We map workflows, identify blockers, and define measurable business outcomes before development starts.'
  },
  {
    title: 'Design',
    description: 'We design architecture, interfaces, and delivery milestones around speed, clarity, and long-term maintainability.'
  },
  {
    title: 'Build',
    description: 'We deliver in tight iterations with transparent updates, measurable progress, and senior-level engineering oversight.'
  },
  {
    title: 'Support',
    description: 'We stay involved after launch with optimization, scaling guidance, and strategic technology support.'
  }
];

export default function HowWeWork() {
  return (
    <section className="section-shell border-t border-white/10">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="How We Work"
            title="A clear process that reduces risk and keeps momentum high"
            description="You always know what is happening, why it matters, and what comes next."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={0.08 * index}>
              <article className="glass-panel relative h-full rounded-3xl p-6">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-gold">Step {index + 1}</span>
                <h3 className="mt-4 font-heading text-2xl text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-warm-gray">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
