/**
 * Sorts an array of numbers using mergesort.
 * 
 * @param {number[]} array 
 */
export function sort(array) {
    rangeLeft = 0;
    rangeRight = array.length-1;
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
        median = floor((rangeRight - rangeLeft) / 2);
        mergesort(rangeLeft, rangeLeft + m, array);
        mergesort(rangeLeft + median + 1, rangeRight, array);
        merge(rangeLeft, median, rangeRight, array);
    }
}