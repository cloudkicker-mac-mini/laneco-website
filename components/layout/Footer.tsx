import Link from 'next/link';

import { footerNavigation, legalNavigation } from '@/lib/navigation';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <img alt="Lane & Company icon" className="mb-6 h-11 w-11" src={`${basePath}/logo-icon.png`} />
          <p className="max-w-md text-sm leading-relaxed text-warmGray">
            Lane & Company builds custom software, practical AI integrations, and strategic technology systems that remove friction from day-to-day operations.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.12em] text-gold">Built by Lane &amp; Company</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.14em] text-gold">Explore</p>
            <ul className="space-y-2 text-sm text-white/85">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-copper" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.14em] text-gold">Connect</p>
            <ul className="space-y-2 text-sm text-white/85">
              <li>
                <a className="transition hover:text-copper" href="tel:+12107126129">
                  +1 (210) 712-6129
                </a>
              </li>
              <li>
                <a className="transition hover:text-copper" href="mailto:hello@laneandcompany.com">
                  hello@laneandcompany.com
                </a>
              </li>
              {legalNavigation.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-copper" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 pt-6 text-xs text-warmGray lg:px-8">
        © {new Date().getFullYear()} Lane &amp; Company. All rights reserved.
      </div>
    </footer>
  );
}
