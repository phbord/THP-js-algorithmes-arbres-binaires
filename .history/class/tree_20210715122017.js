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
            const listSize = this.list.length - 1;
            let i = 1;
            while () {}
        }
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;