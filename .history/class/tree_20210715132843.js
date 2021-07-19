const Node = require('./node');

class Tree {
    constructor(list) {
        this.list = list;
        this.root = null;
    }

    insert() {
        const node = this.root;
        const newNode = 
        console.log('====',node);
        if (node === null) {
            this.root = new Node(this.list[0]);
            return;
        }
        this.insertNode(node, newNode);
    }

    insertNode(node, newNode) {

    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;