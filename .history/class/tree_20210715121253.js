const Node = require('./class/node');
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
        else {}
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;