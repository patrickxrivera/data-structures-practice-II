# Data Structures II

Topics:

 * Tree
 * Binary Search Tree
 * Graph


#### Trees

  * Should have the methods: `addChild`, and `contains`
  * Each node on the tree should have a `value` property and a `children` array.
  * `addChild(value)` should accept a value and add it to that node's `children` array.
  * `contains(value)` should return `true` if the tree or its children the given value.
  * When you add nodes to the `children` array use `new Tree(value)` to create the node.
  * You can instantiate the `Tree` class inside of itself. Every tree node is an instance of the tree class.

 Note: generic trees are not restricted to two children for each node.
 ![Image of a Tree](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/440px-Binary_tree.svg.png)


#### Binary Search Tree

  * Should have the methods: `insert`, `contains`, `depthFirstForEach`, and `breadthFirstForEach`.
  * `insert(value)` inserts the new value at the correct location in the tree. For values that are equal to their parent, it doesn't matter whether those values go in the left subtree or the right subtree; just pick one and be consistent with it.
  * `contains(value)` searches the tree and returns `true` if the the tree contains the specified value.
  * `depthFirstForEach(cb)` should iterate over the tree using DFS and passes each node of the tree to the given callback function.
  * `breadthFirstForEach(cb)` should iterate over the tree using BFS and passes each node of the tree to the given callback function (hint: you'll need to either re-implement or import a queue data structure for this).

![Image of a Binary Search Tree](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/400px-Binary_search_tree.svg.png)

#### Graphs

  * Should have methods named `addvertex`, `contains`, `removeVertex`, `addEdge`, `checkIfEdgeExists`, and `removeEdge`
  * `addVertex(value, edges)` should add a new vertex to the graph with the specified value.  If `edges` is given then the new vertex should share an edge with the given vertex.
  * `contains(value)` should return true if the graph contains a vertex with the specified value.
  * `removeVertex(value)` should remove the vertex with the specified value from the graph.
  * `addEdge(fromVertex, toVertex)` should add an edge between the two specified vertices.
  * `checkIfEdgeExists(fromVertex, toVertex)` should return `true` if an edge exists between the two specified vertices.
  * `removeEdge(fromVertex, toVertex)` should remove the edge between the two specified vertices.

Directed graph

![Directed Graph](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Directed.svg/250px-Directed.svg.png)

A simple undirected graph

![Undirected Graph](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Undirected.svg/250px-Undirected.svg.png)

### Extra Credit

 * Read up on [heaps](https://en.wikipedia.org/wiki/Heap_(data_structure)) here and watch [this](https://www.youtube.com/watch?v=WCm3TqScBM8) great introductory video. Then implement one! The methods you'll need to implement are already present inside the file.
 
![Heap](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Max-Heap.svg/480px-Max-Heap.svg.png)

 * Add a method to the `Graph` class that searches through the graph using edges. Make this search first as a depth first search and then refactor to a breadth first search.
 
 * Read up on [red-black trees](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree) here. Then implement one! No starter files or skeleton code here. If you've gotten this far, you're on your own! :)

![Red Black Tree](https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Red-black_tree_example.svg/1000px-Red-black_tree_example.svg.png)
 
