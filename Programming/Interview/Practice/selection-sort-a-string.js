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


function sortAString_v1(input){
    let output = input.split("");
    console.log(output);
    for(let i = 0; i < output.length; i++){
        for(let j = i + 1; j < output.length; j++){
            if(output[i] > output[j]){
                let temp = output[j];
                output[j] = output[i]
                output[i] = temp;
            } 
        }
    }

    return output.join("");
}

// sortAString Big O Time
// => N-1 + N-2 + N-3 + .... + 3 + 2 + 1 (Times of second loop)
// => N*(N-1)/2
// O(N^2)

function sortAString_v2(input){
    let output = input;
    for(let i = 0; i < output.length; i++){
        for(let j = i + 1; j < output.length; j++){
            // aXYnhsbj
            if(output[i] > output[j]){
                let sec = output[j];
                let fir = output[i];
                // Method 01
                //output = output.substring(0, i) + sec + output.substring(i+1, output.length);
                //output = output.substring(0, j) + fir + output.substring(j+1, output.length);

                //Method 02
                output = output.substring(0, i) + sec + output.substring(i+1, j) + fir + output.substring(j+1, output.length);
            } 
        }
    }

    return output;
}

//console.log(sortAString_v2(inputString));
console.log(sortAString_v2("gfddfg"));