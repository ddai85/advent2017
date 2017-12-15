const fs = require('fs');
let nodes = fs.readFileSync('./day7-raw.txt').toString();
let nodesArr = nodes.split('\n');


nodesArr = nodesArr.map((node) => {
  node = node.split('-> ');
  if (node.length > 1) {
    var children = node[1].split(', ');
    node.pop();
    children.forEach((child) => {
      node.push(child);
    });
  }
  let obj = {};
  let key = node[0].split(' (');
  let weight = key[1].split(')')[0];
  obj['index'] = key[0];
  obj['weight'] = parseInt(weight);
  obj['children'] = children;
  return obj;
})

const weightLookup = function (index) {
  let weight = 0;
  for (let i = 0; i < nodesArr.length; i++) {
    if (nodesArr[i]['index'] === index) {
      if (nodesArr[i]['children']) {
        nodesArr[i]['children'].forEach((child) => {
          weight += weightLookup(child);
        })
      }
      weight += nodesArr[i]['weight'];
      break;
    }
  }
  return weight;
}


const checkChildren = function (nodesArr) {
  for (let i in nodesArr) {
    if (nodesArr[i]['children'] !== undefined) {
      let weight = weightLookup(nodesArr[i]['children'][0]);
      for (let j = 1; j < nodesArr[i]['children'].length; j++) {
        if (weightLookup(nodesArr[i]['children'][j]) !== weight) {
          return nodesArr[i];
        }
      }
    }
  }
}

console.log(checkChildren(nodesArr).children);
console.log(1, weightLookup('nieyygi'))
console.log(2, weightLookup('hmcjz'))
console.log(3, weightLookup('ceizm'))
console.log(4, weightLookup('ptshtrn'))
console.log(5, weightLookup('mxgpbvf'))
console.log(6, weightLookup('cfqdsb'))
console.log(7, weightLookup('yfejqb'))

console.log(weightLookup('uslizt'))
console.log(weightLookup('pjqtv'))
console.log(weightLookup('bzbdorp'))
console.log(weightLookup('atvkttc'))

