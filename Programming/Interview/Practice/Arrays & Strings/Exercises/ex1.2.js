// Given two strings, write a method to decide if one is a permuation of the other.
const { performance } = require("perf_hooks");

function isPermutationBruteForce(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    let checkResult = [];
    for(let i = 0; i < str1.length; i++){
        for(let j = 0; j < str2.length; j++){
            if(str1[i] == str2[j]){
                checkResult[i] = true;
                break;
            }
        }
    }
    for(let k = 0; k < checkResult.length ; k++){
        if(!checkResult[k]){
            return false
        }
    }
    return true;

    // Time Complexity
    // call length of str1 : a
    // call length of str2: b
    // O(a*b + a)
}

function isPermutationClean(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    function sort(str){
        console.log("sorted" + str);
        return "sorted" + str;
    }

    let sortStr1 = sort(str1); // O(alog(a))
    let sortStr2 = sort(str2); // O(blog(b))

    for(let k = 0; k < sortStr1.length ; k++){
        if(sortStr1[k] != sortStr2[k]){
            return false;
        }
    }
    return true;

    // Time Complexity
    // call length of str1 : a
    // call length of str2: b
    // O(aloga + blogb + a)
    // same length: O(aloga + a)
}

function isPermutationBetter(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    let str1Check = {};
    for(let i = 0; i < str1.length; i++){
        if(!str1Check[str1[i]]){
            str1Check[str1[i]] = 0;
        }
        str1Check[str1[i]] ++;
    }
    for(let j = 0; j < str1.length; j++){
        if(!str1Check[str2[j]]){
            return false
        }
    }
    return true;

    // Time Complexity
    // call length of str1 : a
    // call length of str2: b
    // O(a + b)
    // same length: O(a)
}

var testStr1 = "ABC";
var testStr2 = "ABC";
// console.time("isPermutationBetter");
// console.log(isPermutationBetter(testStr1, testStr2));
// console.timeEnd("isPermutationBetter");

let start = null;
let result = null;
let sum = 0;
for(i = 0; i < 1000; i++){
    start = performance.now();
    isPermutationBruteForce(testStr1, testStr2);
    result = performance.now() - start;
    //console.log(result);
    sum += result;
}
console.log("isPermutationBruteForce", sum/1000);

sum = 0;
for(i = 0; i < 1000; i++){
    start = performance.now();
    isPermutationBetter(testStr1, testStr2);
    result = performance.now() - start;
    //console.log(result);
    sum += result;
}
console.log("isPermutationBetter", sum/1000);