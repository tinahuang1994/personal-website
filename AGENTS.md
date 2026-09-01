<!-- BEGIN:nextjs-agent-rules -->
# Next.js project rule

This project uses Next.js 16. Read the relevant guide in `node_modules/next/dist/docs/` before changing framework APIs or conventions.
<!-- END:nextjs-agent-rules -->

# Tina Huang personal website

Portfolio and writing site for Tina Huang. Production URL: `https://tinahuang.vercel.app`.

## Public positioning

- Climate AI Builder
- AI Educator / Coach
- AI-Native Solo Founder

Do not mention NewClimate Institute anywhere in public pages, metadata, SEO text, images, or hidden text. It may remain only in the downloadable CV.

## Language architecture

- `/` is a complete English homepage.
- `/zh` is a complete Chinese homepage.
- Navigation must always provide a clear `EN / 中文` switch.
- Articles and testimonials show one language at a time. Readers may switch between the Chinese original and English translation; do not default to a mixed or side-by-side public layout.
- Chinese is the original language for the selected essays and testimonials. English should be adapted for natural reading, not translated word for word.

## Current public facts

- Teaching/coaching impact: 40 clients across 29 fields and 24 testimonials, as of August 2026.
- Display the public client count as exactly `40 clients` / `40 位客户`.
- Keep the testimonial count in the source of truth, but label public collection links `All Testimonials` / `全部推荐语` rather than showing a number.
- International one-to-one coaching: `$200 USD / 2 hours`.
- Chinese one-to-one coaching: `¥2,000 / 2 小时`.
- The two August podcast conversations have been recorded, but their links are not published. Say `Podcast links coming soon`; never invent links.

## Content sources

- Latest testimonial source: `/Users/apple/Desktop/AI起飞/marketing/_source/推荐语长图.html`.
- Current About portrait source: `/Users/apple/Desktop/AI起飞/marketing/_source/linklein.jpeg`; the site copy is `public/tina-portrait.jpeg`.
- August recap source: `/Users/apple/Desktop/AI起飞/blogs/这个8月，我更清楚自己想怎么工作/cards.html`.
- Roy client-story source: `/Users/apple/Desktop/AI起飞/blogs/从AI小白到助教，韬全开始开发自己的课/blog.html`; public copy uses only `Roy` and must not expose his Chinese name or third-party names.
- Bilingual landmark article data: `app/writing/articles.ts`.
- Testimonial data: `app/TestimonialsModal.tsx` (24 entries; the public reader is `app/testimonials/TestimonialsView.tsx`).

## Design system

- Editorial cream/bronze/dark-forest palette.
- Use no more than two fonts: Cormorant Garamond and Inter.
- Preserve the original homepage design: large editorial hero, cream background, bronze accent, gold pill buttons, thin dividers, and two-column rounded card grids. New content should be added through the existing card system rather than introducing a new homepage layout or visual language.
- Homepage narrative order: hero → About / CV context → coaching impact → standalone coaching CTA → Climate AI → writing → personal experiments. Roy's client story belongs in coaching impact and should not be duplicated in the writing card grid.
- The English and Chinese homepages must use the same original design. Content may differ by language, but switching languages should not feel like entering a different website.
- Display headings and article titles do not end in periods. A question mark is allowed when it belongs to the title.
- Keep Climate AI work and project coaching semantically distinct. Understory is intentionally grouped with the climate and nature projects beside Learning Journey, at Tina's request.
- NoThanks belongs with personal tools and experiments, not in the Climate AI project grid.
- Echo is served from `public/echo/` so portfolio visitors can open it without the standalone Vercel project's login protection. Keep its three licensed audio files with the HTML when deploying.
- Prevent awkward widows and orphaned final words. Body copy uses `text-wrap: pretty`; headings use `text-wrap: balance`. Visually check important headlines and cards at desktop and mobile widths after copy changes.
- The main shared site styles currently live in `app/design-preview/page.module.css`; the preview route itself is intentionally not public.

## Quality checks

- Run `npm run lint`, `tsc --noEmit`, and `npm run build`.
- Test `/`, `/zh`, `/writing/august-2026?lang=zh`, `/writing/august-2026?lang=en`, `/writing/roy-eight-sessions?lang=zh`, `/writing/roy-eight-sessions?lang=en`, `/testimonials?lang=zh`, and `/testimonials?lang=en` at desktop and mobile widths.
- Confirm there is no horizontal overflow, that mobile navigation works, and that each article/testimonial page renders only its selected language.
- Before publishing audience-facing English, apply Tina's writing-style file and the Humanizer skill, then reread the complete result.

## Deployment

Deploy from the complete working directory with Vercel CLI rather than relying on tracked Git files alone. Project id: `prj_qEAMgFiNwhKxfAklSymf3dImoLGh`; team id: `team_dWFwVzNPilhY6SgCbEtiC4LD`.
