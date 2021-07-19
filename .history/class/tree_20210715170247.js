const Node = require('./node');

class Tree {
    constructor() {
        this.root = null;
    }

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
        const center = Math.round(arr.length/2)*3;
        let rootPos = () => {
            let i = 1;
            let str = ' ';
            while (i < center) {
                str += ' ';
                i++;
            }
            return `${str}${this.root.data}`;
        };
        console.log(rootPos());
    }

    contains(data) {
        console.log('>>>>', this.root);
        if (data === this.root) {
        }
    }

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;