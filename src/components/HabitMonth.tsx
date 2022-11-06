import React, { useMemo } from 'react';
import { HabitMonthData } from '../util/types';
import { HabitRow } from './HabitRow';
import { DateTime } from 'luxon';
import { classNames } from '../util/util';
import { HabitHeader } from './HabitHeader';

export interface HabitMonthProps {
  readonly year: number;
  readonly data: HabitMonthData;
}

export function HabitMonth({
  year,
  data,
}: HabitMonthProps): React.ReactElement {
  const { month, habits } = data;

  const dateInfo = useMemo(() => getDateInfo(year, month), [year, month]);

  return (
    <div>
      <div>{dateInfo.monthStr}</div>
      <div className={'flex'}>
        <div
          className={classNames(
            'grid',
            '[&>.habit-cell]:min-w-[32px] [&>*]:border-t [&>*]:border-l border-b border-r'
          )}
          style={{
            gridTemplateColumns: 'minmax(200px, 200px) repeat(32, 32px)',
            gridAutoRows: 'minmax(32px, 1fr)',
          }}
        >
          <HabitHeader row={1} values={dateInfo.weekdayHeaders} />
          <HabitHeader row={2} values={dateInfo.dayHeaders} />
          {habits.map((h, i) => (
            <HabitRow
              key={h.name}
              row={i + 3}
              year={year}
              month={month}
              data={h}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export interface DateInfo {
  readonly monthStr: string;
  readonly weekdayHeaders: readonly string[];
  readonly dayHeaders: readonly string[];
}

function getDateInfo(year: number, month: number): DateInfo {
  const dateTime = DateTime.fromObject({ year, month, day: 1 });
  const monthStr = dateTime.toFormat('yyyy-MM');
  const lastDayOfMonth = dateTime.endOf('month').day;
  const firstDayOfMonthWeekdayIndex = dateTime.weekday - 1;

  const weekdayHeaders: string[] = [];
  const dayHeaders: string[] = [];

  for (let i = 0; i < 33; i++) {
    if (i === 0 || i > lastDayOfMonth) {
      weekdayHeaders.push('');
      dayHeaders.push('');
    } else {
      dayHeaders.push(i.toString());
      weekdayHeaders.push(
        WEEKDAY_INDEX_TO_CHAR[(firstDayOfMonthWeekdayIndex + i - 1) % 7]
      );
    }
  }

  return {
    monthStr,
    weekdayHeaders,
    dayHeaders,
  };
}

const WEEKDAY_INDEX_TO_CHAR: readonly string[] = [
  'M',
  'T',
  'W',
  'T',
  'F',
  'S',
  'S',
];
