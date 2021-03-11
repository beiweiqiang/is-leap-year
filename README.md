# is-a-leap-year [![NPM version](https://img.shields.io/npm/v/is-a-leap-year.svg?style=flat)](https://www.npmjs.com/package/is-a-leap-year)
Returns `true` if the year is a leap year.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save is-a-leap-year
```

## Usage

```js
const isLeapYear = require('is-a-leap-year');

console.log(isLeapYear(2004));  // true
console.log(isLeapYear('2004'));  // true
console.log(isLeapYear(new Date('2004-01-01')));  // true
```
