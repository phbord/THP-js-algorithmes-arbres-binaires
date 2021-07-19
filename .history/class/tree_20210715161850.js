const Node = require('./node');

class Tree {
    constructor(array) {
        this.root = null;
        this.array = array;
    }
//4, 2, 9, 5, 1, 8, 9
    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            if(node.left === null) node.left = newNode;
            else this.insertNode(node.left, newNode);
        }
        else {
            if(node.right === null) node.right = newNode;
            else this.insertNode(node.right,newNode);
        }
    }

    to_s(arr) {
        
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;