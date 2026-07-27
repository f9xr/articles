# F9XR Articles

Technical insights, architecture notes, and digital growth strategies from the [F9XR Team](https://f9xr.github.io).

Built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

## About

F9XR Articles is the blog platform for [F9XR Team](https://f9xr.github.io) — a digital architecture agency specializing in high-performance web ecosystems, AI integration, local SEO, and technical maintenance.

## Tech Stack

- **Static Site Generator:** Jekyll
- **Theme:** Minima (customized)
- **Hosting:** GitHub Pages
- **Syntax Highlighting:** highlight.js (GitHub Dark theme)
- **Fonts:** Inter (Google Fonts)
- **Plugins:** jekyll-feed, jekyll-sitemap

## Structure

```
articles/
├── _config.yml          # Site configuration
├── _includes/           # Reusable components
│   ├── head.html        # HTML head with SEO meta tags
│   ├── header.html      # Site navigation
│   ├── footer.html      # Site footer with social links
│   ├── navlinks.html    # Previous/next post navigation
│   └── sharelinks.html  # Social share buttons
├── _layouts/            # Page layouts
│   ├── default.html     # Base layout
│   └── post.html        # Blog post layout with JSON-LD
├── _posts/              # Blog articles
├── css/
│   └── override.css     # Dark theme styles
├── js/
│   └── highlightjs/     # Syntax highlighting assets
├── index.md             # Blog landing page
├── archive.md           # Article archive
└── robots.txt           # Search engine directives
```

## SEO Features

- Open Graph and Twitter Card meta tags
- JSON-LD structured data (BlogPosting schema)
- Canonical URLs
- XML sitemap (jekyll-sitemap)
- robots.txt
- Descriptive title and description on every page
- Internal linking between articles and main site

## Local Development

```bash
gem install jekyll bundler
jekyll serve
```

## Related

- [F9XR Main Site](https://f9xr.github.io)
- [Services](https://f9xr.github.io/pages/services.html)
- [Portfolio](https://f9xr.github.io/pages/portfolio.html)
- [Contact](https://f9xr.github.io/pages/contact.html)

## License

© 2026 F9XR Team. All rights reserved.
