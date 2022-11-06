import React from 'react';
import { HabitData } from '../util/types';
import { DateTime } from 'luxon';

export interface HabitHeaderProps {
  readonly row: number;
  readonly values: readonly string[];
}

export function HabitHeader({
  row,
  values,
}: HabitHeaderProps): React.ReactElement {
  return (
    <>
      {values.map((v, i) => (
        <div
          key={i}
          className={i > 0 ? 'habit-cell' : ''}
          style={{ gridRowStart: row, gridColumnStart: i + 1 }}
        >
          {v}
        </div>
      ))}
    </>
  );
}
