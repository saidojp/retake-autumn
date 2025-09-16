class Stack {
  constructor() {
    this.items = [];
  }

  // добавить элемент (push)
  push(element) {
    this.items.push(element);
  }

  // удалить последний элемент (pop)
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  // посмотреть последний элемент
  peek() {
    return this.items[this.items.length - 1];
  }

  // проверка на пустоту
  isEmpty() {
    return this.items.length === 0;
  }
}

// пример использования
const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);

console.log(stack.pop()); // 15
console.log(stack.peek()); // 10
