import React from 'react';
import { HabitYearData } from '../../util/types';
import { HabitYear } from '../../components/HabitYear';

const data: HabitYearData = {
  year: 2022,
  months: [
    {
      month: 11,
      habits: [
        {
          name: 'Habit 1',
          values: '++--..00',
        },
        {
          name: 'Habit 2',
          values: '++--..00',
        },
        {
          name: 'Habit 3',
          values: '++--..00',
        },
        {
          name: 'Habit 4',
          values: '++--..00',
        },
        {
          name: 'Habit 5',
          values: '++--..00',
        },
      ],
    },
    {
      month: 12,
      habits: [
        {
          name: 'Habit 1',
          values: '++--..00',
        },
        {
          name: 'Habit 2',
          values: '++--..00',
        },
        {
          name: 'Habit 3',
          values: '++--..00',
        },
        {
          name: 'Habit 4',
          values: '++--..00',
        },
        {
          name: 'Habit 5',
          values: '++--..00',
        },
      ],
    },
  ],
};

export default function Habit2022(): React.ReactElement {
  return (
    <div>
      <HabitYear data={data} />
    </div>
  );
}
