import { NavigationItem } from '../types/types';

export const NAVIGATION: readonly NavigationItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Principles',
    href: '/principles',
    disabled: true,
    items: [
      {
        name: 'Work',
        href: '/work',
      },
    ],
  },
  {
    name: 'Habits',
    href: '/habits',
    disabled: true,
    items: [
      {
        name: 'Tracking',
        href: '/tracking',
        disabled: true,
        items: [
          {
            name: '2022',
            href: '/2022',
          },
        ],
      },
    ],
  },
  {
    name: 'Knowledge',
    href: '/knowledge',
    disabled: true,
    items: [
      {
        name: 'Growth',
        href: '/growth',
        disabled: true,
        items: [
          {
            name: 'Atomic Habits',
            href: '/atomic-habits',
            items: [
              {
                name: 'Notes 1',
                href: '/notes-1',
              },
              {
                name: 'Notes 2',
                href: '/notes-2',
              },
              {
                name: 'Notes 3',
                href: '/notes-3',
              },
              {
                name: 'Notes 4',
                href: '/notes-4',
              },
              {
                name: 'Notes 5',
                href: '/notes-5',
              },
            ],
          },
          {
            name: 'Range',
            href: '/range',
            items: [
              {
                name: 'Notes 1',
                href: '/notes-1',
              },
              {
                name: 'Notes 2',
                href: '/notes-2',
              },
              {
                name: 'Notes 3',
                href: '/notes-3',
              },
              {
                name: 'Notes 4',
                href: '/notes-4',
              },
              {
                name: 'Notes 5',
                href: '/notes-5',
              },
            ],
          },
        ],
      },
    ],
  },
];
