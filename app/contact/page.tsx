import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { createPageMetadata, siteInfo } from '@/lib/metadata';
import { serviceInterestOptions } from '@/lib/services';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact Lane & Company',
  description:
    'Book a strategy call with Lane & Company to discuss custom software, AI integration, infrastructure, and technology leadership support.',
  path: '/contact'
});

const budgetRanges = ['Under $25K', '$25K - $50K', '$50K - $100K', '$100K - $250K', '$250K+'];
const timelineOptions = ['ASAP', 'Within 30 days', '1-3 months', '3-6 months', 'Exploring options'];

export default function ContactPage() {
  return (
    <section className="section-shell pt-32">
      <div className="container-wide space-y-12">
        <Reveal>
          <SectionHeader
            eyebrow="Contact"
            title="Let&apos;s map the fastest path from friction to results"
            description="Tell us what is slowing your team down. We&apos;ll respond with a practical plan and timeline."
          />
        </Reveal>

        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <article className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10">
              <h2 className="font-heading text-3xl text-white">Project Brief</h2>
              <p className="mt-3 text-sm text-warm-gray">Form submissions are handled securely by Formspree.</p>

              <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                className="mt-8 grid gap-4 sm:grid-cols-2"
              >
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.14em] text-warm-gray">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-warm-gray/70 focus:border-copper focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.14em] text-warm-gray">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-warm-gray/70 focus:border-copper focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-xs uppercase tracking-[0.14em] text-warm-gray">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service_interest"
                    required
                    className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-copper focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceInterestOptions.map((service) => (
                      <option key={service.value} value={service.label}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="mb-2 block text-xs uppercase tracking-[0.14em] text-warm-gray">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-copper focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select budget
                    </option>
                    {budgetRanges.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="timeline" className="mb-2 block text-xs uppercase tracking-[0.14em] text-warm-gray">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-copper focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select timeline
                    </option>
                    {timelineOptions.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.14em] text-warm-gray">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-warm-gray/70 focus:border-copper focus:outline-none"
                    placeholder="What outcome do you need most right now?"
                  />
                </div>

                <input type="hidden" name="_subject" value="New Lane & Company inquiry" />

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-copper px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#e2856f]"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </article>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.08}>
              <article className="glass-panel rounded-3xl p-6 md:p-8">
                <p className="section-kicker">Prefer To Talk?</p>
                <h2 className="mt-3 font-heading text-3xl text-white">Call us directly.</h2>
                <a href={`tel:${siteInfo.phone.replace(/[^\d+]/g, '')}`} className="mt-4 inline-block text-2xl text-gold transition hover:text-copper">
                  {siteInfo.phone}
                </a>
                <p className="mt-3 text-sm text-warm-gray">Monday to Friday, 8am to 6pm Central Time.</p>
              </article>
            </Reveal>

            <Reveal delay={0.16}>
              <article className="glass-panel rounded-3xl p-6 md:p-8">
                <p className="section-kicker">Calendly</p>
                <h3 className="mt-3 font-heading text-2xl text-white">Book a 30-minute strategy call</h3>
                <p className="mt-4 text-sm text-warm-gray">
                  Add your Calendly booking link to enable direct scheduling from this section.
                </p>
                <div className="mt-6 rounded-2xl border border-dashed border-white/20 bg-black/30 p-6 text-sm text-warm-gray">
                  Calendly embed placeholder
                </div>
                <div className="mt-5">
                  <Button href="https://calendly.com/your-calendly-link" variant="secondary" className="w-full">
                    Open Calendly
                  </Button>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
