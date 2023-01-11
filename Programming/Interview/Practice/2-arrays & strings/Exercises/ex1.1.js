var testString = "abcfghb";
function determineStringHasAllUniqueCharacters(inputStr){
    let result = true;
    let checkArray = [];
    for(let i = 0; i < inputStr.length; i++){
        if(checkArray.includes(inputStr[i])){
            result = false;
            break;
        } else {
            checkArray.push(inputStr[i]);
        }
    }
    return result;

    // Calculate Time Complexity
    // Worst Case Complexity: O(n^2);
    // Best Case Complexity: O(1);
}

function determineStringHasAllUniqueCharactersClean(inputStr){
    for(let i = 0; i < inputStr.length; i++){
        for(let j = i+1; j < inputStr.length; j++){
            if(inputStr[i] == inputStr[j]){
                return false
            }
        }
    }
    return true;

    // Calculate Time Complexity
    // O(n^2)
}

function determineStringHasAllUniqueCharactersUsingHashTableLikeMethod(inputStr){
    let checkStrArray = {};
    for(let i = 0; i < inputStr.length; i++){
        if(checkStrArray[inputStr[i]]){
            return false;
        }
        checkStrArray[inputStr[i]] = true;
    }
    return true

    // Time Complexity
    // O(n)
}


console.log(determineStringHasAllUniqueCharactersUsingHashTableLikeMethod(testString));