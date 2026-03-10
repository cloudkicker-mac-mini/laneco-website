import type { Metadata } from 'next';
import Link from 'next/link';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { buildMetadata } from '@/lib/metadata';
import { coreServices, signatureServices } from '@/lib/services';

export const metadata: Metadata = buildMetadata({
  title: 'Services Built Around Real Operations',
  description:
    'Explore Lane & Company services across custom software, AI integration, fractional CTO leadership, applications, infrastructure, and analytics.',
  path: '/services'
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-black pb-16 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.14em] text-gold">Services</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl leading-tight tracking-tight text-white lg:text-7xl">
              Technology systems designed for the way your business actually runs.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-warmGray lg:text-lg">
              Our signature services solve the high-stakes problems first, then our broader capabilities support every layer of delivery.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black to-charcoal py-10 lg:py-16">
        <div className="mx-auto max-w-7xl space-y-8 px-6 lg:px-8">
          {signatureServices.map((service, index) => (
            <ScrollReveal delay={index * 0.1} key={service.slug}>
              <article className="glass-panel rounded-3xl border border-white/10 bg-white/[0.03] p-8 lg:p-12">
                <p className="text-xs uppercase tracking-[0.14em] text-gold">Signature Service 0{index + 1}</p>
                <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                  <div>
                    <h2 className="font-heading text-4xl tracking-tight text-white lg:text-5xl">{service.title}</h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-warmGray">{service.hook}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-white/85">{service.summary}</p>
                </div>
                <Link
                  className="mt-8 inline-flex items-center text-xs uppercase tracking-[0.14em] text-copper transition hover:text-white"
                  href={`/services/${service.slug}`}
                >
                  View Service Detail
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-charcoal py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.14em] text-gold">Extended Capabilities</p>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl tracking-tight text-white lg:text-5xl">
              End-to-end execution support beyond the core three.
            </h2>
          </ScrollReveal>

          <div className="mt-12 space-y-6">
            {coreServices.map((service, index) => (
              <ScrollReveal delay={index * 0.08} key={service.slug}>
                <article
                  className={`rounded-3xl border border-white/10 p-7 lg:p-8 ${
                    index % 2 === 0
                      ? 'bg-gradient-to-r from-white/[0.05] to-transparent lg:mr-16'
                      : 'bg-gradient-to-l from-white/[0.05] to-transparent lg:ml-16'
                  }`}
                >
                  <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div>
                      <h3 className="font-heading text-3xl tracking-tight text-white">{service.title}</h3>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-warmGray">{service.summary}</p>
                    </div>
                    <Link
                      className="text-xs uppercase tracking-[0.14em] text-copper transition hover:text-white"
                      href={`/services/${service.slug}`}
                    >
                      Learn More
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
