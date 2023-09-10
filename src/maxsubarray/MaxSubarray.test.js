import { getMaxSubarray } from "./MaxSubarray";


describe("maxSubArray", () => {
    describe("returns the empty array", () => {
        test.skip("for the empty array", () => {
            expect(getMaxSubarray([])).toEqual([])
        })
        test.skip("for an array with a single negative element", () => {
            expect(getMaxSubarray([ -1 ])).toEqual([])
        })
        test.skip("for an array with only negative elements", () => {
            expect(getMaxSubarray([ -1, -5, -7 ])).toEqual([])
        })
    })
    describe("returns the input array", () => {
        test.skip("for an array with a single positive element", () => {
            expect(getMaxSubarray([ 1 ])).toEqual([ 1 ])
        })
        test.skip("for an array with only positive elements", () => {
            expect(getMaxSubarray([ 1, 7, 5 ])).toEqual([ 1, 7, 5 ])
        })
        test.skip("for an array with a single small negative number in the middle", () => {
            const array = [ 5, 4, -1, 7, 8 ]
            expect(getMaxSubarray(array)).toEqual(array)
        })
    })
    describe("returns the correct maximum subarray", () => {
        test.skip("for  problem with a true subarray as solution", () => {
            const array = [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]
            const solution = [ 4, -1, 2, 1 ]
            expect(getMaxSubarray(array)).toEqual(solution)
        })
    })
})