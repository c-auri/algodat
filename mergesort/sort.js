/**
 * Sorts an array of numbers using mergesort.
 * 
 * @param {number[]} array 
 */
export function sort(array) {
    let rangeLeft = 0;
    let rangeRight = array.length-1;
    mergesort(rangeLeft, rangeRight, array);
    // TODO:
    // Implement the function using mergesort.
    // You may use private helper functions in this file.
    
    // To not flood the console, most tests are skipped initially.
    // Remove the ".skip" extension of a test to un-skip it at your own pace.
    // Your goal is to pass all tests, including the ones currently skipped.
}

function mergesort(rangeLeft, rangeRight, array) {
    if (rangeLeft < rangeRight) {
        let median = floor((rangeRight - rangeLeft) / 2);
        mergesort(rangeLeft, rangeLeft + m, array);
        mergesort(rangeLeft + median + 1, rangeRight, array);
        merge(rangeLeft, median, rangeRight, array);
    }
    return array;
}

function merge(rangeLeft, median, rangeRight, array)  {
    let sortedNumbers = [];
    let leftIncrementingPosition = rangeLeft;
    let rightIncrementingPosition = median;
    //push lower number onto array
    while (leftIncrementingPosition < median && rightIncrementingPosition <= rangeRight) {
        if (array[rangeleftPositionLeft] < array[rightIncrementingPosition]) {
            sortedNumbers.push(array[leftIncrementingPosition]);
            leftIncrementingPosition++;
        }
        else {
            sortedNumbers.push(array[rightIncrementingPosition]);
            rightIncrementingPosition++;
        }
    }
    //push the rest onto the array
    if (leftIncrementingPosition < median) {
        while (leftIncrementingPosition < median) {
            sortedNumbers.push(array[leftIncrementingPosition]);
            leftIncrementingPosition++;
        }
    }
    else {
        while (rightIncrementingPosition <= rangeRight) {
            sortedNumbers.push(array[rightIncrementingPosition]);
            rightIncrementingPosition++;
        }
    }
    for (i = rangeLeft; i++; i <= rangeRight) {
        array[i] = sortedNumbers[i];
    }
}