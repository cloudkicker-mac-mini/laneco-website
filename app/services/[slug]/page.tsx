import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import { createPageMetadata } from '@/lib/metadata';
import { getServiceBySlug, services } from '@/lib/services';

type ServiceDetailPageProps = {
  params: {
    slug: string;
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServiceDetailPageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return createPageMetadata({
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
      path: '/services'
    });
  }

  return createPageMetadata({
    title: service.title,
    description: `${service.shortDescription} ${service.scenario}`,
    path: `/services/${service.slug}`
  });
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDescription,
    provider: {
      '@type': 'Organization',
      name: 'Lane & Company',
      url: 'https://cloudkicker.github.io/laneco-website'
    }
  };

  return (
    <section className="section-shell pt-32">
      <div className="container-wide space-y-12">
        <Reveal>
          <p className="section-kicker">Service</p>
          <h1 className="heading-lg mt-3 max-w-4xl">{service.title}</h1>
          <p className="mt-5 max-w-3xl text-lg text-warm-gray">{service.headline}</p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <article className="glass-panel rounded-3xl p-7 md:p-10">
              <h2 className="font-heading text-3xl text-white">What We Do</h2>
              <ul className="mt-6 space-y-4 text-sm text-warm-gray md:text-base">
                {service.whatWeDo.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/10 bg-black/35 p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.08}>
              <article className="glass-panel rounded-3xl p-7 md:p-8">
                <h2 className="font-heading text-3xl text-white">Real-World Scenario</h2>
                <p className="mt-4 text-warm-gray">{service.scenario}</p>
              </article>
            </Reveal>

            <Reveal delay={0.12}>
              <article className="glass-panel rounded-3xl p-7 md:p-8">
                <h2 className="font-heading text-3xl text-white">Who This Is For</h2>
                <ul className="mt-5 space-y-3 text-sm text-warm-gray md:text-base">
                  {service.useCases.map((useCase) => (
                    <li key={useCase} className="rounded-2xl border border-white/10 bg-black/35 p-4">
                      {useCase}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>

        <div className="rounded-3xl border border-copper/50 bg-copper/10 p-7 md:p-10">
          <h2 className="font-heading text-3xl text-white">Let&apos;s talk about {service.title}</h2>
          <p className="mt-4 max-w-2xl text-warm-gray">
            Share your current challenge and desired outcome. We&apos;ll propose a clear scope, timeline, and delivery path.
          </p>
          <div className="mt-7">
            <Button href="/contact">Start the Conversation</Button>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-3xl text-white">Related Services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="glass-panel rounded-2xl p-5 transition hover:border-copper/70"
              >
                <h3 className="font-heading text-2xl text-white">{related.title}</h3>
                <p className="mt-2 text-sm text-warm-gray">{related.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </section>
  );
}
