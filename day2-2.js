const fs = require('fs')
fs.readFile('./rawData.txt', (err, data) => {
  let matrix = data.toString().split('\n').map((row) => {
    return row.split('\t');
  });

  let matrixInt = matrix.map((row) => {
    return row.map((value) => {
      return parseInt(value);
    })
  });

  function findDivisible(array) {
    for (let j = 0; j < array.length; j++) {
      for (let k = 0; k < array.length; k++) {
        if (array[k] % array[j] === 0 && array[k] !== array[j]) {
          return array[k] / array[j];
        }
      }
    }
  }

  function checkSum (matrix) {
    let checksum = 0;
    for (let i = 0; i < matrix.length; i++) {
      matrix[i].sort();
      checksum += findDivisible(matrix[i])
    }
    return checksum;
  }

  console.log(checkSum(matrix));

});

