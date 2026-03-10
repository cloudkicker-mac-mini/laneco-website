import { GlassPanel } from '@/components/ui/GlassPanel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const scenes = [
  {
    title: 'Reports that take all week',
    description:
      'Manual exports, mismatched numbers, and one spreadsheet too many. Teams spend Monday explaining Friday instead of acting on today.',
    visual: 'Friction to clarity'
  },
  {
    title: 'Customers waiting on hold',
    description:
      'Every delay adds pressure to your people and your brand. Slow response loops become the story customers remember.',
    visual: 'Queue to instant answers'
  },
  {
    title: 'Decisions made on gut feeling',
    description:
      'When the data arrives late, strategy becomes guesswork. Leaders need live visibility, not rear-view reports.',
    visual: 'Uncertainty to confidence'
  }
];

export function ProblemScenes() {
  return (
    <section className="bg-gradient-to-b from-black to-charcoal py-24 lg:py-32" id="problem">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.14em] text-gold">The Problem</p>
          <h2 className="mt-4 max-w-4xl font-heading text-4xl leading-tight tracking-tight text-white lg:text-6xl">
            You are not behind because your team lacks effort. You are behind because your systems fight your momentum.
          </h2>
        </ScrollReveal>

        <div className="mt-14 space-y-8 lg:space-y-12">
          {scenes.map((scene, index) => (
            <ScrollReveal delay={index * 0.1} key={scene.title}>
              <div
                className={`grid gap-6 lg:items-stretch ${
                  index % 2 === 0 ? 'lg:grid-cols-[1.15fr_0.85fr]' : 'lg:grid-cols-[0.8fr_1.2fr]'
                }`}
              >
                <GlassPanel className={index % 2 === 0 ? '' : 'lg:order-2'}>
                  <p className="text-xs uppercase tracking-[0.14em] text-gold">Scene 0{index + 1}</p>
                  <h3 className="mt-3 font-heading text-3xl tracking-tight text-white lg:text-4xl">{scene.title}</h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-warmGray">{scene.description}</p>
                </GlassPanel>

                <div
                  className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.02] to-transparent p-8 ${
                    index % 2 === 0 ? '' : 'lg:order-1'
                  }`}
                >
                  <div className="absolute -right-16 -top-12 h-44 w-44 rounded-full bg-copper/20 blur-[70px]" />
                  <div className="absolute -bottom-12 left-4 h-36 w-36 rounded-full bg-gold/15 blur-[60px]" />
                  <div className="relative flex h-full min-h-[210px] items-end">
                    <p className="text-sm uppercase tracking-[0.16em] text-white/80">{scene.visual}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
