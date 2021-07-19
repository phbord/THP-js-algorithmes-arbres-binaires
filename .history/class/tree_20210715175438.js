const Node = require('./node');

class Tree {
    constructor(arr) {
        this.root = null;
        this.arr = arr;
        this.newNode = new Node(data);
    }

    insert(data) {
        const newNode = new Node(data);
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
            if (node.left === null) node.left = newNode;
            else this.insertNode(node.left, newNode);
        }
        else {
            if (node.right === null) node.right = newNode;
            else this.insertNode(node.right,newNode);
        }
    }

    to_s(arr) {
        const center = Math.round(arr.length/2)*3;
        const rootPos = () => {
            let i = 1;
            let str = ' ';
            while (i < center) {
                str += ' ';
                i++;
            }
            return `${str}${this.root.data}`;
        };
        const l = () => {};
        console.log(rootPos());
    }

    contains(value) {
        console.log(value, '>>>>', this.root.data);
        if (value === this.root.data) {
            console.log('=> if');
            return true;
        }
        else if(value < this.root.data) {
            console.log('=> else if');
            if (this.root.left === null) return false;
            else return this.root.left.contains(value);
        }
        else {
            console.log('=> else');
            if (this.root.right === null) return false;
            else return this.root.right.contains(value);
        }
    }

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;