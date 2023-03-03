// 26. Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {
    let l=1;
    let r=1;
    
    for (r = 1; r < nums.length; r++) {
        console.log(nums[r]);
        if(nums[r] === nums[r-1]){
            continue;
        }else{
            nums[l] = nums[r];
            l++;
        }
    }
    return l;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));