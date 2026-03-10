import Link from 'next/link';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { signatureServices, coreServices } from '@/lib/services';

const capabilityNarratives: Record<string, string> = {
  'custom-software-development':
    'From dispatch operations to approvals and reporting, we design the platform around how your teams actually move.',
  'ai-consulting-integration':
    'Intelligent automation handles repetitive work while your people focus where judgment and relationships matter.',
  'it-strategy-fractional-cto':
    'We align architecture, delivery, and leadership decisions so technology spend compounds instead of fragments.'
};

export function Solutions() {
  return (
    <section className="bg-gradient-to-b from-black to-charcoal py-24 lg:py-32" id="solutions">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.14em] text-gold">How We Do It</p>
          <h2 className="mt-4 max-w-4xl font-heading text-4xl leading-tight tracking-tight text-white lg:text-6xl">
            The capabilities that turn operational pain into momentum.
          </h2>
        </ScrollReveal>

        <div className="mt-14 space-y-8">
          {signatureServices.map((service, index) => (
            <ScrollReveal delay={index * 0.1} key={service.slug}>
              <article className="glass-panel rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:p-12">
                <p className="text-xs uppercase tracking-[0.14em] text-gold">Signature Capability 0{index + 1}</p>
                <div className="mt-4 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <h3 className="font-heading text-4xl tracking-tight text-white lg:text-5xl">{service.shortTitle}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-warmGray">{service.hook}</p>
                  </div>
                  <p className="text-base leading-relaxed text-white/85">
                    {capabilityNarratives[service.slug] ?? service.summary}
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    className="inline-flex items-center text-xs uppercase tracking-[0.14em] text-copper transition hover:text-white"
                    href={`/services/${service.slug}`}
                  >
                    Explore {service.shortTitle}
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="mb-4 text-xs uppercase tracking-[0.14em] text-gold">Additional Services</p>
            <div className="flex flex-wrap gap-3">
              {coreServices.map((service) => (
                <Link
                  className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.12em] text-white/75 transition hover:border-copper/50 hover:text-white"
                  href={`/services/${service.slug}`}
                  key={service.slug}
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
