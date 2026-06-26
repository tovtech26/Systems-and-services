# SSE Executive Redesign

## Goal
Refine the current SSE website into a cleaner executive consultancy presence for prospective clients.

## Direction
Use an annual-report style with restrained typography, disciplined white space, lighter image treatment, and a calmer palette. The site should feel credible, senior, and boardroom-ready rather than dramatic or overly technical.

## Required Changes
- Remove the visible technical grid background from the page.
- Use a compact executive hero with concise positioning, restrained stats, and a premium image frame.
- Replace heavy gallery overlays with clean captions and quieter editorial image cards.
- Keep the extracted project photos and all core company/service/project content.
- Preserve responsive behavior, mobile navigation, and the static test workflow.

## Acceptance Criteria
- The page includes an `executive-design` marker on the body.
- CSS uses the executive palette tokens `--navy`, `--paper`, and `--gold`.
- The old grid background pattern is gone.
- The project gallery still uses at least 8 extracted DOCX images.
- Static and rendered browser checks pass.
