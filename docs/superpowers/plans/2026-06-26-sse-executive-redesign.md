# SSE Executive Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the current SSE website into a clean executive consultancy design.

**Architecture:** Keep the existing static HTML/CSS/JS structure and assets. Make targeted markup/class updates in `index.html`, restyle through `styles.css`, and preserve the current JavaScript behavior.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node static check, Playwright-rendered QA.

---

### Task 1: Test Executive Design Markers

**Files:**
- Modify: `tests/site-check.mjs`

- [ ] Add assertions for `executive-design`, `executive-hero`, `--navy`, `--paper`, `--gold`, and absence of the old visible grid background.
- [ ] Run `node tests/site-check.mjs`.
- [ ] Confirm it fails before implementation.

### Task 2: Restyle Site

**Files:**
- Modify: `index.html`
- Modify: `styles.css`

- [ ] Add the approved executive markers and simplify hero labels.
- [ ] Replace the old grid-heavy background, large headline sizing, dark gallery overlays, and heavy cards with restrained executive spacing and captions.
- [ ] Keep all services, project gallery images, proof points, values, and contact CTA.

### Task 3: Verify and Publish

**Files:**
- Modify as needed after QA.

- [ ] Run `node tests/site-check.mjs`.
- [ ] Run rendered desktop and mobile QA at `http://localhost:4173`.
- [ ] Commit with `style: executive redesign`.
- [ ] Push `main` to `origin`.
