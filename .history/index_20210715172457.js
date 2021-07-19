const Tree = require('./class/tree');

const list = [4, 2, 9, 5, 1, 8, 9];

const tree = new Tree();
for (const elt of list) {
    tree.insert(elt);
}
tree.to_s(list);
tree.contains(4);

console.log('TREE: ', tree);



// COMMANDES :
// - `node index.js`