import ServiceCard from '@/components/ui/ServiceCard';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import { services } from '@/lib/services';

const signatureServices = services.filter((service) => service.signature);

export default function SignatureServices() {
  return (
    <section className="section-shell border-t border-white/10" id="services-overview">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Signature Services"
            title="High-impact technology services built for real business problems"
            description="Every engagement starts with a concrete outcome. We design and deliver systems that remove friction, increase speed, and improve customer experience."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {signatureServices.map((service, index) => (
            <Reveal key={service.slug} delay={0.08 * index}>
              <ServiceCard service={service} featured />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
