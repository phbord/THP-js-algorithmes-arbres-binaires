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
        if (node === null) {
            this.root = new Node(this.list[0]);
        }
        this.insertNode(this.root);
        return false;
    }

    insertNode(node) {
        if (this.index + 1 < this.listSize) {
            this.index++;
            if (this.isFirst === false) {

            }
            if (this.even === true && this.isFirst === true) {
                node.left = new Node(this.list[this.index]);
            }
            else if (this.even === false && this.isFirst === true) {
                node.right = new Node(this.list[this.index]);
            }
            if (this.isFirst === true) this.isFirst = false;
        }
        else return false;
        console.log('index: ',this.index, ' / even: ', this.even);
        //this.insertNode();
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;