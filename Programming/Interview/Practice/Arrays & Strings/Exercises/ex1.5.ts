// One  Away:  There  are  three  types  of  edits  that  can  be  performed  on  strings:  
// insert  a  character,  remove  a  character,  or  replace  a  character.  
// Given  t w o  strings,  write  a  function  to  check  if  they are  one edit  (or zero edits)  away. 
// EXAMPLE 
// p a l e , ple ->  t r u e  
// p a l e s ,  pale  ->  t r u e  
// p a l e , bale  ->  t r u e  
// p a l e , bake  ->  f a l s e 

function isOneEditAway(a: string, b:string): boolean{ // O(a+b)
    let result:boolean = true;
    let _a = {};
    if(Math.abs(a.length - b.length) > 1){
        return false;
    }
    for(let i:number = 0; i < a.length; i++){
        if(!_a[a[i]]){
            _a[a[i]] = 0;
        }
        _a[a[i]]++;
    }
    let _b = {};
    for(let i:number = 0; i < b.length; i++){
        if(!_b[b[i]]){
            _b[b[i]] = 0;
        }
        _b[b[i]]++;
    }
    let mergeWithDiff = {};
    Object.keys(_a).forEach(item => {
        if(!_b[item]){
            mergeWithDiff[item] = _a[item];
        } else {
            mergeWithDiff[item] = Math.abs(_a[item]- _b[item]);
        }
    });
    let countDiff = 0;
    Object.keys(mergeWithDiff).forEach(item => {
        countDiff += mergeWithDiff[item];
    });
    if(countDiff > 1){
        result = false;
    }

    return result;
}


function isOneEditAway_usingSortString(a: string, b:string): boolean{ // O(aloga + blogb)
    let result:boolean = true;
    let countDiff:number = 0;
    let aSorted:string = sortString(a);
    let bSorted:string = sortString(b);
    if(a.length >= b.length){
        for(let i:number = 0; i < aSorted.length; i++){
            if(aSorted[i] != bSorted[i]){
                countDiff++;
            }
        }
    } else {
        for(let i:number = 0; i < bSorted.length; i++){
            if(bSorted[i] != aSorted[i]){
                countDiff++;
            }
        }
    }
    
    if(countDiff > 1){
        result = false;
    }

    return result;
}

function sortString(aString: string){
    let sortedArray:Array<string> = aString.split("");
    for(let i:number = 0; i < aString.length; i++){
        for(let j: number = i + 1; j < aString.length; j++){
            if(sortedArray[i] > sortedArray[j]){
                let temp:string = sortedArray[i];
                sortedArray[i] = sortedArray[j];
                sortedArray[j] = temp;
            }
        }
    }
    return sortedArray.join("");
}

console.log(isOneEditAway("pale", "lapes"));
   