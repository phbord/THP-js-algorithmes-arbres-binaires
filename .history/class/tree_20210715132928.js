const Node = require('./node');

class Tree {
    constructor(list) {
        this.list = list;
        this.root = null;
    }

    insert() {
        const node = this.root;
        console.log('====',node);
        if (node === null) {
            this.root = new Node(this.list[0]);
            return;
        }
        const listSize = this.list.length;
        let i = 1;
        let direction = true;
        while (i < listSize) {
            if (direction === true && node.left === null) {
                node.left = new Node(this.list[i]);
                i++;
            }
            else if (direction === false && node.right === null) {
                node.right = new Node(this.list[i]);
                i++;
            }
            direction = !direction;
        }
    }

    insertNode(node, newNode) {
        
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;