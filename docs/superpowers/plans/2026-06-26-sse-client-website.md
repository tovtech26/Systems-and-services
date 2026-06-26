# SSE Client Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished one-page static website from the SSE company profile for prospective clients.

**Architecture:** Use a static HTML/CSS/JS site because the workspace is blank and the requested surface is a marketing website, not a data app. Keep content in semantic sections, styling in CSS tokens, and small progressive enhancements in JavaScript.

**Tech Stack:** HTML, CSS, vanilla JavaScript, generated raster hero asset.

---

### Task 1: Static Site Skeleton

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `script.js`
- Create: `tests/site-check.mjs`

- [ ] Create a semantic one-page HTML document with sections for hero, proof, about, services, projects, values, and contact.
- [ ] Create CSS with brand tokens, responsive layout, and visual system.
- [ ] Create JavaScript for mobile navigation, active nav state, and reveal animations.
- [ ] Create a Node-based static check script that verifies required sections, content phrases, asset references, and no placeholders.

### Task 2: Visual Asset

**Files:**
- Create: `assets/sse-engineering-hero.png`

- [ ] Generate a modern engineering/infrastructure image suitable for the hero.
- [ ] Place the final image in `assets/`.
- [ ] Reference the asset from `index.html`.

### Task 3: Verification

**Files:**
- Modify: as needed after checks.

- [ ] Run `node tests/site-check.mjs`.
- [ ] Run a local static server.
- [ ] Inspect the page at desktop and mobile widths.
- [ ] Fix any obvious layout, contrast, content, or responsive issues.
