const Node = require('./node');

class Tree {
    constructor(list) {
        this.list = list;
        this.root = null;
        this.index = 0;
        this.listSize = this.list.length;
    }
//4, 2, 9, 5, 1, 8, 9
    insert() {
        const node = this.root;
        if (node === null) {
            this.root = new Node(this.list[0]);
        }
        this.insertNode();
        return;
    }

    insertNode() {
        if (this.index + 1 < this.listSize) {
            this.root.left = new Node(this.list[this.index + 1]);
            this.index++;
        }
        if (this.index + 1 < this.listSize) {
            this.root.right = new Node(this.list[this.index + 1]);
            this.index++;
        }
        this.insertNode();
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;