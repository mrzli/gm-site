import React, { useMemo } from 'react';
import { HabitData } from '../types/types';

export interface HabitRowProps {
  readonly row: number;
  readonly year: number;
  readonly month: number;
  readonly data: HabitData;
}

export function HabitRow({
  row,
  year,
  month,
  data,
}: HabitRowProps): React.ReactElement {
  const { name, values } = data;

  const colors = useMemo(() => toColors(values), [values]);

  return (
    <>
      <div
        className={'inline-flex justify-start items-center px-2'}
        style={{ gridRowStart: row, gridColumnStart: 1 }}
      >
        {name}
      </div>
      {Array.from({ length: COUNT }).map((_v, i) => (
        <div
          key={i}
          className={`habit-cell inline-flex justify-center items-center ${colors[i]}`}
          style={{ gridRowStart: row, gridColumnStart: i + 2 }}
        />
      ))}
    </>
  );
}

function toColors(values: string): readonly string[] {
  values = values.padEnd(32, VALUE_NOTHING);
  return values.split('').map((v) => VALUE_TO_COLOR.get(v)!);
}

const COUNT = 32;

const VALUE_NOTHING = '/';
const VALUE_SUCCESS = '+';
const VALUE_OFF_DAY_SUCCESS = '.';
const VALUE_FAILURE = '-';
const VALUE_OFF_DAY_FAILURE = ',';
const VALUE_SKIPPED = '0';

const COLOR_NOTHING = 'bg-white';
const COLOR_SUCCESS = 'bg-emerald-400';
const COLOR_OFF_DAY_SUCCESS = 'bg-green-300';
const COLOR_FAILURE = 'bg-red-500';
const COLOR_OFF_DAY_FAILURE = 'bg-red-300';
const COLOR_SKIPPED = 'bg-gray-300';

const VALUE_TO_COLOR: ReadonlyMap<string, string> = new Map<string, string>([
  [VALUE_NOTHING, COLOR_NOTHING],
  [VALUE_SUCCESS, COLOR_SUCCESS],
  [VALUE_OFF_DAY_SUCCESS, COLOR_OFF_DAY_SUCCESS],
  [VALUE_FAILURE, COLOR_FAILURE],
  [VALUE_OFF_DAY_FAILURE, COLOR_OFF_DAY_FAILURE],
  [VALUE_SKIPPED, COLOR_SKIPPED],
]);
