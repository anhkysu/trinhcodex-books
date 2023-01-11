// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

// Matrix MxN
// Contains 1 0 element

// 1 0
// 1 2

// 0 0
// 1 0
// 1 2 3
// 4 5 0
// 7 8 9

// 1 2 0
// 0 0 0
// 7 8 0

function setCrossZero(matrix: Array<Array<number>>, row:number, col:number){ // O(M+N)
    let result = JSON.parse(JSON.stringify( matrix));
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if( i == row || j == col){
                result[i][j] = 0;
            }
        }
    }
    //console.log(result);
    return result;
}

function setRCZerosIfContainedZero(matrix: Array<Array<number>>){ // O(M*N)
    let result = JSON.parse(JSON.stringify(matrix));
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j ++){
            if(matrix[i][j] == 0){
                result = setCrossZero(result, i, j);
            }
        }
    }
    console.log(result);
    return result;
}

setRCZerosIfContainedZero([[1,0,3], [3,4,5], [6,7,0]]);