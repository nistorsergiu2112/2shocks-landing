// Significant editorial revisions only; do not replace these dates on each build.
export const editorialDates = {
  home: "2026-10-26",
  guideIndex: "2026-10-26",
  policies: "2026-10-20",
  websitePrivacy: "2026-10-26",
} as const;

export function formatEditorialDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
