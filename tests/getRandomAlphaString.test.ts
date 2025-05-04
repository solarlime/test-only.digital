import { describe, it, expect } from '@jest/globals';
import getRandomAlphaString from '../src/utils/getRandomAlphaString';

describe('getRandomAlphaString', () => {
  it('returns a string of the specified length', () => {
    const result = getRandomAlphaString(5);
    expect(result).toHaveLength(5);
  });

  it('returns a string containing only alphabetic characters', () => {
    const result = getRandomAlphaString(10);
    expect(result).toMatch(/^[a-z]+$/);
  });

  it.each([0, -1])('returns an empty string when length is %i', (number) => {
    const result = getRandomAlphaString(number);
    expect(result).toBe('');
  });
});
