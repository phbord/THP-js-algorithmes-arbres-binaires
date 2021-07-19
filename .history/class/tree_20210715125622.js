const Node = require('./node');

class Tree {
    constructor(data) {
        this.data = data;
        this.root = null;
    }

    insert() {
        const node = this.root;
        if (node === null) {
            this.root = new Node(this.data[0]);
            return;
        }
        else {
            const dataSize = this.data.length;
            let i = 1;
            let direction = true;
            while (i < dataSize) {
                if (direction === true && node.left === null) {
                    node.left = new Node(data[i]);
                    i++;
                }
                else if (direction === false && node.right === null) {
                    node.right = new Node(data[i]);
                    i++;
                }
                direction = !direction;
            }
        }
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;