'use client';

import { motion, useReducedMotion } from 'framer-motion';

import { Button } from '@/components/ui/Button';

export function Hero() {
  const reducedMotion = useReducedMotion();

  const childTransition = (delay: number) => ({
    duration: reducedMotion ? 0 : 0.7,
    ease: 'easeOut',
    delay: reducedMotion ? 0 : delay
  });

  return (
    <section className="hero-gradient relative flex min-h-screen items-center overflow-hidden pb-16 pt-32" id="top">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-70" />
      <div className="pointer-events-none absolute -left-20 bottom-24 h-72 w-72 rounded-full bg-copper/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-gold/20 blur-[110px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-8">
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 text-xs uppercase tracking-[0.14em] text-gold"
          initial={{ opacity: 0, y: 40 }}
          transition={childTransition(0.1)}
        >
          Lane &amp; Company
        </motion.p>

        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl font-heading text-[clamp(2.4rem,7vw,6.4rem)] leading-[0.94] tracking-tight text-white"
          initial={{ opacity: 0, y: 40 }}
          transition={childTransition(0.2)}
        >
          Your team is drowning in manual work. Your software should be doing it for them.
        </motion.h1>

        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-warmGray lg:text-lg"
          initial={{ opacity: 0, y: 40 }}
          transition={childTransition(0.3)}
        >
          This is the moment your operations move from patchwork to precision. Scroll and see what changes when your systems finally work in your favor.
        </motion.p>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-10"
          initial={{ opacity: 0, y: 40 }}
          transition={childTransition(0.4)}
        >
          <Button href="#problem" size="lg" variant="primary">
            See How
          </Button>
        </motion.div>
      </div>

      <motion.div
        animate={{ opacity: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center md:flex"
        initial={{ opacity: 0 }}
        transition={childTransition(0.55)}
      >
        <span className="text-[10px] uppercase tracking-[0.16em] text-warmGray">Scroll</span>
        <motion.span
          animate={
            reducedMotion
              ? undefined
              : {
                  y: [0, 12, 0]
                }
          }
          className="mt-2 h-10 w-[1px] bg-gradient-to-b from-copper to-transparent"
          transition={
            reducedMotion
              ? undefined
              : {
                  duration: 1.3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut'
                }
          }
        />
      </motion.div>
    </section>
  );
}
