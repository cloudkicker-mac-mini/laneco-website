import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import ServiceCard from '@/components/ui/ServiceCard';
import { createPageMetadata } from '@/lib/metadata';
import { services } from '@/lib/services';

export const metadata: Metadata = createPageMetadata({
  title: 'Services',
  description:
    'Explore Lane & Company services: custom software development, AI integration, fractional CTO leadership, web/mobile applications, cloud, data, and event connectivity.',
  path: '/services'
});

const signatureServices = services.filter((service) => service.signature);
const additionalServices = services.filter((service) => !service.signature);

export default function ServicesPage() {
  return (
    <section className="section-shell pt-32">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Services"
            title="Technology services designed to solve high-cost operational problems"
            description="Every service engagement is tied to clear outcomes: less manual work, faster execution, lower risk, and stronger customer experience."
          />
        </Reveal>

        <div className="mt-8">
          <Button href="/contact">Discuss Your Project</Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {signatureServices.map((service, index) => (
            <Reveal key={service.slug} delay={0.08 * index}>
              <ServiceCard service={service} featured />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-14">
          <Reveal>
            <SectionHeader
              eyebrow="Additional Services"
              title="Execution support across the full technology stack"
              description="Need one service or a full transformation plan? We structure engagements around your timeline and priorities."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {additionalServices.map((service, index) => (
              <Reveal key={service.slug} delay={0.06 * index}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
