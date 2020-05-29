// regex checks if value contains blank spaces only
export function isStringEmpty (value) {
  return !value || /^\s*$/.test(value)
}
