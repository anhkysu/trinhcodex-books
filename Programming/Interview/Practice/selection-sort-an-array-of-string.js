let inputArrayOfString = ['bbccdefbbaa', 'ba', 'fd', 'gfddfg'];
let inputSortedArrayOfString = ['df','aabbbbccdef', 'ab', 'ddffgg'];
let outputSortedArrayOfString = ['aabbbbccdef', 'ab', 'df', 'ddffgg'];

function sortArrayOfSortedString(inputArray){
    let output = inputArray;
    for(let i = 0; i < output.length; i++){
        for(let j = i + 1; j < output.length; j++){
            if(output[i][0] > output[j][0]){
                let temp = output[j];
                output[j] = output[i]
                output[i] = temp;
            } 
        }
    }

    return output;
}

console.log(sortArrayOfSortedString(inputSortedArrayOfString));