# dynamic-typing

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Dynamically type a string.

Becomes a boolean if the value to lowercase is 'true' or 'false'
Becomes a number if (! isNaN). This will also convert hexadecimal numbers
Stays a string otherwise

## Installation

`$ npm i dynamic-typing`

## Usage

```js
import { parseString } from 'dynamic-typing';

const result = parseString('0x100');

// result is the number 256
```

## [API Documentation](https://cheminfo.github.io/dynamic-typing/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/dynamic-typing.svg
[npm-url]: https://www.npmjs.com/package/dynamic-typing
[ci-image]: https://github.com/cheminfo/dynamic-typing/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/cheminfo/dynamic-typing/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo/dynamic-typing.svg
[codecov-url]: https://codecov.io/gh/cheminfo/dynamic-typing
[download-image]: https://img.shields.io/npm/dm/dynamic-typing.svg
[download-url]: https://www.npmjs.com/package/dynamic-typing
