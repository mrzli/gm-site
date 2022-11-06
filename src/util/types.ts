export interface HabitYearData {
  readonly year: number;
  readonly months: readonly HabitMonthData[];
}

export interface HabitMonthData {
  readonly month: number;
  readonly habits: readonly HabitData[];
}

export interface HabitData {
  readonly name: string;
  readonly values: string;
}
