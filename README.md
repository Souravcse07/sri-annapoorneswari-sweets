# Sri Annapoorneswri Sweets — Website

## Project Structure

```
sri-annapoorneswri-sweets/
├── index.html       ← Main website file
├── style.css        ← All styles
├── script.js        ← Interactions & animations
├── vercel.json      ← Vercel deployment config
├── public/
│   └── logo.png    ← Your shop logo
└── README.md
```

---

## Step 1 — Open in VS Code

1. Unzip the project folder
2. Open **VS Code**
3. Go to **File → Open Folder**
4. Select the `sri-annapoorneswri-sweets` folder
5. Install the **Live Server** extension (search in Extensions tab)
6. Right-click `index.html` → **Open with Live Server**
7. Your website opens in the browser at `http://127.0.0.1:5500`

---

## Step 2 — Deploy on Vercel (Free)

### Option A — Drag & Drop (Easiest, no account needed)
1. Go to [vercel.com](https://vercel.com)
2. Sign up / log in (free)
3. Click **Add New → Project**
4. Drag and drop your entire project folder
5. Click **Deploy**
6. Your site is live at `https://your-project.vercel.app` ✅

### Option B — GitHub + Vercel (Best for future updates)
1. Create a free account at [github.com](https://github.com)
2. Create a new repository called `sri-annapoorneswri-sweets`
3. Upload all your project files there
4. Go to [vercel.com](https://vercel.com) → **Add New → Project**
5. Connect your GitHub account and select the repository
6. Click **Deploy**
7. Every time you update files on GitHub, Vercel auto-redeploys ✅

---

## Customise Before Deploying

Open these files in VS Code and update:

| What to change | File | What to look for |
|---|---|---|
| Phone number | `index.html` | `+91 98765 43210` |
| Address | `index.html` | `123 Sweet Lane, Basavanagudi` |
| Email | `index.html` | `hello@sriannapoorneswri.com` |
| WhatsApp number | `index.html` | `wa.me/919876543210` |
| Founded year | `index.html` | `EST. 2000` |
| Google Maps | `index.html` | Replace `.map-box` div with iframe |
| Social links | `index.html` | Footer `<a href="#">` links |

---

## Add Google Maps

Replace the map placeholder in `index.html`:
```html
<!-- Find this line: -->
<div class="map-box"><span>GOOGLE MAPS EMBED</span></div>

<!-- Replace with your actual embed from Google Maps: -->
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_MAP_ID"
  width="100%" height="150" style="border:0;"
  allowfullscreen="" loading="lazy">
</iframe>
```

To get your Maps embed:
1. Go to [maps.google.com](https://maps.google.com)
2. Search your shop address
3. Click **Share → Embed a map**
4. Copy the `<iframe>` code

---

## Need Help?
Contact your web developer with this folder and these instructions.
