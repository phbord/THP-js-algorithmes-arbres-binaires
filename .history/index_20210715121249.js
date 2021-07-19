const Tree = require('./class/tree');

const list = [4,2,9,5,1,8,9];

const tree = new Tree(list);
tree.insert();
console.log('tree.insert(): ', tree.insert());



// COMMANDES :
// - `node index.js`