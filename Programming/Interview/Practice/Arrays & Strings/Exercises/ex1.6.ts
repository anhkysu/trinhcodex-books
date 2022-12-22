// Implement  a  method  to  perform  basic  string  compression  using  the  counts 
// of  repeated  characters.  For  example,  the  string  a a b c c c c c a a a  w o u l d  become  a 2 b l c 5 a 3 ,  If  the 
// "compressed" string  would  not  become  smaller than  the original  string, your method  should  return  
// the  original  string. You  can  assume the  string has  only  uppercase and  lowercase  letters (a - z)

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