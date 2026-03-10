import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';

const differentiators = [
  {
    title: 'Principal-Led Delivery',
    description: 'You work directly with senior leadership, not a rotating cast of juniors.'
  },
  {
    title: 'No Outsourcing',
    description: 'Every architecture decision, sprint, and deliverable stays under our direct control.'
  },
  {
    title: 'Enterprise Quality',
    description: 'Engineering discipline built for high-stakes environments with startup execution speed.'
  },
  {
    title: 'AI-Native Thinking',
    description: 'Automation and intelligence are integrated from day one instead of bolted on later.'
  }
];

export default function WhyUs() {
  return (
    <section className="section-shell border-t border-white/10">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Why Lane & Company"
            title="Senior expertise, direct accountability, and execution you can trust"
            description="When the technology decision is critical, you should not be guessing who is actually driving the work."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={0.08 * index}>
              <article className="glass-panel rounded-3xl p-6 md:p-8">
                <h3 className="font-heading text-2xl text-white">{item.title}</h3>
                <p className="mt-4 text-warm-gray">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
