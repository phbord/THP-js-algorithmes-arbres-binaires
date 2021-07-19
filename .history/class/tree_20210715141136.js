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
        if (i + 1 < listSize) {
            this.root.left = new Node(this.list[1]);
            i++;
        }
        if (i + 1 < listSize) {
            this.root.right = new Node(this.list[1]);
            i++;
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