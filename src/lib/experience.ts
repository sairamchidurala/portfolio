const CAREER_START_YEAR = 2022;
const CAREER_START_MONTH = 9; // October (0-indexed)

/** Returns career tenure from October 2022 as years, then years.months (for example, 4 or 4.1). */
export function getCareerDuration(asOf = new Date()): string {
  const startMonth = CAREER_START_YEAR * 12 + CAREER_START_MONTH;
  const currentMonth = asOf.getFullYear() * 12 + asOf.getMonth();
  const elapsedMonths = Math.max(0, currentMonth - startMonth);
  const years = Math.floor(elapsedMonths / 12);
  const months = elapsedMonths % 12;
  return months === 0 ? `${years}` : `${years}.${months}`;
}
