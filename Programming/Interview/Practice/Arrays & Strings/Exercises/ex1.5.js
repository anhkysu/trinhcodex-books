// One  Away:  There  are  three  types  of  edits  that  can  be  performed  on  strings:  
// insert  a  character,  remove  a  character,  or  replace  a  character.  
// Given  t w o  strings,  write  a  function  to  check  if  they are  one edit  (or zero edits)  away. 
// EXAMPLE 
// p a l e , ple ->  t r u e  
// p a l e s ,  pale  ->  t r u e  
// p a l e , bale  ->  t r u e  
// p a l e , bake  ->  f a l s e 
function isOneEditAway(a, b) {
    var result = true;
    var _a = {};
    if (Math.abs(a.length - b.length) > 1) {
        return false;
    }
    for (var i = 0; i < a.length; i++) {
        if (!_a[a[i]]) {
            _a[a[i]] = 0;
        }
        _a[a[i]]++;
    }
    var _b = {};
    for (var i = 0; i < b.length; i++) {
        if (!_b[b[i]]) {
            _b[b[i]] = 0;
        }
        _b[b[i]]++;
    }
    var mergeWithDiff = {};
    Object.keys(_a).forEach(function (item) {
        if (!_b[item]) {
            mergeWithDiff[item] = _a[item];
        }
        else {
            mergeWithDiff[item] = Math.abs(_a[item] - _b[item]);
        }
    });
    var countDiff = 0;
    Object.keys(mergeWithDiff).forEach(function (item) {
        countDiff += mergeWithDiff[item];
    });
    if (countDiff > 1) {
        result = false;
    }
    return result;
}
function isOneEditAway_usingSortString(a, b) {
    var result = true;
    var countDiff = 0;
    var aSorted = sortString(a);
    var bSorted = sortString(b);
    if (a.length >= b.length) {
        for (var i = 0; i < aSorted.length; i++) {
            if (aSorted[i] != bSorted[i]) {
                countDiff++;
            }
        }
    }
    else {
        for (var i = 0; i < bSorted.length; i++) {
            if (bSorted[i] != aSorted[i]) {
                countDiff++;
            }
        }
    }
    if (countDiff > 1) {
        result = false;
    }
    return result;
}
function sortString(aString) {
    var sortedArray = aString.split("");
    for (var i = 0; i < aString.length; i++) {
        for (var j = i + 1; j < aString.length; j++) {
            if (sortedArray[i] > sortedArray[j]) {
                var temp = sortedArray[i];
                sortedArray[i] = sortedArray[j];
                sortedArray[j] = temp;
            }
        }
    }
    return sortedArray.join("");
}
console.log(isOneEditAway("pale", "lapes"));
