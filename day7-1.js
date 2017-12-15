const fs = require('fs');
let nodes = fs.readFileSync('./day7-raw.txt').toString();
let nodesArr = nodes.split('\n');

nodesArr = nodesArr.map((node) => {
  node = node.split('-> ');
  if (node.length > 1) {
    let children = node[1].split(', ');
    node.pop();
    children.forEach((child) => {
      node.push(child);
    })
  }
  return node;
})

let allChildren = [];

for (let i = 0; i < nodesArr.length; i++) {
  if (nodesArr[i].length > 1) {
    for (let j = 1; j < nodesArr[i].length; j++) {
      allChildren.push(nodesArr[i][j])
    }
  }
}

for (let k = 0; k < nodesArr.length; k++) {
  if (allChildren.indexOf(nodesArr[k][0].split(' ')[0]) === -1) {
    console.log(nodesArr[k][0]);
  }
}