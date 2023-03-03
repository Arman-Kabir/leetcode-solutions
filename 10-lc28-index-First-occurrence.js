// 28. Find the Index of the First Occurrence in a String

var strStr = function (haystack, needle) {
    console.log(haystack[0], needle[0]);   
    for (let i = 0; i < haystack.length; i++) {
        // console.log(haystack[i]);
        if (haystack[i] === needle[0]) {
            for (let j = 0; j < needle.length; j++) {
                if (haystack[i + j] === needle[j]) {
                    console.log(i,j);
                    console.log(haystack[i+j],needle[j]);
                    // continue;
                    if(j===needle.length-1){
                        console.log(j,needle.length-1);
                        return i;
                    }

                } else {
                    break;
                }
                // idx.push(i);
            }
        }
    }

    return -1;

};

console.log(strStr("sadbutsad", "sad"));