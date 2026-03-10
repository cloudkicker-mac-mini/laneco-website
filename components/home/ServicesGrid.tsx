import ServiceCard from '@/components/ui/ServiceCard';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import { services } from '@/lib/services';

const additionalServices = services.filter((service) => !service.signature);

export default function ServicesGrid() {
  return (
    <section className="section-shell pt-0">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Additional Services"
            title="Full-stack delivery from applications to infrastructure"
            description="From client portals to event connectivity, we cover the systems that keep your business running and scaling."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {additionalServices.map((service, index) => (
            <Reveal key={service.slug} delay={0.06 * index}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
