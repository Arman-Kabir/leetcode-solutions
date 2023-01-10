/**1480. Running Sum of 1d Array
 * 
 * Given an array nums. We define a running sum of an array as
 *  runningSum[i] = sum(nums[0]…nums[i]).Return the running sum of nums.
 */

function runningSum(nums) {
    let sums = 0;
    let sumArr = [];
    for (let i = 0; i < nums.length; i++) {
        sums += nums[i];
        sumArr = [...sumArr, sums];
    }
    console.log(sumArr);
    return sumArr;
}

console.log(runningSum([1, 3, 4, 6]));