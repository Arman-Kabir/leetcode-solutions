// 2160. Minimum Sum of Four Digit Number After Splitting Digits

function minimumSum(num) {
    const arr = num.toString().split("").sort();
    const sum = Number(arr[0] + arr[2]) + Number(arr[1] + arr[3]);
    console.log(typeof (arr), arr);
    return sum;
};

console.log(minimumSum(2932));