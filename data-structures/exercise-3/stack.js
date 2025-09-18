class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element); // добавляем сверху
  }

  pop() {
    if (this.items.length === 0) {
      return "Stack is empty";
    }
    return this.items.pop(); // снимаем сверху
  }

  peek() {
    return this.items[this.items.length - 1]; // верхний элемент
  }
}

// Пример
let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 👉 20
console.log(stack.peek()); // 👉 10
