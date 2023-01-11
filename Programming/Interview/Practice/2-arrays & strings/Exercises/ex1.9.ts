// Assumeyou have a method isSubstring which checks if one word is a substring of another. 
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring 
// (e.g.,"waterbottle"is a rotation of"erbottlewat").

function isSubstring(parentWord:string, childWorld:string){
    if(parentWord.includes(childWorld)){
        return true;
    }
    return false;
}

function isStringRotationBetter(s1:string, s2:string){
    // if s1 is a rotation of s2
    // s2 = "waterbottle" = "wat" "erbottle" = xy
    // s1 = "erbottlewat" = "erbottle" "wat" = yx
    // We can see that yxyx always contains xy
    // That means s1s1 always contains s2
    // Or s2 is the substring of s1s1
    if(s1.length == s2.length && s1.length > 0){
        let s1s1 = s1 + s1;
        return isSubstring(s1s1, s2);
    }
    return false;
}

function isStringRotation(s1:string, s2:string){ // O(S2)
    let s1firstchar = s1[0];
    let rotates2string = JSON.parse(JSON.stringify(s2));
    let s2Array = s2.split("");
    let i = 0;
    while (i < s2Array.length){
        if(s2Array[0] == s1firstchar){
            rotates2string = s2Array.join("");
            console.log(rotates2string);
            if(isSubstring(s1, rotates2string) && s1.length == rotates2string.length){
                return true
            }
        }
        let popItem = s2Array.splice(0, 1);
        s2Array = s2Array.concat(popItem);
        i++;
    }
    return false;
}

console.log(isStringRotationBetter("erbottlewat", "waterbottle"));