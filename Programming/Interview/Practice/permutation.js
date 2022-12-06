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

}

let strf = "abc";
console.log(permutation(strf));