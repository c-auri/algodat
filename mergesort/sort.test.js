import { sort } from './sort.js'

describe('sorts', () => {
    test('empty input', () => {
        expect(sort([])).toEqual([])
    })
    test.skip('single elements', () => {
        expect(sort([ 1 ])).toEqual([ 1 ])
    })
    test.skip('sorted elements', () => {
        expect(sort([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
    })
    test.skip('backwards sorted elements', () => {
        expect(sort([ 3, 2, 1 ])).toEqual([ 1, 2, 3 ])
    })
    test.skip('scrambled elements', () => {
        expect(sort([ 1, 3, 5, 4, 2 ])).toEqual([ 1, 2, 3, 4, 5 ])
    })
    test.skip('scrambled elements with gaps', () => {
        expect(sort([ 1, 7, 5, 9, 3 ])).toEqual([ 1, 3, 5, 7, 9 ])
    })
    test.skip('mixed sign elements', () => {
        expect(sort([ 1, -7, 5, -9, 3 ])).toEqual([ -9, -7, 1, 3, 5 ])
    })
})