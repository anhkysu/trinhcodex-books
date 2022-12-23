// Given  an  image  represented  by  an  NxN  matrix,  where  each  pixel  in  the  image  is  4  
// bytes,  write a  method  to  rotate  the  image  by 90 degrees. Can you do  this in  place? 
//
//Image = [["4 bytes", "4 bytes"], ["4 bytes", "4 bytes"]]

// 1 2
// 3 4

// 2 4
// 1 3

// ***

// 1 2 3
// 4 5 6
// 7 8 9

// 3 6 9
// 2 5 8
// 1 4 7

// ***

// pixel_11 pixel_12
// pixel_21 pixel_22

// => rotated:
// pixel_12 pixel_22
// pixel_11 pixel_21

// Data Structure: 
// 2 dimension array
// [[1,2,3],[4,5,6],[7,8,9]]
// Output [[3,6,9],[2,5,8],[1,4,7]]

// A'[1][1] = A[1][3]
// A'[2][1] = A[1][2]
// A'[3][1] = A[1][1]

// A'[1][2] = A[2][3]
// A'[2][2] = A[2][2]
// A'[3][2] = A[2][1]

// A'[1][3] = A[3][3]
// A'[2][3] = A[3][2]
// A'[3][3] = A[3][1]

function rotateImg90(image){
    let dimension = image.length;
    let copiedImage = JSON.parse(JSON.stringify(image));
    let newImage = JSON.parse(JSON.stringify(image));
    for(let i = 0; i < dimension; i++){
        for(let j = 0; j < dimension; j++){
            newImage[j][i] = copiedImage[i][dimension - 1 - j]
        }
    }
    // COmplexity: O(n^2)
}

let testImage =  [[1,2,3,4],[5,6, 7, 8],[7,8,9, 10], [1,2,3,4]];
rotateImg90(testImage);