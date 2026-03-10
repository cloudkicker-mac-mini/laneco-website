import HowWeWork from '@/components/home/HowWeWork';
import Hero from '@/components/home/Hero';
import PortalTeaser from '@/components/home/PortalTeaser';
import ServicesGrid from '@/components/home/ServicesGrid';
import SignatureServices from '@/components/home/SignatureServices';
import WhyUs from '@/components/home/WhyUs';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Custom Software, AI Integration, and Fractional CTO Services',
  description:
    'Lane & Company builds custom software and AI systems that eliminate manual work, improve service quality, and help organizations scale with confidence.',
  path: '/'
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignatureServices />
      <ServicesGrid />
      <WhyUs />
      <HowWeWork />
      <PortalTeaser />

      <section className="section-shell border-t border-white/10">
        <div className="container-wide">
          <Reveal>
            <div className="glass-panel rounded-3xl p-8 text-center md:p-14">
              <p className="section-kicker">Ready To Move</p>
              <h2 className="heading-lg mx-auto mt-4 max-w-4xl">
                If broken systems are slowing growth, we can map the fix and start building immediately.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-warm-gray">
                Tell us where the bottleneck is. We&apos;ll show you what to automate, what to build, and how to ship with less risk.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button href="/contact">Book a Strategy Call</Button>
                <Button href="/services" variant="secondary">
                  Explore Services
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
