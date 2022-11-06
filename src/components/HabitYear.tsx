import React from 'react';
import { HabitYearData } from '../util/types';
import { HabitMonth } from './HabitMonth';

export interface HabitYearProps {
  readonly data: HabitYearData;
}

export function HabitYear({ data }: HabitYearProps): React.ReactElement {
  const { year, months } = data;

  return (
    <div>
      {months.map((m, i) => (
        <HabitMonth key={i} year={year} data={m} />
      ))}
    </div>
  );
}
