const Node = require('./node');

class Tree {
    constructor(list) {
        this.list = list;
        this.root = null;
    }

    insert() {
        const node = this.root;
        console.log('====',node);
        if (node === null) {
            this.root = new Node(this.list[0]);
            return;
        }
        node.left = new Node(this.list[0]);
    }

    insertNode(node, newNode) {
        
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;