import React from 'react';
import { NavigationList } from './NavigationList';
import { NAVIGATION } from '../util/navigation';

export interface LayoutProps {
  readonly children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={'flex h-screen'}>
      <div className="inset-y-0 flex min-w-[200px] w-64 flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
          <div className="flex flex-1 flex-col overflow-y-auto">
            <NavigationList parentPath={''} items={NAVIGATION} />
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <main className="flex-1">
          <div className="p-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900"></h1>
            </div>
            <div>{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
