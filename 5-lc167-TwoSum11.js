// # 167. Two Sum II - Input Array Is Sorted
// https://www.youtube.com/watch?v=cQ1Oz4ckceM&ab_channel=NeetCode

function twoSum(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;
    console.log(l, r);
    while (l < r) {
        let curSum = numbers[l] + numbers[r];

        if (curSum < target) {
            l++;
        }
        else if(curSum>target){
            r--;
        }
        else{
            return [l+1,r+1]
        }
    }
}

console.log(twoSum([2, 7, 11, 15],9));



