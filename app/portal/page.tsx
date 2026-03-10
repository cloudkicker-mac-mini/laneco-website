import type { Metadata } from 'next';
import PortalLogin from '@/components/portal/PortalLogin';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Client Portal',
  description: 'Secure Lane & Company client portal preview for project visibility, communication, and deliverable tracking.',
  path: '/portal'
});

export default function PortalPage() {
  return (
    <section className="section-shell pt-32">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Client Portal"
            title="A polished workspace for project visibility"
            description="Track sprint progress, review deliverables, and communicate with the team in one secure place."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_0.95fr]">
          <Reveal>
            <article className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10">
              <p className="section-kicker">Preview</p>
              <h2 className="mt-3 font-heading text-3xl text-white">Built for transparent delivery</h2>
              <ul className="mt-6 space-y-4 text-sm text-warm-gray">
                <li className="rounded-2xl border border-white/10 bg-black/35 p-4">Sprint milestones and status updates in real time</li>
                <li className="rounded-2xl border border-white/10 bg-black/35 p-4">Centralized deliverables, approvals, and decision logs</li>
                <li className="rounded-2xl border border-white/10 bg-black/35 p-4">Direct communication channels with your project team</li>
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <PortalLogin />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
