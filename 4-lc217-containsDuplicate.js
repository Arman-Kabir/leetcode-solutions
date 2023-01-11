// 217. Contains Duplicate
function containsDuplicate(nums) {
    const arr = new Set([...nums]);
    console.log(arr,nums);
    return arr.size !== nums.length;
}

console.log(containsDuplicate([1, 2, 3, 4]));