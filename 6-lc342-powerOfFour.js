
// 342. Power of Four
// 4^1=4   4^2 = 4*4   4^4 = 4*4*4*4
var isPowerOfFour = function (n) {
    let i = 0;
    let result = 1;
    if (n === 1) return true;

    while (result < n) {
        result = result * 4;
        console.log(i, result);
        if (result === n) {
            return true;
        }
        i++;
    }
    return false;
    // for (let i = 1; i <= 17; i++) {
    //     result = result * 4;
    //     if (result === n) {
    //         return true;
    //     }
    //     if (result > n) {
    //         return false;
    //     }

    //     console.log(result);
    // }
};

console.log(isPowerOfFour(1));