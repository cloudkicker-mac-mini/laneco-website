import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';

export default function PortalTeaser() {
  return (
    <section className="section-shell border-t border-white/10">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Client Portal"
            title="Your project. Full visibility."
            description="Track progress, review deliverables, and communicate with your team through one polished workspace."
          />
        </Reveal>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="glass-panel rounded-3xl p-6 md:p-8">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-gold">LaneCo Portal Preview</p>
                <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                  Live Status
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-warm-gray">Current Sprint</p>
                  <p className="mt-2 text-lg text-white">Customer Portal - Authentication + Dashboard</p>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-copper" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-warm-gray">Open Deliverables</p>
                    <p className="mt-2 text-2xl font-semibold text-white">06</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-warm-gray">Upcoming Milestone</p>
                    <p className="mt-2 text-sm text-white">UAT Review - Friday</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5">
              <h3 className="font-heading text-3xl text-white">Visibility without the status-meeting overhead.</h3>
              <p className="text-warm-gray">
                Our portal gives clients a clear line of sight into project progress, files, priorities, and communication threads.
              </p>
              <Button href="/portal">Sign In</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
