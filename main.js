class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {
        const newNode = new ListNode(val);

        if (!this.head) {
            this.head = newNode;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
    }

    toArray() {
    const result = [];
    let curr = this.head;
    while (curr) {
      result.push(curr.val);
      curr = curr.next;
    }
    return result;
  }
}

// Create a linked list and add some nodes
const list = new LinkedList();
list.append("Node 1");
list.append("Node 2");
list.append("Node 3");

// Display the list on the web page
const container = document.getElementById("listDisplay");
list.toArray().forEach(val => {
  const nodeBox = document.createElement("div");
  nodeBox.className = "node";
  nodeBox.textContent = val;
  container.appendChild(nodeBox);
});