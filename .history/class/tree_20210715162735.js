const Node = require('./node');

class Tree {
    constructor() {
        this.root = null;
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
        const center = Math.round(arr.length/2);
        let space = ' '*center;
        console.log('+',space);
        console.log('>>>', this.root.data, '<<<');
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;