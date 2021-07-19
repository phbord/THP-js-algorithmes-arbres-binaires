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
            while ()
        }
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;