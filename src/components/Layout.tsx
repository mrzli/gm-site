import React from 'react';
import { NavigationList } from './NavigationList';
import { NAVIGATION } from '../util/navigation';

export interface LayoutProps {
  readonly children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={'flex flex-1 h-screen'}>
      <div className="flex flex-col flex-shrink-0 min-w-[200px] w-64 bg-gray-800 overflow-y-auto">
        <NavigationList parentPath={''} items={NAVIGATION} />
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto p-6">{children}</div>
    </div>
  );
}
