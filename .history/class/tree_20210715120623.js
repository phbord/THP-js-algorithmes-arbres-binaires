class Tree {
    constructor(arr) {
        this.arr = arr;
        this.root = null;
        //this.root = new Node(data);
    }

    insert(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
        }
        else
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;