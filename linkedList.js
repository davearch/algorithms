/*
 * Linked List class
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next;
  }
}

class linkedList {
  head;

  addNode(data) {
    if (head == null) {
      head = new Node(data);
      return;
    }
    current = head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = new Node(data);
  }
  prepend(data) {
    newHead = new Node(data);
    newHead.next = head;
    head = newHead;
  }
  deleteWithValue(data) {
    if (head == null) return;
    if (head.data == data) {
      head = head.next;
      return;
    }

    current = head;
    while (current.next != null) {
      if (current.next.data == data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
}
