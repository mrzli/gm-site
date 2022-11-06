import { NavigationItem } from '../types/types';

export const NAVIGATION: readonly NavigationItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Habits',
    items: [
      {
        name: '2022',
        href: '/habits/2022',
      },
    ],
  },
];
