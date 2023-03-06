// 912. Sort an Array - time O(nlogn)
// at first , tried to use bubble sort but it didn't work.
var sortArray = function (nums) {
    let swap = true;
    let count = 0;
    while(swap){
        swap = false;   
    for (let i = 0; i < nums.length-count; i++) {
        let j = i + 1;
        if (nums[i] > nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            swap = true;
        }
    }
        count++;
    }
    return nums;
};
console.log(sortArray([5, 2, 3, 1]));

