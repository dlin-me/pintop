# Enrolment documents

Public pages use fixed URLs: `/enrolment-documents/`, `/enrolment-terms/` and `/refund-policy/`.

Document links live in `assets/js/enrolment.js`. `currentYear` selects the latest published enrolment year shown at the fixed URLs, including when next year's documents are published before the current school year ends. A `null` link displays a coming-soon message. The enrolment form remains pending until supplied.

The original 2027 terms and refund PDFs from the separate `pintop-assets` project are available as links only. Webpages and enrolment posters do not display prices. PDF contents are preserved unchanged.

When updating for a new school year:

1. Add that year's approved PDFs under `assets/documents/`, using filenames containing the year. Do not overwrite previous-year files.
2. Add a new entry to `years` with the `terms`, `refund` and `form` URLs, then update `currentYear`.
3. Keep the previous year's entry and both PDFs. All earlier entries appear automatically under Previous versions on all three document pages.
4. Keep each year's terms and refund policy accessible throughout that school year and until after it ends. Publishing 2028 during 2027 must not remove either 2027 PDF or its links. Nothing expires or gets deleted automatically.
5. Update the fallback year labels and PDF links in all three document HTML pages to match the latest published year, so the fixed URLs also work without JavaScript.
6. Replace both enrolment poster images as needed. The page shows one poster matching the website language. Update the English image links, year, caption and alternative text in `enrolment-documents/index.html`, and the Chinese equivalents in `assets/js/site.js`.

Preview locally with `python3 -m http.server 4174 --bind 127.0.0.1` from the repository root. No deployment is required for preview.
