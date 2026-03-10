'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { ScrollReveal } from '@/components/ui/ScrollReveal';

const outcomes = [
  {
    title: 'Reports generate themselves',
    before: 'Teams spend days compiling status by hand.',
    after: 'Dashboards update in real time with zero manual assembly.'
  },
  {
    title: 'Customers get answers instantly',
    before: 'High-volume questions create call and inbox backlog.',
    after: 'Automated response flows resolve routine needs in seconds.'
  },
  {
    title: 'Every decision backed by live data',
    before: 'Leaders react to lagging, inconsistent numbers.',
    after: 'Shared, trusted metrics guide action in the moment.'
  }
];

export function Transformation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-34%']);

  return (
    <section className="relative overflow-hidden bg-black py-24 lg:py-32" id="transformation" ref={ref}>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.14em] text-gold">The Transformation</p>
          <h2 className="mt-4 max-w-4xl font-heading text-4xl leading-tight tracking-tight text-white lg:text-6xl">
            What if your systems actually worked for you?
          </h2>
        </ScrollReveal>
      </div>

      <motion.div
        className="mt-14 flex gap-6 px-6 lg:px-8"
        style={reducedMotion ? undefined : { x }}
      >
        {outcomes.map((outcome, index) => (
          <motion.article
            className="glass-panel w-[84vw] shrink-0 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:w-[62vw] lg:w-[38vw]"
            initial={{ opacity: 0, y: 40 }}
            key={outcome.title}
            transition={{
              duration: reducedMotion ? 0 : 0.7,
              ease: 'easeOut',
              delay: reducedMotion ? 0 : index * 0.1
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs uppercase tracking-[0.14em] text-gold">Outcome 0{index + 1}</p>
            <h3 className="mt-3 font-heading text-3xl tracking-tight text-white">{outcome.title}</h3>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-warmGray">
              <p>
                <span className="mr-2 text-white/70">Before:</span>
                {outcome.before}
              </p>
              <p>
                <span className="mr-2 text-copper">After:</span>
                {outcome.after}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
