'use strict';
const isNaturalNumber = require('is-natural-number');

/**
 * Check if the given `year` is a leap year
 *
 * @param {Date|string|number} year
 * @return {boolean}
 */
module.exports = function (year) {
    if (year == null) {
        year = (new Date()).getUTCFullYear();
    }

    if (year instanceof Date) {
        year = year.getUTCFullYear();
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
