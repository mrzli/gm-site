import React from 'react';
import { classNames, joinPaths } from '../util/util';
import { NavigationItem } from '../types/types';

export interface NavigationListProps {
  readonly parentPath: string;
  readonly items: readonly NavigationItem[];
}

export function NavigationList({
  parentPath,
  items,
}: NavigationListProps): React.ReactElement {
  return (
    <div className="flex-1">
      {items.map((item) => (
        <NavigationListItem
          key={item.name}
          parentPath={parentPath}
          item={item}
        />
      ))}
    </div>
  );
}

interface NavigationListItemProps {
  readonly parentPath: string;
  readonly item: NavigationItem;
}

function NavigationListItem({
  parentPath,
  item,
}: NavigationListItemProps): React.ReactElement {
  const { name, href, disabled, items } = item;

  const content = (
    <div className={'flex flex-col'}>
      <div>{name}</div>
      {items && items.length > 0 && (
        <div className={'ml-1 mt-2'}>
          <NavigationList
            parentPath={joinPaths(parentPath, href)}
            items={items}
          />
        </div>
      )}
    </div>
  );

  if (disabled) {
    return <div className={ITEM_CLASS}>{content}</div>;
  }

  return (
    <a href={joinPaths(parentPath, href)} className={ITEM_CLASS}>
      {content}
    </a>
  );
}

const IS_CURRENT = false;

const ITEM_CLASS = classNames(
  IS_CURRENT ? 'bg-gray-900 text-white' : 'text-gray-300',
  'group flex items-center px-2 py-2 text-sm font-medium'
);
