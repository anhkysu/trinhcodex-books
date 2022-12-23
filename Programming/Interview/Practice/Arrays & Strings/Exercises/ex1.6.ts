// Implement  a  method  to  perform  basic  string  compression  using  the  counts 
// of  repeated  characters.  For  example,  the  string  a a b c c c c c a a a  w o u l d  become  a 2 b l c 5 a 3 ,  If  the 
// "compressed" string  would  not  become  smaller than  the original  string, your method  should  return  
// the  original  string. You  can  assume the  string has  only  uppercase and  lowercase  letters (a - z)
// inputString = aabcccdd
// tempChar = ""
// i = 0; char = "a" != tempChar; countChar = 1; tempChar = "a"; nextChar = "a" = char 
// i = 1; char = "a" = tempChar; countChar = 2; tempChar = "a"; nextChar = "b" != char => splice(1, 1, "2")  /// splice (countChar - 1) elements starting from i - (countChar) + 1 and append "a2" (splice(0, 1))
// inputString = a2bcccdd
// i = 2; char = "b" != tempChar; countChar = 1; tempChar = "b"; nextChar = "c" != char => splice(3, 0, "1")
// i = 3; char = "c" != tempChar; countChar = 1; tempChar = "c"; nextChar = "c" = char 
// i = 4; char = "c" = tempChar; countChar = 2; tempChar = "a"; nextChar = "c" = char 
// i = 5; char = "c" = tempChar; countChar = 3; tempChar = "c"; nextChar = "d" != char => splice(4, 2, "3");
// i = 6; char = "d" != tempChar; countChar = 1; tempChar = "d"; nextChar = "d" = char
// i = 7; char = "d" = tempChar; countChar = 2; tempChar = "d"; i = 7


function compressString(x: string){
    let result = "";
    let splitedArray = x.split("");
    let tempRptCount = 0;
    let tempChar = splitedArray[0];
    for(let i = 0; i < splitedArray.length; i++) {
        if(splitedArray[i] == tempChar || i == 0){
            tempRptCount++;
        } else {
            splitedArray.splice(i - 1, tempRptCount - 1, tempRptCount.toString());
            tempChar = splitedArray[i];
            i = i + 2 - (tempRptCount);
            tempRptCount = 1;
        }
    }
    result = splitedArray.join("");
    if(result.length < x.length){
        console.log(x);
        return x;
    } else {
        console.log(result);
        return result;
    }
}

function compressString_notGoodAtAll(x: string){
    let result = "";
    let splitedArray = x.split("");
    let tempRptCount = 0;
    for(let i = 1; i < splitedArray.length; i++) {
        if(splitedArray[i] == splitedArray[i-1]){
            tempRptCount++;
        } else {
            if(tempRptCount > 0){
                splitedArray.splice(i - tempRptCount, tempRptCount, tempRptCount.toString());
                i = i - tempRptCount + 1;
                tempRptCount = 0;
            }            
        }
    }
    result = splitedArray.join("");
    if(result.length > x.length){
        console.log(x);
        return x;
    } else {
        console.log(result);
        return result;
    }
}


function compressString_allCharacter(x: string){
    let result = "";
    let elements = {};
    for(let i = 0; i < x.length; i++){
        if(!elements[x[i]]){
            elements[x[i]] = 0;
        }
        elements[x[i]]++;
    }
    let sortedElementArray = sortArray(Object.keys(elements));
    for(let i = 0; i < sortedElementArray.length; i++){
        result += sortedElementArray[i] + elements[sortedElementArray[i]];
    }
    if(result.length > x.length){
        console.log(x);
        return x;
    } else {
        console.log(result);
        return result;
    }
}

function sortArray(sortedArray: Array<string>){
    for(let i:number = 0; i < sortedArray.length; i++){
        for(let j: number = i + 1; j < sortedArray.length; j++){
            if(sortedArray[i] > sortedArray[j]){
                let temp:string = sortedArray[i];
                sortedArray[i] = sortedArray[j];
                sortedArray[j] = temp;
            }
        }
    }
    return sortedArray;
}


compressString('aabcccccaaa');