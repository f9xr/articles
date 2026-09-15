# F9XR Articles

Technical insights, architecture notes, and digital growth strategies from the [F9XR Team](https://f9xr.org).

Built with [Jekyll](https://jekyllrb.com/), hosted on [GitHub Pages](https://pages.github.com/), and fully open source.

## About

F9XR Articles is the blog platform for [F9XR Team](https://f9xr.org) â€” a digital architecture agency specializing in high-performance web ecosystems, AI integration, local SEO, and technical maintenance.

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
â”œâ”€â”€ _config.yml            # Site configuration
â”œâ”€â”€ _includes/             # Reusable components
â”‚   â”œâ”€â”€ head.html          # HTML head with SEO meta tags
â”‚   â”œâ”€â”€ header.html        # Site navigation
â”‚   â”œâ”€â”€ footer.html        # Site footer with social links
â”‚   â”œâ”€â”€ navlinks.html      # Previous/next post navigation
â”‚   â””â”€â”€ sharelinks.html    # Social share buttons
â”œâ”€â”€ _layouts/              # Page layouts
â”‚   â”œâ”€â”€ default.html       # Base layout
â”‚   â””â”€â”€ post.html          # Blog post layout with JSON-LD
â”œâ”€â”€ _posts/                # Blog articles (Markdown)
â”œâ”€â”€ css/
â”‚   â””â”€â”€ override.css       # Custom dark theme styles
â”œâ”€â”€ js/
â”‚   â””â”€â”€ highlightjs/       # Syntax highlighting assets
â”œâ”€â”€ index.md               # Blog landing page
â”œâ”€â”€ archive.md             # Article archive
â”œâ”€â”€ robots.txt             # Search engine directives
â”œâ”€â”€ feed.xml / feed.json   # RSS/JSON feeds
â””â”€â”€ llms.txt               # LLM context file
```

## Features

- **Dark theme** â€” Custom dark UI with brand-consistent colors and gradients
- **SEO-optimized** â€” Open Graph, Twitter Cards, JSON-LD (BlogPosting, FAQ, BreadcrumbList), canonical URLs, XML sitemap
- **Rich reading experience** â€” Reading progress bar, back-to-top button, smooth animations, responsive layouts
- **Syntax highlighting** â€” highlight.js with GitHub Dark theme, gradient accent bar on code blocks
- **Share buttons** â€” Facebook, LinkedIn, Instagram, YouTube, Email
- **AI Summary** â€” Per-post AI summary box with links to ChatGPT, Gemini, Claude, and Copilot
- **Author profiles** â€” Author badges, reading time estimates, tag filtering
- **Comments** â€” GitHub issue-based commenting via utterances
- **FAQ section** â€” Optional per-post structured FAQ with JSON-LD
- **Accessibility** â€” Focus rings, skip-to-content link, semantic HTML

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

- [F9XR Main Site](https://f9xr.org)
- [Source Code](https://github.com/f9xr/articles)
- [Services](https://f9xr.org/pages/services.html)
- [Portfolio](https://f9xr.org/pages/portfolio.html)

## License

Â© 2026 F9XR Team. All rights reserved.
