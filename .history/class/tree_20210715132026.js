const Node = require('./node');

class Tree {
    constructor(list) {
        this.list = list;
        this.root = new Node(this.list[0]);
    }

    insert() {
        const node = this.root;
        // console.log('====',node);
        // if (node === null) {
        //     this.root = new Node(this.list[0]);
        //     return;
        // }
        // else {
            console.log('3====',node);
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
        //}
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;