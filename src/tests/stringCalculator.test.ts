import { add } from '../stringCalculator';

test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
});

test('should return the number itself when one number is passed', () => {
    expect(add('1')).toBe(1);
});

test('should return the sum of two comma-separated numbers', () => {
    expect(add('1,5')).toBe(6);
});

