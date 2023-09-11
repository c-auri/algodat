/**
 * Returns the subarray of the given numbers with the largest sum.
 * @param {number[]} numbers
 * @param {boolean} allowEmptySolution
 *     whether the empty array is allowed as a solution
 * @returns {number}
 */
export function getMaxSubarray(numbers, allowEmptySolution = true) {
    if (!allowEmptySolution && numbers.length === 0) {
        throw new Error("Input array must not be empty.")
    }

    const result = { start: 0, end: 0, sum: 0 }
    const current = { start: 0, end: 0, sum: 0 }
    let maxValue = allowEmptySolution ? 0 : numbers[0]

    while (current.end < numbers.length) {
        const currentValue = numbers[current.end++]
        current.sum += currentValue

        if (currentValue > maxValue) {
            maxValue = currentValue
        }

        if (current.sum < 0) {
            current.start = current.end
            current.sum = 0
        }

        if (result.sum < current.sum) {
            result.start = current.start
            result.end = current.end
            result.sum = current.sum
        }
    }

    const solution = numbers.slice(result.start, result.end)

    return !allowEmptySolution && solution.length === 0 ? [ maxValue ] : solution
}