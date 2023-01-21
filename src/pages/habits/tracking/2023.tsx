import React from 'react';
import { HabitYearData } from '../../../types/types';
import { HabitYear } from '../../../components/HabitYear';
import { Layout } from '../../../components/Layout';

const data: HabitYearData = {
  year: 2023,
  months: [
    {
      month: 1,
      habits: [
        {
          name: 'Test Habit',
          values: '---------+--+++-----',
        },
        {
          name: 'Get out of Bed by 09:00',
          values: '---+-+--+-++++-+-+--',
        },
        {
          name: 'No Sweets',
          values: '++++++++++++++--++++',
        },
        {
          name: 'No Unhealthy Food',
          values: '++-++++-+-+---++++--',
        },
        {
          name: 'Go to Gym (M/W/F)',
          values: '///+.+..+.+.+..+.+.0',
        },
        {
          name: 'Running 3km (T/T/S)',
          values: '..+.+.-+.+.+.000+.-,',
        },
        {
          name: 'Running 5km (T/T/S)',
          values: '..+.-,-+.+.+.000+.-,',
        },
        {
          name: 'Running - Before 10:00',
          values: ',,-,-,-+.-,-,000-,-,',
        },
        {
          name: 'Stretch (T/T/S)',
          values: '..+.+.-+.+.+.000+.-,',
        },
        {
          name: 'Stretch - Before 10:30',
          values: ',,-,-,-+.-,+.000-,-,',
        },
        {
          name: 'Neck Exercise (S)',
          values: ',+......-+.....-,,,,',
        },
        {
          name: 'Neck Exercise - Before 11:00',
          values: ',-,,,,,,--,,,,,-,,,,',
        },
        {
          name: 'Go to Latina Dance Class MS',
          values: '/////////////////+..',
        },
        {
          name: 'Go to Latina Dance Class',
          values: '//////////+......+..',
        },
        {
          name: 'Get to Latina Dance Class on Time',
          values: '//////////-,,,,,,-,,',
        },
        {
          name: 'Go to Gloria Dance Class',
          values: '//////////+......+..',
        },
        {
          name: 'Write Down Journal Same Day Or Next Morning',
          values: '-+-+--+-++--+-+-+--+',
        },
      ],
    },
  ],
};

export default function Habit2023(): React.ReactElement {
  return (
    <Layout>
      <HabitYear data={data} />
    </Layout>
  );
}