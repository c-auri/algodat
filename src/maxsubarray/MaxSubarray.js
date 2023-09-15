/**
 * Returns the subarray of the given numbers with the largest sum.
 * @param {number[]} numbers
 * @param {boolean} allowEmptySolution
 *     whether the empty array is allowed as a solution
 * @returns {number}
 */
export function getMaxSubarray(numbers, allowEmptySolution = true) {
    // TODO: implement a solution in linear time
    // Hint: You will probably need the Array.slice function:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

    if (!allowEmptySolution && numbers.length === 0) {
        throw new Error("Input array must not be empty.")
    }
}