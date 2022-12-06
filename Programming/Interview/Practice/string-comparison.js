function stringCompare(a, b){
    let goodLength = Math.min(a.length, b.length);
    for(let i = 0 ; i < goodLength; i++){
        if(a[i] < b[i]){
            return "<";
        } else if (a[i] > b[i]){
            return ">";
        }
    }
    if(a.length < b.length){
        return "<"
    } else if(a.length > b.length) {
        return ">"
    } else {
        return "="
    }    
}

// Runtime: O(b)
// b is the length of longest array

console.log(stringCompare("aaa","aaa"));
console.log(stringCompare("aaa","aaab"));
console.log(stringCompare("aaab", "aaa"));
console.log(stringCompare("aaab", "baa"));