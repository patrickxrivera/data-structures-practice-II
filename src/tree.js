/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
const hasNode = queue => queue.length;

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node
  addChild(value) {
    const node = new Tree(value);
    this.children.push(node);
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    if (value === this.value) return true;

    let queue = [this];

    while (hasNode(queue)) {
      const currNode = queue.shift();

      if (currNode.value === value) return true;

      currNode.children.forEach((childNode) => {
        queue = [...queue, childNode];
      });
    }

    return false;

    // const answer = false;
    // console.log(value, currNode.value);
    // if (currNode.value === value) return true;
    //
    // if (currNode.children.length) {
    //   currNode.children.forEach((childNode) => {
    //     this.contains(value, childNode);
    //   });
    // }
    //
    // return answer;
  }
}

module.exports = Tree;
