// An odd number, when converted to binary, must have the least significant element as 1
// We can use bitwise operator to check odd: & 000001

function isPalindromeBitVector(str){
    //
    let bitVector = createBitVector(str);
    return bitVector == 0 || checkExactlyOneBitSet(bitVector);
    // Time Complexity: O(N+256)
    // O(N)
}

function createBitVector(str){
    let bitVector = 0;
    for(let i = 0; i < str.length; i++){
        let x = str.charCodeAt(i);
        bitVector = toggle(bitVector, x);
    }
    console.log(bitVector.toString(2));
    return bitVector;
}

function toggle(bitVector, idx){
    if(idx < 0) return bitVector;
    let mask = 1 << idx;
    if((bitVector & mask) == 0){
        bitVector |= mask;
    } else {
        bitVector &= ~mask;
    }
    //console.log(bitVector.toString(2));
    return bitVector;
}

function checkExactlyOneBitSet(bitVector){
    return (bitVector & (bitVector - 1)) == 0;
}

console.log(createBitVector("abcaf"));