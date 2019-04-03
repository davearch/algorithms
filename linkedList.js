class Node {
  constructor() {
    this.data = {};
    this.next;
  }
}

class linkedList {
  head = new Node();

  constructor(data) {
    this.data = data;
  }

  addNode(data) {
    if (head == null) {
      head = new Node(data);
      return;
    }
    nextNode = new Node(data);
    while (this.next != null) {}
  }
}
