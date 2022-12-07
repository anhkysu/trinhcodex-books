function permutation(str){
    permutation2(str, "");
}

function permutation2(str, prefix){
    if(str.length == 0){
        console.log(prefix);
    } else {
        for(let i = 0; i < str.length; i++){
            let rem = str.substring(0, i) + str.substring(i+1);
            permutation2(rem, prefix + str[i]);
        }
    }
}

function createRem(str){
    
}

function findStringPermutation(str){
    // Input "ab"
    // Output ["ab", "ba"]
    return findPermutation(str, "");
}

function findPermutation(concatStr, prefix){
    // input ("a", "b")
    // output ["ba"]
    // input ("ab", "c")
    // output ["cba", "cab"]
    let result = [];
    let process = concatStr;
    for(let i = 0; i < process.length; i++){
        let anotherPermutation = findPermutation(process.substring(0, i) + process.substring(i+1), process[i]);
        anotherPermutation.forEach(item => {
            result.push(prefix + item);
        });
    }
    if(process.length == 0){
        result = [prefix];
    }

    return result;
}

// Time Complexity:  N^2 * N!


let strf = "bcad";
console.log(findStringPermutation(strf));