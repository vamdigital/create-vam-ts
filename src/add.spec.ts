import { add } from './add'

describe('add function', () => {
  it('should add 2 number', () => {
    const result = add(1, 2)
    expect(result).toBe(3)
  })
})
