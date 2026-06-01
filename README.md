# משה אדרי - אתר ייעוץ משכנתאות

אתר high-conversion מקצועי עבור משה אדרי - יועץ משכנתאות, בנוי עם הסטנדרטים המתקדמים ביותר בתעשייה.

## ארכיטקטורה ו-Tech Stack

### Frontend
- **Next.js 16.2.6** - App Router, Partial Prerendering (PPR), Server Actions, React Compiler
- **React 19** - הגרסה החדשה ביותר
- **TypeScript 5.7** - בטיחות טיפוסים מלאה
- **Tailwind CSS 4.0** - עיצוב מודרני וביצועים גבוהים
- **Shadcn UI** - רכיבים נגישים ומעוצבים
- **Framer Motion** - אנימציות בסיסיות
- **GSAP 3** - אנימציות פרימיום, ScrollTrigger, ו-Magnetic effects

### CMS
- **Sanity Studio v3** - ב-`studio-moshe-edri/`
  - Project ID: `480qx32k`
  - Organization ID: `oIJwNjTzZ`
  - Dataset: `production`
- **Page Builder Schema** - בלוקים דינמיים שניתן לסדר מחדש מ-Sanity
- **Visual Editing & Live Preview** - דרך next-sanity

### תכונות
- **RTL מלא** - תמיכה בעברית עם dir="rtl"
- **Google Sans + Noto Sans Hebrew** - טיפוגרפיה פרימיום
- **Glassmorphism** - אפקטי זכוכית להדר
- **Multi-Step Quiz** - טופס לידים בסגנון quiz להמרה אופטימלית
- **GSAP Animations** - parallax, magnetic buttons, animated counters, stagger
- **Floating WhatsApp** - כפתור צף עם Pulse Effect

## פלטת צבעים (Financing Wizard)
- **Midnight Navy** `#0a192f` - כהה ומקצועי
- **Liquid Gold** `#D4AF37` - יוקרה והצלחה
- **Emergency Orange** `#FF4D00` - CTAs להמרה מקסימלית

## מבנה הפרויקט

```
moshe-edri/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Layout עם RTL + Google Sans
│   │   ├── page.tsx            # Homepage
│   │   ├── services/           # עמוד שירותים
│   │   ├── about/              # עמוד אודות
│   │   ├── blog/               # בלוג
│   │   ├── contact/            # צור קשר
│   │   ├── actions/            # Server Actions (Leads)
│   │   ├── api/                # API Routes (Sanity webhook)
│   │   └── globals.css         # Styles גלובליים
│   ├── components/
│   │   ├── blocks/             # בלוקים דינמיים (Hero, Services, FAQ...)
│   │   ├── animations/         # GsapProvider + MagneticButton + AnimatedCounter
│   │   ├── ui/                 # Shadcn UI
│   │   ├── Header.tsx          # Sticky header עם glass effect
│   │   ├── Footer.tsx          # Footer מלא
│   │   ├── FloatingWhatsApp.tsx
│   │   ├── MultiStepQuiz.tsx   # Quiz multi-step להמרה
│   │   └── RenderBlocks.tsx    # Renders blocks from Sanity
│   ├── lib/
│   │   ├── utils.ts            # cn, formatCurrency, buildWhatsAppLink
│   │   ├── constants.ts        # SITE_CONFIG, NAV_ITEMS
│   │   └── gsap.ts             # GSAP registration
│   └── sanity/
│       ├── env.ts              # Sanity env vars
│       └── lib/
│           ├── client.ts       # Sanity client
│           ├── live.ts         # Live preview
│           ├── image.ts        # Image URL builder
│           └── queries.ts      # GROQ queries
├── studio-moshe-edri/          # Sanity Studio (separate package)
│   ├── schemas/
│   │   ├── documents/          # page, siteSettings, testimonial, service, faqItem, article
│   │   ├── blocks/             # heroBlock, servicesGridBlock, FAQ, CTA, etc.
│   │   └── objects/            # bankLogo, differentiator, quickFormConfig
│   ├── sanity.config.ts
│   └── sanity.cli.ts
└── package.json
```

## התקנה והפעלה

### 1. אפליקציית Next.js (root)

```bash
npm install
npm run dev
```

האתר ירוץ על http://localhost:3000

### 2. Sanity Studio (תת-תיקייה)

```bash
cd studio-moshe-edri
npm install
npm run dev
```

ה-Studio ירוץ על http://localhost:3333

## משתני סביבה

ראו `.env.example`. למינימום נדרש:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=480qx32k
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=        # ליצור ב-Sanity dashboard
LEAD_WEBHOOK_URL=             # endpoint לקבלת לידים
```

## בלוקים דינמיים זמינים ב-Sanity

1. **Hero Block** - כותרת ראשית + טופס Multi-Step
2. **TrustBar Block** - לוגואי בנקים
3. **Services Grid** - שירותים בכרטיסים
4. **Wizard Edge** - יתרונות "Direct CEO Connections"
5. **Testimonials** - קיר הוכחות
6. **FAQ** - שאלות נפוצות
7. **About** - אודות משה
8. **Who We Help** - קהלי יעד
9. **CTA** - קריאה לפעולה

## פריסה

### Vercel (מומלץ)
```bash
vercel deploy
```

### Sanity Studio
```bash
cd studio-moshe-edri
npm run deploy
```

## SEO

- Next.js 16 Metadata API
- robots.txt
- sitemap.xml  
- Structured Data (FinancialService schema.org)
- מילות מפתח: ייעוץ משכנתאות, איחוד הלוואות, מסורבי משכנתא, מיחזור משכנתא

## פיתוח

האתר עוצב לפי הגישה של "Lead Machine":
- **Voice & Tone:** בולט, ישיר, אמפתי ("אל תהיה פראייר של הבנק", "דלת שנסגרת נפתחת")
- **Multi-Step Lead Flow:** Quiz UX במקום טפסים ארוכים
- **Conversion First:** CTAs בולטים, תגובה מהירה, ייעוץ חינם
