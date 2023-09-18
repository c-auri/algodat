import { getMaxSubarray } from "./MaxSubarray";


describe("getMaxSubarray with empty solution not allowed", () => {
    describe("throws an error", () => {
        test("for the empty array", () => {
            expect(() => getMaxSubarray([], false)).toThrow(Error)
        })
    })
    describe("returns the input array", () => {
        test("for an array with a single negative element", () => {
            expect(getMaxSubarray([ -1 ], false)).toEqual([ -1 ])
        })
    })
    describe("returns an array containing only the maximum value", () => {
        test.skip("for an array with only negative elements", () => {
            expect(getMaxSubarray([ -1, -5, -7 ], false)).toEqual([ -1 ])
        })
    })
    sharedTests(false)
})

describe("getMaxSubarray with empty solution allowed", () => {
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
    sharedTests(true)
})

/**
 * Runs all the tests that are the same regardless if the empty solution is allowed or not.
 * @param {*} allowEmptySolution
 */
function sharedTests(allowEmptySolution) {
    describe("returns the input array", () => {
        test.skip("for an array with a single positive element", () => {
            expect(getMaxSubarray([ 1 ], allowEmptySolution)).toEqual([ 1 ])
        })
        test.skip("for an array with only positive elements", () => {
            expect(getMaxSubarray([ 1, 7, 5 ], allowEmptySolution)).toEqual([ 1, 7, 5 ])
        })
        test.skip("for an array with a single small negative number in the middle", () => {
            const array = [ 5, 4, -1, 7, 8 ]
            expect(getMaxSubarray(array, allowEmptySolution)).toEqual(array)
        })
    })
    describe("returns the correct maximum subarray", () => {
        test.skip("for a problem with a non-trivial subarray as solution", () => {
            const array = [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]
            const solution = [ 4, -1, 2, 1 ]
            expect(getMaxSubarray(array, allowEmptySolution)).toEqual(solution)
        })
    })
    describe("returns the first solution", () => {
        test.skip("when there are two subarrays with the maximum sum", () => {
            const array = [ 4, -1, 3, -5, 2, -7, 2, -1, 5 ]
            const solution = [ 4, -1, 3 ]
            expect(getMaxSubarray(array, allowEmptySolution)).toEqual(solution)
        })
    })
}