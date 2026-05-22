import { describe, expect, it } from 'vitest';

import { createGreeting } from '../src/index.js';

describe('createGreeting', () => {
  it('returns a typed greeting for the provided name', () => {
    expect(createGreeting('Agent')).toBe('Hello, Agent!');
  });
});
