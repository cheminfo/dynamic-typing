import { parseString } from '../parseString';

test('parseString', () => {
  expect(parseString('')).toBe('');
  expect(parseString(' ')).toBe(' ');
  expect(parseString('.')).toBe('.');
  expect(parseString('0.')).toBe(0);
  expect(parseString('0.0')).toBe(0);
  expect(parseString('abc')).toBe('abc');
  expect(parseString('True')).toBe(true);
  expect(parseString('false')).toBe(false);
  expect(parseString('0')).toBe(0);
  expect(parseString('123')).toBe(123);
  expect(parseString('123.456')).toBe(123.456);
  expect(parseString('12e3')).toBe(12000);
  expect(parseString('0x10')).toBe(16);
  expect(parseString('0b10')).toBe(2);
});
