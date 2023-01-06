

function isPalindrome(x) {
    let newValue = '';
    let value = x.toString().split('');
    console.log(typeof (value), value);
    for (let i = value.length - 1; i >= 0; i--) {
        newValue += (value[i]);
        console.log(typeof(newValue));
    }

    if (x == Number(newValue)) {
        return true
    }
    else {
        return false
    }
};

console.log(isPalindrome(123));