const Node = require('./node');

class Tree {
    constructor(list) {
        this.list = list;
        this.root = null;
        this.index = 0;
    }

    insert() {
        const node = this.root;
        const listSize = this.list.length;
        if (node === null) {
            this.root = new Node(this.list[0]);
        }
        if (this.index + 1 < listSize) {
            this.root.left = new Node(this.list[this.index + 1]);
            this.index++;
        }
        if (i + 1 < listSize) {
            this.root.right = new Node(this.list[i + 1]);
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