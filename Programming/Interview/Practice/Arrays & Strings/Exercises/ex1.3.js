// URLify: Write a method to replace all spaces in a string with '%20'.

function urlify(str, realLength){
    let strOutput = "";
    for(let i = 0; i < realLength; i++){
        if(str[i] === " "){
            strOutput += '%20';
        } else {
            strOutput += str[i];
        }
    }
    console.log(strOutput);
    // Time Complexity: O(realLength)
    return strOutput;
}

urlify("Mr John Smith       a", 13);

