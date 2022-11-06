import React from 'react';
import { NavigationList } from './NavigationList';
import { NAVIGATION } from '../util/navigation';

export interface LayoutProps {
  readonly children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={'flex flex- h-screen'}>
      <div className="flex flex-shrink-0 min-w-[200px] w-64 flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
          <div className="flex flex-1 flex-col overflow-y-auto">
            <NavigationList parentPath={''} items={NAVIGATION} />
          </div>
        </div>
      </div>
      <div className="flex flex-1 p-6 overflow-y-auto">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900"></h1>
        </div>
        <div className={'flex flex-1'}>{children}</div>
      </div>
    </div>
  );
}
