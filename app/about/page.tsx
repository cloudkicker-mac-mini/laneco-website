import type { Metadata } from 'next';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'About Lane & Company',
  description:
    'Learn why Lane & Company exists, how Anthony leads client delivery, and the principles that guide every software engagement.',
  path: '/about'
});

const values = [
  {
    title: 'Outcomes Over Activity',
    description: 'We measure success by reduced friction, faster execution, and business impact, not ticket counts.'
  },
  {
    title: 'Senior Accountability',
    description: 'Clients have direct access to leadership. Strategy and execution stay tightly connected.'
  },
  {
    title: 'Built To Last',
    description: 'We deliver systems that are maintainable, secure, and ready for growth.'
  }
];

export default function AboutPage() {
  return (
    <section className="section-shell pt-32">
      <div className="container-wide space-y-14">
        <Reveal>
          <SectionHeader
            eyebrow="About"
            title="Built for leaders who need technology to perform under pressure"
            description="Lane & Company was founded to give organizations direct access to experienced technology leadership and execution without enterprise overhead."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <article className="glass-panel rounded-3xl p-7 md:p-10">
              <p className="section-kicker">Anthony&apos;s Background</p>
              <h2 className="mt-3 font-heading text-3xl text-white md:text-4xl">From complex systems to clear outcomes</h2>
              <p className="mt-5 text-warm-gray">
                Anthony founded Lane & Company after years of watching businesses lose momentum because critical systems were either overcomplicated, underbuilt, or disconnected. The mission is direct: build technology that removes operational drag and helps teams execute faster.
              </p>
              <p className="mt-4 text-warm-gray">
                Today, Lane & Company partners with organizations that need principal-led software delivery, practical AI adoption, and long-term technical direction. No outsourcing, no handoffs, and no guesswork.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="glass-panel rounded-3xl p-7 md:p-10">
              <p className="section-kicker">Team</p>
              <div className="mt-4 space-y-5">
                <div>
                  <h3 className="font-heading text-2xl text-white">Anthony Lane</h3>
                  <p className="text-sm text-gold">Founder & Principal Consultant</p>
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-white">Our Network</h3>
                  <p className="text-sm text-warm-gray">
                    Trusted specialists in infrastructure, product design, and data engineering engaged as needed under Lane & Company leadership.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={0.08 * index}>
              <article className="glass-panel rounded-3xl p-6">
                <h3 className="font-heading text-2xl text-white">{value.title}</h3>
                <p className="mt-4 text-sm text-warm-gray">{value.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
