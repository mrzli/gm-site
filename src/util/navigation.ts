import { NavigationItem } from '../types/types';

export const NAVIGATION: readonly NavigationItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Habits',
    href: '/habits',
    disabled: true,
    items: [
      {
        name: '2022',
        href: '/2022',
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
            items: [],
          },
        ],
      },
    ],
  },
];
