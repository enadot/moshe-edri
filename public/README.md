# Public Assets

## Logo
- `logo.svg` - לוגו מלא (אייקון + טקסט) להדר
- `logo-mark.svg` - אייקון בלבד למובייל / לפוטר

**להחלפה:** דריסה של הקבצים בלוגו אמיתי. ראה ב-`src/lib/constants.ts` → `SITE_CONFIG.logo` כדי להחליף נתיב.

## Portrait
- `moshe-portrait.svg` - דמות placeholder של משה אדרי

**להחלפה בתמונה אמיתית:**

1. הכינו תמונה של משה אדרי עם רקע שקוף (PNG):
   - מומלץ: 800x1040 פיקסלים, רקע שקוף לחלוטין
   - השתמשו ב-remove.bg, Photoshop, או Figma להסרת רקע
   - שמרו עם דחיסה כ-`moshe.png` או `moshe.webp`

2. הניחו את הקובץ ב-`public/moshe.png`

3. עדכנו את הנתיב ב-`src/lib/constants.ts`:
   ```ts
   export const SITE_CONFIG = {
     // ...
     portrait: "/moshe.png",
   };
   ```

## אופציונלי: דרך Sanity
ניתן גם להעלות תמונה דרך Sanity Studio:
- בלוק Hero → שדה `image` → העלאה
- ה-fallback לקובץ המקומי יקרה אם לא הוגדר בסניטי.
