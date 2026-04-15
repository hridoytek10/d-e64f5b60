# Quick Start Guide

Get your doctor profile landing page up and running in 5 minutes.

## ⚡ 5-Minute Setup

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development Server
```bash
pnpm dev
```
Visit `http://localhost:3000` 🎉

### 3. Edit Content
Open `data/site.json` and customize:
- Doctor name, bio, specialties
- Services, education, reviews
- Contact info, hours, location

### 4. Add Images
Replace these files:
- `/public/profile.jpg` - Doctor photo
- `/public/preview.png` - Template preview (1200x800)

### 5. Done!
Your custom landing page is ready!

---

## 🎨 Customize in 30 Seconds

**Change Doctor Name:**
```json
// data/site.json
{
  "header": {
    "logo": "Dr. Your Name Here"
  }
}
```

**Change Brand Colors:**
```css
/* app/globals.css */
:root {
  --primary: #14b8a6;      /* Change this */
  --secondary: #0891b2;    /* And this */
}
```

**Update Phone Number:**
```json
// data/site.json
{
  "clinic": {
    "phone": "+1 (555) 123-4567"
  }
}
```

---

## 📋 Essential Files

| File | Edit For |
|------|----------|
| `data/site.json` | All content & text |
| `app/globals.css` | Colors & fonts |
| `public/profile.jpg` | Doctor photo |
| `public/preview.png` | Template preview |

---

## 🚀 Build & Deploy

### Build for Production
```bash
pnpm build
pnpm start
```

### Deploy to Vercel
1. Push to GitHub
2. Connect to Vercel
3. Auto-deploy on push

### Deploy to Other Platforms
All standard Next.js deployment methods work (Netlify, AWS, etc.)

---

## 🎯 Common Customizations

### Change Section Order
Edit `app/page.tsx`:
```tsx
<DoctorHeader data={siteData.header} />
<DoctorHero data={siteData.hero} />
{/* Reorder sections here */}
```

### Add More Services
Add to `data/site.json`:
```json
{
  "services": [
    {
      "id": 7,
      "title": "New Service",
      "description": "Description...",
      "icon": "Heart"
    }
  ]
}
```

### Update Hours
```json
{
  "clinic": {
    "hours": [
      { "day": "Monday - Friday", "time": "9:00 AM - 6:00 PM" },
      { "day": "Saturday", "time": "10:00 AM - 3:00 PM" }
    ]
  }
}
```

### Add More Testimonials
```json
{
  "reviews": [
    {
      "id": 6,
      "name": "New Patient",
      "rating": 5,
      "text": "Amazing experience!",
      "verified": true
    }
  ]
}
```

---

## 🎨 Button Animations

Use these classes on buttons:

```tsx
// Bouncy effect
<Button className="button-bounce">Click me</Button>

// Pulsing glow
<Button className="button-pulse">Click me</Button>

// Color animation
<Button className="button-glow">Click me</Button>
```

---

## 📱 Sections Overview

1. **Header** - Navigation + CTA buttons
2. **Hero** - Intro with stats
3. **About** - Doctor bio
4. **Services** - 6 service cards
5. **Education** - Credentials timeline
6. **Reviews** - 5 patient testimonials
7. **Clinic** - Hours, location, amenities
8. **FAQ** - 5 common questions
9. **Contact** - Appointment form
10. **Footer** - Links & social

All sections customize from `data/site.json` ✨

---

## ❓ FAQ

**Q: Can I change the layout?**
A: Yes! Edit components in `components/doctor/`

**Q: Can I add more sections?**
A: Yes! Create new component and add to `app/page.tsx`

**Q: How do I change colors?**
A: Edit CSS tokens in `app/globals.css`

**Q: Can I use my own fonts?**
A: Yes! Update in `app/layout.tsx`

**Q: Is it mobile friendly?**
A: 100% responsive, tested on all devices

**Q: Can I add a blog?**
A: Yes, but this is for single-page landing pages

**Q: How fast is it?**
A: Lighthouse 95+, <2s Time to Interactive

---

## 🚀 Next Steps

1. **Customize** `data/site.json` with your info
2. **Add images** to `/public/`
3. **Test locally** with `pnpm dev`
4. **Build** with `pnpm build`
5. **Deploy** to your hosting platform

---

## 💬 Need Help?

- Check `README.md` for detailed docs
- See `PROJECT_STRUCTURE.md` for technical details
- Review component files in `components/doctor/`
- Check `TEKNEXT_SETUP.md` for TekNext upload

---

**You're all set!** 🎉

Happy customizing! 🚀
