import type { Metadata } from 'next';

import { CallToAction } from '@/components/story/CallToAction';
import { Hero } from '@/components/story/Hero';
import { ProblemScenes } from '@/components/story/ProblemScenes';
import { ProofPoints } from '@/components/story/ProofPoints';
import { Solutions } from '@/components/story/Solutions';
import { Transformation } from '@/components/story/Transformation';
import { buildMetadata, organizationSchema } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Story-Driven Software Transformation',
  description:
    'Lane & Company guides teams from manual operational drag to intelligent, automated systems through custom software, AI integration, and principal-led execution.',
  path: '/'
});

export default function HomePage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema())
        }}
        type="application/ld+json"
      />
      <Hero />
      <ProblemScenes />
      <Transformation />
      <Solutions />
      <ProofPoints />
      <CallToAction />
    </>
  );
}
