const Tree = require('./class/tree');

const list = [4, 2, 9, 5, 1, 8, 9];

const tree = new Tree(list);
tree.insert(4);
tree.insert(4);
console.log('TREE: ', tree);



// COMMANDES :
// - `node index.js`