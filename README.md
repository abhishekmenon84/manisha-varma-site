# Elect Manisha Varma – Campaign Website

Jekyll campaign website for **Manisha Varma**, running for Fredericton City Council – **Ward 7, Southwood Park Lincoln**.

---

## 🚀 Quick Start

### Prerequisites
- Ruby 3.0+
- Bundler (`gem install bundler`)

### Install & Run

```bash
cd manisha-varma-site
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` in your browser.

---

## 📸 Adding Manisha's Photo

1. Add the photo file to `assets/images/manisha-varma.jpg`
2. In `index.html`, replace the `<div class="hero-photo-frame">` placeholder with:

```html
<div class="hero-photo-frame">
  <img src="/assets/images/manisha-varma.jpg" alt="Manisha Varma" style="width:100%;height:100%;object-fit:cover;object-position:top;" />
  <div class="canadian-flag">🇨🇦</div>
</div>
```

Do the same for the `about-photo-frame` section.

---

## 📬 Setting Up the Contact Form

The form uses **[Formspree](https://formspree.io)** (free tier: 50 submissions/month).

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — you'll get a form ID like `xabcdefg`
3. Open `_config.yml` and add:
   ```yaml
   formspree_id: xabcdefg
   ```
4. In `index.html`, update the form action:
   ```html
   <form ... action="https://formspree.io/f/xabcdefg" ...>
   ```

Without Formspree, the form will automatically open the user's email client as a fallback.

---

## 🌐 Deployment Options

### GitHub Pages (Free)
```bash
# Push to a GitHub repo, then in repo Settings → Pages
# Set source to "main" branch / root
```

### Netlify (Free)
1. Connect your GitHub repo at netlify.com
2. Build command: `jekyll build`
3. Publish directory: `_site`

---

## 🎨 Customization

- **Colors**: Edit CSS variables at the top of `assets/css/main.css`
- **Content**: Edit `index.html` directly
- **Contact info**: Update `_config.yml`

---

## 📁 File Structure

```
manisha-varma-site/
├── _config.yml          # Site configuration
├── _layouts/
│   └── default.html     # Main HTML layout
├── _includes/
│   ├── nav.html         # Navigation bar
│   └── footer.html      # Footer
├── assets/
│   ├── css/main.css     # All styles
│   ├── js/main.js       # Interactions & form
│   └── images/          # Add photos here
├── index.html           # Main page content
├── Gemfile
└── README.md
```

---

*Ward 7 – Southwood Park Lincoln · Dedicated · Inclusive · Trusted*
