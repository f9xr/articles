# F9XR Articles

Technical insights, architecture notes, and digital growth strategies from the [F9XR Team](https://f9xr.github.io).

Built with [Jekyll](https://jekyllrb.com/), hosted on [GitHub Pages](https://pages.github.com/), and fully open source.

## About

F9XR Articles is the blog platform for [F9XR Team](https://f9xr.github.io) — a digital architecture agency specializing in high-performance web ecosystems, AI integration, local SEO, and technical maintenance.

## Tech Stack

- **Static Site Generator:** Jekyll
- **Theme:** Minima (customized)
- **Hosting:** GitHub Pages
- **Syntax Highlighting:** highlight.js (GitHub Dark theme)
- **Fonts:** Inter (Google Fonts)
- **Plugins:** jekyll-feed, jekyll-sitemap, jekyll-seo-tag

## Project Structure

```
articles/
├── _config.yml            # Site configuration
├── _includes/             # Reusable components
│   ├── head.html          # HTML head with SEO meta tags
│   ├── header.html        # Site navigation
│   ├── footer.html        # Site footer with social links
│   ├── navlinks.html      # Previous/next post navigation
│   └── sharelinks.html    # Social share buttons
├── _layouts/              # Page layouts
│   ├── default.html       # Base layout
│   └── post.html          # Blog post layout with JSON-LD
├── _posts/                # Blog articles (Markdown)
├── css/
│   └── override.css       # Custom dark theme styles
├── js/
│   └── highlightjs/       # Syntax highlighting assets
├── index.md               # Blog landing page
├── archive.md             # Article archive
├── robots.txt             # Search engine directives
├── feed.xml / feed.json   # RSS/JSON feeds
└── llms.txt               # LLM context file
```

## Features

- **Dark theme** — Custom dark UI with brand-consistent colors and gradients
- **SEO-optimized** — Open Graph, Twitter Cards, JSON-LD (BlogPosting, FAQ, BreadcrumbList), canonical URLs, XML sitemap
- **Rich reading experience** — Reading progress bar, back-to-top button, smooth animations, responsive layouts
- **Syntax highlighting** — highlight.js with GitHub Dark theme, gradient accent bar on code blocks
- **Share buttons** — Facebook, LinkedIn, Instagram, YouTube, Email
- **AI Summary** — Per-post AI summary box with links to ChatGPT, Gemini, Claude, and Copilot
- **Author profiles** — Author badges, reading time estimates, tag filtering
- **Comments** — GitHub issue-based commenting via utterances
- **FAQ section** — Optional per-post structured FAQ with JSON-LD
- **Accessibility** — Focus rings, skip-to-content link, semantic HTML

## Post Features

Each post can include:
- Hero image with 3D hover effect
- Auto-generated Table of Contents (from `<h2>` headings)
- AI summary description box
- FAQ section (via `faq` front-matter)
- Previous/next post navigation
- JSON-LD structured data

## Getting Started

### Prerequisites

- [Ruby](https://www.ruby-lang.org/) (latest stable)
- [Jekyll](https://jekyllrb.com/) and [Bundler](https://bundler.io/)

### Local Development

```bash
# Install Jekyll and Bundler
gem install jekyll bundler

# Start the development server
jekyll serve

# With live reload
jekyll serve --livereload
```

The site will be available at `http://localhost:4000`.

## Contributing

Contributions are welcome! This site is open source.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-post`)
3. Add or edit posts in `_posts/`
4. Commit your changes (`git commit -m 'Add amazing post'`)
5. Push to the branch (`git push origin feature/amazing-post`)
6. Open a Pull Request

## Related

- [F9XR Main Site](https://f9xr.github.io)
- [Source Code](https://github.com/f9xr/articles)
- [Services](https://f9xr.github.io/pages/services.html)
- [Portfolio](https://f9xr.github.io/pages/portfolio.html)

## License

© 2026 F9XR Team. All rights reserved.
