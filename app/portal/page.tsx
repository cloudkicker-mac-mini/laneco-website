import type { Metadata } from 'next';

import { PortalLogin } from '@/components/portal/PortalLogin';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Client Portal Preview',
  description:
    'Preview the Lane & Company client portal experience and sign in to be notified when access goes live.',
  path: '/portal'
});

export default function PortalPage() {
  return (
    <div className="bg-gradient-to-b from-black to-charcoal pt-20">
      <PortalLogin />
    </div>
  );
}
