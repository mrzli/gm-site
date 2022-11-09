import React from 'react';
import { HabitYearData } from '../../../types/types';
import { HabitYear } from '../../../components/HabitYear';
import { Layout } from '../../../components/Layout';

const data: HabitYearData = {
  year: 2022,
  months: [
    {
      month: 11,
      habits: [
        {
          name: 'Test Habit',
          values: '//////++.',
        },
        {
          name: 'Go to Gym (M/W/F)',
          values: '//////+.+',
        },
        {
          name: 'Home Exercise - Func (T/T/S)',
          values: '///////+.',
        },
        {
          name: 'Home Exercise - Func - Before 09:00',
          values: '///////+.',
        },
        {
          name: 'Running 3km (T/T/S)',
          values: '////+..+.',
        },
        {
          name: 'Running 5km (T/T/S)',
          values: '////+..+.',
        },
        {
          name: 'Running - Before 10:00',
          values: '///////+.',
        },
        {
          name: 'Stretch (T/T/S)',
          values: '///////+.',
        },
        {
          name: 'Stretch - Before 10:00',
          values: '///////-,',
        },
        {
          name: 'Neck Exercise (T/T/S)',
          values: '///////+.',
        },
        {
          name: 'Neck Exercise - Before 11:00',
          values: '///////-,',
        },
        {
          name: 'Go to Latina Dance Class',
          values: '//////+..',
        },
        {
          name: 'Get to Latina Dance Class on Time',
          values: '//////-,',
        },
        {
          name: 'Go to Gloria Dance Class 1',
          values: '////////',
        },
        {
          name: 'Get to Gloria Dance Class 1 on Time',
          values: '////////',
        },
        {
          name: 'Go to Gloria Dance Class 2',
          values: '////////',
        },
        {
          name: 'Get to Gloria Dance Class 2 on Time',
          values: '////////',
        },
        {
          name: 'Write Down Journal Same Day',
          values: '//////++',
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
