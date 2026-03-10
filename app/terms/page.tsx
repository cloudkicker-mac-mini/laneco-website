import type { Metadata } from 'next';

import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description: 'Review Lane & Company terms of service and engagement terms.',
  path: '/terms'
});

export default function TermsPage() {
  return (
    <section className="bg-black py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="font-heading text-5xl tracking-tight text-white lg:text-6xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-warmGray">Effective date: March 10, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/85">
          <section>
            <h2 className="font-heading text-3xl tracking-tight text-white">Use of site</h2>
            <p className="mt-3">
              This website is provided for informational purposes. You agree to use the site lawfully and not interfere with its operation.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl tracking-tight text-white">Intellectual property</h2>
            <p className="mt-3">
              Site content, including text, design elements, and branding, is owned by Lane &amp; Company unless otherwise noted and may not be reproduced without permission.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl tracking-tight text-white">Service engagements</h2>
            <p className="mt-3">
              Project work is governed by signed client agreements. Website content does not constitute a binding offer of service.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl tracking-tight text-white">Liability limitations</h2>
            <p className="mt-3">
              Lane &amp; Company is not liable for indirect or consequential damages resulting from use of this site to the extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl tracking-tight text-white">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to <a className="text-copper" href="mailto:hello@laneandcompany.com">hello@laneandcompany.com</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
