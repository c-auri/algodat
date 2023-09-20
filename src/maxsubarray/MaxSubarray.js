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

    let currentSum = numbers[0];
    let biggestSum = numbers[0];
    let biggestArray = [ numbers[0] ];
    let currentStart = 0;
    let biggestStart = 0;
    let biggestEnd = 0;
    for (let k = 1; k <= numbers.length - 1; k++) {
        if (currentSum + numbers[k] < numbers[k]) {
            currentSum = numbers[k];
            currentStart = k;
        } else {
            currentSum = currentSum + numbers[k];
        }

        if (biggestSum < currentSum) {
            biggestSum = currentSum;
            biggestStart = currentStart;
            biggestEnd = k;
        }
    }
    biggestArray = numbers.slice(biggestStart, biggestEnd + 1);

    return (allowEmptySolution && biggestSum <= 0) ? [] : biggestArray;
}