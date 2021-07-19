const Node = require('./node');

class Tree {
    constructor(list) {
        this.list = list;
        this.root = null;
    }

    insert() {
        const node = this.root;
        const listSize = this.list.length;
        let i = 0;
        if (node === null) {
            this.root = new Node(this.list[0]);
        }
        if (i + 1listSize) {
            this.root.left = new Node(this.list[1]);
        }
        return;
    }

    insertNode(node, newNode) {
        
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;