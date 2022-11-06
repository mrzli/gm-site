export function classNames(...classes: readonly string[]): string {
  return classes.filter(Boolean).join(' ');
}
