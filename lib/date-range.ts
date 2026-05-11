/**
 * Inclusive date-only bounds (YYYY-MM-DD), WORC model.
 * Both `from` and `to` are calendar days included in the range.
 */
export type InclusiveDateRange = {
  from: string
  to: string
}

/**
 * Intersection of two inclusive date ranges.
 * Generic: use for any row validity vs any bounding period (e.g. salary period).
 *
 * @returns Overlap `{ from, to }`, or `null` if ranges do not overlap.
 */
export function intersectInclusiveDateRanges(
  aFrom: string,
  aTo: string,
  bFrom: string,
  bTo: string,
): InclusiveDateRange | null {
  const effectiveFrom = aFrom > bFrom ? aFrom : bFrom
  const effectiveTo = aTo < bTo ? aTo : bTo
  if (effectiveFrom > effectiveTo) return null
  return { from: effectiveFrom, to: effectiveTo }
}

/**
 * Overlap between a row’s inclusive validity and the salary period of the active payroll run.
 * Pass `salaryPeriodFrom` / `salaryPeriodTo` from the current `payroll_run` (or equivalent).
 *
 * @example
 * // Row 2026-01-01–2026-04-16, period 2026-04-01–2026-04-30 → 2026-04-01–2026-04-16
 * effectiveDateRangeInSalaryPeriod('2026-01-01', '2026-04-16', '2026-04-01', '2026-04-30')
 */
export function effectiveDateRangeInSalaryPeriod(
  rowFrom: string,
  rowTo: string,
  salaryPeriodFrom: string,
  salaryPeriodTo: string,
): InclusiveDateRange | null {
  return intersectInclusiveDateRanges(
    rowFrom,
    rowTo,
    salaryPeriodFrom,
    salaryPeriodTo,
  )
}

/**
 * For formula/runtime use when salary period comes from context: returns a function
 * `EffectiveDateRangeInSalaryPeriod(row_from, row_to)` with period already bound.
 */
export function bindEffectiveDateRangeInSalaryPeriod(
  salaryPeriod: InclusiveDateRange,
): (rowFrom: string, rowTo: string) => InclusiveDateRange | null {
  return (rowFrom, rowTo) =>
    effectiveDateRangeInSalaryPeriod(
      rowFrom,
      rowTo,
      salaryPeriod.from,
      salaryPeriod.to,
    )
}

/** Parse YYYY-MM-DD as UTC midnight; used only for calendar-day arithmetic. */
function utcMidnightMs(isoDate: string): number {
  const parts = isoDate.split('-').map((p) => parseInt(p, 10))
  if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) {
    throw new TypeError(`Expected YYYY-MM-DD, got: ${isoDate}`)
  }
  const [y, m, d] = parts
  return Date.UTC(y, m - 1, d)
}

/**
 * Number of calendar days from `from` through `to`, inclusive.
 *
 * @example calendarDaysInclusive('2026-04-01', '2026-04-16') === 16
 */
export function calendarDaysInclusive(from: string, to: string): number {
  const start = utcMidnightMs(from)
  const end = utcMidnightMs(to)
  if (start > end) {
    throw new RangeError(`from (${from}) must be <= to (${to})`)
  }
  const dayMs = 86_400_000
  return (end - start) / dayMs + 1
}
