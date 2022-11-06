import React from 'react';
import { classNames } from '../util/util';

export interface HabitHeaderData {
  readonly text: string;
  readonly color?: string;
}

export interface HabitHeaderProps {
  readonly row: number;
  readonly values: readonly HabitHeaderData[];
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
          className={classNames(
            i > 0 ? 'habit-cell' : undefined,
            v.color,
            'inline-flex',
            'justify-center',
            'items-center'
          )}
          style={{ gridRowStart: row, gridColumnStart: i + 1 }}
        >
          {v.text}
        </div>
      ))}
    </>
  );
}
