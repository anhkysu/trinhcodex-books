// Palindrome Permutation: Given a string, write a function to check if it's a permutation palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards.

// Input: Tact Coa
// Output: True

// A Palindrome string is a string that can have NO MORE THAN 1 CHARACTER THAT IS ODD COUNTED.

function isPalindromePermutationBruteForce(str){
    //
    console.log(str);
    let strCheck = {};
    for(let i = 0; i < str.length; i++){
        if(!strCheck[str[i]]){
            strCheck[str[i]] = 0;
        }
        strCheck[str[i]]++;
    }
    let repeatOneTime = 0;
    let repeat2nTimes = 0;
    let repeat2nplus1Times = 0;
    Object.keys(strCheck).forEach(item => {
        if(strCheck[item] == 1){
            repeatOneTime++;
        } else if (strCheck[item] % 2 == 0){
            repeat2nTimes++;
        } else if (strCheck[item] % 2 == 1){
            repeat2nplus1Times++;
        }
    });
    if(repeatOneTime == 0){
        if((repeat2nTimes > 0 && repeat2nplus1Times >=0)||(repeat2nplus1Times >= 0 && repeat2nTimes >0)){
            return true
        }
    } else if (repeatOneTime == 1){
        if((repeat2nTimes > 0 && repeat2nplus1Times == 0)){
            return true
        }
    }
    return false;

    // Time Complexity: O(N+256)
    // O(N)
}

function isPalindromePermutationBetter(str){
    //
    let strCheck = {};
    let oddCount = 0;
    if(str.length == 1) return false;
    // strCheck has fixed length, like 256 characters of ascii
    for(let i = 0; i < str.length; i++){
        if(!strCheck[str[i]]){
            strCheck[str[i]] = 0;
        }
        strCheck[str[i]]++;
    }
    Object.keys(strCheck).forEach(item => {
        if(strCheck[item] % 2 == 1){
            oddCount++;
            if(oddCount > 1){
                return false
            }
        }
    });

    return true;
    // Time Complexity: O(N+256)
    // O(N)
}

function isPalindromeBitVector(str){
    //
    let strCheck = {};
    let oddCount = 0;
    if(str.length == 1) return false;
    // strCheck has fixed length, like 256 characters of ascii
    for(let i = 0; i < str.length; i++){
        if(!strCheck[str[i]]){
            strCheck[str[i]] = 0;
        }
        strCheck[str[i]]++;
    }
    Object.keys(strCheck).forEach(item => {
        if(strCheck[item] % 2 == 1){
            oddCount++;
            if(oddCount > 1){
                return false
            }
        }
    });

    return true;
    // Time Complexity: O(N+256)
    // O(N)
}




console.log(isPalindromePermutationBetter("tactcoa"));