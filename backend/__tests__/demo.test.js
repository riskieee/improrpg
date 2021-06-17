// const { TestWatcher } = require('jest') // autoadded by VSCode

const { findAverage, sum } = require('../test-template')

describe('improRPG App', () => {
  // TestWatcher() // autoadded by VSCode

  test('PASS NO TEST!', () => {
    expect(true).toBe(true)
  })

  test('PASS function sum() adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('average of 12 to 3 should return 4', () => {
    const expectedOutput = 4
    const actualOutput = findAverage(12, 3)
    expect(actualOutput).toBe(expectedOutput)
  })

  test('average of 12 to 4 should return 3', () => {
    const expectedOutput = 3
    const actualOutput = findAverage(12, 4)
    expect(actualOutput).toBe(expectedOutput)
  })

  test('average of 12 to 0 should return 0', () => {
    // if there is no user
    const expectedOutput = 0
    const actualOutput = findAverage(12, 0)
    expect(actualOutput).toBe(expectedOutput)
  })

  test('average of 12 to -4 should return 0', () => {
    // if there is no user
    const expectedOutput = 0
    const actualOutput = findAverage(12, -4)
    expect(actualOutput).toBe(expectedOutput)
  })

  test(`average of string format '12' to '3' should return 4`, () => {
    expect(() => findAverage('12', '3')).toThrow(TypeError)
  })

  test(`average of string format 'coyotiv' to 'photos' should return 0`, () => {
    expect(() => findAverage('coyotiv', 'photos')).toThrow(TypeError)
  })
})
