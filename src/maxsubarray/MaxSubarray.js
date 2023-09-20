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
    let i = 0;
    let j = 0;
    for (let k = 1; k <= numbers.length - 1; k++) {
        if (currentSum + numbers[k] < numbers[k]) {
            currentSum = numbers[k];
            i = k;
            j = k;
        } else {
            currentSum = currentSum + numbers[k];
            j++;
        }

        if (biggestSum < currentSum) {
            biggestSum = currentSum;
            biggestArray = numbers.slice(i, j + 1);
        }
    }

    return (allowEmptySolution && biggestSum <= 0) ? [] : biggestArray;
}