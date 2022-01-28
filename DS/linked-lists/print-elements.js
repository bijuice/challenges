function printLinkedList(head) {
  let current = head;

  while (current) {
    console.log(current.data); //while current node is not null print data
    current = current.next; //set current node to next node in list
  }
}
