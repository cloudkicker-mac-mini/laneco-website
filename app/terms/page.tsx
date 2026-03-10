import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Terms of Service',
  description: 'Lane & Company terms of service governing website use and service engagement.',
  path: '/terms'
});

export default function TermsPage() {
  return (
    <section className="section-shell pt-32">
      <div className="container-wide max-w-4xl">
        <h1 className="heading-lg">Terms of Service</h1>
        <p className="mt-4 text-sm text-warm-gray">Last updated: March 10, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-warm-gray md:text-base">
          <section>
            <h2 className="font-heading text-2xl text-white">Acceptance of Terms</h2>
            <p className="mt-3">
              By using this website, you agree to these Terms of Service. If you do not agree, do not use this site.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-white">Website Content</h2>
            <p className="mt-3">
              Content on this site is provided for informational purposes and may be updated without notice. We make reasonable efforts to ensure accuracy but do not guarantee completeness.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-white">Intellectual Property</h2>
            <p className="mt-3">
              All website content, branding, and materials are owned by Lane & Company unless otherwise noted. You may not reproduce or distribute content without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-white">Limitation of Liability</h2>
            <p className="mt-3">
              Lane & Company is not liable for any indirect, incidental, or consequential damages arising from use of this website.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-white">Governing Law</h2>
            <p className="mt-3">These terms are governed by the laws of the United States and applicable state laws.</p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-white">Contact</h2>
            <p className="mt-3">Questions about these terms can be sent to hello@laneandcompany.com.</p>
          </section>
        </div>
      </div>
    </section>
  );
}
