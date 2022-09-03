const testFn = require('./minMedMax')

test('output#1', () => {
  expect(testFn(85, 30, 1)).toBe('{ min: 1, mid: 30, max: 85 }')
})

test('output#2', () => {
  expect(testFn(10, 0, 20)).toBe('{ min: 0, mid: 10, max: 20 }')
})

test('output#3', () => {
  expect(testFn(-5, 0, 10)).toBe('{ min: -5, mid: 0, max: 10 }')
})

test('output#4', () => {
  expect(testFn(5, 1, 1)).toBe('{ min: 1, mid: 1, max: 5 }')
})

test('output#5', () => {
  expect(testFn(-1, -8, 0)).toBe('{ min: -8, mid: -1, max: 0 }')
})
