# Jaigaon Quality Enterprise · Website

The public company website. It presents the product range, explains ordering
for Bhutan, and collects WhatsApp opt-ins in the way Meta's WhatsApp Business
policy requires.

Stack: Next.js 16, React 19, TypeScript, Tailwind CSS.

## Pages

| Route              | What it is                                        |
| ------------------ | ------------------------------------------------- |
| `/`                | Home: products, export steps, about, sign-up, contact |
| `/privacy-policy`  | Privacy Policy                                    |
| `/terms`           | Terms of Service                                  |
| `/whatsapp-policy` | What is sent on WhatsApp and how to opt out       |

The three legal pages are **drafts**. Have them reviewed before going live.

## Run it locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3001.

The WhatsApp sign-up form sends opt-ins to the dashboard backend. For it to
work, set `DASHBOARD_API_URL` and `WEBSITE_API_KEY` in `.env.local` (the key
must equal the backend's `WEBSITE_API_KEY`) and have the backend running.
Without them the form shows a "not available" message and nothing is stored.

## Checks

```bash
npm run build
```

```bash
npm run lint
```

## Folder guide

```
src/
  app/                    routes, sitemap.ts, robots.ts
  components/layout/      site header (navbar), footer, logo
  components/sections/    one file per home-page section
  components/legal/       shared layout of the legal pages
  components/ui/          small reusable pieces
  config/                 site URL, nav links, security headers
  content/                all text and facts: company, products, legal wording
  features/whatsapp-optin the sign-up form, its validation and server action
public/images/            logo and brochure photographs
```

To change what the site says, edit `src/content/`. Company facts that are not
known yet (GSTIN, business hours) are `null` in `src/content/company.ts` and
appear on the site as soon as they are filled in.
