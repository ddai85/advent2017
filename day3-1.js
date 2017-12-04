function calculateSpiral(number) {
  //right, up, left, down
  let square = 1;
  let root = 1;
  while (square < number) {
    root++;
    square = root * root;
  }
  root = root - 1
  square = root * root;
  let remaining = number - square;
  remaining -= 515; 


  console.log(root);
  
  console.log(remaining);

  //use remaining to calculate position along bottom edge
  //use this location to find distance from center
}

console.log(calculateSpiral(265149));