/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
// Do not modify this GraphNode class
// Use any of its methods as you see fit to implement your graph

const not = fn => (...args) => !fn(...args);

const isVertexValue = targetValue => currNode => targetValue === currNode.value;

const isNotVertexValue = targetValue => currNode => targetValue !== currNode.value;

const isNotEdgeValue = targetNode => currNode => targetNode.value !== currNode.value;

const edgeExists = (fromVertex, toVertex) => fromVertex.edges.some(isVertexValue(toVertex.value));

const noEdgeExists = not(edgeExists);

const removeVertexValue = (vertices, value) => vertices.filter(isNotVertexValue(value));

const removeEdgeValue = (fromVertex, toVertex) => fromVertex.edges.filter(isNotEdgeValue(toVertex));

const isEmpty = vertex => vertex.edges.length === 0;

class GraphNode {
  constructor({ value, edges }) {
    this._value = value;
    this._edges = edges;
  }

  get value() {
    return this._value;
  }

  get edges() {
    return this._edges;
  }

  get numberOfEdges() {
    return this._edges.length;
  }

  set edges(x) {
    this._edges = x;
  }

  pushToEdges(y) {
    this._edges.push(y);
  }
}

class Graph {
  constructor() {
    this.vertices = [];
  }
  // Wraps the input value in a new GraphNode and adds it to the array of vertices
  // If there are only two nodes in the graph, they need to be automatically
  // connected via an edge
  // Optionally accepts an array of other GraphNodes for the new vertex to be connected to
  // Returns the newly-added vertex
  addVertex(value, edges = []) {
    const vertex = new GraphNode({ value, edges });
    this.vertices.push(vertex);

    if (this.vertices.length === 2) {
      this.addEdge(this.vertices[0], this.vertices[1]);
    }

    if (edges) {
      edges.forEach((edge) => {
        this.addEdge(vertex, edge);
      });
    }

    return vertex;
  }
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {
    return this.vertices.some(isVertexValue(value));
  }
  // Checks the graph to see if a GraphNode with the specified value exists in the graph
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {
    this.vertices = removeVertexValue(this.vertices, value);
  }
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {
    if (noEdgeExists(fromVertex, toVertex)) return false;

    return edgeExists(fromVertex, toVertex);
  }
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other
  addEdge(fromVertex, toVertex) {
    fromVertex.pushToEdges(toVertex);
    toVertex.pushToEdges(fromVertex);
  }
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {
    fromVertex.edges = removeEdgeValue(fromVertex, toVertex);
    toVertex.edges = removeEdgeValue(toVertex, fromVertex);

    if (isEmpty(fromVertex)) this.removeVertex(fromVertex.value);
    if (isEmpty(toVertex)) this.removeVertex(toVertex.value);
  }
}

module.exports = Graph;
