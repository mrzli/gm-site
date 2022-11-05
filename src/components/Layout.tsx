import React from 'react';

export interface LayoutProps {
  readonly children: React.ReactNode
}

export function Layout(
  { children }: LayoutProps
): React.ReactElement {
  return (<div className={'bg-orange-500'}>{children}</div>);
}
