import React from 'react';
import { HabitYearData } from '../../types/types';
import { HabitYear } from '../../components/HabitYear';
import { Layout } from '../../components/Layout';

const data: HabitYearData = {
  year: 2022,
  months: [
    {
      month: 11,
      habits: [
        {
          name: 'Go to Gym (M/W/F)',
          values: '//////',
        },
        {
          name: 'Home Exercise - Func (T/T/S)',
          values: '//////',
        },
        {
          name: 'Home Exercise - Func - Before 09:00',
          values: '//////',
        },
        {
          name: 'Running 3km (T/T/S)',
          values: '////+/',
        },
        {
          name: 'Running 5km (arb.)',
          values: '////+/',
        },
        {
          name: 'Running - Before 10:00',
          values: '//////',
        },
        {
          name: 'Neck Exercise (T/T/S)',
          values: '//////',
        },
        {
          name: 'Neck Exercise - Before 11:00',
          values: '//////',
        },
      ],
    },
  ],
};

export default function Habit2022(): React.ReactElement {
  return (
    <Layout>
      <HabitYear data={data} />
    </Layout>
  );
}
