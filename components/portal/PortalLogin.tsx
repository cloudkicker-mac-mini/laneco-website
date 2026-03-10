'use client';

import { FormEvent, useState } from 'react';

import { Button } from '@/components/ui/Button';

export function PortalLogin() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="glass-panel rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.14em] text-gold">Client Portal</p>
          <h1 className="mt-4 font-heading text-4xl tracking-tight text-white lg:text-5xl">Secure project access</h1>
          <p className="mt-4 text-base leading-relaxed text-warmGray">
            Track milestones, review deliverables, and stay in sync with your Lane &amp; Company team from one place.
          </p>

          <form className="mt-8 space-y-4" onSubmit={onSubmit}>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-gold">Email</span>
              <input
                className="w-full rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-copper"
                name="email"
                placeholder="you@company.com"
                required
                type="email"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-gold">Password</span>
              <input
                className="w-full rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-copper"
                name="password"
                placeholder="••••••••"
                required
                type="password"
              />
            </label>

            <Button className="w-full" size="lg" type="submit" variant="primary">
              Sign In
            </Button>
          </form>

          {submitted && (
            <p className="mt-5 rounded-2xl border border-copper/30 bg-copper/10 px-4 py-3 text-sm text-copper">
              Client Portal launching soon. We&apos;ll notify you as soon as access is live.
            </p>
          )}
        </div>

        <div className="glass-panel rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.14em] text-gold">Portal Preview</p>
          <h2 className="mt-4 font-heading text-3xl tracking-tight text-white lg:text-4xl">What clients will see</h2>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-white/55">Project Status</p>
              <p className="mt-2 text-sm text-white/90">Automation Platform Rollout</p>
              <div className="mt-3 h-2 rounded-full bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-copper" />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-white/55">Upcoming Milestone</p>
              <p className="mt-2 text-sm text-white/90">Training and adoption session - Tuesday</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-white/55">Latest Deliverable</p>
              <p className="mt-2 text-sm text-white/90">Operations dashboard v1 published for review</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
