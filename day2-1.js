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

  console.log(typeof matrixInt[0][1]);

  function checkSum (matrix) {
    let checksum = 0;
    for (let i = 0; i < matrix.length; i++) {
      let largest = parseInt(matrix[i][0]);
      let smallest = parseInt(matrix[i][0]);
      for (let j = 0; j < matrix[i].length; j++) {
        if (parseInt(matrix[i][j]) > largest) {
          largest = parseInt(matrix[i][j]);
        } else if (parseInt(matrix[i][j]) < smallest) {
          smallest = parseInt(matrix[i][j]);
        }
      }
      //console.log(largest - smallest);
      checksum += largest - smallest;
    }
    return checksum;
  }

  console.log(checkSum(matrix));

});

