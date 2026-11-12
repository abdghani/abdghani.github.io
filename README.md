# abdghani.github.io

Personal portfolio of **Abdullah Ghani** — senior backend engineer building production AI systems.

🔗 **Live:** https://abdghani.github.io/

A single-page, dependency-free portfolio (HTML + CSS + vanilla JS) showcasing
ventures, senior engineering roles, selected work, and open-source projects.

## Structure

```
index.html               # the whole page (semantic sections)
assets/css/portfolio.css # design system + layout
assets/js/portfolio.js   # nav, scroll-reveal, counters, project filter
images/                  # project screenshots + profile.jpeg
resume/resume.html       # ATS-friendly resume source (single column, plain text)
resume/build.sh          # rebuilds Abdullah_Ghani_Resume.pdf via headless Chrome
Abdullah_Ghani_Resume.pdf # the downloadable resume linked from the site
```

## Updating the resume

Edit `resume/resume.html`, then run `./resume/build.sh` and commit the regenerated PDF.

## Local preview

Any static server works, e.g.:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

No build step — edit and push; GitHub Pages serves `index.html` directly.
