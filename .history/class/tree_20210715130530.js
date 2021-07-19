const Node = require('./node');

class Tree {
    constructor(list) {
        this.list = list;
        this.root = null;
    }

    insert() {
        const node = this.root;
        if (node === null) {
            this.root = new Node(this.list[0]);
            return;
        }
        else {
            const listSize = this.list.length;
            let i = 1;
            let direction = true;
            while (i < listSize) {
                if (direction === true && node.left === null) {
                    node.root = new Node(list[i]);
                    i++;
                }
                else if (direction === false && node.right === null) {
                    node.right = new Node(list[i]);
                    i++;
                }
                direction = !direction;
            }
        }
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;