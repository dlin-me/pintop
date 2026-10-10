// Add each new school year here. Keep earlier years and their PDF files available.
const enrolmentDocuments = {
  currentYear: 2027,
  years: {
    2027: {
      terms: '/assets/documents/enrolment-terms-2027.pdf',
      refund: '/assets/documents/refund-policy-2027.pdf',
      form: null,
    },
  },
};

document.querySelectorAll('[data-enrolment-year]').forEach((element) => {
  element.textContent = enrolmentDocuments.currentYear;
});

function documentLink(url, key, text, className) {
  const link = document.createElement('a');
  link.href = url;
  link.className = className;
  link.dataset.i18n = key;
  link.innerHTML = text;
  return link;
}

const currentDocuments = enrolmentDocuments.years[enrolmentDocuments.currentYear];
document.querySelectorAll('[data-enrolment-file]').forEach((element) => {
  const url = currentDocuments[element.dataset.enrolmentFile];
  if (!url) return;
  const open = documentLink(url, 'viewPdf', 'Open PDF <span aria-hidden="true">↗</span>', 'button');
  open.target = '_blank';
  open.rel = 'noopener';
  const download = documentLink(url, 'downloadPdf', 'Download PDF <span aria-hidden="true">↓</span>', 'text-link');
  download.download = '';
  element.classList.add('document-actions');
  element.replaceChildren(...(element.hasAttribute('data-download-only') ? [download] : [open, download]));
});

const archive = document.querySelector('[data-enrolment-archive]');
const previousYears = Object.keys(enrolmentDocuments.years)
  .map(Number)
  .filter((year) => year < enrolmentDocuments.currentYear)
  .sort((a, b) => b - a);

previousYears.forEach((year) => {
  const section = document.createElement('div');
  section.className = 'archive-year';
  const heading = document.createElement('h3');
  heading.textContent = year;
  const links = document.createElement('div');
  links.className = 'document-related';
  [['terms', 'archiveTerms', 'Terms and Conditions of Enrolment (PDF)'], ['refund', 'archiveRefund', 'Refund policy (PDF)']].forEach(([type, key, label]) => {
    const url = enrolmentDocuments.years[year][type];
    if (url) {
      const link = documentLink(url, key, label, 'text-link');
      link.target = '_blank';
      link.rel = 'noopener';
      links.append(link);
    }
  });
  section.append(heading, links);
  archive.querySelector('[data-archive-years]').append(section);
});
if (previousYears.length === 0) {
  const message = document.createElement('p');
  message.className = 'document-status';
  message.dataset.i18n = 'archiveEmpty';
  message.textContent = 'No previous-year versions are available yet.';
  archive.querySelector('[data-archive-years]').append(message);
}
archive.hidden = false;
