import { add, mul, sub } from '../src/lib/maths'


describe('test add function', () => {
    it('should return 15 fro add(5,10)', () => {
        expect(add(5,10)).toEqual(15)
    })
    
    it('should return 1 for add(2,3)', () => {
        expect(add(2,3)).toEqual(5)
    })
})

describe('test multiply function', () => {
    it('should return 50 fro add(5,10)', () => {
        expect(mul(5,10)).toEqual(50)
    })
    
    it('should return 6 for add(2,3)', () => {
        expect(mul(2,3)).toEqual(6)
    })
})

describe('test subtract function', () => {
    it('should return -5 fro add(5,10)', () => {
        expect(sub(5,10)).toEqual(-5)
    })
    
    it('should return -1 for add(2,3)', () => {
        expect(sub(2,3)).toEqual(-1)
    })
})