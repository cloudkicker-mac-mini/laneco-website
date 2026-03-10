import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function CallToAction() {
  return (
    <section className="cta-gradient relative flex min-h-[88vh] items-center py-24 lg:py-32" id="cta">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.14em] text-gold">The Invitation</p>
          <h2 className="mt-4 max-w-4xl font-heading text-4xl leading-tight tracking-tight text-white lg:text-6xl">
            Ready to stop fighting your systems?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-warmGray lg:text-lg">
            Let&apos;s map the fastest path from manual drag to intelligent operations tailored to your business.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" size="lg" variant="primary">
              Book a Strategy Call
            </Button>
            <Button href="/services" size="lg" variant="ghost">
              See All Services
            </Button>
          </div>

          <div className="mt-10 flex flex-col gap-2 text-sm text-white/85 sm:flex-row sm:gap-8">
            <a className="transition hover:text-copper" href="tel:+12107126129">
              +1 (210) 712-6129
            </a>
            <a className="transition hover:text-copper" href="mailto:hello@laneandcompany.com">
              hello@laneandcompany.com
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
