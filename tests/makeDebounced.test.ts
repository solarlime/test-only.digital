import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import makeDebounced from '../src/utils/makeDebounced';

describe('makeDebounced', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    jest.clearAllTimers();
  });

  it('should create a debounced function', () => {
    const mockFn = jest.fn();
    const debouncedFn = makeDebounced(mockFn, 500);

    expect(typeof debouncedFn).toBe('function');
  });

  it('should call the  function only once after the delay', () => {
    const mockFn = jest.fn();
    const debouncedFn = makeDebounced(mockFn, 500);

    debouncedFn();
    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(500);
    expect(mockFn).toBeCalledTimes(1);
  });

  it('should pass arguments to the original function', () => {
    const mockFn = jest.fn();
    const debouncedFn = makeDebounced(mockFn, 500);
    const testArgs = ['test', 123, { key: 'value' }];

    debouncedFn(...testArgs);
    jest.advanceTimersByTime(500);

    expect(mockFn).toHaveBeenCalledWith(...testArgs);
  });

  it('should cancel the previous debounced function call', () => {
    const mockFn = jest.fn();
    const debouncedFn = makeDebounced(mockFn, 500);

    debouncedFn(1);
    debouncedFn(2);
    debouncedFn(3);

    jest.advanceTimersByTime(500);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(3);
  });
});
