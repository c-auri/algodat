import { getMaxSubarray } from "./MaxSubarray";


describe("getMaxSubarray", () => {
    describe("returns the empty array", () => {
        test("for the empty array", () => {
            expect(getMaxSubarray([])).toEqual([])
        })
        test("for an array with a single negative element", () => {
            expect(getMaxSubarray([ -1 ])).toEqual([])
        })
        test("for an array with only negative elements", () => {
            expect(getMaxSubarray([ -1, -5, -7 ])).toEqual([])
        })
    })
    describe("returns the input array", () => {
        test("for an array with a single positive element", () => {
            expect(getMaxSubarray([ 1 ])).toEqual([ 1 ])
        })
        test("for an array with only positive elements", () => {
            expect(getMaxSubarray([ 1, 7, 5 ])).toEqual([ 1, 7, 5 ])
        })
        test("for an array with a single small negative number in the middle", () => {
            const array = [ 5, 4, -1, 7, 8 ]
            expect(getMaxSubarray(array)).toEqual(array)
        })
    })
    describe("returns the correct maximum subarray", () => {
        test("for a problem with a non-trivial subarray as solution", () => {
            const array = [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]
            const solution = [ 4, -1, 2, 1 ]
            expect(getMaxSubarray(array)).toEqual(solution)
        })
    })
    describe("returns the first solution", () => {
        test("when there are two subarrays with the maximum sum", () => {
            const array = [ 4, -1, 3, -5, 2, -7, 2, -1, 5 ]
            const solution = [ 4, -1, 3 ]
            expect(getMaxSubarray(array)).toEqual(solution)
        })
    })
})