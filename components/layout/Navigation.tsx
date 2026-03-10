'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navigationLinks } from '@/lib/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const transparentHome = pathname === '/' && !isScrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          transparentHome ? 'bg-transparent' : 'border-b border-white/10 bg-black/85 backdrop-blur-xl'
        }`}
      >
        <nav className="container-wide flex h-20 items-center justify-between">
          <Link href="/" className="relative h-10 w-44">
            <Image src="/logo-white.png" alt="Lane & Company" fill className="object-contain object-left" priority />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-8 text-sm font-medium text-white/90">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-copper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <span className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-warm-gray">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              Available
            </span>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#e2856f]"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 bg-white transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-white transition ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-white transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/95 px-8 pb-10 pt-28 transition md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-5 text-2xl font-heading text-white">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="block border-b border-white/10 pb-4">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-copper px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </>
  );
}
