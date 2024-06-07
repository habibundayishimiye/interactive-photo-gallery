function hasSubarrayWithSum(arr, target) {
    let sum = 0;
    const sumMap = new Map();
    sumMap.set(0, -1);  // Let  Initialize the map with the sum 0 at index -1

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];  // Let  Update the cumulative sum

        // Let  Check if there is a previous cumulative sum that would make the current subarray sum to target
        if (sumMap.has(sum - target)) {
            return true;
        }

        // Let Add the current cumulative sum to the map with its index
        sumMap.set(sum, i);
    }

    return false;
}
// Let Run some Examples
console.log(hasSubarrayWithSum([1,2,3,4,5], 100));
console.log( hasSubarrayWithSum([4,2,7,1,9,5], 17));