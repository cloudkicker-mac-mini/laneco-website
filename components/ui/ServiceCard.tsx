import Link from 'next/link';
import type { Service } from '@/lib/services';

type ServiceCardProps = {
  service: Service;
  featured?: boolean;
};

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <article
      className={`glass-panel group flex h-full flex-col rounded-3xl p-6 md:p-7 ${
        featured ? 'border-copper/70 shadow-copper' : ''
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-heading text-2xl leading-tight text-white">{service.title}</h3>
        {service.signature ? (
          <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            Signature
          </span>
        ) : null}
      </div>

      <p className="mt-4 text-sm text-warm-gray md:text-base">{service.shortDescription}</p>

      <p className="mt-5 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm leading-relaxed text-white/90">
        <span className="font-semibold text-copper">Example:</span> {service.scenario}
      </p>

      <Link
        href={`/services/${service.slug}`}
        className="mt-6 inline-flex items-center text-sm font-semibold tracking-wide text-gold transition group-hover:text-copper"
      >
        View Service Details <span className="ml-1">&rarr;</span>
      </Link>
    </article>
  );
}
