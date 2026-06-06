---
title: BaKIM / Smart City Bamberg
headline: AI-powered urban tree inventory from drone imagery
sector: Urban forestry / municipal
scale: City-wide (Bamberg, Germany, expanding to other municipalities)
client: Smart City Bamberg / University of Bamberg
pillars:
  - Precision Inventory
  - Sensor Strategy
order: 3
summary: We contributed the computer vision models behind a live web application that lets municipal arborists upload drone imagery and receive automated tree inventory and health assessments.
image: /photos/fieldwork-drone.jpg
---

## The challenge

Cities across Europe are facing a dual pressure: urban tree canopies are declining due to heat stress, drought, pests, and disease, while the manual surveys needed to monitor them are expensive and slow. A trained arborist can typically assess around 150 trees per day. Bamberg alone has thousands of municipal trees, and the City needed a way to survey them at scale, detect health issues early, and prioritise maintenance before problems escalate.

The BaKIM project (Baum, KI, Mensch - Tree, AI, Human), led by Smart City Bamberg and the University of Bamberg's Chair of Cognitive Systems, with GFA consulting involvement, set out to build an AI-powered web application that would allow arborists and foresters to upload drone imagery and receive automated tree inventory and health assessments.

## What forestmap.ai contributed

forestmap.ai contributed computer vision models to the BaKIM system, drawing on detectree2 and related deep learning expertise. The contributions included:

- Tree crown detection and delineation models adapted from tropical forest work to European urban contexts
- Species classification capabilities from drone RGB, multispectral, and thermal imagery
- Vitality assessment features that help identify pest infestation (bark beetles, mistletoe) and drought stress

The resulting web application (bakim.bamberg.de) allows municipal staff to upload drone footage, which is processed server-side by the AI models, and download GIS-compatible results for integration into their tree management workflows.

## The outcome

The BaKIM application launched for testing in April 2026 and became available for practical use from mid-2026. It is now being expanded to additional German municipalities (Lemgo, Markt Weisendorf, Memmingen), with the code and models released as open-source software so other cities can adopt it at no cost.

The system enables arborists to quickly scan entire districts from the air, identify problem areas, and focus their limited field time where it matters most - a fundamental shift from blanket manual surveys to targeted, AI-guided intervention.

## Why it matters

This case study demonstrates that forestmap.ai's core technology - originally developed for tropical forest research - transfers directly to urban infrastructure applications in European cities. It also shows the company contributing to a product (not just a report), one that is now live, replicable, and expanding. For municipal clients, it's a concrete proof point: this is what AI-powered tree inventory looks like in practice.
