# forestmap.ai website

A static marketing site for [forestmap.ai](https://www.forestmap.ai), built with
[Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). This is the
content-first rebuild (Phase 1) described in `../audit.md` and the brand assets under
`../../Brand/`. It is structured so interactive product demos can be added later as Astro islands.

## Stack

- **Astro 5** - static site generator with markdown content collections
- **Tailwind CSS 3** - design system (forest-toned palette in `tailwind.config.mjs`)
- Content lives in markdown: case studies in `src/content/case-studies/`, blog posts in `src/content/blog/`

## Project structure

```
src/
  components/      Reusable UI (Hero, ServicePillarCard, CTA, Testimonials, ...)
  content/         Markdown content collections (case-studies, blog)
  content.config.ts  Collection schemas
  layouts/Base.astro  Shared HTML shell, SEO meta, header/footer
  lib/site.ts      Site metadata, navigation, pillars, proof points, testimonials
  lib/services.ts  Full copy for the four service pages
  pages/           Routes (index, services, work, about, research, blog, contact, 404)
  styles/global.css  Tailwind layers + component classes
public/brand/      Logos and favicon
```

## Local development

Requires Node 20+ and npm.

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the built site
```

## Editing content

- **Add a case study**: create a markdown file in `src/content/case-studies/` matching the schema in `src/content.config.ts` (title, headline, sector, scale, client, pillars, summary, order, optional quote). It appears automatically on the home page and `/work`.
- **Blog**: the blog is hosted separately on [Ghost](https://blog.forestmap.ai) and is not part of this site. The nav "Blog" link points there (set `blogUrl` in `src/lib/site.ts`).
- **Edit navigation, pillars, testimonials, proof points**: `src/lib/site.ts`.
- **Edit service-page copy**: `src/lib/services.ts`.

## Contact form

The contact form posts to [Formspree](https://formspree.io). Create a free form, then set
`formspreeId` in `src/lib/site.ts` to your form ID. Until then the form shows a notice and the
direct email/phone remain available.

## Deployment (GitHub Pages)

Pushing changes under `Website/site/**` to `main` triggers
[`.github/workflows/deploy-site.yml`](../../.github/workflows/deploy-site.yml), which builds the
site and deploys it to GitHub Pages.

One-time setup: in the GitHub repo, go to **Settings -> Pages -> Build and deployment -> Source**
and select **GitHub Actions**.

The workflow passes the Pages base path (e.g. `/Work-Hub` for a project site) to the build via the
`BASE_PATH` env var, and `astro.config.mjs` applies it. Internal links use the `withBase()` helper in
`src/lib/site.ts`, so they work both locally (root) and under a project path.

To later move to the `forestmap.ai` custom domain, add a `CNAME` and adjust `SITE_URL` / `BASE_PATH`.

## Notes / follow-ups

- Real field photography (`public/photos/`, optimised from `../assets/`) is used on the home hero,
  Our Team, and Our Mission. Service and case-study pages still use brand-coloured placeholders -
  adding real output imagery (risk maps, detectree2 crown delineations, the Principe inventory,
  BaKIM screenshots) is the highest-impact remaining follow-up.
- Case-study text is drafted from `../case-studies.md` and should be reviewed by James for accuracy
  and confidentiality before the site goes live on the production domain.
- The finished "Forest Mapping" article lives in `../../Posts/Blog/Intro to Forestmapping/` ready to
  publish on the Ghost blog (it is intentionally not hosted on this site).
