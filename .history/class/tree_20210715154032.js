const Node = require('./node');

class Tree {
    constructor(data) {
        this.list = list;
        this.root = null;
    }
//4, 2, 9, 5, 1, 8, 9
    insert() {
        const node = this.root;
        const newNode = new Node(this.list[0]);
        if (node === null) {
            this.root = newNode;
        }
        this.insertNode(this.root);
        return false;
    }

    insertNode(node) {
        if (this.index + 1 < this.listSize) {
            this.index++;
            if (this.even === true) {
                node.left = new Node(this.list[this.index]);
            }
            else if (this.even === false) {
                node.right = new Node(this.list[this.index]);
            }
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