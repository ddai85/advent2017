const fs = require('fs');

function isAnagram (word1, word2) {
  let word1Arr = word1.split('');
  let word2Arr = word2.split('');

  for (let i of word1Arr) {
    let hasLetter = false;
    for (let j in word2Arr) {
      if (i === word2Arr[j]) {
        hasLetter = true;
        word2Arr.splice(j, 1);
        break;
      }
    }
    if (!hasLetter) {
      return false;
    }
  }
  if (word2Arr.length > 0) {
    return false;
  }
  return true;
}
console.log(isAnagram('ehphfgq', 'ehphfgq'))

fs.readFile('./day4-raw.txt', (err, buffer) => {
  let data = buffer.toString().split('\n');
  data = data.map((phrase) => {
    let words = phrase.split(' ');
    let obj = {};
    for (let i = 0; i < words.length - 1; i++) {
      for (let j = i + 1; j < words.length; j++) {
        if (isAnagram(words[i], words[j])) {
          //console.log(words[i], words[j]);
          return null;
        }
      }
    }
    return words;
  })
  //console.log(data);
  let count = 0;
  data.forEach((phrase) => {
    if (phrase === null) {
      return;
    } else {
      count++;
    }
  })
  console.log(count);
})

