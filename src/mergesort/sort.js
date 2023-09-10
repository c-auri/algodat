/**
 * Sorts an array of numbers using mergesort.
 *
 * @param {number[]} array
 */
export function sort(array) {
    const rangeLeft = 0;
    const rangeRight = array.length - 1;
    mergesort(rangeLeft, rangeRight, array);
    return array;
}

function mergesort(rangeLeft, rangeRight, array) {
    if (rangeLeft < rangeRight) {
        const median = Math.floor((rangeRight - rangeLeft) / 2);
        mergesort(rangeLeft, rangeLeft + median, array);
        mergesort(rangeLeft + median + 1, rangeRight, array);
        merge(rangeLeft, rangeLeft + median, rangeRight, array);
    }
}

function merge(rangeLeft, median, rangeRight, array) {
    const sortedNumbers = [];
    let leftIncrementingPosition = rangeLeft;
    let rightIncrementingPosition = median + 1;
    //push lower number onto array
    while ((leftIncrementingPosition <= median) && (rightIncrementingPosition <= rangeRight)) {
        if (array[leftIncrementingPosition] < array[rightIncrementingPosition]) {
            sortedNumbers.push(array[leftIncrementingPosition]);
            leftIncrementingPosition++;
        } else {
            sortedNumbers.push(array[rightIncrementingPosition]);
            rightIncrementingPosition++;
        }
    }

    //push the rest onto the array
    if (leftIncrementingPosition <= median) {
        while (leftIncrementingPosition <= median) {
            sortedNumbers.push(array[leftIncrementingPosition]);
            leftIncrementingPosition++;
        }
    } else {
        while (rightIncrementingPosition <= rangeRight) {
            sortedNumbers.push(array[rightIncrementingPosition]);
            rightIncrementingPosition++;
        }
    }
    const changeRange = rangeRight - rangeLeft;
    for (let i = 0; i <= changeRange; i++) {
        array[rangeLeft] = sortedNumbers[i];
        rangeLeft++;
    }
}