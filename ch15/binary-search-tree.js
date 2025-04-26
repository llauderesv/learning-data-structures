class TreeNode {
  val;
  left;
  right;
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Condition in to call it a Tree
// A Tree always have an ancestor
// A root tree can have an ancestor and descendants should have an ancestor
class BinarySearchTree {
  search(val, node) {
    let root = node;
    if (!root || root.val === val) {
      return root;
    } else if (val > root.val) {
      // if val is greater than in the current node search in the right node
      return this.search(val, node.right);
    } else {
      // if less than search in the left node
      return this.search(val, node.left);
    }
  }

  // Only with a balanced tree does search take O(log N)
  // in a worst-case scenario, when a tree is completely imbalanced,
  // search is O(N). In a best-case scenario, when it is perfectly balanced, search
  // is O(log N). In the typical scenario, in which data is inserted in random order,
  // a tree will be pretty well balanced and search will take about O(log N).
  insert(val, node) {
    if (val < node.val) {
      if (node.left === undefined) {
        node.left = new TreeNode(val);
      } else {
        this.insert(val, node.left);
      }
    } else if (val > node.val) {
      if (node.right === undefined) {
        node.right = new TreeNode(val);
      } else {
        this.insert(val, node.right);
      }
    }
  }

  delete(valueToDelete, node) {
    if (!node) {
      return null;
    } else if (valueToDelete < node.val) {
      node.left = this.delete(valueToDelete, node.left);
      return node;
    } else if (valueToDelete > node.val) {
      node.right = this.delete(valueToDelete, node.right);
      return node;
    } else if (valueToDelete === node.val) {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        node.right = this.#lift(node.right, node);
        return node;
      }
    }
  }

  #lift(node, nodeToDelete) {
    if (node.left) {
      node.left = this.#lift(node.left, nodeToDelete);
    } else {
      nodeToDelete.val = node.val;
      return node.right;
    }
  }

  traverse(node) {
    if (!node) {
      return;
    }
    this.traverse(node.left);
    this.traverse(node.right);
    console.log(node.val);
  }
}

let node1 = new TreeNode(5);
let node2 = new TreeNode(9);
let root = new TreeNode(1, node1, node2);

let binarySearch = new BinarySearchTree();
binarySearch.insert(2, root);
binarySearch.insert(4, root);
binarySearch.insert(10, root);
// binarySearch.insert(19, root);

// delete the root node which finds the successor node which is 70
// binarySearch.delete(50, root);
binarySearch.traverse(root);

console.log(root);
// console.log(b)
// console.log();
