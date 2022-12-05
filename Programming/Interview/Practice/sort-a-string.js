let inputString = "bbccdefbbaa";
let exectedOutputString = "aabbbbccdef";

// b b => not swap
// b c => not swap
// b c => not swap
// b d => not swap
// b e => not swap
// b f => not swap
// b b => not swap
// b b => not swap
// b a => swap => "abccdefbbba"
// a a => not swap

// b c => not swap
// b c => not swap
// b d => not swap
// b e => not swap
// b f => not swap
// b b => not swap
// b b => not swap


function sortAString(input){
    let output = input;
    for(let i = 0; i < output.length; i++){
        for(let j = i + 1; j < output.length; j++){
            var secondItem = output[j];
            var firstItem = output[i];
            var reservedOutput = output;
            if(output[i] > output[j]){
                output = reservedOutput.substring(0, i - 1) + secondItem + reservedOutput.substring(i + 1, j -1) + firstItem + reservedOutput.substring(j + 1, reservedOutput.length) ;
            } else {
                output = reservedOutput.substring(0, i - 1) + firstItem + reservedOutput.substring(i + 1, j -1) + secondItem + reservedOutput.substring(j + 1, reservedOutput.length) ;
            }
            console.log('----')
        }
    }

    return output;
}

console.log(sortAString(inputString));