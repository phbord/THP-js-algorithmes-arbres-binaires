const Node = require('./node');

class Tree {
    constructor(data) {
        this.data = data;
        this.root = null;
    }
//4, 2, 9, 5, 1, 8, 9
    insert() {
        const newNode = new Node(this.list[0]);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            if(node.left === null)
        }
        else return false;
        console.log('index: ',this.index, ' / even: ', this.even);
        this.insertNode(node);
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;