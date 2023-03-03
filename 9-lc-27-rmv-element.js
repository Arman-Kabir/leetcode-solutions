

// 27. Remove Element
var removeElement = function (nums, val) {
    let l = 0;
    console.log(nums, val);

    for (let i = 0; i < nums.length; i++) {
        console.log(i);
        if (nums[i] != val) {
            nums[l] = nums[i];
            l++;
        } else {
            continue;
        }
    }
    return l,nums;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));