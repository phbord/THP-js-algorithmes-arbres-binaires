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
            let i = 1;
            while (i < listSize) {
                if (node.left === null) {
                    node.left = new Node(data);
                    return;
                }
                
            }
        }
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;