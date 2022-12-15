var testString = "abcfghh";
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

function determineStringHasAllUniqueCharactersNoAdditionalDatastrucuture(inputStr){
    let result = true;
    let checkStr = "";
    for(let i = 0; i < inputStr.length; i++){
        for(let j = 0; j < checkStr.length; j++){
            if(checkStr[j] == inputStr[[i]]){
                result = false;
                break;
            }
        }
        if(!result) break;
        checkStr = checkStr + inputStr[i];
    }

    return result;

}


console.log(determineStringHasAllUniqueCharactersNoAdditionalDatastrucuture(testString));