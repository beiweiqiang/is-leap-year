'use strict';

const isLeapYear = require('.');

describe('base test', () => {
    test('function is defined', () => {
        expect(isLeapYear).toBeDefined();
    });

    test('return boolean', () => {
        expect(isLeapYear()).toBeBoolean();
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
    });

    test('1900 is not a leap year', () => {
        expect(isLeapYear(1900)).toBe(false);
        expect(isLeapYear('1900')).toBe(false);
    });

    test('2000 is a leap year', () => {
        expect(isLeapYear(2000)).toBe(true);
        expect(isLeapYear('2000')).toBe(true);
    });

    test('6400 is not a leap year', () => {
        expect(isLeapYear(6400)).toBe(false);
        expect(isLeapYear('6400')).toBe(false);
    });

    test('172800 is a leap year', () => {
        expect(isLeapYear(172800)).toBe(true);
        expect(isLeapYear('172800')).toBe(true);
    });
});