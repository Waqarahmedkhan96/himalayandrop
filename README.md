# Himalayan Drop: Headless Shopify Storefront

A custom storefront built with **Next.js** (React), animated with **GSAP** and **Lenis**, and connected to **Shopify** through the Storefront API. Shopify handles products, inventory, orders and checkout. This project is everything the customer sees.

## Run it on your computer

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Edit any file and the page updates instantly.

Without Shopify connected, the site uses the demo products in `lib/products.js`, so you can work on the design straight away.

## Connect your Shopify store

1. In Shopify admin, go to **Settings → Apps and sales channels**, and install the **Headless** sales channel.
2. Create a storefront in it and copy the **public** Storefront API access token.
3. Copy `.env.example` to `.env.local` and fill in your store domain and token.
4. Restart `npm run dev`.

Products now come from Shopify. The cart creates real Shopify carts, and **Checkout** sends customers to Shopify's own secure checkout (cards, MobilePay and the other payment methods you enable in Shopify).

**Journal:** in Shopify admin, go to Online Store → Blog posts, create a blog with the handle `journal`, and publish articles there. The first tag of each article becomes its category. Until then, the four articles in `lib/posts.js` are shown.

Optional: add a product metafield `custom.subtitle` (single-line text) in Shopify for the small line under each product name, such as "Gold Edition · 30g".

## Project map

```
app/
  layout.js                 Fonts, header, footer, cart drawer, smooth scroll
  page.js                   Homepage: fetches products and stacks the sections
  products/[handle]/page.js One page per product
  shop/page.js              Shop: cards with badges, bundle picker, quick add-to-cart
  contact/page.js           Contact page with the premium form
  reviews/page.js           All reviews
  our-shilajit/page.js      What sets the resin apart + "what to look for" comparison
  lab-results/page.js       Batch lookup (EXAMPLE batches in components/BatchLookup.jsx)
  how-to-use/page.js        Resin / gummies / drops tabs + notes
  faq/page.js               Full FAQ with topic filter
  our-story/page.js         Scroll-lit manifesto + Himalayas → Denmark route
  certificates/page.js      One card per seal (add certificate PDF links)
  distributors/page.js      Partner application form
  rewards/page.js           "Summit Rewards" concept: tiers and ways to earn
  account/login, register   Customer login and sign-up (Shopify customer API)
  policies/[slug]/page.js   Privacy, terms, shipping, returns (from Shopify admin)
  blog/page.js              Journal listing with category filter
  blog/[slug]/page.js       Article page (reading-progress ring, related articles)
  globals.css               All styles, mobile-first. Colours, radius and fonts are at the top (:root)
components/
  Header.jsx                Floating pill header + full-screen mobile menu
  Hero.jsx                  Rounded maroon stage, centred floating product, gold line-art
  QuickLinks.jsx            Pill shortcuts (swipe sideways on phones)
  Collection.jsx            Product cards: swipe carousel on phones, grid on desktop
  Spotlight.jsx             Gummies feature with ingredients
  Story.jsx                 Generated mountain range with parallax + gold line
  Footer.jsx                Himalayan ridge top edge + gold mountain divider
  Reviews.jsx               Reviews marquee (hover or tap to pause) + link to /reviews
  Harvest.jsx               "Harvested above 5,000 m": contour mountain + altitude counter
  Process.jsx               Scroll-driven story: harvest → dissolve → filter → 60 days sun-drying → lab → pack
  Certifications.jsx        GMP, ISO 22000, ISO 9001, heavy metals and 60-day guarantee seals
  ShopCard.jsx, ContactForm.jsx, PageHero.jsx, ReviewCard.jsx
  Steps.jsx, Faq.jsx, Newsletter.jsx
  CartDrawer.jsx            Slide-out cart
  Reveal.jsx                Wrap a section, add data-reveal to animate on scroll
  SmoothScroll.jsx          Lenis smooth scrolling + gold progress bar
lib/
  shopify.js                Storefront API client (products)
  cart.js                   Cart (create, add, remove) via Storefront API
  products.js               Demo products used until Shopify is connected
  gsap.js                   GSAP setup
  mountains.js              Generates every mountain ridge on the site
  reviews.js                Review data (currently SAMPLE placeholders)
  site.js                   Menus and footer links (edit navigation here)
  policies.js               Policy TEMPLATES shown until Shopify policies exist
  posts.js                  Journal articles used until Shopify's blog is connected
public/images/              Logo, product photos and transparent cut-outs (cut-*.webp)
```

## Animation cheat sheet

- **Fade a block up on scroll:** inside a `<Reveal>` section, add `data-reveal` to an element.
- **Stagger children:** `data-reveal="stagger"`.
- **Headline slides up line by line:** wrap each line as `<span className="line"><span>Text</span></span>` and add `data-reveal="lines"` to the heading.
- **Draw the gold rule:** `data-reveal="rule"`.
- Everything respects the visitor's "reduce motion" setting.

## Updating the live site

GitHub → Vercel is connected, so publishing an update is one command:

```bash
npm run ship -- "Describe what changed"
```

This checks the site builds, commits your changes, and pushes to GitHub.
Vercel picks up every push to `main` and deploys it to the live site within
a minute or two. Push to any other branch and Vercel gives you a separate
preview link to check before merging into `main`.

## Deploy

1. Push this folder to a GitHub repository.
2. Import it on [Vercel](https://vercel.com) and add the three variables from `.env.local` in the project settings.
3. Point your domain to Vercel. A shop is commercial use, so plan for Vercel's paid Pro plan.

`npm run export` makes a fully static copy in `out/` if you ever want to host it elsewhere.

## Before launch

- **Prices:** `lib/products.js` has placeholder prices for the design; real prices come from Shopify.
- **Lab results:** replace the example batches in `components/BatchLookup.jsx` with real batch numbers and PDF links.
- **Certificates:** add PDF links in `app/certificates/page.js`, and remove any certificate you do not hold.
- **Rewards:** the Summit Rewards page is a concept. Set your own numbers and run it with a Shopify loyalty app.
- **Policies:** write your policies in Shopify admin → Settings → Policies (checked by a legal adviser); they replace the templates automatically.
- **Accounts:** enable customer accounts in Shopify and give the Storefront token customer read/write access.

- **Reviews:** `lib/reviews.js` holds sample placeholders, and every card shows a "Sample" label. Replace them with real reviews (Judge.me works with headless Shopify). Never publish invented reviews as genuine.
- **Certifications:** only show seals for certificates you actually hold, and link each certificate. Remove any you don't have from `components/Certifications.jsx`.
- **Contact form:** connect it to a form service (Formspree, Resend or Shopify Forms) in `components/ContactForm.jsx`.
- **Harvest altitude:** confirm the 5,000 m figure with your supplier's documentation.

- Replace the demo product text with your real descriptions, ingredients and directions.
- Publish lab reports (COA) per batch and link them from each product page.
- Connect the newsletter form to Klaviyo or Shopify (see `components/Newsletter.jsx`).
- Add pages for About, Contact, Lab results and your legal policies.
- Check your labels and website copy against Danish/EU food supplement rules (Fødevarestyrelsen). Shilajit may also need a novel food check in the EU.
