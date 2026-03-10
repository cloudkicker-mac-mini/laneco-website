export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  isSignature: boolean;
  hook: string;
  summary: string;
  problem: string;
  deliverables: string[];
  scenario: string;
  audience: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    shortTitle: 'Custom Software',
    isSignature: true,
    hook: 'We build the exact system your team needs to move faster with less friction.',
    summary:
      'Replace patchwork tools with a single platform designed for your real operations, constraints, and growth plan.',
    problem:
      'Most teams lose hours every day jumping between disconnected tools, duplicate entry, and manual handoffs. That chaos creates rework, delays, and hidden costs.',
    deliverables: [
      'Workflow discovery and process mapping across departments',
      'Custom internal platforms, dashboards, and operational tooling',
      'API integrations that remove duplicate data entry and sync systems',
      'Role-based permissions, audit trails, and governance controls',
      'Deployment, monitoring, and ongoing optimization support'
    ],
    scenario:
      'A multi-location service business was managing scheduling, billing, and reporting in separate systems. We delivered a unified operations platform that automated dispatch and invoicing, cutting weekly admin effort by more than half.',
    audience: [
      'Teams outgrowing spreadsheets and generic SaaS workflows',
      'Operators managing high-volume, repeatable internal processes',
      'Leaders who need real-time visibility across locations or business units',
      'Organizations with compliance or approval-heavy processes'
    ],
    related: ['data-analytics', 'cloud-infrastructure', 'ai-consulting-integration']
  },
  {
    slug: 'ai-consulting-integration',
    title: 'AI Consulting & Integration',
    shortTitle: 'AI Integration',
    isSignature: true,
    hook: 'Intelligence built into your workflow, not bolted on as a gimmick.',
    summary:
      'Use LLMs, automation, and decision support where they create measurable leverage for your team.',
    problem:
      'Many AI initiatives stall because they are disconnected from daily work. Teams try a chatbot, get inconsistent output, and abandon the effort before value appears.',
    deliverables: [
      'AI opportunity assessment tied to business outcomes and ROI',
      'Workflow-level automation design with human review checkpoints',
      'LLM integrations with retrieval, guardrails, and policy controls',
      'Prompt systems, evaluation criteria, and quality assurance loops',
      'Training and adoption playbooks for operational teams'
    ],
    scenario:
      'A customer service team handled repetitive intake questions manually around the clock. We implemented an AI-assisted response layer with escalation rules, delivering 24/7 support and reducing first-response time from hours to seconds.',
    audience: [
      'Service teams with repetitive ticket, inbox, or intake workflows',
      'Leaders who need trustworthy AI outputs with governance',
      'Organizations seeking automation without losing human oversight',
      'Teams wanting practical adoption rather than experimental pilots'
    ],
    related: ['custom-software-development', 'data-analytics', 'it-strategy-fractional-cto']
  },
  {
    slug: 'it-strategy-fractional-cto',
    title: 'IT Strategy & Fractional CTO',
    shortTitle: 'Strategic Leadership',
    isSignature: true,
    hook: 'Technology leadership that thinks like an owner and executes like an operator.',
    summary:
      'Align your roadmap, architecture, team, and spend so technology drives growth instead of drag.',
    problem:
      'Without senior technical leadership, companies overbuy tools, under-scope risk, and make expensive architecture decisions that slow the business for years.',
    deliverables: [
      'Technology roadmap aligned to business priorities and timelines',
      'Architecture and vendor decisions grounded in long-term fit',
      'Delivery governance, KPI frameworks, and operating cadence',
      'Team design, hiring plans, and partner evaluation support',
      'Executive-level advisory for board, investor, and budget planning'
    ],
    scenario:
      'A scaling operations company had product initiatives, infrastructure concerns, and no clear sequence. As fractional CTO, we established quarterly priorities, rebuilt delivery rhythm, and created a technical plan the leadership team could execute confidently.',
    audience: [
      'Founders and executives without full-time senior technology leadership',
      'Companies preparing for scale, acquisition, or digital transformation',
      'Teams needing clearer roadmap ownership and accountability',
      'Organizations balancing innovation with operational risk'
    ],
    related: ['cloud-infrastructure', 'custom-software-development', 'ai-consulting-integration']
  },
  {
    slug: 'web-applications',
    title: 'Web Applications',
    shortTitle: 'Web Applications',
    isSignature: false,
    hook: 'Modern web products built for reliability, speed, and long-term maintainability.',
    summary:
      'From client portals to SaaS platforms, we build secure and performant web experiences that teams and customers actually enjoy using.',
    problem:
      'Slow, brittle web systems frustrate users and absorb engineering time. Product velocity drops when every release feels risky.',
    deliverables: [
      'Product architecture for scalable multi-user web applications',
      'Frontend and backend implementation with robust API contracts',
      'Authentication, authorization, and role-aware user experiences',
      'Testing, release pipelines, and observability foundations'
    ],
    scenario:
      'A field operations company needed a secure portal for hundreds of team members to track tasks and incidents. We built a responsive web app with role-based views, reducing status confusion and speeding issue resolution.',
    audience: [
      'B2B teams launching or rebuilding customer-facing platforms',
      'Operations teams needing secure internal portals',
      'Organizations replacing legacy browser-based tools'
    ],
    related: ['custom-software-development', 'mobile-applications', 'cloud-infrastructure']
  },
  {
    slug: 'mobile-applications',
    title: 'Mobile Applications',
    shortTitle: 'Mobile Applications',
    isSignature: false,
    hook: 'Mobile experiences that keep your business moving when teams are away from the desk.',
    summary:
      'We design and ship iOS and Android workflows that support real-world field conditions, speed, and reliability.',
    problem:
      'When mobile workflows are an afterthought, field teams revert to texts, calls, and paper notes. Data quality drops and response times suffer.',
    deliverables: [
      'Mobile product strategy and prioritized feature roadmaps',
      'Cross-platform or native app development based on needs',
      'Offline-aware workflows with sync and conflict handling',
      'Push notifications, secure auth, and telemetry instrumentation'
    ],
    scenario:
      'A distributed service workforce needed a faster way to log jobs, photos, and completion notes. We delivered a mobile workflow that synced automatically, cutting end-of-day reporting lag and improving billing accuracy.',
    audience: [
      'Field service teams with real-time update requirements',
      'Businesses needing customer self-service on mobile',
      'Teams replacing manual or paper-based mobile processes'
    ],
    related: ['web-applications', 'custom-software-development', 'data-analytics']
  },
  {
    slug: 'portable-wifi-event-tech',
    title: 'Portable WiFi & Event Tech',
    shortTitle: 'WiFi & Event Tech',
    isSignature: false,
    hook: 'Reliable temporary connectivity for events, operations hubs, and high-density environments.',
    summary:
      'Design, deploy, and support portable network solutions that keep teams online and attendees connected.',
    problem:
      'Events and temporary sites often rely on unstable connectivity. That risk disrupts check-in, payments, livestreams, and team communication.',
    deliverables: [
      'Site connectivity planning and wireless coverage design',
      'Portable WiFi trailer and pole-mount deployment strategy',
      'Network segmentation for guest, staff, and operations traffic',
      'On-site monitoring and rapid troubleshooting support'
    ],
    scenario:
      'An outdoor event series needed resilient connectivity for ticketing, vendors, and production crews. We designed a portable network topology with failover paths, ensuring consistent uptime throughout multi-day events.',
    audience: [
      'Event teams running temporary or remote venues',
      'Operations leaders needing rapid deployment connectivity',
      'Organizations requiring segmented guest and staff networks'
    ],
    related: ['cloud-infrastructure', 'it-strategy-fractional-cto', 'data-analytics']
  },
  {
    slug: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    shortTitle: 'Cloud Infrastructure',
    isSignature: false,
    hook: 'Infrastructure that scales cleanly, stays secure, and supports delivery velocity.',
    summary:
      'From migrations to DevOps, we build cloud foundations that reduce risk and improve system reliability.',
    problem:
      'Unstructured cloud growth leads to outages, security gaps, and ballooning spend. Teams lose trust in release cycles and firefighting becomes the norm.',
    deliverables: [
      'Cloud architecture and migration planning for Azure or AWS',
      'Infrastructure as code and repeatable environment provisioning',
      'CI/CD pipelines, release controls, and rollback strategies',
      'Security posture hardening, backups, and disaster recovery planning'
    ],
    scenario:
      'A fast-growing software team needed to migrate from ad hoc hosting to a production-grade cloud setup. We delivered infrastructure as code, release automation, and observability, improving uptime and reducing deployment risk.',
    audience: [
      'Teams migrating from legacy infrastructure or manual hosting',
      'Organizations needing stronger security and reliability controls',
      'Product teams that want faster, safer software delivery'
    ],
    related: ['custom-software-development', 'web-applications', 'it-strategy-fractional-cto']
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics',
    shortTitle: 'Data & Analytics',
    isSignature: false,
    hook: 'Turn scattered data into operational clarity and confident decisions.',
    summary:
      'We build pipelines and dashboards that make live performance visible to the teams who need it most.',
    problem:
      'When reporting is manual and delayed, leaders operate from stale information. Decisions get made on instinct instead of evidence.',
    deliverables: [
      'Data source mapping and integration design across systems',
      'Automated data pipelines and transformation workflows',
      'Executive and operational dashboard design for daily use',
      'Metric definitions, governance, and alerting strategy'
    ],
    scenario:
      'A regional operations team spent days compiling weekly reports from multiple systems. We automated ingestion and dashboarding, giving 200+ users real-time visibility into throughput, delays, and margin drivers.',
    audience: [
      'Leadership teams that need trusted real-time operational metrics',
      'Operations groups replacing spreadsheet-driven reporting',
      'Organizations aligning departments around shared KPIs'
    ],
    related: ['custom-software-development', 'ai-consulting-integration', 'cloud-infrastructure']
  }
];

export const serviceSlugs = services.map((service) => service.slug);

export const signatureServices = services.filter((service) => service.isSignature);
export const coreServices = services.filter((service) => !service.isSignature);

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string): Service[] {
  const current = getServiceBySlug(slug);

  if (!current) {
    return [];
  }

  const related = current.related
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((service): service is Service => Boolean(service));

  if (related.length >= 2) {
    return related.slice(0, 3);
  }

  const fallback = services.filter((service) => service.slug !== slug);
  return [...related, ...fallback].slice(0, 3);
}
