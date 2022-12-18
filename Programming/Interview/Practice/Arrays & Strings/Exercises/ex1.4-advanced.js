// Palindrome Permutation: Given a string, write a function to check if it's a permutation palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards.

// ME FIGURED OUT
// THE SIMPLIFIED VERSION IS THAT WE CREATED A BIT ARRAY OF 128 BITS. (DEFAULTS ALL ZEROS) (ASSUMED THAT WE HAVE 128 ASCII CHARACTERS)
// WE LOOP THROUGH EACH CHARACTER OF STRING
// FOR EACH CHARACTER => FIND INDEX => TOGGLE THE CORRESPONDING BIT IN THE BIT ARRAY (REPEAT 1 TIME -> 1, 2 times -> 0)
// AT THE END OF THE LOOP, IF THE BIT ARRAY HAS NO MORE THAN 1 BIT SET => the given string is a palindrome string.

// THE OPTIMIZED VERSION WILL BE
// WE USE THE MASK VARIABLE => THIS MASK IS A POINTER POINTING TO THE CHARACTER CODE OF THE CHARACTER IN THE STRING
// MASK = 1 << [CHARACTER CODE]
// For example, if the character is A => code: 97 => 1 << 97 : "0000 0010" (1 << 97 = 1 << 1)
// THE MASK IS THE ADDRESSS OF THE CHARACTER OF THE GIVEN STRING => GREAT
// THE BIT VECTOR IN THIS CASE IS LIKE ACCUMULATION VARIABLE OF THE LOOP

// FOR EXAMPLE, GIVEN A STRING LIKE THIS: "ADA" -> is this string palindrome permutation?
// initial bitVector (bv) = "0000 0000"
// i = 0; character = "A"; code: 97
// mask: "0000 0010"
// old bv: "0000 0000"
// new bitVector: "0000 0010"
//
// i = 1; character = "D"; code: 100
// mask: "0001 0000"
// old bv: "0000 0010"
// new bitVector: "0001 0010"
//
// i = 2; character = "A"; code: 97
// mask: "0000 0010"
// old bv: "0001 0010"
// new bitVector: "0001 0000"

// the final bitVector contains only 1 bit set => the given string is a palindrome string kaka

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
        // IF THE CHARACTER 
    } else {
        bitVector &= ~mask;
    }
    //console.log(bitVector.toString(2));
    return bitVector;
}

function checkExactlyOneBitSet(bitVector){
    return (bitVector & (bitVector - 1)) == 0;
    // To check if a binary array has only one bit set, subtract 1 from it, and then AND it
}

console.log(createBitVector("abcaf"));