// 242. Valid Anagram

var isAnagram = function (s, t) {
    if (s.length != t.length) return false;
    let countS = {};
    let countT = {};

    for (let i = 0; i < s.length; i++) {
        console.log(s[i]);
        // console.log();
        countS[s[i]] = (countS[s[i]] || 0) + 1;
        countT[t[i]] = (countT[t[i]] || 0) + 1;
    }
    console.log(countS);
    console.log(countT);

    for(c in countS){
        console.log(c);
        if(countS[c] !=countT[c]) return false
    }
    return true
};

console.log(isAnagram("anagram", "nagaram"))