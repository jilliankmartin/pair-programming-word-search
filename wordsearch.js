const transpose = function (matrix) {
    let arr1 = [];
    for (let i = 0; i < matrix.length; i++) {
        arr1.push([]);
    }
    for (let k = 0; k < matrix.length; k++) {
        for (let j = 0; j < matrix[k].length; j++) {
            arr1[k].push(matrix[k][j]);
        }
    }
    return arr1;
};

const transposeV2 = function(matrix) {
    // Put your solution here
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
  
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === 0) {
          result[j] = [];
        }
        result[j].push(matrix[i][j]); // inserts the value of matrix[i][j] at result[j][i]
      }
      // result
    }
    return result;
  };
  

console.log('Transpose version 1: ', transpose([[1,2,3],[4,5,6],[7,8,9]]));
console.log('Transpose version 2: ', transposeV2([[1, 2, 3],[4,5,6],[7,8,9]]));

const wordSearch = (letters, word) => {
    const transposed = transposeV2(letters);
    console.log(`After transposing it's: ${transposed}`);
    const found = findWordInRows(letters, word);
    const foundTransposed = findWordInRows(transposed, word);
    console.log(`found is: ${found} and foundTransposed is ${foundTransposed}`);
    return found || foundTransposed;
}

const findWordInRows = (mat, word) => {
    const horizontalJoin = mat.map(ls => ls.join(''))
    console.log(horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        } 
    }
    return false;
}

module.exports = wordSearch

console.log(wordSearch([['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SEINFELD'));