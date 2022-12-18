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
          values: '//////++-+-+----------++-----+',
        },
        {
          name: 'Get out of Bed by 08:00',
          values: '///////////////////////////+-+',
        },
        {
          name: 'No Sweets',
          values: '///////////++-++++++-+++++++++',
        },
        {
          name: 'No Unhealthy Food',
          values: '///////////++-+++-++++++++-+++',
        },
        {
          name: 'Go to Gym (M/W/F)',
          values: '//////+.+.+..+.+.-,,-,+.+..+.+',
        },
        {
          name: 'Running 3km (T/T/S)',
          values: '////+..+.+.+..-,-,-,,-,-,-+.-,',
        },
        {
          name: 'Running 5km (T/T/S)',
          values: '////+..+.+.+..-,-,-,,-,-,-+.-,',
        },
        {
          name: 'Running - Before 09:00',
          values: '///////+.-,-,,-,-,-,,-,-,-,,-,',
        },
        {
          name: 'Stretch (T/T/S)',
          values: '///////+.+.+..-,-,-,,-,-,-+.-,',
        },
        {
          name: 'Stretch - Before 09:30',
          values: '///////-,-,-,,-,-,-,,-,-,-,,-,',
        },
        {
          name: 'Neck Exercise (S)',
          values: '///////+.....,,,,,-,,,,,,-,+..',
        },
        {
          name: 'Neck Exercise - Before 10:00',
          values: '///////-,,,,,,,,,,-,,,,,,-,,,,',
        },
        {
          name: 'Go to Latina Dance Class',
          values: '//////+......+......+......0==',
        },
        {
          name: 'Get to Latina Dance Class on Time',
          values: '//////-,,,,,,-,,,,,,-,,,,,,0==',
        },
        {
          name: 'Go to Gloria Dance Class 1',
          values: '////////+......+......+......+',
        },
        {
          name: 'Get to Gloria Dance Class 1 on Time',
          values: '////////-,,,,,,-,,,,,,-,,,,,,-',
        },
        {
          name: 'Go to Gloria Dance Class 2',
          values: '////////+......+......+......+',
        },
        {
          name: 'Get to Gloria Dance Class 2 on Time',
          values: '////////+......+......+......+',
        },
        {
          name: 'Write Down Journal Same Day Or Next Morning',
          values: '//////+++++++++++-+++++-+-++--',
        },
      ],
    },
    {
      month: 12,
      habits: [
        {
          name: 'Test Habit',
          values: '-++++-----+------',
        },
        {
          name: 'Get out of Bed by 08:00',
          values: '-+--+-+----+-+-+-',
        },
        {
          name: 'No Sweets',
          values: '++++++++--+--+-++',
        },
        {
          name: 'No Unhealthy Food',
          values: '+---+--+++-++++--',
        },
        {
          name: 'Go to Gym (M/W/F)',
          values: '.+..+.+.+..+.+.+.',
        },
        {
          name: 'Running 3km (T/T/S)',
          values: '-,-,,-,-+-,,-,-,-',
        },
        {
          name: 'Running 5km (T/T/S)',
          values: '-,-,,-,-+-,,-,-,-',
        },
        {
          name: 'Running - Before 09:00',
          values: '-,-,,-,-,-,,-,-,-',
        },
        {
          name: 'Stretch (T/T/S)',
          values: '-,-,,-,-+-,,-,-,-',
        },
        {
          name: 'Stretch - Before 09:30',
          values: '-,-,,-,-,-,,-,-,-',
        },
        {
          name: 'Neck Exercise (S)',
          values: '...-+......-,,,,,',
        },
        {
          name: 'Neck Exercise - Before 10:00',
          values: ',,,-,,,,,,,-,,,,,',
        },
        {
          name: 'Go to Latina Dance Class',
          values: '====+......+.....',
        },
        {
          name: 'Get to Latina Dance Class on Time',
          values: '====-,,,,,,-,,,,,',
        },
        {
          name: 'Go to Gloria Dance Class 1',
          values: '....../////////////////////////',
        },
        {
          name: 'Get to Gloria Dance Class 1 on Time',
          values: ',,,,,,/////////////////////////',
        },
        {
          name: 'Go to Gloria Dance Class 2',
          values: '....../////////////////////////',
        },
        {
          name: 'Get to Gloria Dance Class 2 on Time',
          values: '....../////////////////////////',
        },
        {
          name: 'Get to Gloria Winter Intensive',
          values: '/////+.+.....++..',
        },
        {
          name: 'Get to Gloria Winter Intensive on Time',
          values: '/////-,-,,,,,--,,',
        },
        {
          name: 'Write Down Journal Same Day Or Next Morning',
          values: '+-++-+-+-+-++-+++',
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
