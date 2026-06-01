# Moshe Adri - Sanity Studio

Sanity Studio עבור אתר משה אדרי - יועץ משכנתאות.

## Project Details

- **Project ID:** 480qx32k
- **Dataset:** production
- **Organization ID:** oIJwNjTzZ

## הפעלה

```bash
npm install
npm run dev
```

ה-Studio ירוץ על http://localhost:3333

## אכלוס תוכן התחלתי (Seed)

ה-Studio מתחיל ריק לחלוטין. להוסיף את כל התוכן ההתחלתי (עמוד הבית עם כל הבלוקים, שירותים, המלצות, FAQ) בלחיצה אחת:

### שלב 1 - צרו API Token

1. פתחו: https://www.sanity.io/manage/project/480qx32k/api
2. גללו ל-**Tokens** → **Add API Token**
3. שם: `Seed Token`
4. הרשאות: **Editor** (חשוב - לא Viewer)
5. העתיקו את ה-token

### שלב 2 - הגדירו את ה-Token

ערכו את `.env.local` בתיקייה הזו:

```bash
SANITY_WRITE_TOKEN=sk...
```

### שלב 3 - הריצו את הסקריפט

```bash
npm install
npm run seed
```

הסקריפט יצור:
- ⚙️ **הגדרות אתר** (טלפון, וואטסאפ וכו')
- 🏠 **עמוד הבית** עם 9 בלוקים מוכנים
- 📦 **6 שירותים** (מיחזור, מסורבים, איחוד הלוואות וכו')
- 💬 **6 המלצות** (חלקן וידאו/וואטסאפ)
- ❓ **6 שאלות נפוצות**

לאחר ההרצה - רעננו את ה-Studio ותראו את כל המסמכים.

## Idempotent

הסקריפט משתמש ב-`createOrReplace` כך שתוכלו להריץ אותו שוב ושוב - הוא יעדכן את אותם מסמכים במקום ליצור כפילויות.

## פריסה

```bash
npm run deploy
```
