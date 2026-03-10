'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { primaryNavigation } from '@/lib/navigation';
import { Button } from '@/components/ui/Button';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = '';
  }, [open]);

  const panelClass = scrolled
    ? 'border-white/15 bg-black/60 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl'
    : 'border-transparent bg-transparent';

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:px-8">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 lg:px-6 ${panelClass}`}
        >
          <Link aria-label="Lane & Company home" className="flex items-center" href="/">
            <img
              alt="Lane & Company"
              className="h-8 w-auto md:h-9"
              src={`${basePath}/logo-white.png`}
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              <span className="text-[10px] uppercase tracking-[0.14em] text-emerald-200">Available</span>
            </div>
            <nav aria-label="Primary" className="flex items-center gap-6">
              {primaryNavigation.map((item) => (
                <Link
                  className="text-xs uppercase tracking-[0.12em] text-white/75 transition hover:text-white"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button href="/contact" size="sm" variant="primary">
              Let&apos;s Talk
            </Button>
          </div>

          <button
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
            onClick={() => setOpen((previous) => !previous)}
            type="button"
          >
            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-0 top-0 h-[2px] w-4 bg-white transition-all ${open ? 'translate-y-[7px] rotate-45' : ''}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-4 bg-white transition-all ${open ? 'opacity-0' : ''}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-4 bg-white transition-all ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-40 flex flex-col bg-black/95 p-8 pt-28"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.25 }}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              <span className="text-[10px] uppercase tracking-[0.14em] text-emerald-200">Available</span>
            </div>

            <nav aria-label="Mobile" className="flex flex-1 flex-col gap-6">
              {primaryNavigation.map((item, index) => (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
                  key={item.href}
                  transition={{
                    duration: reducedMotion ? 0 : 0.35,
                    delay: reducedMotion ? 0 : index * 0.08
                  }}
                >
                  <Link
                    className="text-3xl font-heading tracking-tight text-white"
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <Link
              className="inline-flex w-full items-center justify-center rounded-full border border-copper bg-copper px-8 py-4 text-sm font-medium uppercase tracking-[0.14em] text-white shadow-copper transition hover:-translate-y-0.5 hover:bg-[#ca694f]"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Book a Strategy Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
