'use strict';

const isLeapYear = require('.');

describe('base test', () => {
    test('function is defined', () => {
        expect(isLeapYear).toBeDefined();
    });

    test('return boolean', () => {
        expect(isLeapYear()).toBeBoolean();
    });

    test('can accept number/string/date', () => {
        expect(isLeapYear(1900)).toBeBoolean();
        expect(isLeapYear('2000')).toBeBoolean();
        expect(isLeapYear(new Date('2020-01-02'))).toBeBoolean();
    });

    test('need natural number', () => {
        expect(() => isLeapYear('abc')).toThrow(TypeError);
    });

    test('empty string will throw error', () => {
        expect(() => isLeapYear('')).toThrow(TypeError);
    });
});

describe('case test', () => {
    test('2004 is a leap year', () => {
        expect(isLeapYear(2004)).toBe(true);
        expect(isLeapYear('2004')).toBe(true);
        expect(isLeapYear(new Date('2004-01'))).toBe(true);
    });

    test('1900 is not a leap year', () => {
        expect(isLeapYear(1900)).toBe(false);
        expect(isLeapYear('1900')).toBe(false);
        expect(isLeapYear(new Date('1900/01'))).toBe(false);
    });

    test('2000 is a leap year', () => {
        expect(isLeapYear(2000)).toBe(true);
        expect(isLeapYear('2000')).toBe(true);
        expect(isLeapYear(new Date('2000-01-12'))).toBe(true);
    });

    test('6400 is not a leap year', () => {
        expect(isLeapYear(6400)).toBe(false);
        expect(isLeapYear('6400')).toBe(false);
        expect(isLeapYear(new Date('6400/12/12'))).toBe(false);
    });

    test('172800 is a leap year', () => {
        expect(isLeapYear(172800)).toBe(true);
        expect(isLeapYear('172800')).toBe(true);
    });
});