import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="hero-gradient pointer-events-none absolute inset-0 opacity-80" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,168,108,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(212,116,91,0.2),transparent_45%)]"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <Reveal>
          <p className="section-kicker">Principal-Led Technology Partner</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="heading-xl mt-4 max-w-5xl">
            We Build the Software That Eliminates Bottlenecks, Automates Work, and Drives Growth.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-lg text-warm-gray md:text-xl">
            Custom software, AI integration, and strategic technology leadership that turns operational friction into measurable business results.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#services-overview">See What We Build</Button>
            <Button href="/contact" variant="secondary">
              Let&apos;s Talk
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14 grid max-w-3xl gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-warm-gray sm:grid-cols-3">
            <p>Custom Software</p>
            <p>AI Integration</p>
            <p>Fractional CTO Leadership</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
