/*Depth-first Traversal
Depth-first traversal involves traversing a tree from top to bottom. 
They are implemented in a FILO manner (First In Last Out), like the stack data structure.
The left sub-trees are traversed first, then the right sub-trees.
This is commonly seen when traversing a binary tree. Binary Trees are trees where each node has at most 2 child nodes.*/

/***** use NLR approach where N is node, L is left and R is right */
  DFSPreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  /***********OR**********/
  /*DFSPreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      node.left &&  traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(current);
    return data;
  }*/

  /***** use LRN approach where N is node, L is left and R is right */
  DFSPostOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }
  /***** use LNR approach where N is node, L is left and R is right */
  DFSInOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }