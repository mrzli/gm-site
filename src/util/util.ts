export function classNames(
  ...classes: readonly (string | undefined)[]
): string {
  return classes.filter(Boolean).join(' ');
}
