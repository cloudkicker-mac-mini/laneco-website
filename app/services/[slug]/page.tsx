import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Button } from '@/components/ui/Button';
import { GlassPanel } from '@/components/ui/GlassPanel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { buildMetadata, serviceSchema } from '@/lib/metadata';
import { getRelatedServices, getServiceBySlug, serviceSlugs } from '@/lib/services';

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return buildMetadata({
      title: 'Service Not Found',
      description: 'The requested service detail page could not be found.',
      path: '/services'
    });
  }

  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`
  });
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const related = getRelatedServices(service.slug);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: service.title,
              description: service.summary,
              slug: service.slug
            })
          )
        }}
        type="application/ld+json"
      />

      <section className="bg-black pb-14 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.14em] text-gold">Service Detail</p>
            <h1 className="mt-4 max-w-4xl font-heading text-5xl leading-tight tracking-tight text-white lg:text-7xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-warmGray lg:text-lg">{service.hook}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black to-charcoal py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <ScrollReveal>
              <GlassPanel className="h-full rounded-3xl p-8 lg:p-10">
                <p className="text-xs uppercase tracking-[0.14em] text-gold">The Problem</p>
                <p className="mt-4 text-base leading-relaxed text-white/90 lg:text-lg">{service.problem}</p>
              </GlassPanel>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <GlassPanel className="h-full rounded-3xl p-8 lg:p-10">
                <p className="text-xs uppercase tracking-[0.14em] text-gold">Real-World Scenario</p>
                <p className="mt-4 text-base leading-relaxed text-white/90 lg:text-lg">{service.scenario}</p>
              </GlassPanel>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.14em] text-gold">What We Build</p>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl tracking-tight text-white lg:text-5xl">
              Concrete deliverables that create measurable operational lift.
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.deliverables.map((deliverable, index) => (
              <ScrollReveal delay={index * 0.08} key={deliverable}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm leading-relaxed text-white/85">{deliverable}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.14em] text-gold">Who This Is For</p>
          </ScrollReveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <ScrollReveal>
              <h2 className="font-heading text-4xl tracking-tight text-white lg:text-5xl">
                Teams ready to replace complexity with clear execution.
              </h2>
            </ScrollReveal>

            <div className="space-y-4">
              {service.audience.map((item, index) => (
                <ScrollReveal delay={index * 0.08} key={item}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                    <p className="text-sm leading-relaxed text-white/85">{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black to-charcoal py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <GlassPanel className="rounded-3xl p-8 lg:p-12">
              <p className="text-xs uppercase tracking-[0.14em] text-gold">Next Step</p>
              <h2 className="mt-4 font-heading text-4xl tracking-tight text-white lg:text-5xl">
                Let&apos;s talk about {service.shortTitle}.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-warmGray">{service.summary}</p>
              <div className="mt-8">
                <Button href="/contact" size="lg" variant="primary">
                  Start the Conversation
                </Button>
              </div>
            </GlassPanel>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.14em] text-gold">Related Services</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {related.map((relatedService) => (
                  <Link
                    className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.12em] text-white/80 transition hover:border-copper/50 hover:text-white"
                    href={`/services/${relatedService.slug}`}
                    key={relatedService.slug}
                  >
                    {relatedService.shortTitle}
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
