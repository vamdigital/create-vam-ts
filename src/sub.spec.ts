import { sub } from './sub'

describe('sub', () => {
  it('should subtract 2 numbers', () => {
    const result = sub(2, 1)
    expect(result).toBe(1)
  })
})
