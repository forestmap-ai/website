// Full content for the four service pages, derived from Brand/positioning.md and
// Website/copy-updates.md. Data-driven so a single template renders all four.

export type Provision = { title: string; body: string };

export type Service = {
  slug: string;
  name: string;
  formerName: string;
  eyebrow: string;
  heroTitle: string;
  lead: string;
  heroImage: string;
  clientProblem: string;
  provisions: Provision[];
  evidence: string;
  marketContext?: string;
  exampleImage?: { src: string; caption: string };
  relatedCaseStudy?: { id: string; label: string };
};

export const services: Service[] = [
  {
    slug: 'risk-intelligence',
    name: 'Risk Intelligence',
    formerName: 'Disturbance Forecasting',
    eyebrow: 'Risk Intelligence',
    heroTitle: "Deforestation doesn't happen at random. Our AI learns where it's heading next.",
    lead: 'We build forecasting systems that predict where forest loss is most likely to occur within the next year - at 30m resolution. Organisations use our risk maps to prioritise patrols, allocate conservation resources, defend carbon baselines, and meet EUDR due-diligence requirements.',
    heroImage: '/photos/river-dawn.jpg',
    exampleImage: {
      src: '/photos/risk-map.jpg',
      caption: 'Example output: deforestation risk maps for the Democratic Republic of the Congo across forecast scenarios. Every forest pixel is classified as high, low, or no risk. From our peer-reviewed REDD+ baseline model (Ball et al., 2024, Scientific Reports).',
    },
    clientProblem:
      "We need to know where we'll lose forest before it happens - so we can prioritise patrols, target interventions, and defend our carbon assets.",
    provisions: [
      {
        title: 'Annual risk forecasts',
        body: 'Where is deforestation most likely in the next 12 months? Our models learn from historical patterns and multi-year satellite imagery to predict emerging threats - including illegal logging, mining expansion, and agricultural pressure.',
      },
      {
        title: 'Pixel-level risk maps',
        body: 'Not a heatmap - a detailed, 30m-resolution probability surface showing where your highest-risk areas are. Exportable as GIS-ready layers for integration into your existing workflows.',
      },
      {
        title: 'Tailored to your jurisdiction',
        body: 'Our system scales to any tropical forest region. We work with you to calibrate models to local drivers and conditions, whether that is the Amazon, Congo Basin, or Southeast Asia.',
      },
      {
        title: 'From forecast to action',
        body: 'Risk maps are only useful if they reach the right people at the right time. We help design the decision pipeline from model output to operational response - ranger deployment, stakeholder alerts, or regulatory reporting.',
      },
    ],
    evidence:
      'Peer-reviewed methodology (Ball et al., 2022, Methods in Ecology and Evolution). Deployed operationally for Wildlife Works / EquitableEarth\u2019s M002 REDD+ methodology.',
    marketContext:
      'This capability directly supports EUDR due-diligence requirements and the dynamic, forward-looking baselines that modern carbon-market integrity standards increasingly demand.',
    relatedCaseStudy: {
      id: 'wildlife-works',
      label: "We built the biomass forecasting system underpinning EquitableEarth's M002 REDD+ methodology, now being adopted by carbon projects globally.",
    },
  },
  {
    slug: 'precision-inventory',
    name: 'Precision Inventory',
    formerName: 'Tree Mapping',
    eyebrow: 'Precision Inventory',
    heroTitle: "If you can't tell what species are in your forest, you can't manage it, value it, or defend your claims about it.",
    lead: 'We map individual tree crowns and classify species from aerial and satellite imagery - in forests where canopies are dense, species are diverse, and off-the-shelf products fall short. The result is an ecological inventory detailed enough to support carbon accounting, biodiversity assessment, EUDR compliance, and restoration monitoring.',
    heroImage: '/photos/tree-climb-2.jpg',
    clientProblem:
      "We need to know what's actually in our forest - species, structure, health - not just that it's green.",
    provisions: [
      {
        title: 'Individual tree crown delineation',
        body: 'We detect and outline single tree crowns from aerial, drone, and satellite imagery using detectree2, our open-source Mask R-CNN system - achieving up to 74% delineation accuracy for the tallest trees, which means reliable canopy-level inventory across your site.',
      },
      {
        title: 'Species-level classification',
        body: 'We classify tree species from RGB, multispectral, and hyperspectral imagery, reaching up to 75% species accuracy in complex tropical forests - the compositional detail that turns generic forest metrics into ecological intelligence.',
      },
      {
        title: 'Change detection over time',
        body: 'Multi-temporal stacking lets us track growth, mortality, and health shifts tree by tree, improving accuracy by around 9% over single-date analysis and surfacing changes traditional methods miss.',
      },
      {
        title: 'Outputs that ground your claims',
        body: 'Species composition maps, crown-dimension data, and canopy-structure assessments - formatted to support carbon MRV, biodiversity credits, and EUDR documentation.',
      },
    ],
    evidence:
      'detectree2 (open-source, Mask R-CNN-based), published in Remote Sensing in Ecology and Conservation (Ball et al., 2023). Deployed across tropical, island, and urban forests.',
    marketContext:
      'Species-level mapping is directly relevant to carbon MRV, EUDR compliance, and emerging biodiversity-credit standards - all of which require ecological detail that coarse satellite products cannot provide.',
    relatedCaseStudy: {
      id: 'faya-foundation',
      label: 'We mapped tree species across a UNESCO Biosphere Reserve on Principe Island, in a data-sparse, high-endemism environment where off-the-shelf products fail.',
    },
  },
  {
    slug: 'sensor-strategy',
    name: 'Sensor Strategy',
    formerName: 'Data Development',
    eyebrow: 'Sensor Strategy',
    heroTitle: 'You don\u2019t need more data. You need the right data - and the AI to make sense of it.',
    lead: 'Forest monitoring projects fail not because of insufficient technology, but because of mismatched data strategies. We design the sensor strategy that fits your site, your question, and your budget - then build the AI pipeline to fuse and interpret the data.',
    heroImage: '/photos/fieldwork-drone.jpg',
    clientProblem:
      "We have a site and a question, but we don't know what data to collect or how to combine it.",
    provisions: [
      {
        title: 'Satellite imagery',
        body: 'For broad coverage and temporal depth across large areas.',
      },
      {
        title: 'UAV / drone surveys',
        body: 'For targeted, high-resolution detail where it matters most.',
      },
      {
        title: 'LiDAR',
        body: 'For 3D forest structure, canopy height, and biomass estimation.',
      },
      {
        title: 'Hyperspectral & multispectral',
        body: 'For species-level discrimination, vegetation health, and change detection.',
      },
      {
        title: 'Ground-truth data',
        body: 'For model calibration and validation - so outputs reflect ecological reality.',
      },
      {
        title: 'AI fusion pipeline',
        body: 'We fuse multi-source data into coherent, interpretable outputs - maps, inventories, and risk layers formatted for your workflow.',
      },
    ],
    evidence:
      'Demonstrated across multiple sensor modalities and forest types, including published work on multisensor fusion (LiDAR + multispectral + hyperspectral) for improved tree segmentation.',
    marketContext:
      'How we work: (1) Scoping - what decision does this data need to support? (2) Design - which sensors, at what resolution, over what time period? (3) Collection - we coordinate acquisition or work with your providers. (4) Processing - our AI pipelines fuse the data. (5) Delivery - outputs formatted for your workflow.',
  },
  {
    slug: 'decision-support',
    name: 'Decision Support',
    formerName: 'Project Planning',
    eyebrow: 'Decision Support',
    heroTitle: 'Carbon baselines, restoration tracking, biodiversity monitoring - built for audit.',
    lead: 'We design end-to-end monitoring systems that produce outputs you can defend: carbon stock estimates, biomass change forecasts, biodiversity baselines, and restoration metrics. Transparent, repeatable, and ready for third-party review.',
    heroImage: '/photos/forest-canopy.jpg',
    clientProblem:
      'We need carbon baselines, restoration tracking, or biodiversity monitoring that will survive an audit.',
    provisions: [
      {
        title: 'Carbon stock & biomass change',
        body: 'Defensible carbon baseline estimates and biomass-change forecasts, designed to meet the documentation and review requirements of modern carbon-market methodologies.',
      },
      {
        title: 'Biodiversity baselines',
        body: 'Species-level baselines that ground biodiversity claims and credits in measurable ecological reality.',
      },
      {
        title: 'Restoration tracking',
        body: 'Repeatable metrics that track restoration progress over time, so you can demonstrate impact to funders and partners.',
      },
      {
        title: 'Built for third-party review',
        body: 'Every output is designed for repeatability, transparency, and defensibility - so it holds up under audit, regulatory scrutiny, or scientific review.',
      },
    ],
    evidence:
      'Wildlife Works biomass forecasting system built for EquitableEarth\u2019s M002 methodology, which underwent independent review by Space Intelligence.',
    marketContext:
      'Built to satisfy the evidentiary bar set by ICVCM (carbon integrity), TNFD (nature-related disclosure), and EUDR (supply-chain due diligence).',
    relatedCaseStudy: {
      id: 'wildlife-works',
      label: 'Our Wildlife Works engagement produced an audit-grade forecasting system that underpins a public REDD+ methodology.',
    },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
