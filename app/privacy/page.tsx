import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy',
  description: 'Lane & Company privacy policy describing data collection, usage, and your rights.',
  path: '/privacy'
});

export default function PrivacyPage() {
  return (
    <section className="section-shell pt-32">
      <div className="container-wide max-w-4xl">
        <h1 className="heading-lg">Privacy Policy</h1>
        <p className="mt-4 text-sm text-warm-gray">Last updated: March 10, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-warm-gray md:text-base">
          <section>
            <h2 className="font-heading text-2xl text-white">Information We Collect</h2>
            <p className="mt-3">
              We collect information you provide directly, including your name, email address, company details, and project information submitted through our contact forms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-white">How We Use Information</h2>
            <p className="mt-3">
              We use collected information to respond to inquiries, provide requested services, improve website performance, and communicate about potential or active engagements.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-white">Data Sharing</h2>
            <p className="mt-3">
              We do not sell your personal data. We may share information with trusted service providers necessary to operate our business, such as hosting, analytics, and communication platforms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-white">Data Security</h2>
            <p className="mt-3">
              We maintain reasonable technical and organizational safeguards to protect personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-white">Your Rights</h2>
            <p className="mt-3">
              You may request access, correction, or deletion of your personal data by contacting us at hello@laneandcompany.com.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-white">Contact</h2>
            <p className="mt-3">For privacy-related questions, email hello@laneandcompany.com.</p>
          </section>
        </div>
      </div>
    </section>
  );
}
