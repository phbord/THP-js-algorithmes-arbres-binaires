const Node = require('./node');

class Tree {
    constructor(list) {
        this.list = list;
        this.root = null;
        this.index = 0;
        this.even = true;
        this.isFirst = true;
        this.listSize = this.list.length;
    }
//4, 2, 9, 5, 1, 8, 9
    insert() {
        const node = this.root;
        const newNode = new Node(this.list[0])
        if (node === null) {
            this.root = ;
        }
        this.insertNode(this.root);
        return false;
    }

    insertNode(node) {
        if (this.index + 1 < this.listSize) {
            this.index++;
            if (this.even === true) {
                if (this.isFirst === false) {
                    node = node.left[this.index];
                }
                node.left = new Node(this.list[this.index]);
            }
            else if (this.even === false) {
                if (this.isFirst === false) {
                    node = node.right;
                }
                node.right = new Node(this.list[this.index]);
            }
            if (this.isFirst === true) this.isFirst = false;
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