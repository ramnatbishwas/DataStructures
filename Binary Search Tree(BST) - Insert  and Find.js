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
          console.log("current left inside :" + current.left.value);
          return this;
        }

        current = current.left;
        console.log("current  outside :" + current.value);
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

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    console.log("found1:" + current.value); //10
    while (current && !found) {
      console.log("found2:" + current.value); //10,13,11
      if (value < current.value) {
        current = current.left;
        console.log("found3:" + current.value); //11
      } else if (value > current.value) {
        current = current.right;
        console.log("found4:" + current.value); //13
      } else {
        found = current;
        console.log("found5:" + current.value); //11
      }
    }
    if (!found) return undefined;
    return found; //updated found or current
  }

  /* -----OR---------*/
  /*find(value){
      if(!this.root) return false;
      let current = this.root;
      let found = false;
      while(current && !found){
            if(value < current.value){
              current = current.left;
             } else if(value > current.value){
                current = current.right;
             } else {
                  found = true;
             } 
            }
        if(!found) return undefined;
        return current //updated found or current 
      }*/

  /* -----OR---------*/
  /*contains(value){
      if(!this.root) return false;
      let current = this.root;
      let found = false;
      while(current && !found){
            if(value < current.value){
              current = current.left;
             } else if(value > current.value){
                current = current.right;
             } else {
                  return true;
             } 
        }
     return false;
      }*/
}
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
//tree.find(13);
//tree.contains(13);
//console.log(tree);
