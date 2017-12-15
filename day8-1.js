const fs = require('fs');
const objStore = {};

const comparator = {
  '<': function (x, y) { return (x < y) },
  '<=': function (x, y) { return (x <= y) },
  '==': function (x, y) { return (x == y) },
  '!=': function (x, y) { return ( x != y) },
  '>': function (x, y) { return (x > y) },
  '>=': function (x, y) { return (x >= y) }
}

let data = fs.readFileSync('./day8-raw.txt').toString();
data = data.split('\n');

data = data.map((line) => {
  let commands = line.split(' ');
  return commands;
})

let largest = 0;
data.forEach((line) => {
  let init = 0;
  let conditional = 0;
  
  if (objStore[line[0]] !== undefined) {
    init = objStore[line[0]];
  }

  if (objStore[line[4]] !== undefined) {
    conditional = objStore[line[4]];
  }

  if (comparator[line[5]](conditional, parseInt(line[6]))) {
    if (line[1] === 'inc') {
      init += parseInt(line[2]);
      //add value
    } else {
      //subtract value
      init -= parseInt(line[2]);
    }
  }

  if (init > largest) {
    largest = init;
  }
  objStore[line[0]] = init;
})
console.log(largest);

//start from top of commands--
//check to see if command is already entered into obj
  //if it is-- then set initial number and execute conditional
    //check if conditional entered into obj
      //if it is, then use that conditionals number for comparator
      //if it not, then use 0
    //if command not in obj, use 0 as intial and store into obj
