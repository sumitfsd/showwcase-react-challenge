// regex checks if value contains blank spaces only
export default function isStringEmpty(value: string) {
  return !value || /^\s*$/.test(value);
}
