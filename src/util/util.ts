import { trim } from '@gmjs/util';

export function classNames(
  ...classes: readonly (string | undefined)[]
): string {
  return classes.filter(Boolean).join(' ');
}

export function joinPaths(...paths: readonly string[]): string {
  return '/' + paths.map((p) => trim(p, '/')).join('/');
}
