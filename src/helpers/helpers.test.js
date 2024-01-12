import { describe, expect } from 'vitest'
import validateAge from './validateAge'

describe('Helper functions', () => {
  it('Should validate an age above 18 years old', () => {
    const age = '2000-01-01'
    expect(validateAge(age)).toBeGreaterThanOrEqual(18)
  })
})