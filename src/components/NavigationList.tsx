import React from 'react';
import { classNames } from '../util/util';
import { NavigationItem } from '../types/types';

export interface NavigationListProps {
  readonly items: readonly NavigationItem[];
}

export function NavigationList({
  items,
}: NavigationListProps): React.ReactElement {
  return (
    <div className="flex-1">
      {items.map((item) => (
        <NavigationListItem key={item.name} item={item} />
      ))}
    </div>
  );
}

interface NavigationListItemProps {
  readonly item: NavigationItem;
}

function NavigationListItem({
  item,
}: NavigationListItemProps): React.ReactElement {
  const { name, href, items } = item;

  const content = (
    <div className={'flex flex-col'}>
      <div>{name}</div>
      {items && (
        <div className={'ml-1 mt-2'}>
          <NavigationList items={items} />
        </div>
      )}
    </div>
  );

  if (!href) {
    return <div className={ITEM_CLASS}>{content}</div>;
  }

  return (
    <a href={href} className={ITEM_CLASS}>
      {content}
    </a>
  );
}

const IS_CURRENT = false;

const ITEM_CLASS = classNames(
  IS_CURRENT ? 'bg-gray-900 text-white' : 'text-gray-300',
  'group flex items-center px-2 py-2 text-sm font-medium'
);
