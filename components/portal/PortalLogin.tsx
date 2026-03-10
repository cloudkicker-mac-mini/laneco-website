'use client';

import { FormEvent, useState } from 'react';

export default function PortalLogin() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="glass-panel mx-auto w-full max-w-md rounded-3xl p-6 sm:p-8">
      <h2 className="font-heading text-3xl text-white">Client Sign In</h2>
      <p className="mt-3 text-sm text-warm-gray">Access project dashboards, deliverables, and team communication.</p>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="portal-email" className="mb-2 block text-xs uppercase tracking-[0.14em] text-warm-gray">
            Email
          </label>
          <input
            id="portal-email"
            type="email"
            required
            className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-warm-gray/70 focus:border-copper focus:outline-none"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="portal-password" className="mb-2 block text-xs uppercase tracking-[0.14em] text-warm-gray">
            Password
          </label>
          <input
            id="portal-password"
            type="password"
            required
            className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-warm-gray/70 focus:border-copper focus:outline-none"
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-copper px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#e2856f]"
        >
          Sign In
        </button>
      </form>

      {submitted ? (
        <p className="mt-6 rounded-2xl border border-gold/40 bg-gold/10 p-4 text-sm text-gold">
          Client Portal launching soon. We&apos;ll notify you when it&apos;s ready.
        </p>
      ) : null}
    </div>
  );
}
