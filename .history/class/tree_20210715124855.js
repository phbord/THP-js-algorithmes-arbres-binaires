const Node = require('./node');

class Tree {
    constructor(list) {
        this.list = list;
        this.root = null;
    }

    insert() {
        const node = this.root;
        if (node === null) {
            if (this.list[0]) this.root = new Node(this.list[0]);
            return;
        }
        else {
            const listSize = this.list.length;
            let i = 0;
            let direction = true;
            while (i < listSize) {
                if (direction === true && node.left === null) {
                    node.left = nodelistSize[i];
                    i++;
                }
                else if (direction === false && node.right === null) {
                    node.right = nodelistSize[i];
                    i++;
                }
                direction
            }
        }
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;