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
list.append("Node 4");


// Display the list on the web page
const container = document.getElementById("listDisplay");
list.toArray().forEach((value, index, array) => {
  const nodeBox = document.createElement("div");
  nodeBox.className = "node";
  nodeBox.textContent = value;
  container.appendChild(nodeBox);

    if (index < array.length - 1) {
        const nodeArrow = document.createElement("div");
        nodeArrow.className = "arrow";

        const img = document.createElement("img");
        img.src = "./resources/arrow.png"
        img.className = "arrowImage"

        nodeArrow.appendChild(img);
        container.appendChild(nodeArrow);
    }
  
});