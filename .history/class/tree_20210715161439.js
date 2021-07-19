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

    to_s() {
        let n = this.computeNumberLayers();
        let j = 0;
        let spacingNb = 2*(this.findLongestElement(this.array))-1;
        console.log((" ".repeat(spacingNb).repeat(Math.pow(2, n-1)-1) + this.root));

        for(let i = 1; i < n; i++) {
            console.log("\n");
            let borderSpacing = spacingNb*(Math.pow(2, n-i-1)-1);
            let interSpacing = spacingNb*Math.pow(2, n-i)-1;
            let repeatFrequency = Math.pow(2, i);
            let line = " ".repeat(borderSpacing);

            for(let k = 1; k <= repeatFrequency; k++) {
                interSpacing = spacingNb*Math.pow(2, n-i)-1;
                if (this.array[j] != null && this.array[j].toString(10).length > 1) {
                this.array[j] = this.array[j];
                interSpacing = spacingNb*Math.pow(2, n-i)-1 - (this.array[j].toString(10).length)/2;
                }
                if (this.array[j] != null && this.array[j+1] != null && this.array[j+1].toString(10).length > 1) {
                this.array[j] = this.array[j];
                interSpacing = spacingNb*Math.pow(2, n-i)-1 - (this.array[j].toString(10).length)/2;
                }
                else if (this.array[j] == null) {
                this.array[j] = " ";
                }
                line += this.array[j] + " ".repeat(interSpacing);
                j += 1;
            }
            console.log(line);
        }
    }

    computeNumberLayers() {
        let n = 0;
        let sum = 0;
        while (sum < this.array.length + 1) {
            sum = 0;
            for (let i = 0; i <= n; i++) {
                sum += Math.pow(2, i)
            }
    
            if (sum >= this.array.length + 1) {
                return n + 1
            } else {
                n +=1
            }
        }
    }

    find() {}

    inorder() {}

    postorder() {}

    preorder() {}
}

module.exports = Tree;