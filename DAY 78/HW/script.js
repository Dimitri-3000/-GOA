//1

function addMatrices(matrix1, matrix2) {
    
    
    const resultat = matrix1.map((value,index) => {
        return value.map((value2,index2) => {
            return value2 + matrix2[index][index2];
        })

    })

    return resultat
    
    
    
}


const matrix1 = [[1, 3], [1, 4]];
const matrix2 = [[4, 1], [2, 2]];

const result = addMatrices(matrix1, matrix2);
console.log(result);






2

function transposeMatrix(matrix) {
    
    if (matrix.length === 0 || matrix[0].length === 0) return [];
  
    
    const transposed = [];
  
   
    for (let col = 0; col < matrix[0].length; col++) {
      const newRow = [];
      
      for (let row = 0; row < matrix.length; row++) {
        newRow.push(matrix[row][col]);
      }
      transposed.push(newRow);
    }
  
    return transposed;
  }

const table = [["A","a"],
                ["B","b"],
                ["C","c"],
                ["D","d"]
                ]

console.log(transposeMatrix(table));




//3

let arr = [[1,4,2,7,1],[1,5,7,8,4],[5,6,7,6,5],[1,2,3,2,1],[1,2,3,2,5]];

function diagonal(rr){
    let sum = 0;
    let n = -1;
    for (let i = 0; i < rr.length; i++ ){
        n++;
        sum = sum + arr[i][n];
    }
    return sum;
};

console.log(diagonal(arr));
