import { parseString } from '../parseString';

test('parseString', () => {
  expect(parseString('')).toStrictEqual('');
  expect(parseString(' ')).toStrictEqual(' ');
  expect(parseString('.')).toStrictEqual('.');
  expect(parseString('0.')).toStrictEqual(0);
  expect(parseString('0.0')).toStrictEqual(0);
  expect(parseString('abc')).toStrictEqual('abc');
  expect(parseString('True')).toStrictEqual(true);
  expect(parseString('false')).toStrictEqual(false);
  expect(parseString('0')).toStrictEqual(0);
  expect(parseString('123')).toStrictEqual(123);
  expect(parseString('123.456')).toStrictEqual(123.456);
  expect(parseString('12e3')).toStrictEqual(12000);
  expect(parseString('0x10')).toStrictEqual(16);
  expect(parseString('0b10')).toStrictEqual(2);
});
