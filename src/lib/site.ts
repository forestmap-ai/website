// Central site configuration: metadata, navigation, and shared content used
// across multiple pages. Keeping it here avoids duplicating copy and makes the
// information architecture easy to adjust.

export const site = {
  name: 'forestmap.ai',
  title: 'forestmap.ai - Forest intelligence, designed for action',
  description:
    'forestmap.ai turns cutting-edge forest science into operational intelligence. We build AI systems that forecast deforestation risk, map tree species at scale, and produce audit-grade forest data.',
  email: 'info@forestmap.ai',
  phone: '+44 (0)7986 882 740',
  phoneHref: '+447986882740',
  tagline: 'Forest intelligence, designed for action.',
  // Replace "your-form-id" with a real Formspree form ID (https://formspree.io)
  // to make the contact form deliver submissions to your inbox.
  formspreeId: 'your-form-id',
  // The blog is hosted separately on Ghost; the nav links out to it.
  blogUrl: 'https://blog.forestmap.ai',
};

const BASE = import.meta.env.BASE_URL;

/** Join an internal path with the configured base path (for GitHub Pages). */
export function withBase(path: string): string {
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

export const nav: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Risk Intelligence', href: '/services/risk-intelligence' },
      { label: 'Precision Inventory', href: '/services/precision-inventory' },
      { label: 'Sensor Strategy', href: '/services/sensor-strategy' },
      { label: 'Decision Support', href: '/services/decision-support' },
    ],
  },
  { label: 'Our Work', href: '/work' },
  {
    label: 'About',
    href: '/about/our-mission',
    children: [
      { label: 'Our Mission', href: '/about/our-mission' },
      { label: 'Our Team', href: '/about/our-team' },
    ],
  },
  { label: 'Research', href: '/research' },
  { label: 'Blog', href: site.blogUrl, external: true },
  { label: 'Contact', href: '/contact' },
];

export type Pillar = {
  slug: string;
  name: string;
  formerName: string;
  headline: string;
  summary: string;
};

export const pillars: Pillar[] = [
  {
    slug: 'risk-intelligence',
    name: 'Risk Intelligence',
    formerName: 'Disturbance Forecasting',
    headline: "Know where you'll lose forest before it happens.",
    summary:
      'Our AI models forecast deforestation risk at 30m resolution, so you can prioritise patrols, target interventions, and defend carbon assets - before loss occurs. Built on peer-reviewed methods and deployed for live REDD+ carbon projects.',
  },
  {
    slug: 'precision-inventory',
    name: 'Precision Inventory',
    formerName: 'Tree Mapping',
    headline: 'Map every tree. Know every species. At scale.',
    summary:
      'We delineate individual tree crowns and classify species from aerial and satellite imagery - even in dense tropical forests where off-the-shelf products fail. The ecological detail that makes your carbon, biodiversity, and compliance claims defensible.',
  },
  {
    slug: 'sensor-strategy',
    name: 'Sensor Strategy',
    formerName: 'Data Development',
    headline: 'The right data for the right question.',
    summary:
      'Satellite, drone, LiDAR, hyperspectral - we design the sensor strategy for your site, then build the AI to interpret it. You get precise, multi-scale insights without collecting data you do not need.',
  },
  {
    slug: 'decision-support',
    name: 'Decision Support',
    formerName: 'Project Planning',
    headline: 'Carbon baselines, restoration tracking, biodiversity monitoring - built for audit.',
    summary:
      'We design end-to-end monitoring systems that produce outputs you can defend: carbon stock estimates, biomass change forecasts, biodiversity baselines, and restoration metrics. Transparent, repeatable, and ready for third-party review.',
  },
];

export type ProofPoint = { stat: string; label: string };

export const proofPoints: ProofPoint[] = [
  { stat: 'M002', label: "Built the biomass forecasting system underpinning EquitableEarth's REDD+ methodology" },
  { stat: 'UNESCO', label: 'Mapped tree species across a Biosphere Reserve on Principe Island' },
  { stat: 'Live', label: 'Optimised and operationalised the AI behind a municipal tree-inventory app, now expanding across German cities' },
  { stat: 'Peer-reviewed', label: 'Published in Methods in Ecology and Evolution, Remote Sensing in Ecology and Conservation, and more' },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "It's been a pleasure working with such a knowledgeable and efficient team of computer vision experts. I couldn't recommend forestmap.ai more highly.",
    name: 'Jeremy Freund',
    role: 'CTO, Wildlife Works',
  },
  {
    quote:
      'The support and expertise provided by forestmap.ai have been invaluable in rolling out our AI mapping tool to users globally.',
    name: 'George Clifford',
    role: 'Lead Developer, detectree2',
  },
  {
    quote:
      'Dr Ball of forestmap.ai communicates cutting edge techniques in a way that is compelling and comprehensible to a broad international audience.',
    name: 'Joe Chou',
    role: 'International Director, CCEC',
  },
];
