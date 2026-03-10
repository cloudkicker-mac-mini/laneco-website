import type { Metadata } from 'next';

import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { buildMetadata } from '@/lib/metadata';
import { services } from '@/lib/services';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Lane & Company',
  description:
    'Book a strategy call with Lane & Company to discuss custom software, AI integration, technology leadership, and implementation planning.',
  path: '/contact'
});

const budgetOptions = [
  '$15k - $35k',
  '$35k - $75k',
  '$75k - $150k',
  '$150k+'
];

const timelineOptions = ['Immediately', 'Next 30 days', '1-3 months', 'Exploring options'];

export default function ContactPage() {
  return (
    <section className="bg-black py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <ScrollReveal>
          <div className="glass-panel rounded-3xl border border-white/10 p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.14em] text-gold">Contact</p>
            <h1 className="mt-4 font-heading text-4xl tracking-tight text-white lg:text-5xl">Book a strategy conversation</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-warmGray">
              Share your current friction points and goals. We&apos;ll outline the right technical path and where the highest leverage starts.
            </p>

            <form action="https://formspree.io/f/your-form-id" className="mt-8 space-y-5" method="POST">
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-gold">Name</span>
                <input
                  className="w-full rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-copper"
                  name="name"
                  required
                  type="text"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-gold">Email</span>
                <input
                  className="w-full rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-copper"
                  name="email"
                  required
                  type="email"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-gold">Service Interest</span>
                <select
                  className="w-full rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-copper"
                  defaultValue=""
                  name="service_interest"
                  required
                >
                  <option disabled value="">
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service.slug} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-gold">Budget Range</span>
                  <select
                    className="w-full rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-copper"
                    defaultValue=""
                    name="budget_range"
                    required
                  >
                    <option disabled value="">
                      Select budget
                    </option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-gold">Timeline</span>
                  <select
                    className="w-full rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-copper"
                    defaultValue=""
                    name="timeline"
                    required
                  >
                    <option disabled value="">
                      Select timeline
                    </option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-gold">Message</span>
                <textarea
                  className="h-32 w-full resize-y rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-copper"
                  name="message"
                  placeholder="Tell us what your team is trying to improve."
                  required
                />
              </label>

              <Button size="lg" type="submit" variant="primary">
                Send Inquiry
              </Button>
            </form>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <aside className="space-y-6">
            <div className="glass-panel rounded-3xl border border-white/10 p-8">
              <p className="text-xs uppercase tracking-[0.14em] text-gold">Prefer to talk?</p>
              <a className="mt-4 block font-heading text-4xl tracking-tight text-white transition hover:text-copper" href="tel:+12107126129">
                +1 (210) 712-6129
              </a>
              <p className="mt-4 text-sm text-warmGray">Mon-Fri 8am-6pm CT</p>
            </div>

            <div className="glass-panel rounded-3xl border border-white/10 p-8">
              <p className="text-xs uppercase tracking-[0.14em] text-gold">Calendly</p>
              <h2 className="mt-3 font-heading text-3xl tracking-tight text-white">Scheduling link placeholder</h2>
              <p className="mt-3 text-sm leading-relaxed text-warmGray">
                Add your Calendly embed or scheduling URL here to let prospects book directly.
              </p>
              <div className="mt-5 rounded-2xl border border-dashed border-white/20 bg-black/50 p-5 text-sm text-white/70">
                Calendly embed area
              </div>
            </div>
          </aside>
        </ScrollReveal>
      </div>
    </section>
  );
}
