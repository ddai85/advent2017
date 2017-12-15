const fs = require('fs');

const jumpInstructions = function (array) {
  let index = 0;
  let step = 0;

  while (index >= 0 && index < array.length) {
    let oldIndex = index;
    index += array[index];

    if (array[oldIndex] >= 3) {
      array[oldIndex]--;
    } else {
      array[oldIndex]++;
    }
    step++;
  }

  return step;
};

//console.log(jumpInstructions([0, 3, 0, 1, -3]))



fs.readFile('./day5-raw.txt', (err, buffer) => {
  let data = buffer.toString().split('\n');
  data = data.map((value) => {
    return parseInt(value);
  })

  console.log(jumpInstructions(data));

})
