class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          console.log("current left inside :" + current.left.value); //99,50
          return this;
        }

        current = current.left;
        console.log("current  outside :" + current.value); //99
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        console.log("current right");
        current = current.right;
      }
    }
  }

  /****** Breadth- First Search (BFS) ******/
  /*Breadth-first search is a traversing algorithm that is used  for searching or traversing the tree or graph data structure layer by layer. Before moving on to the children node of the next depth level, it visits each node that exists at the current depth.
  Breadth first search is an algorithm for searching a tree or graph data structure. It begins at the root node then explores all nodes left to right, level by level. Breadth first search follows the FIFO (first in, first out) principle and can be implemented with a queue.*/
  BFS() {
    var node = this.root;
    let queue = [];
    let data = [];
    queue.push(node);
    console.log(queue.length);
    while (queue.length) { 
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
//tree.find(13);
tree.BFS();
console.log(tree);
