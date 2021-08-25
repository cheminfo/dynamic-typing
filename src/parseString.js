/**
 * Dynamically type a string
 * {string} [value]
 * @return {boolean|string|number}
 */
export function parseString(value) {
  if (value.length === 4 || value.length === 5) {
    let lowercase = value.toLowerCase();

    if (lowercase === 'true') return true;
    if (lowercase === 'false') return false;
  }
  let number = Number(value);
  if (!Number.isNaN(number)) return number;
  return value;
}
