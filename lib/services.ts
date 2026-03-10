export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  headline: string;
  scenario: string;
  signature: boolean;
  whatWeDo: string[];
  useCases: string[];
  relatedSlugs: string[];
};

export const services: Service[] = [
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    shortDescription: 'Purpose-built systems that remove bottlenecks and scale operations.',
    headline: 'Software built around your workflow, not the other way around.',
    scenario:
      'Your operations team spends 3 hours a day on manual data entry. We build a workflow platform that does it in seconds and syncs every system automatically.',
    signature: true,
    whatWeDo: [
      'Design and engineer internal platforms that replace manual processes.',
      'Integrate disconnected systems so teams stop copying and pasting between tools.',
      'Create custom approval flows, reporting dashboards, and role-based access controls.',
      'Support long-term scaling with clean architecture and documented code.'
    ],
    useCases: [
      'Operations teams drowning in repetitive admin work.',
      'Companies outgrowing spreadsheets and legacy software.',
      'Leadership teams needing real-time visibility into business performance.'
    ],
    relatedSlugs: ['web-applications', 'cloud-infrastructure', 'data-analytics']
  },
  {
    slug: 'ai-consulting-integration',
    title: 'AI Consulting & Integration',
    shortDescription: 'Practical AI systems that automate real work and improve service quality.',
    headline: 'AI that handles repetitive work while your team focuses on high-value tasks.',
    scenario:
      'Your support team answers the same 50 questions every day. We deploy an AI assistant that handles those requests 24/7 and escalates complex issues to humans.',
    signature: true,
    whatWeDo: [
      'Identify the highest-impact automation opportunities before writing code.',
      'Implement AI copilots for support, operations, and internal knowledge retrieval.',
      'Integrate LLM workflows into your existing systems with guardrails and monitoring.',
      'Train teams to manage and improve AI systems over time.'
    ],
    useCases: [
      'Customer support teams overloaded with repetitive inquiries.',
      'Sales teams that need faster responses and better qualification workflows.',
      'Organizations wanting AI benefits without risky, ungoverned deployments.'
    ],
    relatedSlugs: ['custom-software-development', 'data-analytics', 'it-strategy-fractional-cto']
  },
  {
    slug: 'it-strategy-fractional-cto',
    title: 'IT Strategy & Fractional CTO',
    shortDescription: 'Senior technology leadership without the full-time executive cost.',
    headline: 'Executive-level technology leadership on demand.',
    scenario:
      'You need a technology roadmap, hiring strategy, and architecture decisions, but not a $250K salary. We step in as your fractional CTO and lead the plan.',
    signature: true,
    whatWeDo: [
      'Set technical direction aligned with business goals and revenue targets.',
      'Evaluate vendors, architecture decisions, and delivery risk before money is spent.',
      'Coach internal teams and improve engineering execution standards.',
      'Own strategic planning for security, scalability, and budget control.'
    ],
    useCases: [
      'Founder-led companies ready to scale technology with less risk.',
      'Private equity-backed teams needing technical due diligence.',
      'Organizations requiring interim leadership during hiring transitions.'
    ],
    relatedSlugs: ['custom-software-development', 'cloud-infrastructure', 'ai-consulting-integration']
  },
  {
    slug: 'web-applications',
    title: 'Web Applications',
    shortDescription: 'From internal dashboards to customer portals that drive retention.',
    headline: 'Modern web applications that customers and teams actually use.',
    scenario:
      'Customers keep calling your staff for updates. We build a secure portal where they can track projects, documents, and billing in real time.',
    signature: false,
    whatWeDo: [
      'Design customer-facing portals and internal web platforms.',
      'Build responsive interfaces with secure authentication and role permissions.',
      'Integrate payment, reporting, and communication workflows into one product.',
      'Optimize performance for fast load times across devices.'
    ],
    useCases: [
      'Service businesses that need self-serve client experiences.',
      'Operations teams requiring internal dashboards and approval systems.',
      'SaaS startups launching MVPs with room to scale.'
    ],
    relatedSlugs: ['custom-software-development', 'mobile-applications', 'cloud-infrastructure']
  },
  {
    slug: 'mobile-applications',
    title: 'Mobile Applications',
    shortDescription: 'iOS and Android experiences that put your business in every pocket.',
    headline: 'Mobile products that turn convenience into revenue.',
    scenario:
      'Your field reps lose deals because pricing tools are stuck in the office. We create a mobile app with live inventory, quotes, and offline access.',
    signature: false,
    whatWeDo: [
      'Build native-feel apps for iOS and Android using modern cross-platform stacks.',
      'Integrate secure login, push notifications, and live data synchronization.',
      'Design workflows for field teams, customers, and executive reporting.',
      'Support app store delivery and post-launch updates.'
    ],
    useCases: [
      'Service companies with distributed field teams.',
      'Brands launching subscription or e-commerce mobile experiences.',
      'Organizations needing secure on-the-go access to core systems.'
    ],
    relatedSlugs: ['web-applications', 'custom-software-development', 'data-analytics']
  },
  {
    slug: 'portable-wifi-event-tech',
    title: 'Portable WiFi & Event Tech',
    shortDescription: 'Reliable connectivity infrastructure for events where uptime is non-negotiable.',
    headline: 'Connectivity that keeps high-stakes events online from start to finish.',
    scenario:
      'You are running a 4,000-person festival in a dead zone. We deploy portable WiFi and on-site network support so ticketing, vendors, and livestreams stay online.',
    signature: false,
    whatWeDo: [
      'Deploy portable WiFi systems tailored to crowd size and venue constraints.',
      'Plan network layout for POS systems, production teams, and guest access.',
      'Monitor and support infrastructure on-site throughout the event.',
      'Provide backup strategies to minimize downtime risk.'
    ],
    useCases: [
      'Festivals, conferences, and private events in low-connectivity locations.',
      'Production teams that require reliable uplink for streaming and media.',
      'Organizers coordinating payments, check-in, and staff communication.'
    ],
    relatedSlugs: ['cloud-infrastructure', 'data-analytics', 'it-strategy-fractional-cto']
  },
  {
    slug: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    shortDescription: 'Scalable, secure, and cost-efficient infrastructure built to perform.',
    headline: 'Infrastructure that cuts waste, prevents outages, and scales cleanly.',
    scenario:
      'Your cloud bill doubled while uptime dropped. We redesign your architecture, automate deployments, and reduce unnecessary spend.',
    signature: false,
    whatWeDo: [
      'Architect and migrate workloads across AWS and Azure environments.',
      'Automate deployment pipelines and infrastructure provisioning.',
      'Implement security, monitoring, backups, and disaster recovery baselines.',
      'Continuously optimize cloud costs and performance.'
    ],
    useCases: [
      'Teams with unstable deployments and inconsistent environments.',
      'Growing products that need resilient infrastructure before scaling.',
      'Businesses seeking predictable cloud spend and governance.'
    ],
    relatedSlugs: ['custom-software-development', 'web-applications', 'it-strategy-fractional-cto']
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics',
    shortDescription: 'Dashboards and data pipelines that turn numbers into actions.',
    headline: 'Stop waiting for spreadsheets and start leading with live data.',
    scenario:
      'Leadership waits two weeks for spreadsheet reports. We build live dashboards that show revenue, margin, pipeline, and performance in one screen.',
    signature: false,
    whatWeDo: [
      'Build reporting pipelines that centralize data from multiple systems.',
      'Create executive dashboards with KPI tracking and alerts.',
      'Design analytics models tied to operational and financial decisions.',
      'Enable team-level visibility with role-specific reporting views.'
    ],
    useCases: [
      'Executives who need real-time performance visibility.',
      'Operations teams improving forecasting and planning accuracy.',
      'Companies replacing brittle spreadsheet-based reporting.'
    ],
    relatedSlugs: ['custom-software-development', 'ai-consulting-integration', 'cloud-infrastructure']
  }
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((service) => service.slug === slug);

export const serviceInterestOptions = services.map((service) => ({
  value: service.slug,
  label: service.title
}));
