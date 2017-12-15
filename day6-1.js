function memoryBlocks(array) {

  //need to store the final pattern and check after each cycle to see if that pattern has been used before
  //best way to store pattern would be as a number and add to an object
  let objStore = {};
  objStore[array.join()] = true;
  objStore['0,14,13,12,11,10,8,8,6,6,5,3,3,2,1,10'] = true;

  let patternMatched = false;
  let cycleCount = 0;

  while (!patternMatched) {
    cycleCount++;
    let largestIndex = 0;
    array.forEach((value, index) => {
      if (value > array[largestIndex]) {
        largestIndex = index;
      }
    });
    let blocks = array[largestIndex];
    array[largestIndex] = 0;
    while (blocks > 0) {
      largestIndex++;
      largestIndex = largestIndex === array.length ? 0 : largestIndex;
      array[largestIndex]++;
      blocks--;
    }

    if (objStore[array.join()]) {
      patternMatched = true;
    } else {
    objStore[array.join()] = true;
    }
  }
  console.log(array.join())
  return cycleCount;
}


let test = [4, 1, 15, 12, 0, 9, 9, 5, 5, 8, 7, 3, 14, 5, 12, 3];
console.log(memoryBlocks(test));