import Image from 'next/image';
import Link from 'next/link';
import { quickLinks } from '@/lib/navigation';
import { siteInfo } from '@/lib/metadata';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal">
      <div className="container-wide py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Image src="/logo-icon.png" alt="Lane & Company icon" width={50} height={50} />
              <div>
                <p className="font-heading text-xl text-white">Lane & Company</p>
                <p className="text-sm text-warm-gray">Built by Lane & Company</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-warm-gray">
              Principal-led custom software, AI integration, and strategic technology services for organizations that need measurable outcomes.
            </p>
          </div>

          <div>
            <h3 className="section-kicker">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-copper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="section-kicker">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              <li>
                <a href={`tel:${siteInfo.phone.replace(/[^\d+]/g, '')}`} className="transition hover:text-copper">
                  {siteInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteInfo.email}`} className="transition hover:text-copper">
                  {siteInfo.email}
                </a>
              </li>
              <li>Mon-Fri, 8am-6pm CT</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-warm-gray">
          <p>© {new Date().getFullYear()} Lane & Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
