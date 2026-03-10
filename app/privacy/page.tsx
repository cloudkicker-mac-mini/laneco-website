import type { Metadata } from 'next';

import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Review the Lane & Company privacy policy and data handling commitments.',
  path: '/privacy'
});

export default function PrivacyPage() {
  return (
    <section className="bg-black py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="font-heading text-5xl tracking-tight text-white lg:text-6xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-warmGray">Effective date: March 10, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/85">
          <section>
            <h2 className="font-heading text-3xl tracking-tight text-white">Information we collect</h2>
            <p className="mt-3">
              We collect information you provide directly through contact forms, email, and calls, including name, email address, organization details, and project information.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl tracking-tight text-white">How we use information</h2>
            <p className="mt-3">
              Information is used to respond to inquiries, evaluate fit, prepare project proposals, deliver services, and improve our operations.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl tracking-tight text-white">Data sharing</h2>
            <p className="mt-3">
              Lane &amp; Company does not sell personal information. Data may be shared with trusted service providers and specialist partners only when necessary to deliver services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl tracking-tight text-white">Security</h2>
            <p className="mt-3">
              We apply reasonable administrative and technical safeguards to protect information, though no method of transmission or storage is guaranteed to be fully secure.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-3xl tracking-tight text-white">Contact</h2>
            <p className="mt-3">
              For privacy questions, email <a className="text-copper" href="mailto:hello@laneandcompany.com">hello@laneandcompany.com</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
