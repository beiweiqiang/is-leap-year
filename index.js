'use strict';
const isNaturalNumber = require('is-natural-number');

module.exports = function (year) {
    if (year == null) {
        year = (new Date()).getUTCFullYear();
    }

    if (typeof year === 'string') {
        year = year.trim();

        if (year === '') {
            throw new TypeError('Expected not empty string.');
        }

        year = Number(year);
    }

    if (!isNaturalNumber(year)) {
        throw new TypeError('Expected a natural number.');
    }

    if (year % 3200 === 0) {
        return year % 172800 === 0;
    }

    if (year % 100 === 0) {
        return year % 400 === 0;
    }

    return year % 4 === 0;
};


function isLeapYear(year) {
    if (
        (year / 4 == Math.floor(year / 4) && year / 100 != Math.floor(year / 100)) ||
        (year / 400 == Math.floor(year / 400) && year / 3200 != Math.floor(year / 3200)) ||
        year / 172800 == Math.floor(year / 172800)
    ) {
        return true
    }
    return false
}